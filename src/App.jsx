import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./config";
import { initAnalytics, trackPageView } from "./lib/analytics";
import { persistMarketingParams } from "./lib/marketing";
import AdminPage from "./pages/AdminPage";
import ContentPage from "./pages/ContentPage";
import LandingPage from "./pages/LandingPage";
import { contentPageSlugs } from "./pageConfig";

function RouteAnalytics() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    initAnalytics();
    persistMarketingParams();
  }, []);

  useEffect(() => {
    trackPageView({
      path: `${location.pathname}${location.search}`,
      title: document.title,
      language: i18n.resolvedLanguage || i18n.language || "zh-hk",
    });
  }, [location.pathname, location.search, i18n.resolvedLanguage, i18n.language]);

  return null;
}

function LanguageRoute() {
  const { lang, page = "" } = useParams();
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(i18n.resolvedLanguage === lang);

  useEffect(() => {
    let active = true;
    if (!supportedLanguages.includes(lang)) return undefined;
    setReady(false);
    i18n.changeLanguage(lang).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, [i18n, lang]);

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/zh-hk" replace />;
  }

  if (page && !contentPageSlugs.includes(page)) {
    return <Navigate to={`/${lang}`} replace />;
  }

  if (!ready) return null;
  return page ? (
    <ContentPage language={lang} page={page} />
  ) : (
    <LandingPage language={lang} />
  );
}

export default function App() {
  return (
    <>
      <RouteAnalytics />
      <Routes>
        <Route path="/" element={<Navigate to="/zh-hk" replace />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/:lang" element={<LanguageRoute />} />
        <Route path="/:lang/:page" element={<LanguageRoute />} />
        <Route path="*" element={<Navigate to="/zh-hk" replace />} />
      </Routes>
    </>
  );
}
