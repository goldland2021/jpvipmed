export const supportedLanguages = ["en", "zh-hk", "ar"];

export const languageLabels = {
  en: "English",
  "zh-hk": "繁體中文",
  ar: "العربية",
};

export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://www.jpairport.jp",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "",
  gtmId: import.meta.env.VITE_GTM_ID || "",
  ga4Id: import.meta.env.VITE_GA4_ID || "",
  googleAdsId: import.meta.env.VITE_GOOGLE_ADS_ID || "",
  googleAdsFormConversionLabel:
    import.meta.env.VITE_GOOGLE_ADS_FORM_CONVERSION_LABEL || "",
  googleAdsWhatsAppConversionLabel:
    import.meta.env.VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL || "",
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || "",
  leadFunctionName: import.meta.env.VITE_SUPABASE_LEAD_FUNCTION_NAME || "",
  workflowAiWidgetSrc: import.meta.env.VITE_WORKFLOWAI_WIDGET_SRC || "",
};

export const isSupabaseConfigured = Boolean(
  siteConfig.supabaseUrl && siteConfig.supabaseAnonKey
);
