export const contentPageSlugs = [
  "services",
  "routes",
  "how-it-works",
  "faq",
  "request-quote",
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
  "how-it-works": {
    eyebrowKey: "process.eyebrow",
    heroTitleKey: "process.title",
    seoTitleKey: "pageSeo.process.title",
    descriptionKey: "process.subtitle",
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
};

export function localizedPath(language, page = "") {
  return page ? `/${language}/${page}` : `/${language}`;
}
