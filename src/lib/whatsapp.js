import { siteConfig } from "../config";

const messageCopy = {
  en: {
    greeting: "Hello,",
    leadIntro: "I'd like a quote for a private chauffeur in Japan.",
    quickIntro: "I'd like help planning a private journey in Japan.",
    name: "Name",
    country: "Country or region",
    month: "Travel month",
    service: "Service",
    pickup: "Pickup",
    destination: "Drop-off",
    date: "Travel date",
    passengers: "Passengers",
    message: "Trip details",
    closing: "Could you please confirm availability, recommend the right vehicle and send me a quote? Thank you.",
  },
  "zh-hk": {
    greeting: "您好，",
    leadIntro: "我想諮詢日本私人司機及包車服務。",
    quickIntro: "我想安排日本私人用車行程。",
    name: "姓名",
    country: "國家或地區",
    month: "預計出行月份",
    service: "服務類型",
    pickup: "上車地點",
    destination: "目的地",
    date: "出行日期",
    passengers: "乘客人數",
    message: "路線或留言",
    closing: "請協助確認可用情況、合適車型及報價，謝謝。",
  },
  ar: {
    greeting: "مرحباً،",
    leadIntro: "أرغب في الاستفسار عن خدمة السائق الخاص في اليابان.",
    quickIntro: "أرغب في التخطيط لتنقل خاص في اليابان.",
    name: "الاسم",
    country: "الدولة أو المنطقة",
    month: "شهر السفر المفضل",
    service: "نوع الخدمة",
    pickup: "موقع الانطلاق",
    destination: "الوجهة",
    date: "تاريخ السفر",
    passengers: "عدد الركاب",
    message: "المسار أو الرسالة",
    closing: "يرجى مساعدتي في تأكيد التوفر والمركبة المناسبة وعرض السعر. شكراً لكم.",
  },
};

function getCopy(language) {
  return messageCopy[language] || messageCopy.en;
}

export function buildLeadWhatsAppMessage(lead) {
  const copy = getCopy(lead.language);
  return [
    copy.greeting,
    "",
    copy.leadIntro,
    "",
    `${copy.name}: ${lead.name}`,
    `${copy.country}: ${lead.country}`,
    `${copy.month}: ${lead.preferred_month}`,
    `${copy.service}: ${lead.service_type}`,
    lead.message ? `${copy.message}: ${lead.message}` : "",
    "",
    copy.closing,
  ]
    .filter((line, index, lines) => line || lines[index - 1] !== "")
    .join("\n");
}

export function buildQuickWhatsAppMessage(serviceName = "", language = "en") {
  const copy = getCopy(language);
  return [
    copy.greeting,
    "",
    copy.quickIntro,
    serviceName ? `${copy.service}: ${serviceName}` : "",
    "",
    copy.closing,
  ]
    .filter((line, index, lines) => line || lines[index - 1] !== "")
    .join("\n");
}

export function buildTripWhatsAppMessage(trip, language = "en") {
  const copy = getCopy(language);
  return [
    copy.greeting,
    "",
    copy.quickIntro,
    "",
    `${copy.service}: ${trip.service}`,
    `${copy.pickup}: ${trip.pickup}`,
    `${copy.destination}: ${trip.destination}`,
    `${copy.date}: ${trip.date}`,
    `${copy.passengers}: ${trip.passengers}`,
    "",
    copy.closing,
  ].join("\n");
}

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  return number
    ? `https://wa.me/${number}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}
