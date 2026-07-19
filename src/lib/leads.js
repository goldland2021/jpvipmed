import { isSupabaseConfigured, siteConfig } from "../config";
import { getLeadSource, getMarketingParams } from "./marketing";

export const STATUS_OPTIONS = [
  "new",
  "contacted",
  "consulting",
  "booked",
  "paid",
  "completed",
  "closed",
];

export function normalizeLead(formData, language) {
  const marketing = getMarketingParams();

  return {
    name: formData.name.trim(),
    country: formData.country.trim(),
    whatsapp: formData.whatsapp.trim(),
    preferred_month: formData.preferred_month.trim(),
    service_type: formData.service_type.trim(),
    message: formData.message.trim(),
    status: "new",
    source: getLeadSource(),
    gclid: marketing.gclid,
    language,
    ip_country: "",
  };
}

export async function saveLead(lead, recaptchaToken) {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured yet.");
  }

  const { supabase } = await import("./supabase");
  if (!supabase) throw new Error("Supabase is not configured yet.");

  if (siteConfig.leadFunctionName) {
    const { data, error } = await supabase.functions.invoke(
      siteConfig.leadFunctionName,
      {
        body: { lead, recaptchaToken },
      }
    );
    if (error) throw error;
    return data;
  }

  const { error } = await supabase.from("leads").insert(lead);

  if (error) throw error;
  return { ok: true };
}
