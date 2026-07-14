import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackButtonClick, trackEvent } from "../lib/analytics";
import { buildQuickWhatsAppMessage, getWhatsAppUrl } from "../lib/whatsapp";

export default function WhatsAppButton({
  language,
  label,
  serviceName = "",
  buttonName = "whatsapp_cta",
  className = "btn-primary",
  children,
}) {
  const { t } = useTranslation();

  function handleClick() {
    trackButtonClick(buttonName, { language, service_type: serviceName });
    trackEvent("whatsapp_click", { language, service_type: serviceName });
    window.open(
      getWhatsAppUrl(buildQuickWhatsAppMessage(serviceName, language)),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children || <MessageCircle className="h-5 w-5" aria-hidden="true" />}
      <span>{label || t("cta.whatsapp")}</span>
    </button>
  );
}
