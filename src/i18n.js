import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      seo: {
        title:
          "Japan Medical Checkup & VIP Medical Concierge | JPVIPMedical",
        description:
          "Premium medical checkup consultation in Japan, including PET-CT cancer screening, executive health screening, family checkups, and VIP medical concierge support.",
      },
      hero: {
        eyebrow: "Japan premium medical concierge",
        title: "Premium Medical Checkups in Japan",
        subtitle:
          "Personalized health screening and VIP medical concierge services for international clients.",
        stats: [
          { value: "3", label: "Languages for international clients" },
          { value: "5", label: "Focused medical consultation services" },
          { value: "24h", label: "WhatsApp first-response goal" },
        ],
      },
      cta: {
        whatsapp: "Consult on WhatsApp",
        whatsappShort: "WhatsApp",
        request: "Request Medical Consultation",
        card: "Ask on WhatsApp",
      },
      services: {
        eyebrow: "Services",
        title: "High-value consultation paths for Japan medical care",
        subtitle:
          "We assist clients in connecting with Japanese medical resources and medical coordination services. We are not a hospital and do not provide diagnosis.",
        items: [
          {
            title: "Executive Precision Checkup",
            description:
              "Comprehensive screening coordination for clients who want a structured, premium health review in Japan.",
            points: [
              "Executive-focused planning",
              "Hospital and package matching",
              "International patient support",
            ],
          },
          {
            title: "PET-CT Cancer Screening",
            description:
              "Consultation support for clients interested in PET-CT and broader cancer screening options in Japan.",
            points: [
              "Screening plan guidance",
              "Clear schedule coordination",
              "Report support options",
            ],
          },
          {
            title: "Family Health Checkup",
            description:
              "Coordinated medical checkup planning for couples, parents, and family members traveling together.",
            points: [
              "Family itinerary planning",
              "Companion support",
              "Flexible checkup matching",
            ],
          },
          {
            title: "Second Medical Opinion",
            description:
              "Consultation coordination for clients seeking access to Japanese medical specialists for review pathways.",
            points: [
              "Document preparation guidance",
              "Specialist matching support",
              "Translation coordination",
            ],
          },
          {
            title: "Anti-aging & Health Management",
            description:
              "Personalized wellness and preventive health program consultation for long-term health management.",
            points: [
              "Preventive health focus",
              "Lifestyle-oriented programs",
              "VIP concierge support",
            ],
          },
        ],
      },
      advantages: {
        eyebrow: "Why Japan",
        title: "Why international clients choose Japan medical services",
        subtitle:
          "Japan is known for advanced equipment, meticulous medical standards, and strong privacy expectations for patients.",
        items: [
          {
            title: "Advanced equipment",
            description:
              "Access pathways may include modern imaging, screening, and specialist facilities.",
          },
          {
            title: "High-precision diagnosis",
            description:
              "Japanese medical institutions are recognized for detailed clinical workflows and careful reporting.",
          },
          {
            title: "International patient support",
            description:
              "We coordinate communication support for English, Traditional Chinese, and Arabic clients.",
          },
          {
            title: "Privacy protection",
            description:
              "Client information is handled with sensitivity and shared only for coordination purposes.",
          },
          {
            title: "High medical standards",
            description:
              "Japan's healthcare environment is built around reliability, process discipline, and patient safety.",
          },
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A clear path from inquiry to Japan arrangements",
        subtitle:
          "The V1 service flow stays simple so clients can quickly understand options and continue on WhatsApp.",
        items: [
          {
            title: "Submit consultation needs",
            description:
              "Share your preferred service, travel timing, and basic requirements.",
          },
          {
            title: "Initial coordinator review",
            description:
              "A medical coordination team reviews your request and confirms key details.",
          },
          {
            title: "Plan recommendation",
            description:
              "You receive suitable hospital or checkup plan options for discussion.",
          },
          {
            title: "Confirm Japan arrangements",
            description:
              "The travel window, required documents, and support needs are aligned.",
          },
          {
            title: "Complete the service",
            description:
              "Clients proceed with the arranged checkup or medical support in Japan.",
          },
        ],
      },
      trust: {
        eyebrow: "Trust and privacy",
        title: "Built for sensitive health inquiries",
        subtitle:
          "We assist clients in connecting with Japanese medical resources and medical coordination services. We do not represent ourselves as a hospital and do not provide medical diagnosis.",
        items: [
          {
            title: "Medical privacy",
            description:
              "Health needs and personal details are treated as sensitive information.",
          },
          {
            title: "Secure data storage",
            description:
              "Lead records are stored in Supabase with row-level security policies.",
          },
          {
            title: "International support",
            description:
              "Coordination can include language support and travel-related planning.",
          },
          {
            title: "Secure payment readiness",
            description:
              "Stripe is planned for secure payment workflows in a later phase.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Common questions before consulting",
        subtitle:
          "These answers are general coordination information. Specific medical advice should come from qualified healthcare professionals.",
        items: [
          {
            question: "Can foreigners receive medical checkups in Japan?",
            answer:
              "Yes. Many institutions support international patients when scheduling, documentation, language, and payment requirements are prepared in advance.",
          },
          {
            question: "How long does a PET-CT check usually take?",
            answer:
              "Timing depends on the facility and package. Many screening visits are planned within one day, while reporting may take additional time.",
          },
          {
            question: "Can reports be provided in Chinese or English?",
            answer:
              "Some facilities offer English reports or translation support. We confirm available report options during coordination.",
          },
          {
            question: "Do I need to speak Japanese?",
            answer:
              "Not necessarily. We can help coordinate medical translation or international patient support when available.",
          },
          {
            question: "Can family members accompany me?",
            answer:
              "In many cases, companions are possible. Facility policies and room limits are confirmed before final arrangements.",
          },
          {
            question: "Can transportation be arranged?",
            answer:
              "VIP support may include airport, hotel, or clinic transfer coordination depending on the package.",
          },
          {
            question: "Can medical interpreters be arranged?",
            answer:
              "Yes, interpreter coordination can be discussed based on language, location, and medical service type.",
          },
          {
            question: "How are fees confirmed?",
            answer:
              "Fees are confirmed after the service type, facility, schedule, and support requirements are reviewed.",
          },
          {
            question: "Can I consult through WhatsApp?",
            answer:
              "Yes. WhatsApp is the primary channel for V1 consultation and follow-up communication.",
          },
          {
            question: "Can cancer screening be arranged?",
            answer:
              "We can assist with consultation pathways for cancer screening options such as PET-CT, subject to facility availability.",
          },
          {
            question: "Are premium checkup packages supported?",
            answer:
              "Yes. Executive and high-end checkup package coordination is a core service path.",
          },
          {
            question: "Do you support second medical opinions?",
            answer:
              "We can help coordinate review pathways with appropriate Japanese medical resources when documents and case details are available.",
          },
          {
            question: "How far in advance should I inquire?",
            answer:
              "Earlier is better. Many clients begin consultation several weeks before their preferred travel month.",
          },
          {
            question: "Do I need a visa?",
            answer:
              "Visa requirements depend on your passport, travel purpose, and length of stay. We can discuss general preparation, but final visa advice should come from official sources.",
          },
          {
            question: "Can arrangements be made for multiple family members?",
            answer:
              "Yes. Please share the number of family members, ages, preferred month, and service interests.",
          },
        ],
      },
      form: {
        eyebrow: "Consultation form",
        title: "Submit your request and continue on WhatsApp",
        subtitle:
          "Share basic details so the coordinator can understand your needs before the WhatsApp conversation starts.",
        notice:
          "Please avoid sending urgent medical emergencies through this form. This website supports consultation and coordination only.",
        fields: {
          name: "Name",
          country: "Country or region",
          whatsapp: "WhatsApp number",
          month: "Preferred month in Japan",
          service: "Service type",
          message: "Message",
        },
        servicePlaceholder: "Select a service",
        submit: "Submit & Consult on WhatsApp",
        sending: "Submitting your request...",
        errors: {
          name: "Please enter your name.",
          country: "Please enter your country or region.",
          whatsapp: "Please enter a valid WhatsApp number.",
          month: "Please select your preferred month.",
          service: "Please select a service type.",
          message: "Message must be under 1000 characters.",
          spam: "Submission could not be accepted. Please try again.",
          supabase: "Supabase is not configured yet.",
          submit: "Submission failed. Please try again or contact us on WhatsApp.",
        },
      },
      footer: {
        disclaimer:
          "Consultation and coordination service only. Not a hospital or online diagnosis platform.",
      },
    },
  },
  "zh-hk": {
    translation: {
      seo: {
        title: "日本高端體檢與醫療禮賓諮詢 | JPVIPMedical",
        description:
          "日本高端體檢諮詢服務，協助海外客戶了解 PET-CT 癌症篩查、東京精密體檢、家庭健康檢查及 VIP 醫療禮賓支援。",
      },
      hero: {
        eyebrow: "日本高端醫療禮賓諮詢",
        title: "日本高端精密體檢諮詢",
        subtitle:
          "為國際客戶提供個人化健康篩查諮詢與 VIP 日本醫療資源對接支援。",
        stats: [
          { value: "3", label: "支援國際客戶語言" },
          { value: "5", label: "核心醫療諮詢服務" },
          { value: "24h", label: "WhatsApp 初步回覆目標" },
        ],
      },
      cta: {
        whatsapp: "通過 WhatsApp 諮詢",
        whatsappShort: "WhatsApp",
        request: "提交醫療諮詢需求",
        card: "WhatsApp 諮詢",
      },
      services: {
        eyebrow: "服務項目",
        title: "面向赴日醫療需求的高價值諮詢方案",
        subtitle:
          "我們協助客戶對接日本醫療資源與醫療協調服務。我們不是醫院，亦不提供醫療診斷。",
        items: [
          {
            title: "高端精密體檢",
            description:
              "為希望在日本進行全面健康評估的客戶，協助規劃高端體檢方案。",
            points: ["高端客戶需求規劃", "醫院與套餐匹配", "國際患者支援"],
          },
          {
            title: "PET-CT 癌症篩查",
            description:
              "協助有 PET-CT 與癌症篩查需求的客戶了解日本可選方案與安排流程。",
            points: ["篩查方案諮詢", "清晰行程協調", "報告支援選項"],
          },
          {
            title: "家族健康體檢",
            description:
              "為夫妻、父母及家庭成員共同赴日體檢提供協調與行程支援。",
            points: ["家庭行程規劃", "陪同需求支援", "彈性體檢匹配"],
          },
          {
            title: "第二醫療意見諮詢",
            description:
              "協助有需要的客戶對接日本醫療專家或相關醫療資源作進一步評估路徑。",
            points: ["資料準備指引", "專科資源匹配", "醫療翻譯協調"],
          },
          {
            title: "抗衰與健康管理項目",
            description:
              "針對長期健康管理與預防醫學需求，協助了解合適的日本健康管理方案。",
            points: ["預防健康導向", "生活方式管理", "VIP 禮賓支援"],
          },
        ],
      },
      advantages: {
        eyebrow: "為何選擇日本",
        title: "國際客戶選擇日本醫療服務的原因",
        subtitle:
          "日本以先進設備、嚴謹流程及對患者隱私的重視而受到國際客戶關注。",
        items: [
          {
            title: "先進醫療設備",
            description: "可協助了解現代影像、篩查及專科設施的相關資源。",
          },
          {
            title: "高精度診斷",
            description: "日本醫療機構以細緻流程與嚴謹報告標準見稱。",
          },
          {
            title: "國際患者支援",
            description: "可為英文、繁體中文及阿拉伯語客戶協調溝通支援。",
          },
          {
            title: "隱私保護",
            description: "客戶資料將以敏感資訊處理，僅為協調目的使用。",
          },
          {
            title: "高標準醫療體系",
            description: "日本醫療環境重視可靠性、流程紀律與患者安全。",
          },
        ],
      },
      process: {
        eyebrow: "服務流程",
        title: "由諮詢到赴日安排的清晰流程",
        subtitle:
          "V1 流程保持簡潔，讓客戶快速了解方向並轉入 WhatsApp 溝通。",
        items: [
          {
            title: "提交諮詢需求",
            description: "提供服務意向、預計赴日時間及基本需求。",
          },
          {
            title: "醫療協調初步評估",
            description: "醫療協調人員了解需求並確認關鍵資訊。",
          },
          {
            title: "推薦醫院或體檢方案",
            description: "根據需求提供合適醫院或體檢方案供進一步討論。",
          },
          {
            title: "確認赴日安排",
            description: "協調行程窗口、所需資料及語言支援安排。",
          },
          {
            title: "完成體檢或醫療服務",
            description: "客戶按確認安排在日本完成相關服務。",
          },
        ],
      },
      trust: {
        eyebrow: "信任與隱私",
        title: "為敏感健康需求而設計",
        subtitle:
          "我們協助客戶對接日本醫療資源與醫療協調服務。我們不聲稱自己是醫院，亦不提供醫療診斷。",
        items: [
          {
            title: "醫療隱私保護",
            description: "健康需求與個人資料均作敏感資訊處理。",
          },
          {
            title: "資料安全存儲",
            description: "線索資料儲存於 Supabase，並配合 RLS 權限策略。",
          },
          {
            title: "國際患者支援",
            description: "可協調語言支援、赴日行程及相關準備事項。",
          },
          {
            title: "安全支付準備",
            description: "Stripe 安全支付流程將於後續階段加入。",
          },
        ],
      },
      faq: {
        eyebrow: "常見問題",
        title: "諮詢前常見問題",
        subtitle:
          "以下為一般協調資訊，具體醫療建議應由合資格醫療專業人士提供。",
        items: [
          {
            question: "外國人可以在日本做體檢嗎？",
            answer:
              "可以。許多機構可接待國際患者，但需要提前準備預約、文件、語言及付款安排。",
          },
          {
            question: "PET-CT 檢查通常需要多久？",
            answer:
              "視乎設施及套餐而定。部分篩查可安排於一天內完成，報告時間則可能另行計算。",
          },
          {
            question: "是否可以提供中文或英文報告？",
            answer:
              "部分機構可提供英文報告或翻譯支援，我們會在協調時確認可用選項。",
          },
          {
            question: "是否需要會日語？",
            answer:
              "不一定。可按需要協調醫療翻譯或國際患者支援。",
          },
          {
            question: "家屬可以陪同嗎？",
            answer:
              "多數情況可討論陪同安排，具體取決於機構政策及場地限制。",
          },
          {
            question: "是否可以安排接送服務？",
            answer:
              "視乎套餐與地點，可協調機場、酒店或醫療機構接送。",
          },
          {
            question: "是否可以安排醫療翻譯？",
            answer:
              "可以討論醫療翻譯安排，需視乎語言、地點及服務類型。",
          },
          {
            question: "費用如何確認？",
            answer:
              "費用需在確認服務類型、機構、時間及支援需求後再作核實。",
          },
          {
            question: "是否可以通過 WhatsApp 諮詢？",
            answer:
              "可以。WhatsApp 是 V1 版本的主要諮詢與跟進渠道。",
          },
          {
            question: "是否可以預約癌症篩查？",
            answer:
              "我們可協助了解 PET-CT 等癌症篩查方案的諮詢路徑，實際安排視機構可用情況而定。",
          },
          {
            question: "是否支援高端體檢套餐？",
            answer:
              "支援。高端及行政級體檢套餐是核心服務方向之一。",
          },
          {
            question: "是否支援第二診療意見？",
            answer:
              "可協助在資料齊備後對接合適的日本醫療資源作進一步評估路徑。",
          },
          {
            question: "預約需要提前多久？",
            answer:
              "建議越早越好，許多客戶會於預計赴日前數週開始諮詢。",
          },
          {
            question: "是否需要簽證？",
            answer:
              "簽證要求取決於護照、赴日目的及停留時間，最終資訊應以官方渠道為準。",
          },
          {
            question: "是否可以為家庭成員一起安排？",
            answer:
              "可以。請提供家庭成員人數、年齡、預計月份及感興趣服務。",
          },
        ],
      },
      form: {
        eyebrow: "線索表單",
        title: "提交需求並通過 WhatsApp 繼續諮詢",
        subtitle:
          "提供基本資料後，協調人員可在 WhatsApp 溝通前更快了解您的需求。",
        notice:
          "請勿透過此表單提交緊急醫療情況。本網站只提供諮詢與協調支援。",
        fields: {
          name: "姓名",
          country: "國家或地區",
          whatsapp: "WhatsApp 號碼",
          month: "預計赴日月份",
          service: "服務類型",
          message: "留言內容",
        },
        servicePlaceholder: "選擇服務",
        submit: "提交並通過 WhatsApp 諮詢",
        sending: "正在提交您的需求...",
        errors: {
          name: "請輸入姓名。",
          country: "請輸入國家或地區。",
          whatsapp: "請輸入有效的 WhatsApp 號碼。",
          month: "請選擇預計月份。",
          service: "請選擇服務類型。",
          message: "留言不可超過 1000 字。",
          spam: "提交未能接受，請稍後再試。",
          supabase: "尚未設定 Supabase。",
          submit: "提交失敗，請稍後再試或直接通過 WhatsApp 聯絡。",
        },
      },
      footer: {
        disclaimer: "僅提供諮詢與協調服務。不是醫院，亦不是線上診療平台。",
      },
    },
  },
  ar: {
    translation: {
      seo: {
        title: "فحوصات طبية راقية في اليابان | JPVIPMedical",
        description:
          "استشارات فحوصات طبية راقية في اليابان، تشمل PET-CT، فحص السرطان، فحوصات تنفيذية، وخدمات تنسيق طبي لكبار العملاء الدوليين.",
      },
      hero: {
        eyebrow: "خدمة تنسيق طبي راقية في اليابان",
        title: "فحوصات طبية راقية في اليابان",
        subtitle:
          "استشارات فحص صحي شخصية وخدمات تنسيق طبي لكبار العملاء الدوليين.",
        stats: [
          { value: "3", label: "لغات لدعم العملاء الدوليين" },
          { value: "5", label: "مسارات استشارة طبية مركزة" },
          { value: "24h", label: "هدف الرد الأول عبر واتساب" },
        ],
      },
      cta: {
        whatsapp: "استشر عبر واتساب",
        whatsappShort: "واتساب",
        request: "طلب استشارة طبية",
        card: "اسأل عبر واتساب",
      },
      services: {
        eyebrow: "الخدمات",
        title: "مسارات استشارة عالية القيمة للرعاية الطبية في اليابان",
        subtitle:
          "نساعد العملاء على التواصل مع الموارد الطبية وخدمات التنسيق الطبي في اليابان. لسنا مستشفى ولا نقدم تشخيصا طبيا.",
        items: [
          {
            title: "فحص طبي تنفيذي دقيق",
            description:
              "تنسيق فحوصات شاملة للعملاء الذين يرغبون في تقييم صحي راق ومنظم في اليابان.",
            points: ["تخطيط للمديرين وكبار العملاء", "مطابقة المستشفى والباقة", "دعم المرضى الدوليين"],
          },
          {
            title: "فحص السرطان PET-CT",
            description:
              "دعم استشاري للعملاء المهتمين بفحوصات PET-CT وخيارات فحص السرطان في اليابان.",
            points: ["إرشاد حول خطة الفحص", "تنسيق جدول واضح", "خيارات دعم التقارير"],
          },
          {
            title: "فحص صحي للعائلة",
            description:
              "تخطيط منسق للأزواج والوالدين وأفراد العائلة الذين يسافرون معا إلى اليابان.",
            points: ["تخطيط برنامج العائلة", "دعم المرافقين", "مطابقة مرنة للفحوصات"],
          },
          {
            title: "استشارة رأي طبي ثان",
            description:
              "تنسيق مسارات مراجعة للعملاء الذين يرغبون في الوصول إلى موارد طبية متخصصة في اليابان.",
            points: ["إرشاد لتحضير الوثائق", "دعم مطابقة التخصص", "تنسيق الترجمة الطبية"],
          },
          {
            title: "مكافحة الشيخوخة وإدارة الصحة",
            description:
              "استشارات حول برامج الوقاية وإدارة الصحة طويلة الأمد في اليابان.",
            points: ["تركيز على الوقاية", "برامج مرتبطة بنمط الحياة", "دعم VIP"],
          },
        ],
      },
      advantages: {
        eyebrow: "لماذا اليابان",
        title: "لماذا يختار العملاء الدوليون الخدمات الطبية في اليابان",
        subtitle:
          "تشتهر اليابان بالمعدات المتقدمة، ودقة الإجراءات، والاهتمام العالي بخصوصية المرضى.",
        items: [
          {
            title: "معدات طبية متقدمة",
            description:
              "قد تشمل مسارات الوصول مرافق تصوير وفحص وتخصص حديثة.",
          },
          {
            title: "دقة عالية في التشخيص",
            description:
              "تعرف المؤسسات الطبية اليابانية بسير عمل دقيق وتقارير مفصلة.",
          },
          {
            title: "دعم المرضى الدوليين",
            description:
              "ننسق دعما للتواصل بالإنجليزية والصينية التقليدية والعربية.",
          },
          {
            title: "حماية الخصوصية",
            description:
              "يتم التعامل مع معلومات العميل بحساسية ولا تستخدم إلا لأغراض التنسيق.",
          },
          {
            title: "نظام طبي عالي المعايير",
            description:
              "بيئة الرعاية في اليابان مبنية على الموثوقية والانضباط وسلامة المرضى.",
          },
        ],
      },
      process: {
        eyebrow: "الخطوات",
        title: "مسار واضح من الاستفسار إلى ترتيبات اليابان",
        subtitle:
          "يبقى مسار V1 بسيطا حتى يفهم العميل الخيارات بسرعة ويتابع عبر واتساب.",
        items: [
          {
            title: "إرسال طلب الاستشارة",
            description: "شارك نوع الخدمة المفضل وموعد السفر المتوقع والمتطلبات الأساسية.",
          },
          {
            title: "مراجعة أولية من المنسق",
            description: "يقوم فريق التنسيق الطبي بمراجعة الطلب وتأكيد التفاصيل الرئيسية.",
          },
          {
            title: "توصية بالخطة",
            description: "تحصل على خيارات مناسبة للمستشفى أو باقة الفحص للمناقشة.",
          },
          {
            title: "تأكيد ترتيبات السفر",
            description: "يتم تنسيق فترة السفر والوثائق المطلوبة واحتياجات الدعم.",
          },
          {
            title: "إكمال الخدمة",
            description: "يتابع العميل الفحص أو الدعم الطبي المرتب له في اليابان.",
          },
        ],
      },
      trust: {
        eyebrow: "الثقة والخصوصية",
        title: "مصمم للاستفسارات الصحية الحساسة",
        subtitle:
          "نساعد العملاء على التواصل مع الموارد الطبية وخدمات التنسيق الطبي في اليابان. لا نقدم أنفسنا كمستشفى ولا نقدم تشخيصا طبيا.",
        items: [
          {
            title: "خصوصية طبية",
            description: "تعامل الاحتياجات الصحية والتفاصيل الشخصية كمعلومات حساسة.",
          },
          {
            title: "تخزين آمن للبيانات",
            description: "تخزن بيانات العملاء في Supabase مع سياسات أمان RLS.",
          },
          {
            title: "دعم دولي",
            description: "يمكن أن يشمل التنسيق دعما لغويا وتخطيطا للسفر.",
          },
          {
            title: "جاهزية دفع آمن",
            description: "سيتم إضافة Stripe لاحقا لمسارات الدفع الآمنة في مرحلة أخرى.",
          },
        ],
      },
      faq: {
        eyebrow: "الأسئلة الشائعة",
        title: "أسئلة شائعة قبل الاستشارة",
        subtitle:
          "هذه معلومات عامة للتنسيق. يجب أن تأتي النصائح الطبية المحددة من مختصين مؤهلين.",
        items: [
          {
            question: "هل يمكن للأجانب إجراء فحوصات طبية في اليابان؟",
            answer:
              "نعم. تدعم العديد من المؤسسات المرضى الدوليين عند تجهيز الموعد والوثائق واللغة والدفع مسبقا.",
          },
          {
            question: "كم يستغرق فحص PET-CT عادة؟",
            answer:
              "يعتمد ذلك على المنشأة والباقة. قد يتم التخطيط لكثير من الزيارات خلال يوم واحد، بينما يحتاج التقرير وقتا إضافيا.",
          },
          {
            question: "هل يمكن توفير التقارير بالصينية أو الإنجليزية؟",
            answer:
              "توفر بعض المنشآت تقارير باللغة الإنجليزية أو دعما للترجمة. نؤكد الخيارات أثناء التنسيق.",
          },
          {
            question: "هل أحتاج إلى التحدث باليابانية؟",
            answer:
              "ليس بالضرورة. يمكننا تنسيق الترجمة الطبية أو دعم المرضى الدوليين عند توفره.",
          },
          {
            question: "هل يمكن للعائلة مرافقتي؟",
            answer:
              "في حالات كثيرة يمكن ذلك. يتم تأكيد سياسات المنشأة وحدود المكان قبل الترتيب النهائي.",
          },
          {
            question: "هل يمكن ترتيب خدمة النقل؟",
            answer:
              "قد يشمل دعم VIP تنسيق النقل من المطار أو الفندق أو العيادة حسب الباقة.",
          },
          {
            question: "هل يمكن ترتيب مترجم طبي؟",
            answer:
              "نعم، يمكن مناقشة تنسيق مترجم حسب اللغة والموقع ونوع الخدمة الطبية.",
          },
          {
            question: "كيف يتم تأكيد الرسوم؟",
            answer:
              "يتم تأكيد الرسوم بعد مراجعة نوع الخدمة والمنشأة والجدول واحتياجات الدعم.",
          },
          {
            question: "هل يمكنني الاستشارة عبر واتساب؟",
            answer:
              "نعم. واتساب هو القناة الأساسية للاستشارة والمتابعة في نسخة V1.",
          },
          {
            question: "هل يمكن ترتيب فحص السرطان؟",
            answer:
              "يمكننا المساعدة في مسارات الاستشارة لفحوصات السرطان مثل PET-CT، حسب توفر المنشأة.",
          },
          {
            question: "هل تدعمون باقات الفحص الطبي الراقية؟",
            answer:
              "نعم. تنسيق الفحوصات التنفيذية والراقية هو مسار خدمة أساسي.",
          },
          {
            question: "هل تدعمون الرأي الطبي الثاني؟",
            answer:
              "يمكننا تنسيق مسارات مراجعة مع موارد طبية يابانية مناسبة عند توفر الوثائق والتفاصيل.",
          },
          {
            question: "كم يلزم الحجز مسبقا؟",
            answer:
              "كلما كان أبكر كان أفضل. يبدأ كثير من العملاء الاستشارة قبل شهر السفر المفضل بعدة أسابيع.",
          },
          {
            question: "هل أحتاج إلى تأشيرة؟",
            answer:
              "تعتمد متطلبات التأشيرة على جواز السفر والغرض من السفر ومدة الإقامة. يجب تأكيد التفاصيل من المصادر الرسمية.",
          },
          {
            question: "هل يمكن ترتيب الخدمة لعدة أفراد من العائلة؟",
            answer:
              "نعم. يرجى مشاركة عدد أفراد العائلة والأعمار والشهر المفضل ونوع الخدمة المطلوبة.",
          },
        ],
      },
      form: {
        eyebrow: "نموذج الاستشارة",
        title: "أرسل طلبك وتابع عبر واتساب",
        subtitle:
          "شارك التفاصيل الأساسية حتى يفهم المنسق احتياجاتك قبل بدء محادثة واتساب.",
        notice:
          "يرجى عدم إرسال الحالات الطبية الطارئة عبر هذا النموذج. الموقع يدعم الاستشارة والتنسيق فقط.",
        fields: {
          name: "الاسم",
          country: "الدولة أو المنطقة",
          whatsapp: "رقم واتساب",
          month: "الشهر المتوقع في اليابان",
          service: "نوع الخدمة",
          message: "الرسالة",
        },
        servicePlaceholder: "اختر خدمة",
        submit: "إرسال واستشارة عبر واتساب",
        sending: "جار إرسال طلبك...",
        errors: {
          name: "يرجى إدخال الاسم.",
          country: "يرجى إدخال الدولة أو المنطقة.",
          whatsapp: "يرجى إدخال رقم واتساب صحيح.",
          month: "يرجى اختيار الشهر المفضل.",
          service: "يرجى اختيار نوع الخدمة.",
          message: "يجب ألا تتجاوز الرسالة 1000 حرف.",
          spam: "تعذر قبول الطلب. يرجى المحاولة مرة أخرى.",
          supabase: "لم يتم إعداد Supabase بعد.",
          submit: "فشل الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.",
        },
      },
      footer: {
        disclaimer:
          "خدمة استشارة وتنسيق فقط. لسنا مستشفى أو منصة تشخيص عبر الإنترنت.",
      },
    },
  },
};

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
