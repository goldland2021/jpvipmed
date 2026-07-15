import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { localizedPath } from "../pageConfig";

export default function SiteFooter() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "zh-hk";

  return (
    <footer className="bg-midnight px-4 py-8 text-sm text-white/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {t("brand.name")}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link className="transition hover:text-gold" to={localizedPath(language, "privacy")}>
            {t("legal.privacy.title")}
          </Link>
          <Link className="transition hover:text-gold" to={localizedPath(language, "terms")}>
            {t("legal.terms.title")}
          </Link>
        </div>
        <p>{t("footer.disclaimer")}</p>
      </div>
    </footer>
  );
}
