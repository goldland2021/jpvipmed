import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { contentPageSlugs } from "../src/pageConfig.js";

const root = resolve(import.meta.dirname, "..");
const template = readFileSync(resolve(root, "dist/index.html"), "utf8");
const serverEntryUrl = pathToFileURL(
  resolve(root, "dist/server/entry-server.js")
).href;
const { render } = await import(serverEntryUrl);

const siteUrl = process.env.VITE_SITE_URL || "https://www.jpairport.jp";

const languages = [
  { lang: "en", htmlLang: "en", dir: "ltr", locale: "en_US", hreflang: "en" },
  { lang: "zh-hk", htmlLang: "zh-HK", dir: "ltr", locale: "zh_HK", hreflang: "zh-HK" },
  { lang: "ar", htmlLang: "ar", dir: "rtl", locale: "ar_AR", hreflang: "ar" },
];

const routes = ["", ...contentPageSlugs];

function routePath(lang, page) {
  return page ? `/${lang}/${page}` : `/${lang}`;
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

for (const page of routes) {
  const hreflangLinks = languages
    .map(
      (language) =>
        `<link rel="alternate" hreflang="${language.hreflang}" href="${siteUrl}${routePath(language.lang, page)}" data-jpvip-seo="true" />`
    )
    .concat(
      `<link rel="alternate" hreflang="x-default" href="${siteUrl}${routePath("en", page)}" data-jpvip-seo="true" />`
    )
    .join("\n    ");

  for (const language of languages) {
    const { html, title, description } = await render(language.lang, page);
    const pathname = routePath(language.lang, page);
    const url = `${siteUrl}${pathname}`;

    const out = template
      .replace(
        /<html lang="[^"]*" dir="[^"]*">/,
        `<html lang="${language.htmlLang}" dir="${language.dir}">`
      )
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta\s+name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${escapeAttr(description)}" />`
      )
      .replace(
        /<meta property="og:title"[\s\S]*?\/>/,
        `<meta property="og:title" content="${escapeAttr(title)}" />`
      )
      .replace(
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${escapeAttr(description)}" />`
      )
      .replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`)
      .replace(
        "</head>",
        `  <meta property="og:locale" content="${language.locale}" />\n    <link rel="canonical" href="${url}" data-jpvip-seo="true" />\n    ${hreflangLinks}\n  </head>`
      )
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outputDirectory = page
      ? resolve(root, `dist/${language.lang}/${page}`)
      : resolve(root, `dist/${language.lang}`);
    mkdirSync(outputDirectory, { recursive: true });
    writeFileSync(resolve(outputDirectory, "index.html"), out);
    console.log(`prerendered ${pathname} (${Math.round(out.length / 1024)} kB)`);
  }
}

rmSync(resolve(root, "dist/server"), { recursive: true, force: true });
