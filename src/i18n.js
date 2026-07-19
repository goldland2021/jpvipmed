import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { supportedLanguages } from "./config";
import enTranslation from "./locales/en.js";

const languageLoaders = {
  "zh-hk": () => import("./locales/zh-hk.js"),
  ar: () => import("./locales/ar.js"),
};

const pendingLanguages = new Map();

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  lowerCaseLng: true,
  load: "currentOnly",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export async function ensureLanguage(language) {
  const normalizedLanguage = supportedLanguages.includes(language)
    ? language
    : "en";

  if (!i18n.hasResourceBundle(normalizedLanguage, "translation")) {
    if (!pendingLanguages.has(normalizedLanguage)) {
      const loader = languageLoaders[normalizedLanguage];
      if (!loader) throw new Error(`Unsupported language: ${normalizedLanguage}`);

      pendingLanguages.set(
        normalizedLanguage,
        loader().then(({ default: translation }) => {
          i18n.addResourceBundle(
            normalizedLanguage,
            "translation",
            translation,
            true,
            true
          );
        })
      );
    }

    await pendingLanguages.get(normalizedLanguage);
  }

  if (i18n.resolvedLanguage !== normalizedLanguage) {
    await i18n.changeLanguage(normalizedLanguage);
  }

  return normalizedLanguage;
}

export default i18n;
