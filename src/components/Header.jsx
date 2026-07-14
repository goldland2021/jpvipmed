import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { localizedPath } from "../pageConfig";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppButton from "./WhatsAppButton";

export default function Header({ language }) {
  const { t } = useTranslation();
  const navigation = [
    ["services", "services"],
    ["routes", "routes"],
    ["trust", "how-it-works"],
    ["faq", "faq"],
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a href={localizedPath(language)} className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-midnight/80 text-sm font-semibold text-gold">
            VIP
          </span>
          <span className="whitespace-nowrap font-semibold">{t("brand.name")}</span>
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
        <div className="flex items-center gap-3">
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
        </div>
      </div>
    </header>
  );
}
