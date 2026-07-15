import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homepageTranslations from "./homepageTranslations";

const resources = {
  en: {
    translation: {
      brand: {
        name: "JP VIP Charter",
      },
      seo: {
        title: "Japan VIP Private Charter & Chauffeur Service | JP VIP Charter",
        description:
          "Premium Japan private charter service for Fuji tours, medical visits, study-abroad inspections, business inspections, airport transfers, and custom VIP travel.",
      },
      hero: {
        eyebrow: "Japan premium charter",
        title: "VIP Private Charter in Japan",
        subtitle:
          "Private chauffeur service for overseas clients who need reliable, comfortable, and flexible travel in Japan.",
        points: [
          "Airport and hotel transfers",
          "Mount Fuji private tours",
          "Medical, study-abroad, and business inspection charters",
        ],
      },
      cta: {
        whatsapp: "Consult on WhatsApp",
        whatsappShort: "WhatsApp",
        request: "Request Charter Consultation",
        card: "Ask on WhatsApp",
      },
      services: {
        eyebrow: "Charter services",
        title: "Private charter options for high-value Japan travel",
        subtitle:
          "We provide premium point-to-point, hourly, full-day, and custom itinerary charter consultation for overseas clients visiting Japan.",
        items: [
          {
            title: "Premium Private Charter",
            description:
              "High-end chauffeur arrangements for airport pickup, hotel transfers, city travel, shopping, dining, and custom itineraries.",
            points: ["VIP vehicle matching", "Flexible hourly or full-day plans", "Private and comfortable travel"],
          },
          {
            title: "Fuji Private Tour Charter",
            description:
              "Private charter routes for Mount Fuji, Lake Kawaguchi, Oshino Hakkai, Gotemba, and seasonal scenic spots.",
            points: ["Custom Fuji route planning", "Photo-stop friendly itinerary", "Family and group friendly"],
          },
          {
            title: "Premium Medical Charter",
            description:
              "Dedicated car service for clients visiting hospitals, checkup centers, clinics, pharmacies, or wellness facilities.",
            points: ["Hotel to medical center transfers", "Quiet and private cabin", "Schedule-focused coordination"],
          },
          {
            title: "Study-Abroad Inspection Charter",
            description:
              "Private car support for families visiting schools, universities, dormitories, neighborhoods, and education agencies.",
            points: ["School visit route planning", "Parent-friendly itinerary", "Multi-stop day charter"],
          },
          {
            title: "Business Inspection Charter",
            description:
              "Professional private chauffeur support for company visits, factory tours, exhibitions, investor meetings, and client hosting.",
            points: ["Business schedule support", "Airport-hotel-meeting transfers", "Discreet VIP reception"],
          },
        ],
      },
      advantages: {
        eyebrow: "Why choose us",
        title: "A quiet, reliable charter experience in Japan",
        subtitle:
          "The service is designed for overseas clients who need efficient communication, predictable routes, and a premium travel experience.",
        items: [
          {
            title: "Premium vehicles",
            description:
              "Vehicle options can include Alphard-style premium vans, executive cars, and group-friendly arrangements.",
          },
          {
            title: "Custom itinerary planning",
            description:
              "Routes can be planned around hotels, airports, Fuji tourism, medical centers, schools, and business sites.",
          },
          {
            title: "International client support",
            description:
              "Communication support is available for English, Traditional Chinese, and Arabic clients.",
          },
          {
            title: "Professional chauffeurs",
            description:
              "Experienced drivers help keep your day organized, calm, and punctual.",
          },
          {
            title: "Privacy and comfort",
            description:
              "Private cabin travel is suitable for families, executives, medical visits, and VIP guests.",
          },
          {
            title: "Clear quotation",
            description:
              "Fees are confirmed before the trip based on route, vehicle type, usage time, and special requirements.",
          },
        ],
      },
      process: {
        eyebrow: "Process",
        title: "From WhatsApp inquiry to private charter confirmation",
        subtitle:
          "Share your travel needs first. We keep the process simple so the right route and vehicle can be confirmed quickly.",
        items: [
          {
            title: "Submit charter needs",
            description:
              "Tell us your date, number of passengers, luggage, pickup point, and destination.",
          },
          {
            title: "Initial route review",
            description:
              "We review route feasibility, travel time, vehicle suitability, and special requirements.",
          },
          {
            title: "Vehicle and itinerary proposal",
            description:
              "You receive a recommended vehicle, route plan, and quotation for confirmation.",
          },
          {
            title: "Confirm driver arrangement",
            description:
              "Pickup details, driver contact, meeting point, and schedule are aligned before service.",
          },
          {
            title: "Complete the trip",
            description:
              "Enjoy a private, comfortable, and organized charter experience in Japan.",
          },
        ],
      },
      trust: {
        eyebrow: "Trust and service",
        title: "Built for overseas VIP travel needs",
        subtitle:
          "We assist overseas clients with premium Japan charter coordination. We are not a medical provider, school, travel agency, or investment adviser.",
        items: [
          {
            title: "Private itinerary handling",
            description:
              "Travel plans, passenger details, and contact information are handled carefully.",
          },
          {
            title: "Secure data storage",
            description:
              "Lead records are stored in Supabase with row-level security policies.",
          },
          {
            title: "Multilingual communication",
            description:
              "WhatsApp consultation can support English, Traditional Chinese, and Arabic inquiries.",
          },
          {
            title: "No hidden booking system",
            description:
              "V1 focuses on fast WhatsApp consultation and human confirmation of route and price.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Common questions before booking a private charter",
        subtitle:
          "These answers are general charter service information. Final details depend on date, route, vehicle, and availability.",
        items: [
          {
            question: "Can airport pickup and hotel transfer be arranged?",
            answer:
              "Yes. Airport pickup, hotel transfer, and luggage-friendly vehicle matching can be discussed through WhatsApp.",
          },
          {
            question: "Can I book a private charter to Mount Fuji?",
            answer:
              "Yes. Fuji routes can include Lake Kawaguchi, Oshino Hakkai, Gotemba, seasonal viewpoints, and custom stops.",
          },
          {
            question: "Can medical visit transportation be arranged?",
            answer:
              "Yes. We can coordinate private transportation to hospitals, checkup centers, clinics, pharmacies, or wellness facilities.",
          },
          {
            question: "Do you support study-abroad inspection trips?",
            answer:
              "Yes. Families can arrange school, university, dormitory, agency, and neighborhood visits in one itinerary.",
          },
          {
            question: "Can business inspection trips be supported?",
            answer:
              "Yes. Business routes can include company visits, factories, exhibitions, meetings, and client hosting.",
          },
          {
            question: "What vehicle types are available?",
            answer:
              "Vehicle options depend on date and route. Premium vans, executive cars, and larger group vehicles can be discussed.",
          },
          {
            question: "Can the itinerary be customized?",
            answer:
              "Yes. Please share your must-visit locations, pickup time, hotel, and passenger count.",
          },
          {
            question: "How are fees confirmed?",
            answer:
              "Fees are quoted after reviewing route, date, vehicle type, usage time, luggage, and special requirements.",
          },
          {
            question: "Can I consult through WhatsApp?",
            answer:
              "Yes. WhatsApp is the primary consultation channel for route planning and quotation.",
          },
          {
            question: "Do drivers speak English or Chinese?",
            answer:
              "Language support depends on availability. We confirm communication options before final arrangement.",
          },
          {
            question: "Can family members travel together?",
            answer:
              "Yes. Please share passenger count, luggage volume, and child seat needs if any.",
          },
          {
            question: "Can multi-day charter be arranged?",
            answer:
              "Yes. Multi-day travel can be discussed for Fuji, Kansai, business inspection, or education inspection routes.",
          },
          {
            question: "How early should I inquire?",
            answer:
              "Earlier is better, especially during holidays, cherry blossom season, autumn foliage season, and Fuji travel peaks.",
          },
          {
            question: "Can you arrange hotel-to-meeting transfers?",
            answer:
              "Yes. Business transfers between airport, hotel, office, exhibition venue, and meeting location can be arranged.",
          },
          {
            question: "Can the driver wait during visits?",
            answer:
              "Waiting time can be included depending on the selected hourly or full-day charter plan.",
          },
        ],
      },
      form: {
        eyebrow: "Charter inquiry form",
        title: "Submit your route and continue on WhatsApp",
        subtitle:
          "Share the basic trip details so we can understand your needs before the WhatsApp conversation starts.",
        notice:
          "Please include pickup city, destination, passenger count, luggage, and preferred date if already known.",
        fields: {
          name: "Full name",
          country: "Country or region",
          whatsapp: "WhatsApp number (including country code)",
          month: "Travel month",
          service: "Type of service",
          message: "Trip details",
        },
        servicePlaceholder: "Select a service",
        submit: "Send request & continue on WhatsApp",
        sending: "Sending your request...",
        errors: {
          name: "Please enter your name.",
          country: "Please enter your country or region.",
          whatsapp: "Please enter a valid WhatsApp number.",
          month: "Please select your travel month.",
          service: "Please select a service.",
          message: "Please keep your trip details under 1,000 characters.",
          spam: "We could not accept this request. Please try again.",
          supabase: "Online inquiries are temporarily unavailable. Please contact us on WhatsApp.",
          submit: "We could not send your request. Please try again or contact us directly on WhatsApp.",
        },
      },
      footer: {
        disclaimer:
          "Premium private charter coordination service. Routes, vehicles, and prices are confirmed manually through WhatsApp.",
      },
    },
  },
  "zh-hk": {
    translation: {
      brand: {
        name: "JP VIP Charter",
      },
      seo: {
        title: "日本高端包車與私人司機服務 | JP VIP Charter",
        description:
          "日本高端包車服務，支援富士山包車旅遊、高端醫療包車、留學考察包車、商務考察包車、機場接送與 VIP 定制行程。",
      },
      hero: {
        eyebrow: "日本高端包車",
        title: "日本包車，一站式安排",
        subtitle:
          "面向海外客戶提供私人司機與高端車型，適合旅遊、醫療、留學與商務行程。",
        points: [
          "機場接送與酒店接送",
          "包車富士山旅遊",
          "高端醫療、留學考察、商務考察包車",
        ],
      },
      cta: {
        whatsapp: "通過 WhatsApp 諮詢",
        whatsappShort: "WhatsApp",
        request: "提交包車諮詢需求",
        card: "WhatsApp 諮詢",
      },
      services: {
        eyebrow: "服務項目",
        title: "適合高價值日本行程的私人包車方案",
        subtitle:
          "提供點對點、按小時、全天及定制行程包車諮詢，協助海外客戶高效安排在日本的出行需求。",
        items: [
          {
            title: "高端包車",
            description:
              "適合機場接送、酒店往返、市區移動、購物餐飲、家庭出行與 VIP 定制行程。",
            points: ["高端車型匹配", "按小時或全天安排", "私密舒適出行"],
          },
          {
            title: "包車富士山旅遊",
            description:
              "可安排富士山、河口湖、忍野八海、御殿場及季節景點的私人包車路線。",
            points: ["富士山路線規劃", "彈性停留拍照", "適合家庭與團體"],
          },
          {
            title: "高端醫療包車",
            description:
              "適合前往醫院、體檢中心、診所、藥局、康養設施等需要安靜私密出行的客戶。",
            points: ["酒店到體檢中心", "安靜私密車廂", "重視時間安排"],
          },
          {
            title: "留學考察包車",
            description:
              "為家長與學生安排學校、大學、宿舍、周邊環境、教育機構等多站考察行程。",
            points: ["學校考察路線", "家長友好行程", "多站全天包車"],
          },
          {
            title: "商務考察包車",
            description:
              "支援企業拜訪、工廠考察、展會參觀、投資會議、客戶接待等商務出行。",
            points: ["商務日程支援", "機場酒店會議往返", "低調 VIP 接待"],
          },
        ],
      },
      advantages: {
        eyebrow: "為何選擇我們",
        title: "安靜、可靠、有質感的日本包車體驗",
        subtitle:
          "服務面向需要高效溝通、穩定路線、私密空間與高端體驗的海外客戶。",
        items: [
          {
            title: "高端車型",
            description:
              "可按需求協調阿爾法類高端商務車、行政轎車及團體出行車型。",
          },
          {
            title: "定制行程規劃",
            description:
              "可圍繞酒店、機場、富士山、體檢中心、學校與商務地點規劃路線。",
          },
          {
            title: "國際客戶支援",
            description:
              "可支援英文、繁體中文及阿拉伯語客戶的諮詢與溝通。",
          },
          {
            title: "專業司機服務",
            description:
              "經驗司機協助保持行程有序、準時、舒適。",
          },
          {
            title: "私密與舒適",
            description:
              "私人車廂適合家庭、企業高管、醫療出行及 VIP 客戶接待。",
          },
          {
            title: "清晰報價",
            description:
              "根據路線、車型、用車時間、行李及特殊需求人工確認費用。",
          },
        ],
      },
      process: {
        eyebrow: "服務流程",
        title: "由 WhatsApp 諮詢到包車確認",
        subtitle:
          "先提供行程需求，我們會快速確認路線與車型，讓出行安排更清晰。",
        items: [
          {
            title: "提交包車需求",
            description:
              "提供日期、人數、行李、上車地點、目的地及服務類型。",
          },
          {
            title: "初步路線評估",
            description:
              "評估路線可行性、預計時間、車型匹配及特殊需求。",
          },
          {
            title: "推薦車型與行程",
            description:
              "提供合適車型、路線方案與報價供您確認。",
          },
          {
            title: "確認司機安排",
            description:
              "確認上車時間、集合地點、司機聯絡方式與行程細節。",
          },
          {
            title: "完成包車服務",
            description:
              "按確認安排完成舒適、私密、有序的日本包車行程。",
          },
        ],
      },
      trust: {
        eyebrow: "信任與服務",
        title: "為海外 VIP 日本出行而設計",
        subtitle:
          "我們協助海外客戶協調日本高端包車服務。我們不是醫療機構、學校、旅行社或投資顧問。",
        items: [
          {
            title: "行程隱私處理",
            description:
              "客戶行程、乘客資料與聯絡方式均會謹慎處理。",
          },
          {
            title: "資料安全存儲",
            description:
              "線索資料儲存於 Supabase，並配合 RLS 權限策略。",
          },
          {
            title: "多語溝通",
            description:
              "WhatsApp 諮詢可支援英文、繁體中文及阿拉伯語需求。",
          },
          {
            title: "人工確認",
            description:
              "V1 聚焦快速 WhatsApp 諮詢，由人工確認路線、車型與價格。",
          },
        ],
      },
      faq: {
        eyebrow: "常見問題",
        title: "預訂包車前常見問題",
        subtitle:
          "以下為一般包車資訊，最終安排需根據日期、路線、車型及可用情況確認。",
        items: [
          {
            question: "可以安排機場接送和酒店接送嗎？",
            answer:
              "可以。可通過 WhatsApp 討論機場接送、酒店接送及適合行李數量的車型。",
          },
          {
            question: "可以包車去富士山旅遊嗎？",
            answer:
              "可以。富士山路線可包括河口湖、忍野八海、御殿場、季節景點及定制停留點。",
          },
          {
            question: "可以安排醫療出行包車嗎？",
            answer:
              "可以。可協調前往醫院、體檢中心、診所、藥局或康養設施的私人包車。",
          },
          {
            question: "是否支援留學考察包車？",
            answer:
              "支援。可安排學校、大學、宿舍、教育機構及周邊環境的一日多站行程。",
          },
          {
            question: "是否支援商務考察包車？",
            answer:
              "支援。可安排企業拜訪、工廠考察、展會、會議及客戶接待出行。",
          },
          {
            question: "有哪些車型可以選？",
            answer:
              "車型需根據日期和路線確認，可討論高端商務車、行政轎車及團體車型。",
          },
          {
            question: "行程可以定制嗎？",
            answer:
              "可以。請提供必去地點、上車時間、酒店地址、人數與行李數量。",
          },
          {
            question: "費用如何確認？",
            answer:
              "費用會根據路線、日期、車型、用車時間、行李及特殊需求確認。",
          },
          {
            question: "是否可以通過 WhatsApp 諮詢？",
            answer:
              "可以。WhatsApp 是路線規劃與報價溝通的主要渠道。",
          },
          {
            question: "司機會英文或中文嗎？",
            answer:
              "語言支援需視可用情況確認，我們會在最終安排前說明溝通方式。",
          },
          {
            question: "家庭成員可以一起乘坐嗎？",
            answer:
              "可以。請提供人數、行李數量，如有兒童座椅需求也請提前說明。",
          },
          {
            question: "可以安排多日包車嗎？",
            answer:
              "可以。富士山、關西、商務考察、留學考察等多日行程均可討論。",
          },
          {
            question: "需要提前多久預訂？",
            answer:
              "越早越好，尤其是假期、櫻花季、紅葉季和富士山熱門出行時段。",
          },
          {
            question: "可以安排酒店到會議地點嗎？",
            answer:
              "可以。可安排機場、酒店、辦公室、展館、會議地點之間的商務接送。",
          },
          {
            question: "司機可以等待嗎？",
            answer:
              "可以按小時或全天包車方案安排等待時間，具體以方案確認為準。",
          },
        ],
      },
      form: {
        eyebrow: "包車諮詢表單",
        title: "提交路線需求並通過 WhatsApp 溝通",
        subtitle:
          "提供基本行程資料後，我們可在 WhatsApp 溝通前更快了解您的用車需求。",
        notice:
          "如已確定日期，請留下上車城市、目的地、人數、行李數量及偏好車型。",
        fields: {
          name: "姓名",
          country: "國家或地區",
          whatsapp: "WhatsApp 號碼（連國家／地區碼）",
          month: "出發月份",
          service: "服務類型",
          message: "行程詳情",
        },
        servicePlaceholder: "請選擇服務類型",
        submit: "提交資料並透過 WhatsApp 跟進",
        sending: "正在提交資料...",
        errors: {
          name: "請輸入姓名。",
          country: "請輸入國家或地區。",
          whatsapp: "請輸入有效的 WhatsApp 號碼，並包括國家／地區碼。",
          month: "請選擇出發月份。",
          service: "請選擇服務類型。",
          message: "行程詳情不可超過 1,000 字。",
          spam: "未能接受此項提交，請再試一次。",
          supabase: "網上查詢服務暫時未能使用，請透過 WhatsApp 聯絡我們。",
          submit: "未能提交資料，請再試一次或直接透過 WhatsApp 聯絡我們。",
        },
      },
      footer: {
        disclaimer:
          "高端私人包車協調服務。路線、車型及價格均通過 WhatsApp 人工確認。",
      },
    },
  },
  ar: {
    translation: {
      brand: {
        name: "JP VIP Charter",
      },
      seo: {
        title: "خدمة تأجير سيارة خاصة فاخرة في اليابان | JP VIP Charter",
        description:
          "خدمة سيارة خاصة فاخرة في اليابان لرحلات فوجي، الزيارات الطبية، جولات دراسة المدارس، زيارات الأعمال، النقل من المطار، وبرامج VIP مخصصة.",
      },
      hero: {
        eyebrow: "خدمة سيارة خاصة فاخرة",
        title: "سيارة خاصة VIP في اليابان",
        subtitle:
          "خدمة سائق خاص للعملاء الدوليين الذين يحتاجون إلى سفر مريح ومرن وموثوق في اليابان.",
        points: [
          "النقل من المطار والفندق",
          "رحلات خاصة إلى جبل فوجي",
          "سيارة خاصة للزيارات الطبية والدراسية والتجارية",
        ],
      },
      cta: {
        whatsapp: "استشر عبر واتساب",
        whatsappShort: "واتساب",
        request: "طلب استشارة سيارة خاصة",
        card: "اسأل عبر واتساب",
      },
      services: {
        eyebrow: "الخدمات",
        title: "خيارات سيارة خاصة لرحلات اليابان المهمة",
        subtitle:
          "نوفر استشارة لسيارة خاصة من نقطة إلى نقطة، بالساعة، ليوم كامل، أو حسب برنامج مخصص للعملاء القادمين إلى اليابان.",
        items: [
          {
            title: "سيارة خاصة فاخرة",
            description:
              "مناسبة للنقل من المطار والفندق والتنقل داخل المدينة والتسوق والمطاعم والبرامج الخاصة.",
            points: ["مطابقة سيارة VIP", "بالساعة أو اليوم الكامل", "راحة وخصوصية"],
          },
          {
            title: "رحلة فوجي بسيارة خاصة",
            description:
              "برامج خاصة لجبل فوجي وبحيرة كاواغوتشي وأوشينو هاكاي وغوتيمبا ونقاط موسمية.",
            points: ["تخطيط طريق فوجي", "توقفات مرنة للتصوير", "مناسبة للعائلات والمجموعات"],
          },
          {
            title: "سيارة خاصة للزيارات الطبية",
            description:
              "خدمة مخصصة لزيارة المستشفيات ومراكز الفحص والعيادات والصيدليات ومرافق العافية.",
            points: ["من الفندق إلى مركز الفحص", "مقصورة هادئة وخاصة", "تنسيق دقيق للوقت"],
          },
          {
            title: "سيارة خاصة لجولات الدراسة",
            description:
              "دعم للعائلات لزيارة المدارس والجامعات والسكن والأحياء ومكاتب التعليم.",
            points: ["تخطيط زيارات المدارس", "برنامج مناسب للوالدين", "عدة محطات في اليوم"],
          },
          {
            title: "سيارة خاصة لزيارات الأعمال",
            description:
              "دعم للزيارات الشركات والمصانع والمعارض والاجتماعات واستقبال العملاء.",
            points: ["دعم جدول الأعمال", "نقل مطار-فندق-اجتماع", "استقبال VIP هادئ"],
          },
        ],
      },
      advantages: {
        eyebrow: "لماذا نحن",
        title: "تجربة سيارة خاصة هادئة وموثوقة في اليابان",
        subtitle:
          "الخدمة مصممة للعملاء الدوليين الذين يحتاجون إلى تواصل واضح ومسارات دقيقة وتجربة سفر راقية.",
        items: [
          {
            title: "سيارات فاخرة",
            description:
              "يمكن مناقشة سيارات فاخرة على طراز Alphard وسيارات تنفيذية وخيارات للمجموعات.",
          },
          {
            title: "تخطيط برنامج مخصص",
            description:
              "يمكن تخطيط الطريق حول الفندق والمطار وفوجي والمراكز الطبية والمدارس ومواقع الأعمال.",
          },
          {
            title: "دعم العملاء الدوليين",
            description:
              "يتوفر دعم للتواصل باللغة الإنجليزية والصينية التقليدية والعربية.",
          },
          {
            title: "سائقون محترفون",
            description:
              "يساعد السائقون ذوو الخبرة على جعل اليوم منظما وهادئا وفي الوقت المحدد.",
          },
          {
            title: "خصوصية وراحة",
            description:
              "السفر في مقصورة خاصة مناسب للعائلات والمديرين والزيارات الطبية وضيوف VIP.",
          },
          {
            title: "عرض سعر واضح",
            description:
              "يتم تأكيد السعر حسب الطريق ونوع السيارة ووقت الاستخدام والطلبات الخاصة.",
          },
        ],
      },
      process: {
        eyebrow: "الخطوات",
        title: "من استفسار واتساب إلى تأكيد السيارة الخاصة",
        subtitle:
          "شارك احتياجات الرحلة أولا، وسنساعدك في تأكيد الطريق والسيارة بسرعة.",
        items: [
          {
            title: "إرسال احتياجات الرحلة",
            description:
              "أرسل التاريخ وعدد الركاب والأمتعة ومكان الانطلاق والوجهة.",
          },
          {
            title: "مراجعة أولية للطريق",
            description:
              "نراجع إمكانية الطريق والوقت المتوقع وملاءمة السيارة والطلبات الخاصة.",
          },
          {
            title: "اقتراح السيارة والبرنامج",
            description:
              "تحصل على سيارة مقترحة وخطة طريق وسعر للتأكيد.",
          },
          {
            title: "تأكيد ترتيب السائق",
            description:
              "يتم تأكيد وقت الالتقاء ومكانه وتواصل السائق وتفاصيل الجدول.",
          },
          {
            title: "إكمال الرحلة",
            description:
              "استمتع بتجربة سيارة خاصة مريحة ومنظمة في اليابان.",
          },
        ],
      },
      trust: {
        eyebrow: "الثقة والخدمة",
        title: "مصمم لاحتياجات سفر VIP في اليابان",
        subtitle:
          "نساعد العملاء الدوليين في تنسيق خدمة سيارة خاصة فاخرة في اليابان. لسنا جهة طبية أو مدرسة أو وكالة سفر أو مستشار استثمار.",
        items: [
          {
            title: "تعامل خاص مع البرنامج",
            description:
              "يتم التعامل بعناية مع تفاصيل الرحلة والركاب ومعلومات التواصل.",
          },
          {
            title: "تخزين آمن للبيانات",
            description:
              "تخزن بيانات العملاء في Supabase مع سياسات أمان RLS.",
          },
          {
            title: "تواصل متعدد اللغات",
            description:
              "يمكن دعم الاستفسارات عبر واتساب بالإنجليزية والصينية التقليدية والعربية.",
          },
          {
            title: "تأكيد بشري",
            description:
              "تركز نسخة V1 على استشارة واتساب سريعة وتأكيد الطريق والسيارة والسعر يدويا.",
          },
        ],
      },
      faq: {
        eyebrow: "الأسئلة الشائعة",
        title: "أسئلة شائعة قبل حجز سيارة خاصة",
        subtitle:
          "هذه معلومات عامة. التفاصيل النهائية تعتمد على التاريخ والطريق والسيارة والتوفر.",
        items: [
          {
            question: "هل يمكن ترتيب النقل من المطار إلى الفندق؟",
            answer:
              "نعم. يمكن مناقشة النقل من المطار والفندق وحجم السيارة المناسب للأمتعة عبر واتساب.",
          },
          {
            question: "هل يمكن حجز سيارة خاصة إلى جبل فوجي؟",
            answer:
              "نعم. يمكن أن تشمل الرحلة بحيرة كاواغوتشي وأوشينو هاكاي وغوتيمبا ونقاطا مخصصة.",
          },
          {
            question: "هل يمكن ترتيب سيارة للزيارات الطبية؟",
            answer:
              "نعم. يمكن تنسيق النقل إلى المستشفيات ومراكز الفحص والعيادات والصيدليات ومرافق العافية.",
          },
          {
            question: "هل تدعمون جولات دراسة المدارس؟",
            answer:
              "نعم. يمكن ترتيب زيارات المدارس والجامعات والسكن ومكاتب التعليم والأحياء في يوم واحد.",
          },
          {
            question: "هل تدعمون زيارات الأعمال؟",
            answer:
              "نعم. يمكن ترتيب زيارات الشركات والمصانع والمعارض والاجتماعات واستقبال العملاء.",
          },
          {
            question: "ما أنواع السيارات المتاحة؟",
            answer:
              "تعتمد السيارات على التاريخ والطريق. يمكن مناقشة سيارات فاخرة وتنفيذية وخيارات للمجموعات.",
          },
          {
            question: "هل يمكن تخصيص البرنامج؟",
            answer:
              "نعم. يرجى إرسال المواقع المطلوبة ووقت الانطلاق والفندق وعدد الركاب والأمتعة.",
          },
          {
            question: "كيف يتم تأكيد السعر؟",
            answer:
              "يتم عرض السعر بعد مراجعة الطريق والتاريخ ونوع السيارة ووقت الاستخدام والأمتعة والطلبات الخاصة.",
          },
          {
            question: "هل يمكن الاستشارة عبر واتساب؟",
            answer:
              "نعم. واتساب هو قناة الاستشارة الرئيسية لتخطيط الطريق والسعر.",
          },
          {
            question: "هل يتحدث السائق الإنجليزية أو الصينية؟",
            answer:
              "يعتمد الدعم اللغوي على التوفر، ونوضح طريقة التواصل قبل التأكيد النهائي.",
          },
          {
            question: "هل يمكن للعائلة السفر معا؟",
            answer:
              "نعم. يرجى مشاركة عدد الركاب وحجم الأمتعة واحتياجات مقعد الأطفال إن وجدت.",
          },
          {
            question: "هل يمكن ترتيب سيارة لعدة أيام؟",
            answer:
              "نعم. يمكن مناقشة الرحلات متعددة الأيام لفوجي أو كانساي أو الأعمال أو الدراسة.",
          },
          {
            question: "كم يلزم الحجز مسبقا؟",
            answer:
              "كلما كان أبكر كان أفضل، خاصة في العطلات وموسم الساكورا وأوراق الخريف وفترات فوجي المزدحمة.",
          },
          {
            question: "هل يمكن النقل من الفندق إلى موقع الاجتماع؟",
            answer:
              "نعم. يمكن ترتيب التنقل بين المطار والفندق والمكتب والمعرض ومكان الاجتماع.",
          },
          {
            question: "هل يمكن للسائق الانتظار أثناء الزيارة؟",
            answer:
              "يمكن تضمين وقت الانتظار حسب خطة الساعة أو اليوم الكامل المختارة.",
          },
        ],
      },
      form: {
        eyebrow: "نموذج استفسار السيارة الخاصة",
        title: "أرسل الطريق وتابع عبر واتساب",
        subtitle:
          "شارك تفاصيل الرحلة الأساسية حتى نفهم احتياجاتك قبل محادثة واتساب.",
        notice:
          "إذا كان التاريخ معروفا، يرجى ذكر مدينة الانطلاق والوجهة وعدد الركاب والأمتعة ونوع السيارة المفضل.",
        fields: {
          name: "الاسم الكامل",
          country: "الدولة أو المنطقة",
          whatsapp: "رقم واتساب (مع رمز الدولة)",
          month: "شهر السفر",
          service: "نوع الخدمة",
          message: "تفاصيل الرحلة",
        },
        servicePlaceholder: "اختر نوع الخدمة",
        submit: "أرسل الطلب وتابع عبر واتساب",
        sending: "جارٍ إرسال طلبك...",
        errors: {
          name: "يرجى إدخال الاسم الكامل.",
          country: "يرجى إدخال الدولة أو المنطقة.",
          whatsapp: "يرجى إدخال رقم واتساب صحيح مع رمز الدولة.",
          month: "يرجى اختيار شهر السفر.",
          service: "يرجى اختيار نوع الخدمة.",
          message: "يرجى ألا تتجاوز تفاصيل الرحلة 1000 حرف.",
          spam: "تعذر قبول الطلب. يرجى المحاولة مرة أخرى.",
          supabase: "خدمة الطلب الإلكتروني غير متاحة مؤقتاً. يرجى التواصل معنا عبر واتساب.",
          submit: "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر واتساب.",
        },
      },
      footer: {
        disclaimer:
          "خدمة تنسيق سيارة خاصة فاخرة. يتم تأكيد الطريق والسيارة والسعر يدويا عبر واتساب.",
      },
    },
  },
};

Object.entries(homepageTranslations).forEach(([language, translation]) => {
  const current = resources[language].translation;
  resources[language].translation = {
    ...current,
    ...translation,
    form: {
      ...current.form,
      ...translation.form,
      fields: {
        ...current.form.fields,
        ...translation.form?.fields,
      },
      errors: {
        ...current.form.errors,
        ...translation.form?.errors,
      },
    },
  };
});

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "zh-hk", "ar"],
  lowerCaseLng: true,
  load: "currentOnly",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export default i18n;
