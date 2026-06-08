import { isSupabaseConfigured, siteConfig } from "../config";
import { getLeadSource, getMarketingParams } from "./marketing";
import { supabase } from "./supabase";

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
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured yet.");
  }

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

  const { data, error } = await supabase
    .from("leads")
    .insert(lead)
    .select()
    .single();

  if (error) throw error;
  return data;
}
