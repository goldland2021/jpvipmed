const homepageTranslations = {
  en: {
    seo: {
      title: "Private Chauffeur & Airport Transfers in Japan | JP VIP Charter",
      description:
        "Arrange private airport transfers, point-to-point rides and custom charters across Japan, with multilingual support and a clear quote before you travel.",
    },
    pageSeo: {
      services: { title: "Private Chauffeur Services in Japan" },
      routes: { title: "Popular Private Transfer Routes in Japan" },
      faq: { title: "Private Chauffeur FAQs for Japan" },
      quote: { title: "Request a Private Chauffeur Quote in Japan" },
      privacy: { title: "Privacy Policy | JP VIP Charter" },
      terms: { title: "Terms of Service | JP VIP Charter" },
    },
    legal: {
      eyebrow: "Legal",
      updated: "Last updated: July 15, 2026",
      contact:
        "Questions about this page? Contact us on WhatsApp or through the quote form and we will respond promptly.",
      privacy: {
        title: "Privacy Policy",
        intro:
          "This policy explains what information JP VIP Charter collects when you use this website, and how we use and protect it.",
        sections: [
          { heading: "Information we collect", body: "When you submit the quote form we collect your name, country or region, WhatsApp number, preferred travel month, service type, and your message. We also record basic marketing attribution (such as the ad click identifier and traffic source) and your chosen language." },
          { heading: "How we use your information", body: "We use your information only to respond to your inquiry, prepare quotes, coordinate charter services, and understand which marketing channels work. We do not sell your personal information." },
          { heading: "Storage and security", body: "Inquiry records are stored in Supabase with row-level security policies. Access is limited to authorized staff. We keep records only as long as needed to serve you and meet legal obligations." },
          { heading: "Third-party services", body: "This site uses WhatsApp (Meta) for consultation, Google Analytics and Google Ads for traffic measurement, Google reCAPTCHA for spam protection, and Supabase for data storage. Each provider processes data under its own privacy policy." },
          { heading: "Cookies and analytics", body: "We use cookies and similar technologies for analytics and advertising measurement. You can limit cookies in your browser settings; the site remains usable without them." },
          { heading: "Your rights", body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us on WhatsApp. We will respond within a reasonable period." },
          { heading: "Changes to this policy", body: "We may update this policy as the service evolves. The latest version is always published on this page with the update date shown above." },
        ],
      },
      terms: {
        title: "Terms of Service",
        intro:
          "These terms apply to consultations and charter arrangements made through this website.",
        sections: [
          { heading: "Nature of the service", body: "JP VIP Charter coordinates premium private charter services in Japan. Rides are fulfilled by licensed Japanese partner operators. We are not a medical provider, school, travel agency, or investment adviser." },
          { heading: "Quotes and confirmation", body: "Fares shown on this site are Japanese-yen reference fares. Every booking is confirmed manually on WhatsApp after we review the date, route, vehicle, luggage, and exact addresses. No arrangement is final until we confirm it in writing on WhatsApp." },
          { heading: "Payment", body: "Payment method and timing are agreed during confirmation on WhatsApp. No payment is collected through this website." },
          { heading: "Changes and cancellation", body: "Contact us on WhatsApp as early as possible if your plans change. Changes are accommodated subject to availability. Cancellation terms are stated in your booking confirmation." },
          { heading: "Airport waiting and extras", body: "For airport pickups with flight details shared in advance, the driver waits free for 90 minutes after landing. Additional waiting, added stops, late-night pickups, or route changes may incur extra charges, which we confirm before they apply." },
          { heading: "Liability", body: "Transport is provided by licensed partner operators with commercial insurance. We are not liable for delays caused by weather, traffic, force majeure, or inaccurate information provided at booking." },
          { heading: "Language versions", body: "This site is published in English, Traditional Chinese, and Arabic. If versions differ, the English version prevails for interpreting these terms." },
        ],
      },
    },

    navigation: {
      label: "Main navigation",
      menu: "Open menu",
      close: "Close menu",
      services: "Services",
      routes: "Routes",
      coverage: "Coverage",
      faq: "FAQs",
    },
    hero: {
      eyebrow: "Private chauffeur service across Japan",
      title: "Travel Japan in comfort, with every detail arranged.",
      subtitle:
        "From airport arrivals and hotel transfers to full-day charters and multi-stop itineraries, every journey is tailored to your group, luggage and schedule.",
      points: [
        "Narita & Haneda transfers to Tokyo hotels, Tokyo Disney Resort and Yokohama",
        "Hotel, cruise terminal and Shinkansen station pickups, plus private day charters",
        "English-speaking driver available on request at no extra charge",
        "Free waiting — 90 min for arrivals / 30 min for departures",
      ],
    },
    cta: {
      whatsapp: "Plan your journey on WhatsApp",
      whatsappShort: "WhatsApp",
      request: "Get a personalized quote",
      card: "Ask about this option",
    },
    pageLinks: {
      home: "Back to the homepage",
      services: "View all services",
      routes: "View popular routes",
      faq: "See all FAQs",
      quote: "Request a detailed quote",
    },
    quickQuote: {
      eyebrow: "Plan your journey",
      title: "Where can we take you?",
      subtitle:
        "Share the basics and a travel coordinator will check availability, recommend the right vehicle and prepare a clear quote.",
      serviceOptions: [
        { id: "airport", label: "Airport" },
        { id: "transfer", label: "Transfer" },
        { id: "charter", label: "Charter" },
      ],
      airportPickupLabel: "Popular airport and port pickup points",
      airportPickupPlaceholder: "Quick select a pickup airport or port",
      airportDropoffLabel: "Popular airport and port drop-off points",
      airportDropoffPlaceholder: "Quick select a drop-off airport or port",
      airportLocationOptions: [
        "Narita Airport (NRT)",
        "Haneda Airport (HND)",
        "Yokohama Port — terminal to be confirmed",
        "Osanbashi Yokohama International Passenger Terminal",
        "Shinko Pier Cruise Terminal (Yokohama Hammerhead)",
        "Daikoku Pier Cruise Terminal",
        "Kansai International Airport (KIX)",
        "Osaka International Airport / Itami (ITM)",
        "Fukuoka Airport (FUK)",
      ],
      charter: {
        pickupLabel: "Pickup location",
        pickupPlaceholder: "Hotel, residence, airport or exact address",
        areaLabel: "Main service area or itinerary",
        areaPlaceholder: "Choose the main area",
        areaOptions: [
          "Tokyo city",
          "Mt. Fuji / Hakone",
          "Kamakura / Yokohama",
          "Kyoto city",
          "Osaka / Kyoto / Nara",
          "Fukuoka city",
          "Hokkaido / Niseko",
          "Okinawa",
          "Other / custom itinerary",
        ],
        durationLabel: "Hire length",
        durationPlaceholder: "Select charter duration",
        durationOptions: [
          "Half day (4 hours)",
          "6 hours",
          "Full day (8 hours)",
          "Extended day (10 hours)",
          "Multi-day / custom arrangement",
        ],
        dateLabel: "Service date",
        startTimeLabel: "Start time",
        passengersLabel: "Passengers",
        passengersPlaceholder: "e.g. 4",
        hint:
          "For multiple days, an unlisted route or a detailed itinerary, choose the custom option and we will plan it with you.",
      },
      fields: {
        pickup: "Pickup location",
        destination: "Drop-off location",
        date: "Travel date",
        passengers: "Passengers",
      },
      placeholders: {
        pickup: "Airport, hotel, station or address",
        destination: "Hotel, station, address or area",
        passengers: "e.g. 4",
      },
      cta: "Send trip details on WhatsApp",
      note: "You will not be charged now. We confirm the itinerary, vehicle and price with you before you book.",
    },
    highlights: {
      items: [
        {
          title: "Airport pickups, carefully planned",
          description:
            "Share your flight and terminal details so we can confirm the meeting point and pickup time in advance.",
        },
        {
          title: "Family travel made easier",
          description:
            "Let us know about child seats, strollers and luggage when you inquire, and we will include them in the planning.",
        },
        {
          title: "The right vehicle for your group",
          description:
            "We recommend a vehicle based on your group size, luggage, route and comfort preferences.",
        },
      ],
    },
    services: {
      eyebrow: "Our services",
      title: "A private chauffeur for every part of your journey.",
      subtitle:
        "Choose a simple point-to-point transfer or let us plan a full day around your itinerary. Every booking is tailored to your route, timing and travel needs.",
      items: [
        {
          label: "Airport transfer",
          title: "A smooth start or finish to your trip.",
          description:
            "Private transfers for arrivals and departures at Haneda, Narita, Kansai, Chubu, New Chitose, Fukuoka, Naha and other major airports.",
          points: [
            "Flight and terminal details reviewed",
            "Luggage-friendly vehicle matching",
            "Door-to-door service to your next stop",
          ],
        },
        {
          label: "Private transfer",
          title: "Door-to-door travel, on your schedule.",
          description:
            "Travel between hotels, stations, attractions, hospitals, schools, meeting venues and cities without the stress of navigating transfers.",
          points: [
            "Point-to-point travel or scheduled waiting",
            "One destination or several planned stops",
            "Family, executive, and VIP travel",
          ],
        },
        {
          label: "Private charter",
          title: "Your own chauffeur for the day.",
          description:
            "Flexible hourly, full-day and multi-day charters for sightseeing, Mt. Fuji and Hakone, shopping, appointments, education visits or business travel.",
          points: [
            "A custom itinerary reviewed before departure",
            "Premium van and group options",
            "Careful planning for complex schedules",
          ],
        },
      ],
    },
    included: {
      eyebrow: "The details matter",
      title: "Thoughtful planning before you travel.",
      subtitle:
        "Journeys in Japan often involve specific entrances, multiple bags, changing schedules and places far from the nearest station. We confirm the practical details before the day of travel.",
      notice:
        "Waiting time, child seats, extra stops, tolls, parking, guide services and late-night travel vary by booking. Your quote will clearly show what is included before you confirm.",
      items: [
        {
          title: "A clear meeting point",
          description:
            "We confirm the airport terminal, hotel entrance, station exit or other practical meeting point before your journey.",
        },
        {
          title: "Space for your luggage",
          description:
            "Suitcases, pushchairs, wheelchairs and special bags are all considered when we recommend a vehicle.",
        },
        {
          title: "Door-to-door convenience",
          description:
            "Travel directly to the hotel, residence, venue, clinic, resort or sightseeing stop on your itinerary.",
        },
        {
          title: "Waiting time and extra stops",
          description:
            "If your day includes waiting time or several stops, we can build them into the schedule and quote.",
        },
        {
          title: "Multilingual support",
          description:
            "Plan and confirm your journey in English, Traditional Chinese or Arabic.",
        },
        {
          title: "A clear quote",
          description:
            "We review the route, service time, vehicle category and any known extras before confirming the price.",
        },
      ],
    },
    vehicles: {
      eyebrow: "Choosing your vehicle",
      title: "The right amount of space for your group and luggage.",
      subtitle:
        "The best choice depends on both passengers and baggage. Tell us what you are bringing and we will recommend the most suitable category.",
      notice:
        "Vehicle examples represent categories rather than guaranteed models. We confirm the exact model, capacity and availability before booking.",
      items: [
        {
          title: "Premium van",
          description:
            "A comfortable choice for families, executives, airport arrivals, and long sightseeing days.",
          note: "Alphard-class vehicles available on request",
        },
        {
          title: "Group vehicle",
          description:
            "More passenger and luggage capacity for larger families, small groups, and multi-day travel.",
          note: "Van or minibus selected to suit your group",
        },
        {
          title: "Executive travel",
          description:
            "Discreet, punctual transport for meetings, site visits, hospitality and time-sensitive schedules.",
          note: "Vehicle and chauffeur matched to your requirements",
        },
      ],
    },
    routes: {
      eyebrow: "Popular journeys",
      title: "Popular routes, tailored to your plans.",
      subtitle:
        "Use these routes as inspiration rather than fixed packages. Share your exact pickup, destination, date, group size and luggage for a personalized quote.",
      cta: "Ask about this route",
      from: "From",
      refNote:
        "Reference fares in Japanese yen. The final quote depends on date, vehicle, luggage, and exact addresses, and is confirmed personally before you book.",
      customTitle: "Not seeing your route? We arrange private journeys throughout Japan.",
      customText:
        "We can plan journeys to ryokans, ski resorts and rural addresses, as well as multi-city travel, appointments, education visits and business schedules.",
      customCta: "Plan a custom route",
      items: [
        {
          type: "Airport transfer",
          title: "Haneda or Narita Airport → Tokyo",
          description: "Private airport transfers to hotels, residences and onward connections across the Tokyo area.",
        },
        {
          type: "Full-day charter",
          title: "Tokyo → Mt. Fuji & Hakone",
          description: "A private day trip shaped around the scenery, seasonal conditions, your preferred stops and your pace.",
        },
        {
          type: "City transport",
          title: "Tokyo, Kyoto & Osaka private travel",
          description: "Private transport for hotels, stations, dining, shopping, sightseeing, events and meetings.",
        },
        {
          type: "Airport transfer",
          title: "Kansai Airport → Osaka or Kyoto",
          description: "Door-to-door travel after arrival or before departure, with a vehicle matched to your group and luggage.",
        },
        {
          type: "Resort transfer",
          title: "Hokkaido airports → ski resorts",
          description: "Private transfers to Niseko and other resorts, planned around winter conditions, ski equipment and luggage.",
        },
        {
          type: "Tailored itinerary",
          title: "Medical, education & business visits",
          description: "Reliable multi-stop travel for clinics, schools, offices, factories, exhibitions and other appointments.",
        },
      ],
    },
    coverage: {
      eyebrow: "Service areas",
      title: "From major airports and city centers to resorts and rural destinations.",
      subtitle:
        "Availability depends on your date, route and vehicle needs. Tell us where you are going and we will confirm what we can arrange.",
      items: [
        {
          title: "Greater Tokyo",
          places: "Haneda · Narita · Tokyo · Yokohama · Kamakura · Nikko",
        },
        {
          title: "Kansai",
          places: "Kansai Airport · Osaka · Kyoto · Nara · Kobe · Himeji",
        },
        {
          title: "Fuji & Central Japan",
          places: "Mt. Fuji · Hakone · Kawaguchiko · Nagoya · Takayama · Kanazawa",
        },
        {
          title: "Hokkaido",
          places: "New Chitose · Sapporo · Niseko · Rusutsu · Furano · Otaru",
        },
        {
          title: "Western Japan & Kyushu",
          places: "Hiroshima · Fukuoka · Nagasaki · Kumamoto · Kagoshima",
        },
        {
          title: "Okinawa & custom regions",
          places: "Naha · Ishigaki · Miyakojima · Resorts and rural destinations",
        },
      ],
    },
    process: {
      eyebrow: "Planning made simple",
      title: "Three steps from inquiry to a confirmed journey.",
      subtitle: "Share the basics, review a clear quote, and confirm only when the details suit you.",
      items: [
        {
          title: "Tell us where and when",
          description: "Share your date, route, group size, luggage and any special requests.",
        },
        {
          title: "Receive your tailored quote",
          description: "We check availability, the route, vehicle options and known costs.",
        },
        {
          title: "Confirm your journey",
          description: "Approve the details, then receive the meeting point and travel-day contact information.",
        },
      ],
    },
    trust: {
      eyebrow: "Our service commitments",
      title: "Know what is arranged before travel day.",
      subtitle:
        "The essential service details are confirmed with you before booking, with human support if your plans change.",
      notice:
        "JP VIP Charter arranges private chauffeur services. Your operator, vehicle, inclusions and booking terms are confirmed before you book.",
      items: [
        {
          title: "Fixed inclusive quote",
          description:
            "Receive the total for your confirmed itinerary before booking, with the included service details clearly stated.",
        },
        {
          title: "Complimentary waiting",
          description:
            "Airport arrivals include 90 minutes of free waiting; departures include 30 minutes.",
        },
        {
          title: "English-speaking driver",
          description:
            "Request an English-speaking driver at no extra charge when arranging your journey.",
        },
        {
          title: "Pickup details confirmed",
          description:
            "Your meeting point and travel-day contact details are provided before the journey.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions before you book",
      title: "What to know before arranging a private chauffeur in Japan.",
      subtitle:
        "Every trip is different. For an exact answer, share your date, route, group size and luggage with us.",
      items: [
        {
          question: "Can you arrange a route that is not listed on the website?",
          answer:
            "Yes. The routes shown are only examples. We can review custom airport transfers, resort journeys, rural destinations, day charters and multi-day itineraries.",
        },
        {
          question: "How is the price calculated?",
          answer:
            "Your quote is based on the route, date, expected service time, vehicle category, group and luggage needs, planned stops and any special requests.",
        },
        {
          question: "Is the quote all-inclusive?",
          answer:
            "Yes. Before booking, we provide a fixed, all-inclusive quote for the confirmed itinerary. It states the route, vehicle, included waiting time and service details. Changes after confirmation, such as extra stops or additional waiting, are reviewed separately before any adjustment.",
        },
        {
          question: "How much complimentary waiting time is included?",
          answer:
            "Airport arrivals include up to 90 minutes of complimentary waiting, and departures include up to 30 minutes. Your pickup details and waiting window are confirmed with the booking. If your flight or plans change, contact us promptly so we can review the available adjustments.",
        },
        {
          question: "Can I request a child seat?",
          answer:
            "Yes. Tell us the child’s age and the type of seat required when you inquire. We will confirm availability, suitability and any related terms before booking.",
        },
        {
          question: "Which vehicle is right for my group?",
          answer:
            "Tell us how many adults and children are traveling, plus the number and size of your bags. We will recommend a suitable category and confirm capacity.",
        },
        {
          question: "Can the driver wait or make several stops?",
          answer:
            "Yes, if this is included in the confirmed itinerary. Tell us about waiting time and extra stops in advance so we can plan the schedule and price accurately.",
        },
        {
          question: "What happens if my flight or itinerary changes?",
          answer:
            "Send us your flight details for airport transfers and contact us as soon as possible if your plans change. We will check the available adjustments and explain any effect on your booking.",
        },
        {
          question: "Can you provide transport for medical, education or business visits?",
          answer:
            "Yes. We can plan transport around appointments and multi-stop schedules. JP VIP Charter arranges transportation only and does not provide medical, education or professional advice.",
        },
        {
          question: "Which languages do you support?",
          answer:
            "Inquiry support is available in English, Traditional Chinese and Arabic. Driver language depends on availability and is confirmed separately if requested.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "The earlier, the better—especially during public holidays, cherry blossom and autumn foliage seasons, ski season, or for large groups and multi-day journeys.",
        },
      ],
    },
    form: {
      eyebrow: "Request a personalized quote",
      title: "Tell us about your journey.",
      subtitle:
        "Share the trip details so a real coordinator can review the route, vehicle and availability before you continue on WhatsApp.",
      notice:
        "If known, include the exact pickup and destination, travel date, group size, luggage, preferred timing, child-seat requirements and any planned stops.",
      afterSubmit:
        "After you submit, WhatsApp opens with your journey details ready. Send that message to continue with a coordinator. No payment is taken through this form.",
      privacy:
        "We use the details you provide only to review and respond to your journey request. Please do not include payment-card or sensitive medical information.",
    },
    footer: {
      disclaimer:
        "Private chauffeur services across Japan. Every route, vehicle, inclusion and price is confirmed before booking.",
    },
  },
  "zh-hk": {
    seo: {
      title: "日本私人司機、機場接送與包車服務 | JP VIP Charter",
      description:
        "提供全日本私人司機及包車服務，包括機場接送、酒店及車站接送、富士山一日遊、跨城市行程、商務用車與多站行程，並於預訂前清楚確認車型及報價。",
    },
    pageSeo: {
      services: { title: "日本私人司機服務" },
      routes: { title: "日本私人接送及包車路線" },
      faq: { title: "日本私人司機常見問題" },
      quote: { title: "索取日本私人司機服務報價" },
      privacy: { title: "私隱政策 | JP VIP Charter" },
      terms: { title: "服務條款 | JP VIP Charter" },
    },
    legal: {
      eyebrow: "法律條款",
      updated: "最後更新：2026 年 7 月 15 日",
      contact: "對本頁內容有疑問？請通過 WhatsApp 或報價表單聯絡我們，我們會盡快回覆。",
      privacy: {
        title: "私隱政策",
        intro: "本政策說明 JP VIP Charter 在您使用本網站時收集哪些資料，以及我們如何使用和保護這些資料。",
        sections: [
          { heading: "我們收集的資料", body: "提交報價表單時，我們會收集您的姓名、國家或地區、WhatsApp 號碼、預計出發月份、服務類型及留言內容，並記錄基本的營銷歸因資料（如廣告點擊標識與流量來源）及您選擇的語言。" },
          { heading: "資料的使用方式", body: "您的資料僅用於回覆諮詢、提供報價、協調用車服務，以及了解營銷渠道效果。我們不會出售您的個人資料。" },
          { heading: "儲存與安全", body: "諮詢記錄儲存於 Supabase，並設有行級安全（RLS）權限策略，僅授權人員可存取。資料僅在服務所需及法律要求的期間內保留。" },
          { heading: "第三方服務", body: "本網站使用 WhatsApp（Meta）進行諮詢溝通、Google Analytics 及 Google Ads 進行流量統計、Google reCAPTCHA 防止垃圾提交、Supabase 儲存資料。各服務商按其私隱政策處理資料。" },
          { heading: "Cookie 與分析", body: "我們使用 Cookie 及類似技術進行分析與廣告效果統計。您可在瀏覽器設定中限制 Cookie，不影響網站基本使用。" },
          { heading: "您的權利", body: "您可隨時通過 WhatsApp 聯絡我們，要求查閱、更正或刪除您的個人資料，我們會在合理期間內回覆。" },
          { heading: "政策更新", body: "我們可能隨服務發展更新本政策，最新版本會發布於本頁，並在頁首標示更新日期。" },
        ],
      },
      terms: {
        title: "服務條款",
        intro: "本條款適用於通過本網站進行的諮詢及用車安排。",
        sections: [
          { heading: "服務性質", body: "JP VIP Charter 提供日本高端用車協調服務，行程由持牌日本合作營運商執行。我們不是醫療機構、學校、旅行社或投資顧問。" },
          { heading: "報價與確認", body: "網站所示價格均為日圓參考價。每筆預約均需在 WhatsApp 上經人工核對日期、路線、車型、行李及詳細地址後確認。在我們於 WhatsApp 書面確認前，任何安排均不作準。" },
          { heading: "付款", body: "付款方式及時間在 WhatsApp 確認時協商約定。本網站不收取任何款項。" },
          { heading: "更改與取消", body: "行程有變請盡早通過 WhatsApp 聯絡我們，更改視乎可用情況安排。取消條款以您的預約確認為準。" },
          { heading: "機場等候與額外費用", body: "機場接機如提前提供航班資料，司機在航班降落後免費等候 90 分鐘。額外等候、加停站點、深夜接送或路線變更可能產生額外費用，均會在生效前與您確認。" },
          { heading: "責任", body: "運輸由持牌合作營運商提供並配有商業保險。因天氣、交通、不可抗力或預約時提供的資料不準確導致的延誤，我們不承擔責任。" },
          { heading: "語言版本", body: "本網站提供英文、繁體中文及阿拉伯文版本。如各版本有差異，本條款以英文版為準。" },
        ],
      },
    },

    navigation: {
      label: "主要導覽",
      menu: "開啟選單",
      close: "關閉選單",
      services: "服務",
      routes: "行程",
      coverage: "服務地區",
      faq: "常見問題",
    },
    hero: {
      eyebrow: "全日本私人司機及包車服務",
      title: "專屬司機接送，讓日本旅程輕鬆自在。",
      subtitle:
        "由機場接送、酒店及車站往返，到一日包車與多站行程，我們會按同行人數、行李和時間，預先安排每個細節。",
      points: [
        "成田及羽田機場接送，直達東京酒店、東京迪士尼度假區及橫濱",
        "提供酒店、郵輪碼頭、新幹線車站接送及私人一日包車",
        "可應要求安排會說英語的司機，不另收費",
        "接機免費等候 90 分鐘，送機免費等候 30 分鐘",
      ],
    },
    cta: {
      whatsapp: "透過 WhatsApp 規劃行程",
      whatsappShort: "WhatsApp",
      request: "索取專屬報價",
      card: "查詢這項服務",
    },
    pageLinks: {
      home: "返回首頁",
      services: "查看所有服務",
      routes: "查看熱門行程",
      faq: "查看全部常見問題",
      quote: "索取詳細報價",
    },
    quickQuote: {
      eyebrow: "規劃您的行程",
      title: "您想由哪裡出發，前往哪裡？",
      subtitle:
        "提供基本行程資料，專人會確認能否安排、建議合適車型，並提供清晰報價。",
      serviceOptions: [
        { id: "airport", label: "機場接送" },
        { id: "transfer", label: "私人接送" },
        { id: "charter", label: "私人包車" },
      ],
      airportPickupLabel: "常用機場及碼頭上車地點",
      airportPickupPlaceholder: "快速選擇上車機場或碼頭",
      airportDropoffLabel: "常用機場及碼頭下車地點",
      airportDropoffPlaceholder: "快速選擇下車機場或碼頭",
      airportLocationOptions: [
        "成田機場（NRT）",
        "羽田機場（HND）",
        "橫濱港（碼頭待確認）",
        "橫濱港大棧橋國際客船碼頭",
        "新港碼頭客船碼頭（橫濱 Hammerhead）",
        "大黑碼頭客船碼頭",
        "關西國際機場（KIX）",
        "大阪國際機場／伊丹機場（ITM）",
        "福岡機場（FUK）",
      ],
      charter: {
        pickupLabel: "上車地點",
        pickupPlaceholder: "酒店、住宅、機場或確實地址",
        areaLabel: "主要服務地區或行程範圍",
        areaPlaceholder: "選擇主要地區",
        areaOptions: [
          "東京都內",
          "富士山／箱根",
          "鎌倉／橫濱",
          "京都市內",
          "大阪／京都／奈良",
          "福岡市內",
          "北海道／二世古",
          "沖繩",
          "其他／自訂行程",
        ],
        durationLabel: "包車時長",
        durationPlaceholder: "選擇包車時長",
        durationOptions: [
          "半日（4 小時）",
          "6 小時",
          "全日（8 小時）",
          "延長全日（10 小時）",
          "多日／自訂安排",
        ],
        dateLabel: "用車日期",
        startTimeLabel: "開始時間",
        passengersLabel: "同行人數",
        passengersPlaceholder: "例如 4",
        hint: "如需多日、未列出的地區或詳細行程，請選擇自訂安排，我們會與您規劃。",
      },
      fields: {
        pickup: "上車地點",
        destination: "目的地",
        date: "出發日期",
        passengers: "同行人數",
      },
      placeholders: {
        pickup: "機場、酒店、車站或地址",
        destination: "酒店、車站、地址或地區",
        passengers: "例如 4",
      },
      cta: "透過 WhatsApp 發送行程",
      note: "此處不會收取任何款項。路線、車型和價格會在預訂前由專人確認。",
    },
    highlights: {
      items: [
        {
          title: "抵埗前確認機場接送",
          description: "提供航班編號及客運大樓資料，我們會預先確認會合地點與接送時間。",
        },
        {
          title: "照顧家庭旅遊需要",
          description:
            "如需要兒童安全座椅，或會攜帶嬰兒車及較多行李，請在查詢時告訴我們。",
        },
        {
          title: "按人數與行李安排車型",
          description:
            "我們會按同行人數、行李、路線和舒適程度，建議合適的豪華商務車或團體車輛。",
        },
      ],
    },
    services: {
      eyebrow: "私人司機服務",
      title: "由抵埗到每天行程，都有專人安排。",
      subtitle:
        "無論是點對點接送，還是全日包車，我們都會按您的路線、時間和實際需要安排。",
      items: [
        {
          label: "機場接送",
          title: "由機場直達目的地，抵埗後更輕鬆。",
          description:
            "提供羽田、成田、關西、中部、新千歲、福岡、那霸及其他主要機場的私人接送。",
          points: ["核對航班與客運大樓資料", "按同行人數與行李安排車型", "門到門接送"],
        },
        {
          label: "私人接送",
          title: "按您的時間，點對點直達。",
          description:
            "往返酒店、車站、景點、醫院、學校、會議場地或不同城市，毋須拖著行李轉車。",
          points: ["點對點接送或預約等候", "單一目的地或多個停靠點", "適合家庭、商務旅客及貴賓"],
        },
        {
          label: "私人包車",
          title: "專屬車輛與司機，靈活配合全日行程。",
          description:
            "可按小時、全日或多日安排，適合觀光、富士山與箱根、購物、預約、升學參訪及商務行程。",
          points: ["出發前確認專屬路線", "豪華商務車及團體車型", "妥善安排多站行程"],
        },
      ],
    },
    included: {
      eyebrow: "細節早有準備",
      title: "出發前，把每個實際需要安排妥當。",
      subtitle:
        "日本行程可能涉及指定入口、大量行李、時間變動，或距離車站較遠的目的地。我們會預先確認重要細節。",
      notice:
        "等候時間、兒童安全座椅、額外停靠站、高速公路費、停車費、導遊服務及深夜接送，會視乎個別預訂而定；報價會在確認前清楚列明包含項目。",
      items: [
        { title: "清楚的會合地點", description: "預先確認機場客運大樓、酒店入口、車站出口或其他合適的上車地點。" },
        { title: "預留足夠行李空間", description: "安排車型時會考慮行李箱、嬰兒車、輪椅及大型物品。" },
        { title: "門到門直達", description: "直接前往酒店、住宅、場館、診所、度假村或景點。" },
        { title: "等候與多站安排", description: "如需要等候或停靠多個地點，可一併納入時間安排及報價。" },
        { title: "多語言支援", description: "由查詢到確認，均可使用繁體中文、英文或阿拉伯語溝通。" },
        { title: "報價清晰", description: "確認價格前會核對路線、服務時間、車型及已知附加項目。" },
      ],
    },
    vehicles: {
      eyebrow: "車型選擇",
      title: "車型合適，乘客與行李都坐得舒適。",
      subtitle:
        "選擇車型時，不只要看同行人數，也要考慮行李數量和尺寸。提供完整資料後，我們會建議合適車款。",
      notice: "車輛圖片只供參考，不代表保證提供指定型號；實際車款、載客量及供應情況會在預訂前確認。",
      items: [
        { title: "豪華商務車", description: "適合家庭、商務旅客、機場接送及時間較長的觀光行程。", note: "Alphard 或同級車款可按需要安排" },
        { title: "團體車輛", description: "為大家庭、小型團體及多日行程提供更充裕的乘坐及行李空間。", note: "按團體人數安排大型多人車或小型巴士" },
        { title: "商務接待用車", description: "適合會議、考察、客戶接待及對時間要求較高的行程。", note: "按行程需要安排合適車型與司機" },
      ],
    },
    routes: {
      eyebrow: "熱門行程",
      title: "常見路線，可按您的計劃靈活調整。",
      subtitle:
        "以下只列出部分行程，並非固定套票。提供上車地點、目的地、日期、同行人數及行李資料後，我們會為您準備專屬報價。",
      cta: "查詢此路線",
      from: "起",
      refNote:
        "以上為日圓參考價，最終報價視日期、車型、行李及詳細地址而定，確認後方可預約。",
      customTitle: "沒有找到合適路線？日本各地行程均可另行規劃。",
      customText:
        "溫泉旅館、滑雪場、郊外目的地、跨城市行程、醫療預約、升學參訪及商務日程，均可按需要安排。",
      customCta: "規劃專屬行程",
      items: [
        { type: "機場接送", title: "羽田／成田機場至東京", description: "由機場前往東京酒店、住宅或下一個目的地的私人接送。" },
        { type: "全日包車", title: "東京至富士山及箱根", description: "按季節、景點、停靠地點和遊覽步伐，安排專屬一日行程。" },
        { type: "市內用車", title: "東京、京都及大阪私人接送", description: "往返酒店、車站、餐廳、購物區、景點、活動場地及會議地點。" },
        { type: "機場接送", title: "關西機場至大阪或京都", description: "抵達或離境時的門到門接送，並按同行人數與行李安排車型。" },
        { type: "度假村接送", title: "北海道各機場至滑雪度假村", description: "私人接送至二世古及其他度假區，並考慮冬季路況、滑雪裝備與行李。" },
        { type: "專屬行程", title: "醫療、升學及商務行程", description: "配合診所、學校、辦公室、工廠、展覽及會議時間，安排多站接送。" },
      ],
    },
    coverage: {
      eyebrow: "全日本服務",
      title: "由主要機場和市中心，到度假區及郊外目的地。",
      subtitle:
        "能否安排會視乎日期、路線、車型和當地車輛供應。告訴我們目的地，我們會確認合適方案。",
      items: [
        { title: "東京及周邊", places: "羽田 · 成田 · 東京 · 橫濱 · 鎌倉 · 日光" },
        { title: "關西", places: "關西機場 · 大阪 · 京都 · 奈良 · 神戶 · 姬路" },
        { title: "富士山及中部", places: "富士山 · 箱根 · 河口湖 · 名古屋 · 高山 · 金澤" },
        { title: "北海道", places: "新千歲 · 札幌 · 二世古 · 留壽都 · 富良野 · 小樽" },
        { title: "西日本及九州", places: "廣島 · 福岡 · 長崎 · 熊本 · 鹿兒島" },
        { title: "沖繩及其他地區", places: "那霸 · 石垣島 · 宮古島 · 度假區及郊外目的地" },
      ],
    },
    process: {
      eyebrow: "簡單安排",
      title: "三個步驟，完成行程安排。",
      subtitle: "先提供基本資料，收到清晰報價後，再決定是否確認。",
      items: [
        { title: "提供日期及行程", description: "告訴我們路線、同行人數、行李和特別需要。" },
        { title: "接收專屬報價", description: "我們會核對供應、路線、合適車型和已知費用。" },
        { title: "確認您的行程", description: "同意安排後，我們會提供會合地點及當日聯絡資料。" },
      ],
    },
    trust: {
      eyebrow: "我們的服務承諾",
      title: "出發前，重要安排逐項確認。",
      subtitle:
        "預訂前會與您確認主要服務細節；如計劃有變，亦有專人協助跟進。",
      notice: "JP VIP Charter 負責安排私人司機服務。實際營運商、車輛、包含項目及預訂條款，均會在確認前列明。",
      items: [
        { title: "一價全包報價", description: "預訂前提供已確認行程的總價，並清楚列明包含的服務內容。" },
        { title: "免費等候時間", description: "接機包含 90 分鐘免費等候；送機包含 30 分鐘免費等候。" },
        { title: "英語司機不另收費", description: "安排行程時可要求英語司機，毋須支付額外費用。" },
        { title: "預先確認接送資料", description: "出發前會提供會合地點及行程當日的聯絡資料。" },
      ],
    },
    faq: {
      eyebrow: "預訂前須知",
      title: "預訂日本私人司機前，您可能想知道的事項。",
      subtitle: "每個行程各有不同。提供日期、路線、同行人數和行李資料，我們才能給您準確答覆。",
      items: [
        { question: "網站沒有列出的路線也可以安排嗎？", answer: "可以。網站只列出部分常見行程，機場接送、度假區、郊外目的地、一日包車及多日行程均可另行規劃。" },
        { question: "服務價格如何計算？", answer: "報價會按路線、日期、預計用車時間、車型、同行人數、行李、停靠點及特別需要計算。" },
        { question: "報價是一價全包嗎？", answer: "是。預訂前會按已確認的行程提供一價全包報價，清楚列明路線、車型、免費等候時間及服務內容。如確認後新增停靠點或延長等候，任何價格調整均會另行核對。" },
        { question: "免費等候時間有多久？", answer: "接機包含最多 90 分鐘免費等候，送機包含最多 30 分鐘免費等候。會合方式和等候時間會隨預訂一併確認；如航班或計劃有變，請盡早聯絡我們核對可行的調整。" },
        { question: "可以安排兒童安全座椅嗎？", answer: "可以。查詢時請提供兒童年齡及所需座椅類型，我們會在預訂前確認供應、適用情況和相關條款。" },
        { question: "哪種車型適合我的行程？", answer: "請提供成人與兒童人數，以及行李數量和尺寸，我們會建議合適車型並確認載客及行李空間。" },
        { question: "司機可以等候或停靠多個地點嗎？", answer: "可以，但需要預先列入已確認的行程。請提前告訴我們等候時間和停靠地點，以便準確安排時間及報價。" },
        { question: "航班延誤或行程有變時怎麼辦？", answer: "機場接送請提供航班資料；如計劃有變，請盡早聯絡我們。我們會確認可行的調整及對預訂的影響。" },
        { question: "可以安排醫療、升學或商務行程嗎？", answer: "可以。我們可按預約時間和多站路線安排接送。JP VIP Charter 只負責交通服務，不提供醫療、教育或其他專業意見。" },
        { question: "你們支援哪些語言？", answer: "查詢支援繁體中文、英文及阿拉伯語。如希望司機使用指定語言，需視乎供應情況另行確認。" },
        { question: "應該提前多久預訂？", answer: "越早越好，尤其是假期、櫻花季、紅葉季、滑雪季、大型團體及多日行程。" },
      ],
    },
    form: {
      eyebrow: "索取專屬報價",
      title: "告訴我們您的行程需要。",
      subtitle: "提交資料後，專人會先核對路線、車型及能否安排，再透過 WhatsApp 跟進。",
      notice: "如資料已確定，請提供上車地點、目的地、日期、同行人數、行李、用車時間、兒童安全座椅及停靠點。",
      afterSubmit: "提交後，WhatsApp 會開啟並預先填好行程資料；請發送該訊息，讓專人繼續跟進。此表格不會收取任何款項。",
      privacy: "您提供的資料只會用於審核及回覆本次行程查詢。請勿填寫付款卡資料或敏感醫療資料。",
    },
    footer: {
      disclaimer: "全日本私人司機及包車服務。路線、車型、包含項目和價格均會在預訂前確認。",
    },
  },
  ar: {
    seo: {
      title: "سائق خاص وتوصيل من وإلى المطار في اليابان | JP VIP Charter",
      description:
        "رتب خدمة سائق خاص في أنحاء اليابان للتوصيل من وإلى المطارات والتنقل بين المدن والجولات اليومية والرحلات متعددة المحطات، مع دعم بالعربية وعرض سعر واضح قبل الحجز.",
    },
    pageSeo: {
      services: { title: "خدمات السائق الخاص في اليابان" },
      routes: { title: "مسارات التنقل الخاص في اليابان" },
      faq: { title: "الأسئلة الشائعة عن السائق الخاص في اليابان" },
      quote: { title: "طلب عرض سعر لخدمة سائق خاص في اليابان" },
      privacy: { title: "سياسة الخصوصية | JP VIP Charter" },
      terms: { title: "شروط الخدمة | JP VIP Charter" },
    },
    legal: {
      eyebrow: "الشؤون القانونية",
      updated: "آخر تحديث: 15 يوليو 2026",
      contact: "لديك سؤال حول هذه الصفحة؟ تواصل معنا عبر واتساب أو نموذج طلب السعر وسنرد عليك سريعا.",
      privacy: {
        title: "سياسة الخصوصية",
        intro: "توضح هذه السياسة المعلومات التي تجمعها JP VIP Charter عند استخدامك هذا الموقع، وكيف نستخدمها ونحميها.",
        sections: [
          { heading: "المعلومات التي نجمعها", body: "عند إرسال نموذج طلب السعر نجمع الاسم والدولة أو المنطقة ورقم واتساب وشهر السفر المفضل ونوع الخدمة ورسالتك، كما نسجل بيانات تسويقية أساسية (مثل معرف نقرة الإعلان ومصدر الزيارة) واللغة المختارة." },
          { heading: "كيف نستخدم معلوماتك", body: "نستخدم معلوماتك فقط للرد على استفسارك وإعداد عروض الأسعار وتنسيق خدمة السيارة وفهم فعالية قنوات التسويق. لا نبيع معلوماتك الشخصية." },
          { heading: "التخزين والأمان", body: "تخزن سجلات الاستفسار في Supabase مع سياسات أمان على مستوى الصفوف، ويقتصر الوصول على الموظفين المخولين. نحتفظ بالسجلات فقط للمدة اللازمة لخدمتك وللالتزامات القانونية." },
          { heading: "خدمات الطرف الثالث", body: "يستخدم الموقع واتساب (Meta) للاستشارة، وGoogle Analytics وGoogle Ads لقياس الزيارات، وGoogle reCAPTCHA للحماية من الرسائل المزعجة، وSupabase لتخزين البيانات. يعالج كل مزود البيانات وفق سياسة الخصوصية الخاصة به." },
          { heading: "ملفات تعريف الارتباط والتحليلات", body: "نستخدم ملفات تعريف الارتباط وتقنيات مشابهة للتحليلات وقياس الإعلانات. يمكنك تقييدها من إعدادات المتصفح ويبقى الموقع قابلا للاستخدام." },
          { heading: "حقوقك", body: "يمكنك في أي وقت طلب الاطلاع على معلوماتك الشخصية أو تصحيحها أو حذفها بالتواصل معنا عبر واتساب، وسنرد خلال مدة معقولة." },
          { heading: "تحديثات هذه السياسة", body: "قد نحدث هذه السياسة مع تطور الخدمة. تنشر أحدث نسخة دائما في هذه الصفحة مع تاريخ التحديث أعلاه." },
        ],
      },
      terms: {
        title: "شروط الخدمة",
        intro: "تنطبق هذه الشروط على الاستشارات وترتيبات السيارة الخاصة التي تتم عبر هذا الموقع.",
        sections: [
          { heading: "طبيعة الخدمة", body: "تنسق JP VIP Charter خدمات سيارة خاصة فاخرة في اليابان، وتنفذ الرحلات عبر مشغلين يابانيين مرخصين. لسنا جهة طبية أو مدرسة أو وكالة سفر أو مستشار استثمار." },
          { heading: "الأسعار والتأكيد", body: "الأسعار المعروضة في الموقع أسعار استرشادية بالين الياباني. يؤكد كل حجز يدويا عبر واتساب بعد مراجعة التاريخ والمسار والسيارة والأمتعة والعناوين الدقيقة. لا يعتبر أي ترتيب نهائيا قبل تأكيدنا الكتابي عبر واتساب." },
          { heading: "الدفع", body: "يتفق على طريقة الدفع وتوقيته أثناء التأكيد عبر واتساب. لا يحصل هذا الموقع أي مدفوعات." },
          { heading: "التغييرات والإلغاء", body: "إذا تغيرت خطتك تواصل معنا عبر واتساب في أقرب وقت. تتم التغييرات حسب التوفر، وتوضح شروط الإلغاء في تأكيد حجزك." },
          { heading: "انتظار المطار والرسوم الإضافية", body: "للاستقبال من المطار مع مشاركة تفاصيل الرحلة مسبقا، ينتظر السائق مجانا 90 دقيقة بعد الهبوط. قد يترتب على الانتظار الإضافي أو المحطات المضافة أو الاستقبال المتأخر ليلا أو تغيير المسار رسوم إضافية نؤكدها قبل تطبيقها." },
          { heading: "المسؤولية", body: "ينفذ النقل مشغلون شركاء مرخصون بتأمين تجاري. لسنا مسؤولين عن التأخير الناتج عن الطقس أو حركة المرور أو القوة القاهرة أو معلومات غير دقيقة قدمت عند الحجز." },
          { heading: "نسخ اللغات", body: "ينشر هذا الموقع بالإنجليزية والصينية التقليدية والعربية. عند الاختلاف بين النسخ، تعتمد النسخة الإنجليزية في تفسير هذه الشروط." },
        ],
      },
    },

    navigation: {
      label: "التنقل الرئيسي",
      menu: "فتح القائمة",
      close: "إغلاق القائمة",
      services: "الخدمات",
      routes: "المسارات",
      coverage: "مناطق الخدمة",
      faq: "الأسئلة الشائعة",
    },
    hero: {
      eyebrow: "خدمة سائق خاص في جميع أنحاء اليابان",
      title: "تنقل في اليابان براحة وخصوصية، وكل التفاصيل مرتبة مسبقاً.",
      subtitle:
        "من الاستقبال في المطار والتنقل بين الفنادق والمحطات إلى الجولات اليومية والرحلات متعددة المحطات، نرتب كل رحلة بما يناسب عدد المسافرين والأمتعة والجدول.",
      points: [
        "توصيل من مطاري ناريتا وهانيدا إلى فنادق طوكيو ومنتجع طوكيو ديزني ويوكوهاما",
        "توصيل من الفنادق وموانئ الرحلات البحرية ومحطات الشينكانسن، وجولات خاصة ليوم كامل",
        "سائق يتحدث الإنجليزية عند الطلب من دون رسوم إضافية",
        "انتظار مجاني 90 دقيقة عند الوصول و30 دقيقة عند المغادرة",
      ],
    },
    cta: {
      whatsapp: "خطط لرحلتك عبر واتساب",
      whatsappShort: "واتساب",
      request: "احصل على عرض سعر مخصص",
      card: "استفسر عن هذا الخيار",
    },
    pageLinks: {
      home: "العودة إلى الصفحة الرئيسية",
      services: "عرض جميع الخدمات",
      routes: "عرض المسارات الشائعة",
      faq: "عرض جميع الأسئلة",
      quote: "اطلب عرض سعر مفصل",
    },
    quickQuote: {
      eyebrow: "خطط لرحلتك",
      title: "إلى أين ترغب في الذهاب؟",
      subtitle:
        "أرسل التفاصيل الأساسية، وسيتحقق منسق الرحلة من التوفر ويقترح المركبة المناسبة ويجهز لك عرض سعر واضحاً.",
      serviceOptions: [
        { id: "airport", label: "المطار" },
        { id: "transfer", label: "تنقل خاص" },
        { id: "charter", label: "سيارة خاصة" },
      ],
      airportPickupLabel: "نقاط استقبال شائعة من المطارات والميناء",
      airportPickupPlaceholder: "اختر مطاراً أو ميناءً للاستقبال بسرعة",
      airportDropoffLabel: "نقاط توصيل شائعة إلى المطارات والميناء",
      airportDropoffPlaceholder: "اختر مطاراً أو ميناءً للتوصيل بسرعة",
      airportLocationOptions: [
        "مطار ناريتا (NRT)",
        "مطار هانيدا (HND)",
        "ميناء يوكوهاما (المحطة غير مؤكدة)",
        "محطة أوسانباشي الدولية لسفن الركاب في يوكوهاما",
        "محطة شينكو للسفن السياحية (يوكوهاما هامر هيد)",
        "محطة دايكوكو للسفن السياحية",
        "مطار كانساي الدولي (KIX)",
        "مطار أوساكا الدولي / إيتامي (ITM)",
        "مطار فوكوكا (FUK)",
      ],
      charter: {
        pickupLabel: "موقع الاستقبال",
        pickupPlaceholder: "فندق أو سكن أو مطار أو عنوان دقيق",
        areaLabel: "منطقة الخدمة الرئيسية أو مسار الرحلة",
        areaPlaceholder: "اختر المنطقة الرئيسية",
        areaOptions: [
          "داخل طوكيو",
          "جبل فوجي / هاكونه",
          "كاماكورا / يوكوهاما",
          "داخل كيوتو",
          "أوساكا / كيوتو / نارا",
          "داخل فوكوكا",
          "هوكايدو / نيسيكو",
          "أوكيناوا",
          "منطقة أخرى / برنامج مخصص",
        ],
        durationLabel: "مدة الحجز",
        durationPlaceholder: "اختر مدة حجز السيارة",
        durationOptions: [
          "نصف يوم (4 ساعات)",
          "6 ساعات",
          "يوم كامل (8 ساعات)",
          "يوم ممتد (10 ساعات)",
          "عدة أيام / ترتيب مخصص",
        ],
        dateLabel: "تاريخ الخدمة",
        startTimeLabel: "وقت البدء",
        passengersLabel: "عدد الركاب",
        passengersPlaceholder: "مثال: 4",
        hint:
          "للرحلات متعددة الأيام أو المناطق غير المدرجة أو البرامج التفصيلية، اختر الترتيب المخصص وسنخطط الرحلة معك.",
      },
      fields: {
        pickup: "موقع الاستقبال",
        destination: "موقع الوصول",
        date: "تاريخ السفر",
        passengers: "عدد الركاب",
      },
      placeholders: {
        pickup: "مطار أو فندق أو محطة أو عنوان",
        destination: "فندق أو محطة أو عنوان أو منطقة",
        passengers: "مثال: 4",
      },
      cta: "أرسل تفاصيل الرحلة عبر واتساب",
      note: "لن يتم تحصيل أي مبلغ الآن. نؤكد معك المسار والمركبة والسعر قبل الحجز.",
    },
    highlights: {
      items: [
        {
          title: "استقبال من المطار دون ارتباك",
          description: "أرسل رقم الرحلة ومبنى الوصول لنؤكد لك نقطة اللقاء وموعد الاستقبال مسبقاً.",
        },
        {
          title: "راحة أكبر للعائلات",
          description:
            "أخبرنا عن مقاعد الأطفال وعرباتهم والأمتعة عند الاستفسار، وسنأخذها في الاعتبار عند التخطيط.",
        },
        {
          title: "مركبة تناسب عددكم وأمتعتكم",
          description:
            "نقترح المركبة الأنسب بناءً على عدد المسافرين والأمتعة والمسار ومستوى الراحة المطلوب.",
        },
      ],
    },
    services: {
      eyebrow: "خدمات السائق الخاص",
      title: "سائق خاص لكل مرحلة من رحلتك.",
      subtitle:
        "سواء احتجت إلى توصيل مباشر من نقطة إلى أخرى أو سيارة مع سائق ليوم كامل، نرتب الخدمة وفق مسارك وتوقيتك واحتياجاتك.",
      items: [
        {
          label: "توصيل من وإلى المطار",
          title: "بداية مريحة لرحلتك أو ختام سلس لها.",
          description:
            "خدمة استقبال وتوصيل خاصة من وإلى مطارات هانيدا وناريتا وكانساي وتشوبو ونيو تشيتوس وفوكوكا وناها وغيرها.",
          points: ["مراجعة بيانات الرحلة ومبنى الوصول", "اختيار مركبة تناسب الأمتعة", "توصيل من الباب إلى الباب"],
        },
        {
          label: "تنقل خاص",
          title: "من الباب إلى الباب، وفق جدولك.",
          description:
            "تنقل بين الفنادق والمحطات والمعالم والمستشفيات والمدارس ومواقع الاجتماعات والمدن من دون عناء تبديل وسائل النقل.",
          points: ["تنقل مباشر أو انتظار مجدول", "وجهة واحدة أو عدة محطات", "مناسب للعائلات ورجال الأعمال وكبار الضيوف"],
        },
        {
          label: "سيارة مع سائق",
          title: "سائق خاص طوال اليوم.",
          description:
            "خيارات مرنة بالساعة أو ليوم كامل أو لعدة أيام للسياحة وجبل فوجي وهاكونه والتسوق والمواعيد والزيارات التعليمية أو رحلات الأعمال.",
          points: ["مسار مخصص يراجع قبل الانطلاق", "مركبات فاخرة وخيارات للمجموعات", "تخطيط دقيق للبرامج متعددة المحطات"],
        },
      ],
    },
    included: {
      eyebrow: "التفاصيل تصنع الفرق",
      title: "كل ما يلزم، نرتبه قبل موعد الرحلة.",
      subtitle:
        "قد تتطلب الرحلات في اليابان مداخل محددة وأمتعة كثيرة ومواعيد متغيرة ووجهات بعيدة عن أقرب محطة. لذلك نؤكد التفاصيل العملية مسبقاً.",
      notice:
        "تختلف مدة الانتظار ومقاعد الأطفال والمحطات الإضافية ورسوم الطرق والمواقف وخدمات المرشد والتنقل الليلي حسب الحجز. يوضح عرض السعر ما هو مشمول قبل التأكيد.",
      items: [
        { title: "نقطة لقاء واضحة", description: "نؤكد مبنى المطار أو مدخل الفندق أو مخرج المحطة أو أي نقطة لقاء مناسبة قبل الرحلة." },
        { title: "مساحة كافية للأمتعة", description: "نراعي الحقائب وعربات الأطفال والكراسي المتحركة والأمتعة الخاصة عند اختيار المركبة." },
        { title: "توصيل من الباب إلى الباب", description: "نوصلك مباشرة إلى الفندق أو السكن أو الموقع أو العيادة أو المنتجع أو محطة الجولة." },
        { title: "انتظار ومحطات إضافية", description: "يمكن إضافة وقت انتظار أو عدة محطات إلى الجدول وعرض السعر." },
        { title: "دعم بعدة لغات", description: "يمكنك التخطيط والتأكيد بالعربية أو الإنجليزية أو الصينية التقليدية." },
        { title: "عرض سعر واضح", description: "نراجع المسار ومدة الخدمة وفئة المركبة والإضافات المعروفة قبل تأكيد السعر." },
      ],
    },
    vehicles: {
      eyebrow: "اختيار المركبة",
      title: "مساحة مناسبة للركاب والأمتعة.",
      subtitle:
        "لا يعتمد الاختيار على عدد الركاب فقط، بل على حجم الأمتعة أيضاً. شاركنا التفاصيل لنقترح الفئة الأنسب.",
      notice: "صور المركبات توضح الفئات ولا تضمن طرازاً بعينه. نؤكد الطراز والسعة والتوفر قبل الحجز.",
      items: [
        { title: "مركبة فاخرة", description: "خيار مريح للعائلات ورجال الأعمال والاستقبال من المطار وأيام السياحة الطويلة.", note: "تتوفر مركبات من فئة ألفارد عند الطلب" },
        { title: "مركبة للمجموعات", description: "سعة أكبر للركاب والأمتعة، تناسب العائلات الكبيرة والمجموعات الصغيرة والرحلات لعدة أيام.", note: "فان أو حافلة صغيرة حسب حجم المجموعة" },
        { title: "تنقل لرجال الأعمال", description: "خدمة هادئة ومنضبطة للمواعيد والاجتماعات وزيارات المواقع والضيافة والبرامج الحساسة للوقت.", note: "اختيار المركبة والسائق وفق متطلباتك" },
      ],
    },
    routes: {
      eyebrow: "رحلات شائعة",
      title: "مسارات شائعة نخصصها وفق خطتك.",
      subtitle:
        "هذه المسارات أمثلة وليست باقات ثابتة. أرسل موقع الاستقبال والوجهة والتاريخ وعدد المسافرين والأمتعة لنعد لك عرض سعر مخصصاً.",
      cta: "استفسر عن هذا المسار",
      from: "ابتداء من",
      refNote:
        "أسعار استرشادية بالين الياباني. يعتمد السعر النهائي على التاريخ والسيارة والأمتعة والعناوين الدقيقة ويؤكد شخصيا قبل الحجز.",
      customTitle: "لا تجد مسارك؟ نرتب رحلات خاصة في جميع أنحاء اليابان.",
      customText:
        "يمكننا التخطيط للتنقل إلى الريوكان ومنتجعات التزلج والوجهات الريفية، إضافة إلى الرحلات بين المدن والمواعيد الطبية والزيارات التعليمية وبرامج الأعمال.",
      customCta: "خطط لمسار مخصص",
      items: [
        { type: "توصيل من المطار", title: "من مطاري هانيدا أو ناريتا إلى طوكيو", description: "توصيل خاص إلى الفنادق والمساكن ومحطات الرحلة التالية في منطقة طوكيو." },
        { type: "جولة ليوم كامل", title: "من طوكيو إلى جبل فوجي وهاكونه", description: "رحلة يومية خاصة نرتبها وفق الموسم والمحطات التي تفضلها والوتيرة المناسبة لك." },
        { type: "تنقل داخل المدن", title: "تنقل خاص في طوكيو وكيوتو وأوساكا", description: "تنقل خاص بين الفنادق والمحطات والمطاعم ومراكز التسوق والمعالم والفعاليات والاجتماعات." },
        { type: "توصيل من المطار", title: "من مطار كانساي إلى أوساكا أو كيوتو", description: "توصيل من الباب إلى الباب عند الوصول أو المغادرة، بمركبة تناسب عدد المسافرين والأمتعة." },
        { type: "توصيل إلى منتجع", title: "من مطارات هوكايدو إلى منتجعات التزلج", description: "تنقل خاص إلى نيسيكو وغيرها من المنتجعات مع مراعاة ظروف الشتاء ومعدات التزلج والأمتعة." },
        { type: "برنامج مخصص", title: "زيارات طبية وتعليمية وتجارية", description: "تنقل موثوق متعدد المحطات للعيادات والمدارس والمكاتب والمصانع والمعارض والمواعيد الأخرى." },
      ],
    },
    coverage: {
      eyebrow: "مناطق الخدمة",
      title: "من المطارات والمدن الرئيسية إلى المنتجعات والوجهات الريفية.",
      subtitle:
        "يعتمد التوفر على التاريخ والمسار ونوع المركبة. أخبرنا إلى أين ترغب في الذهاب وسنؤكد لك ما يمكن ترتيبه.",
      items: [
        { title: "طوكيو الكبرى", places: "هانيدا · ناريتا · طوكيو · يوكوهاما · كاماكورا · نيكو" },
        { title: "كانساي", places: "مطار كانساي · أوساكا · كيوتو · نارا · كوبي · هيميجي" },
        { title: "فوجي ووسط اليابان", places: "جبل فوجي · هاكونه · كاواجوتشيكو · ناغويا · تاكاياما · كانازاوا" },
        { title: "هوكايدو", places: "نيو تشيتوس · سابورو · نيسيكو · روسوتسو · فورانو · أوتارو" },
        { title: "غرب اليابان وكيوشو", places: "هيروشيما · فوكوكا · ناغاساكي · كوماموتو · كاغوشيما" },
        { title: "أوكيناوا ومناطق مخصصة", places: "ناها · إيشيغاكي · مياكوجيما · المنتجعات والوجهات الريفية" },
      ],
    },
    process: {
      eyebrow: "ترتيب بسيط",
      title: "ثلاث خطوات لترتيب رحلتك.",
      subtitle: "أرسل التفاصيل الأساسية، راجع عرض السعر، ثم أكد فقط عندما يناسبك كل شيء.",
      items: [
        { title: "أرسل الموعد والمسار", description: "شارك عدد المسافرين والأمتعة وأي طلبات خاصة." },
        { title: "استلم عرضاً مخصصاً", description: "نتحقق من التوفر والمسار وخيارات المركبات والتكاليف المعروفة." },
        { title: "أكد رحلتك", description: "بعد الموافقة نرسل نقطة اللقاء وبيانات التواصل الخاصة بيوم الرحلة." },
      ],
    },
    trust: {
      eyebrow: "التزاماتنا في الخدمة",
      title: "تعرف على التفاصيل المرتبة قبل يوم الرحلة.",
      subtitle:
        "نؤكد معك تفاصيل الخدمة الأساسية قبل الحجز، مع دعم بشري عند تغير خططك.",
      notice: "تتولى JP VIP Charter ترتيب خدمات السائق الخاص. نؤكد المشغل والمركبة والمشمولات وشروط الحجز قبل التأكيد.",
      items: [
        { title: "سعر ثابت شامل", description: "تحصل على السعر الإجمالي للمسار المؤكد قبل الحجز، مع توضيح تفاصيل الخدمة المشمولة." },
        { title: "وقت انتظار مجاني", description: "يشمل استقبال المطار 90 دقيقة انتظار مجاني، وتشمل رحلات المغادرة 30 دقيقة." },
        { title: "سائق يتحدث الإنجليزية", description: "يمكنك طلب سائق يتحدث الإنجليزية من دون رسوم إضافية عند ترتيب الرحلة." },
        { title: "تأكيد تفاصيل الاستقبال", description: "نرسل نقطة اللقاء وبيانات التواصل الخاصة بيوم الرحلة قبل موعدها." },
      ],
    },
    faq: {
      eyebrow: "قبل الحجز",
      title: "ما تحتاج معرفته قبل حجز سائق خاص في اليابان.",
      subtitle: "تختلف كل رحلة عن الأخرى. للحصول على إجابة دقيقة، أرسل لنا التاريخ والمسار وعدد المسافرين والأمتعة.",
      items: [
        { question: "هل يمكن ترتيب مسار غير مدرج في الموقع؟", answer: "نعم. المسارات المعروضة أمثلة فقط. يمكننا مراجعة خدمات المطار والمنتجعات والوجهات الريفية والجولات اليومية والرحلات لعدة أيام." },
        { question: "كيف يتم احتساب السعر؟", answer: "يعتمد عرض السعر على المسار والتاريخ ومدة الخدمة المتوقعة وفئة المركبة وعدد المسافرين والأمتعة والمحطات وأي طلبات خاصة." },
        { question: "هل عرض السعر شامل وثابت؟", answer: "نعم. نقدم قبل الحجز سعراً ثابتاً شاملاً للمسار المؤكد، مع توضيح المسار والمركبة ووقت الانتظار المشمول وتفاصيل الخدمة. إذا أضفت محطات أو وقت انتظار بعد التأكيد، نراجع أي تعديل في السعر بصورة منفصلة." },
        { question: "ما مدة الانتظار المجاني المشمولة؟", answer: "يشمل استقبال المطار ما يصل إلى 90 دقيقة انتظار مجاني، وتشمل رحلات المغادرة ما يصل إلى 30 دقيقة. نؤكد تفاصيل اللقاء ومدة الانتظار مع الحجز. إذا تغيرت الرحلة الجوية أو الخطة، تواصل معنا سريعاً لنراجع التعديلات المتاحة." },
        { question: "هل يمكن طلب مقعد طفل؟", answer: "نعم. أخبرنا بعمر الطفل ونوع المقعد المطلوب عند الاستفسار، وسنؤكد التوفر والملاءمة وأي شروط مرتبطة به قبل الحجز." },
        { question: "ما المركبة الأنسب لمجموعتي؟", answer: "أخبرنا بعدد البالغين والأطفال وعدد الحقائب وأحجامها، وسنقترح الفئة المناسبة ونؤكد السعة." },
        { question: "هل يمكن للسائق الانتظار أو التوقف في عدة مواقع؟", answer: "نعم، إذا كان ذلك مدرجاً في الخطة المؤكدة. أخبرنا مسبقاً بوقت الانتظار والمحطات الإضافية لنخطط الجدول والسعر بدقة." },
        { question: "ماذا يحدث إذا تأخرت رحلتي الجوية أو تغير البرنامج؟", answer: "أرسل بيانات الرحلة لخدمات المطار، وتواصل معنا في أقرب وقت عند أي تغيير. سنتحقق من التعديلات المتاحة ونوضح أثرها في الحجز." },
        { question: "هل يمكن ترتيب التنقل للزيارات الطبية أو التعليمية أو التجارية؟", answer: "نعم. يمكننا ترتيب التنقل وفق المواعيد والمسارات متعددة المحطات. تتولى JP VIP Charter خدمات النقل فقط ولا تقدم استشارات طبية أو تعليمية أو مهنية." },
        { question: "ما اللغات التي تدعمونها؟", answer: "يتوفر دعم الاستفسارات بالعربية والإنجليزية والصينية التقليدية. تعتمد لغة السائق على التوفر ونؤكدها بشكل منفصل عند الطلب." },
        { question: "كم ينبغي أن أحجز مسبقاً؟", answer: "كلما كان الحجز أبكر كان أفضل، خصوصاً خلال العطلات وموسم أزهار الكرز وألوان الخريف وموسم التزلج، وللمجموعات الكبيرة والرحلات لعدة أيام." },
      ],
    },
    form: {
      eyebrow: "اطلب عرض سعر مخصص",
      title: "أخبرنا بتفاصيل رحلتك.",
      subtitle: "أرسل تفاصيل الرحلة ليراجع منسق حقيقي المسار والمركبة والتوفر قبل أن تتابع عبر واتساب.",
      notice: "إذا كانت المعلومات متاحة، أضف موقع الاستقبال والوجهة والتاريخ وعدد المسافرين والأمتعة والتوقيت المطلوب ومقاعد الأطفال وأي محطات مخططة.",
      afterSubmit: "بعد الإرسال يفتح واتساب وتكون تفاصيل رحلتك جاهزة. أرسل الرسالة للمتابعة مع المنسق. لا يتم تحصيل أي مبلغ عبر هذا النموذج.",
      privacy: "نستخدم البيانات التي تقدمها لمراجعة طلب الرحلة والرد عليه فقط. يرجى عدم إدخال بيانات بطاقات الدفع أو معلومات طبية حساسة.",
    },
    footer: {
      disclaimer: "خدمات سائق خاص في جميع أنحاء اليابان. نؤكد المسار والمركبة والمشمولات والسعر قبل الحجز.",
    },
  },
};

export default homepageTranslations;
