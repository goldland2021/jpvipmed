const serviceType =
  "Japan private chauffeur, airport transfer, hotel and station pickup, Mount Fuji day charter, business travel, and custom itinerary transportation";

const areaServed = ["Japan", "Tokyo", "Kyoto", "Osaka", "Mount Fuji"];

const availableLanguage = ["English", "Traditional Chinese", "Arabic"];

export function buildSeoSchema({
  siteUrl,
  url,
  homeUrl,
  imageUrl,
  title,
  description,
  language,
  page,
  brandName = "JP VIP Charter",
}) {
  const pageName = title.replace(new RegExp(`\\s+\\|\\s+${brandName}$`), "");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: brandName,
        inLanguage: language,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: brandName,
        url: siteUrl,
        image: imageUrl,
        description,
        serviceType,
        areaServed,
        availableLanguage,
        mainEntityOfPage: {
          "@id": url,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: language,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: brandName,
            item: homeUrl,
          },
          ...(page
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: pageName,
                  item: url,
                },
              ]
            : []),
        ],
      },
    ],
  };
}
