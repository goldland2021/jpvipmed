import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import App from "./App";
import { supportedLanguages } from "./config";
import "./index.css";

async function mountApp() {
  const root = document.getElementById("root");
  const routeLanguage = window.location.pathname.split("/")[1];

  if (supportedLanguages.includes(routeLanguage)) {
    await i18n.changeLanguage(routeLanguage);
  }

  const app = (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
    return;
  }

  createRoot(root).render(app);
}

void mountApp();
