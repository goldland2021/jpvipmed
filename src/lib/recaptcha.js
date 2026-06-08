import { siteConfig } from "../config";

let recaptchaPromise;

function loadRecaptcha() {
  if (!siteConfig.recaptchaSiteKey) return Promise.resolve(false);
  if (window.grecaptcha) return Promise.resolve(true);
  if (recaptchaPromise) return recaptchaPromise;

  recaptchaPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteConfig.recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return recaptchaPromise;
}

export async function executeRecaptcha(action = "lead_submit") {
  if (!siteConfig.recaptchaSiteKey) return "";
  await loadRecaptcha();

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteConfig.recaptchaSiteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
