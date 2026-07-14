import { useTranslation } from "react-i18next";

export default function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-midnight px-4 py-8 text-sm text-white/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {t("brand.name")}</p>
        <p>{t("footer.disclaimer")}</p>
      </div>
    </footer>
  );
}
