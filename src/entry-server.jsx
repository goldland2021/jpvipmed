import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import i18n from "./i18n";
import App from "./App";

export async function render(lang) {
  await i18n.changeLanguage(lang);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={`/${lang}`}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return {
    html,
    title: i18n.t("seo.title"),
    description: i18n.t("seo.description"),
    brand: i18n.t("brand.name"),
  };
}
