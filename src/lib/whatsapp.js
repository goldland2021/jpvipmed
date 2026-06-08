import { siteConfig } from "../config";

export function buildLeadWhatsAppMessage(lead) {
  return `Hello,

I would like to inquire about private charter services in Japan.

Name: ${lead.name}
Country: ${lead.country}
Preferred Travel Month: ${lead.preferred_month}
Service Type: ${lead.service_type}

Thank you.`;
}

export function buildQuickWhatsAppMessage(serviceName = "") {
  return `Hello,

I would like to inquire about private charter services in Japan.${serviceName ? `\n\nService Type: ${serviceName}` : ""}

Thank you.`;
}

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  return number
    ? `https://wa.me/${number}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}
