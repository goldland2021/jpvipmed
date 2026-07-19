import {
  createContext,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./config";
import { initAnalytics, trackPageView } from "./lib/analytics";
import { ensureLanguage } from "./i18n";
import { persistMarketingParams } from "./lib/marketing";
import LandingPage from "./pages/LandingPage";
import { contentPageSlugs } from "./pageConfig";

const AdminRoutePage = lazy(() => import("./pages/AdminPage"));
const ContentRoutePage = lazy(() => import("./pages/ContentPage"));
const RoutePagesContext = createContext(null);

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
      language: i18n.resolvedLanguage || i18n.language || "en",
    });
  }, [location.pathname, location.search, i18n.resolvedLanguage, i18n.language]);

  return null;
}

function LanguageRoute() {
  const { lang, page = "" } = useParams();
  const routePages = useContext(RoutePagesContext);
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(i18n.resolvedLanguage === lang);

  useEffect(() => {
    let active = true;
    if (!supportedLanguages.includes(lang)) return undefined;
    setReady(false);
    ensureLanguage(lang).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, [i18n, lang]);

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  if (page === "how-it-works") {
    return <Navigate to={`/${lang}#booking-process`} replace />;
  }

  if (page && !contentPageSlugs.includes(page)) {
    return <Navigate to={`/${lang}`} replace />;
  }

  if (!ready) return null;
  const Page = routePages?.ContentPage || ContentRoutePage;
  return page ? (
    <Suspense fallback={null}>
      <Page language={lang} page={page} />
    </Suspense>
  ) : (
    <LandingPage language={lang} />
  );
}

function AdminRoute() {
  const routePages = useContext(RoutePagesContext);
  const Page = routePages?.AdminPage || AdminRoutePage;

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

export default function App({ routePages = null }) {
  return (
    <RoutePagesContext.Provider value={routePages}>
      <RouteAnalytics />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/:lang" element={<LanguageRoute />} />
        <Route path="/:lang/:page" element={<LanguageRoute />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </RoutePagesContext.Provider>
  );
}
