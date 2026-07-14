import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../pageConfig";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppButton from "./WhatsAppButton";

export default function Header({ language }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    ["services", "services"],
    ["routes", "routes"],
    ["faq", "faq"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href={localizedPath(language)} className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-midnight/80 text-sm font-semibold text-gold">
            VIP
          </span>
          <span className="hidden whitespace-nowrap font-semibold md:inline">{t("brand.name")}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/78 xl:flex" aria-label={t("navigation.label")}>
          {navigation.map(([key, page]) => (
            <a
              key={key}
              href={localizedPath(language, page)}
              className="transition hover:text-gold"
            >
              {t(`navigation.${key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher currentLanguage={language} />
          <div className="hidden sm:block">
            <WhatsAppButton
              language={language}
              label={t("cta.whatsappShort")}
              buttonName="header_whatsapp"
              className="btn-secondary-dark"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/25 bg-midnight/70 text-white transition hover:border-gold hover:text-gold xl:hidden"
            aria-label={isMenuOpen ? t("navigation.close") : t("navigation.menu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="mx-4 overflow-hidden rounded-xl border border-white/15 bg-midnight/95 shadow-soft backdrop-blur sm:mx-6 xl:hidden">
          <nav className="grid p-2" aria-label={t("navigation.label")}>
            {navigation.map(([key, page]) => (
              <a
                key={key}
                href={localizedPath(language, page)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`navigation.${key}`)}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-midnight/95 px-3 pt-4 backdrop-blur sm:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <WhatsAppButton
          language={language}
          label={t("cta.whatsapp")}
          buttonName="mobile_sticky_whatsapp"
          className="btn-primary w-full justify-center shadow-soft"
        />
      </div>
    </header>
  );
}
