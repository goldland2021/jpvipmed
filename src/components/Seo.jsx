import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig, supportedLanguages } from "../config";
import { localizedPath } from "../pageConfig";

const hrefLang = {
  en: "en",
  "zh-hk": "zh-HK",
  ar: "ar",
};

const ogLocale = {
  en: "en_US",
  "zh-hk": "zh_HK",
  ar: "ar_AR",
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setManagedLinks(language, page) {
  document
    .querySelectorAll(
      'link[data-jpvip-seo], link[rel="canonical"], link[rel="alternate"][hreflang]'
    )
    .forEach((element) => element.remove());

  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = `${siteConfig.siteUrl}${localizedPath(language, page)}`;
  canonical.dataset.jpvipSeo = "true";
  document.head.appendChild(canonical);

  supportedLanguages.forEach((lang) => {
    const alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = hrefLang[lang];
    alternate.href = `${siteConfig.siteUrl}${localizedPath(lang, page)}`;
    alternate.dataset.jpvipSeo = "true";
    document.head.appendChild(alternate);
  });

  const fallback = document.createElement("link");
  fallback.rel = "alternate";
  fallback.hreflang = "x-default";
  fallback.href = `${siteConfig.siteUrl}${localizedPath("zh-hk", page)}`;
  fallback.dataset.jpvipSeo = "true";
  document.head.appendChild(fallback);
}

export default function Seo({
  language,
  page = "",
  titleKey = "seo.title",
  descriptionKey = "seo.description",
}) {
  const { t } = useTranslation();

  useEffect(() => {
    const title = page ? `${t(titleKey)} | ${t("brand.name")}` : t(titleKey);
    const description = t(descriptionKey);
    const url = `${siteConfig.siteUrl}${localizedPath(language, page)}`;
    const imageUrl = `${siteConfig.siteUrl}/images/hero-charter-japan.jpg`;

    document.title = title;
    document.documentElement.lang = language === "zh-hk" ? "zh-HK" : language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: url,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: t("brand.name"),
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: ogLocale[language] || "en_US",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    setManagedLinks(language, page);

    document
      .querySelectorAll("script[data-jpvip-schema]")
      .forEach((element) => element.remove());

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.jpvipSchema = "true";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: t("brand.name"),
      url,
      image: imageUrl,
      description,
      serviceType:
        "Japan private chauffeur, airport transfer, hotel and station pickup, Mount Fuji day charter, business travel, and custom itinerary transportation",
      areaServed: [
        "Hong Kong",
        "Taiwan",
        "Singapore",
        "Malaysia",
        "Saudi Arabia",
        "United Arab Emirates",
        "Qatar",
        "Kuwait",
      ],
      availableLanguage: ["English", "Traditional Chinese", "Arabic"],
    });
    document.head.appendChild(schema);
  }, [descriptionKey, language, page, t, titleKey]);

  return null;
}
