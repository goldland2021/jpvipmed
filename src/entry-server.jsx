import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import i18n from "./i18n";
import App from "./App";
import { localizedPath, pageConfig } from "./pageConfig";

export async function render(lang, page = "") {
  await i18n.changeLanguage(lang);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={localizedPath(lang, page)}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  const meta = page ? pageConfig[page] : null;
  return {
    html,
    title: meta
      ? `${i18n.t(meta.seoTitleKey)} | ${i18n.t("brand.name")}`
      : i18n.t("seo.title"),
    description: meta
      ? i18n.t(meta.descriptionKey)
      : i18n.t("seo.description"),
  };
}
