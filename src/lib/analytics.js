import { siteConfig } from "../config";

let initialized = false;

function appendScript(src, id) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];

  if (siteConfig.gtmId) {
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    appendScript(
      `https://www.googletagmanager.com/gtm.js?id=${siteConfig.gtmId}`,
      "gtm-script"
    );
  }

  const gtagId = siteConfig.ga4Id || siteConfig.googleAdsId;
  if (!gtagId) return;

  appendScript(`https://www.googletagmanager.com/gtag/js?id=${gtagId}`, "gtag");
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  if (siteConfig.ga4Id) {
    window.gtag("config", siteConfig.ga4Id, { send_page_view: false });
  }
  if (siteConfig.googleAdsId) {
    window.gtag("config", siteConfig.googleAdsId);
  }
}

export function trackPageView({ path, title, language }) {
  const payload = {
    page_path: path,
    page_title: title,
    language,
  };

  window.dataLayer?.push({ event: "page_view", ...payload });
  window.gtag?.("event", "page_view", payload);
}

export function trackEvent(eventName, params = {}) {
  window.dataLayer?.push({ event: eventName, ...params });
  window.gtag?.("event", eventName, params);

  const labelByEvent = {
    form_submit: siteConfig.googleAdsFormConversionLabel,
    whatsapp_click: siteConfig.googleAdsWhatsAppConversionLabel,
  };

  const label = labelByEvent[eventName];
  if (siteConfig.googleAdsId && label && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${siteConfig.googleAdsId}/${label}`,
      ...params,
    });
  }
}

export function trackButtonClick(buttonName, params = {}) {
  trackEvent("button_click", {
    button_name: buttonName,
    ...params,
  });
}
