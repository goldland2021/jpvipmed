export const contentPageSlugs = [
  "services",
  "routes",
  "faq",
  "request-quote",
  "privacy",
  "terms",
];

export const pageConfig = {
  services: {
    eyebrowKey: "services.eyebrow",
    heroTitleKey: "services.title",
    seoTitleKey: "pageSeo.services.title",
    descriptionKey: "services.subtitle",
  },
  routes: {
    eyebrowKey: "routes.eyebrow",
    heroTitleKey: "routes.title",
    seoTitleKey: "pageSeo.routes.title",
    descriptionKey: "routes.subtitle",
  },
  faq: {
    eyebrowKey: "faq.eyebrow",
    heroTitleKey: "faq.title",
    seoTitleKey: "pageSeo.faq.title",
    descriptionKey: "faq.subtitle",
  },
  "request-quote": {
    eyebrowKey: "form.eyebrow",
    heroTitleKey: "form.title",
    seoTitleKey: "pageSeo.quote.title",
    descriptionKey: "form.subtitle",
  },
  privacy: {
    eyebrowKey: "legal.eyebrow",
    heroTitleKey: "legal.privacy.title",
    seoTitleKey: "pageSeo.privacy.title",
    descriptionKey: "legal.privacy.intro",
  },
  terms: {
    eyebrowKey: "legal.eyebrow",
    heroTitleKey: "legal.terms.title",
    seoTitleKey: "pageSeo.terms.title",
    descriptionKey: "legal.terms.intro",
  },
};

export function localizedPath(language, page = "") {
  return page ? `/${language}/${page}` : `/${language}`;
}
