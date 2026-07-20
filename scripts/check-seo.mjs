import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sitemapPath = resolve(root, "public/sitemap.xml");
const sitemap = readFileSync(sitemapPath, "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const uniqueUrls = [...new Set(urls)];
const failures = [];
const warnings = [];

function pageFile(url) {
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  return resolve(root, "dist", ...segments, "index.html");
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

if (urls.length !== uniqueUrls.length) {
  failures.push(`sitemap contains duplicate URLs (${urls.length} total, ${uniqueUrls.length} unique)`);
}

for (const url of uniqueUrls) {
  const file = pageFile(url);
  if (!existsSync(file)) {
    failures.push(`${url}: missing prerendered file ${file}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = firstMatch(
    html,
    /<meta\s+name="description"\s+content="([^"]*)"\s*\/>/i
  );
  const canonical = firstMatch(
    html,
    /<link\s+rel="canonical"\s+href="([^"]*)"/i
  );
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const hreflangCount = (html.match(/<link[^>]+hreflang=/gi) || []).length;
  const jsonLdCount = (html.match(/application\/ld\+json/gi) || []).length;
  const jsonLd = firstMatch(
    html,
    /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i
  );

  if (!title) failures.push(`${url}: missing title`);
  if (!description) failures.push(`${url}: missing meta description`);
  if (canonical !== url) failures.push(`${url}: canonical is ${canonical || "missing"}`);
  if (h1Count !== 1) failures.push(`${url}: expected 1 H1, found ${h1Count}`);
  if (hreflangCount !== 4) failures.push(`${url}: expected 4 hreflang links, found ${hreflangCount}`);
  if (jsonLdCount < 1) failures.push(`${url}: missing JSON-LD`);
  if (jsonLd) {
    try {
      const parsedJsonLd = JSON.parse(jsonLd);
      if (parsedJsonLd["@context"] !== "https://schema.org") {
        failures.push(`${url}: JSON-LD has an invalid @context`);
      }
    } catch {
      failures.push(`${url}: JSON-LD is not valid JSON`);
    }
  }
  if (!/<meta\s+name="twitter:title"/i.test(html)) failures.push(`${url}: missing twitter:title`);
  if (!/<meta\s+name="twitter:description"/i.test(html)) failures.push(`${url}: missing twitter:description`);
  if (!/<meta\s+name="twitter:image"/i.test(html)) failures.push(`${url}: missing twitter:image`);

  if (title.length > 65) warnings.push(`${url}: title is ${title.length} characters`);
  if (description.length > 170) warnings.push(`${url}: description is ${description.length} characters`);
}

if (warnings.length) {
  for (const warning of warnings) console.warn(`SEO warning: ${warning}`);
}

if (failures.length) {
  for (const failure of failures) console.error(`SEO failure: ${failure}`);
  process.exit(1);
}

console.log(`SEO static check passed: ${uniqueUrls.length} pages, no missing metadata or duplicate sitemap URLs.`);
