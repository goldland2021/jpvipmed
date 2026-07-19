import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type LeadRateLimitClient = {
  rpc: (
    functionName: string,
    args: { p_ip_hash: string; p_limit: number },
  ) => Promise<{ data: unknown; error: unknown }>;
};

function getCorsHeaders(origin: string | null) {
  const allowedOrigins = new Set(
    (Deno.env.get("ALLOWED_ORIGINS") || "https://www.jpairport.jp,https://jpairport.jp")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );

  return {
    "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin)
      ? origin
      : "https://www.jpairport.jp",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

function clean(value: unknown, max = 1000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

async function hashIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("cf-connecting-ip") || "unknown";
  const salt = Deno.env.get("LEAD_RATE_LIMIT_SALT") || "";
  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function passesRateLimit(supabase: LeadRateLimitClient, request: Request) {
  const salt = Deno.env.get("LEAD_RATE_LIMIT_SALT");
  if (!salt) return Deno.env.get("LEAD_RATE_LIMIT_REQUIRED") !== "true";

  const limit = Number.parseInt(Deno.env.get("LEAD_RATE_LIMIT_PER_MINUTE") || "5", 10);
  const { data, error } = await supabase.rpc("consume_lead_rate_limit", {
    p_ip_hash: await hashIp(request),
    p_limit: Number.isFinite(limit) && limit > 0 ? limit : 5,
  });
  if (error) throw error;
  return data === true;
}

async function verifyRecaptcha(token: string) {
  const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
  const required = Deno.env.get("RECAPTCHA_REQUIRED") !== "false";
  if (!secret) return !required;
  if (!token) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body,
    }
  );
  const result = await response.json();
  return Boolean(result.success && (result.score === undefined || result.score >= 0.4));
}

Deno.serve(async (request) => {
  const corsHeaders = getCorsHeaders(request.headers.get("origin"));

  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const { lead, recaptchaToken } = await request.json();
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    if (!(await passesRateLimit(supabase as unknown as LeadRateLimitClient, request))) {
      return new Response(JSON.stringify({ error: "Too many lead requests" }), {
        status: 429,
        headers: { ...corsHeaders, "Retry-After": "60" },
      });
    }

    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const row = {
      name: clean(lead?.name, 120),
      country: clean(lead?.country, 120),
      whatsapp: clean(lead?.whatsapp, 60),
      preferred_month: clean(lead?.preferred_month, 40),
      service_type: clean(lead?.service_type, 160),
      message: clean(lead?.message, 1000),
      status: "new",
      source: clean(lead?.source, 120),
      gclid: clean(lead?.gclid, 255),
      language: clean(lead?.language, 20),
      ip_country: clean(lead?.ip_country, 80),
    };

    if (
      !row.name ||
      !row.country ||
      !row.whatsapp ||
      !row.preferred_month ||
      !row.service_type
    ) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { data, error } = await supabase
      .from("leads")
      .insert(row)
      .select()
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ lead: data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
