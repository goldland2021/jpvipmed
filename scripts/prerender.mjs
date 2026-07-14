import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const template = readFileSync(resolve(root, "dist/index.html"), "utf8");
const serverEntryUrl = pathToFileURL(
  resolve(root, "dist/server/entry-server.js")
).href;
const { render } = await import(serverEntryUrl);

const siteUrl = process.env.VITE_SITE_URL || "https://www.jpairport.jp";

const pages = [
  { lang: "en", htmlLang: "en", dir: "ltr", locale: "en_US", hreflang: "en" },
  { lang: "zh-hk", htmlLang: "zh-HK", dir: "ltr", locale: "zh_HK", hreflang: "zh-HK" },
  { lang: "ar", htmlLang: "ar", dir: "rtl", locale: "ar_AR", hreflang: "ar" },
];

const hreflangLinks = pages
  .map(
    (p) =>
      `<link rel="alternate" hreflang="${p.hreflang}" href="${siteUrl}/${p.lang}" data-jpvip-seo="true" />`
  )
  .concat(
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/zh-hk" data-jpvip-seo="true" />`
  )
  .join("\n    ");

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

for (const page of pages) {
  const { html, title, description } = await render(page.lang);
  const url = `${siteUrl}/${page.lang}`;

  let out = template
    .replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${page.htmlLang}" dir="${page.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeAttr(description)}" />`)
    .replace(/<meta property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${escapeAttr(title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeAttr(description)}" />`)
    .replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(
      "</head>",
      `  <meta property="og:locale" content="${page.locale}" />\n    <link rel="canonical" href="${url}" data-jpvip-seo="true" />\n    ${hreflangLinks}\n  </head>`
    )
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  mkdirSync(resolve(root, `dist/${page.lang}`), { recursive: true });
  writeFileSync(resolve(root, `dist/${page.lang}/index.html`), out);
  console.log(`prerendered /${page.lang} (${Math.round(out.length / 1024)} kB)`);
}

rmSync(resolve(root, "dist/server"), { recursive: true, force: true });
