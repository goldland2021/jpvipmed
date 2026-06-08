const PARAM_KEYS = ["gclid", "utm_source", "utm_medium", "utm_campaign"];

export function persistMarketingParams() {
  const params = new URLSearchParams(window.location.search);
  PARAM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) localStorage.setItem(`jpvip_${key}`, value);
  });
}

export function getMarketingParams() {
  return PARAM_KEYS.reduce((acc, key) => {
    acc[key] = localStorage.getItem(`jpvip_${key}`) || "";
    return acc;
  }, {});
}

export function getLeadSource() {
  const params = getMarketingParams();
  return params.utm_source || "website";
}
