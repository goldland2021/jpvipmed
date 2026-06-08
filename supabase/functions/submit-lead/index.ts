import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const allowedStatuses = new Set([
  "new",
  "contacted",
  "consulting",
  "booked",
  "paid",
  "completed",
  "closed",
]);

function clean(value: unknown, max = 1000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

async function verifyRecaptcha(token: string) {
  const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
  if (!secret) return true;
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
    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const status = allowedStatuses.has(lead?.status) ? lead.status : "new";
    const row = {
      name: clean(lead?.name, 120),
      country: clean(lead?.country, 120),
      whatsapp: clean(lead?.whatsapp, 60),
      preferred_month: clean(lead?.preferred_month, 40),
      service_type: clean(lead?.service_type, 160),
      message: clean(lead?.message, 1000),
      status,
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

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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
