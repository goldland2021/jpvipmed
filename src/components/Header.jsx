import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import WhatsAppButton from "./WhatsAppButton";

export default function Header({ language }) {
  const { t } = useTranslation();

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href={`/${language}`} className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-midnight/80 text-gold">
            +
          </span>
          <span className="font-semibold">JPVIPMedical</span>
        </a>
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
