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
    serviceArea: "Service area / itinerary",
    duration: "Hire length",
    date: "Travel date",
    startTime: "Start time",
    passengers: "Passengers",
    message: "Trip details",
    closing: "Could you please confirm availability, recommend the right vehicle and send me a quote? Thank you.",
  },
  "zh-hk": {
    greeting: "您好，",
    leadIntro: "我想索取日本私人司機服務的報價。",
    quickIntro: "我想安排日本私人用車行程。",
    name: "姓名",
    country: "國家或地區",
    month: "出發月份",
    service: "所需服務",
    pickup: "上車地點",
    destination: "目的地",
    serviceArea: "服務地區／行程範圍",
    duration: "包車時長",
    date: "出發日期",
    startTime: "開始時間",
    passengers: "同行人數",
    message: "行程詳情",
    closing: "請確認能否安排、建議合適車型，並提供報價。謝謝。",
  },
  ar: {
    greeting: "مرحباً،",
    leadIntro: "أرغب في الحصول على عرض سعر لخدمة سائق خاص في اليابان.",
    quickIntro: "أرغب في ترتيب تنقل خاص بسيارة مع سائق في اليابان.",
    name: "الاسم",
    country: "الدولة أو المنطقة",
    month: "شهر السفر",
    service: "الخدمة",
    pickup: "موقع الاستقبال",
    destination: "موقع الوصول",
    serviceArea: "منطقة الخدمة / مسار الرحلة",
    duration: "مدة الحجز",
    date: "تاريخ السفر",
    startTime: "وقت البدء",
    passengers: "عدد الركاب",
    message: "تفاصيل الرحلة",
    closing: "يرجى تأكيد التوفر، واقتراح المركبة المناسبة، وإرسال عرض السعر. شكراً لكم.",
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
  const details = [
    `${copy.service}: ${trip.service}`,
    trip.pickup ? `${copy.pickup}: ${trip.pickup}` : "",
    trip.destination ? `${copy.destination}: ${trip.destination}` : "",
    trip.serviceArea ? `${copy.serviceArea}: ${trip.serviceArea}` : "",
    trip.duration ? `${copy.duration}: ${trip.duration}` : "",
    trip.date ? `${copy.date}: ${trip.date}` : "",
    trip.startTime ? `${copy.startTime}: ${trip.startTime}` : "",
    trip.passengers ? `${copy.passengers}: ${trip.passengers}` : "",
  ].filter(Boolean);

  return [
    copy.greeting,
    "",
    copy.quickIntro,
    "",
    ...details,
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
