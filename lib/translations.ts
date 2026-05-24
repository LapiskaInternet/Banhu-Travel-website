"use client";

export type Language = 
  | "en" 
  | "st" 
  | "nso" 
  | "ts" 
  | "zh" 
  | "ru" 
  | "hi" 
  | "fr" 
  | "de";

export const languages: { code: Language; label: string; shortLabel: string }[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "st", label: "SeSotho", shortLabel: "SeSo" },
  { code: "nso", label: "Sepedi", shortLabel: "Pedi" },
  { code: "ts", label: "Xitsonga", shortLabel: "Tsonga" },
  { code: "zh", label: "中文 (Chinese)", shortLabel: "中文" },
  { code: "ru", label: "Русский (Russian)", shortLabel: "РУС" },
  { code: "hi", label: "हिन्दी (Hindi)", shortLabel: "हिन्दी" },
  { code: "fr", label: "Français (French)", shortLabel: "FR" },
  { code: "de", label: "Deutsch (German)", shortLabel: "DE" },
];

export const translations: Record<Language, {
  nav: {
    home: string;
    tours: string;
    community: string;
    bookNow: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    stats: {
      tours: string;
      guests: string;
      rating: string;
    };
  };
  tours: {
    title: string;
    subtitle: string;
    bookTour: string;
    comingSoon: string;
    duration: string;
  };
  community: {
    title: string;
    subtitle: string;
    learnerGuide: {
      title: string;
      description: string;
    };
    partnership: {
      title: string;
      description: string;
    };
    economic: {
      title: string;
      description: string;
    };
  };
  partners: {
    title: string;
    subtitle: string;
  };
  booking: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      tourSelection: string;
      selectTour: string;
      preferredDate: string;
      guests: string;
      specialRequests: string;
      submit: string;
      submitting: string;
      paymentNote: string;
    };
    success: {
      title: string;
      message: string;
      another: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    hoursValue: string;
    whatsapp: string;
  };
  footer: {
    quickLinks: string;
    compliance: string;
    rights: string;
    tagline: string;
  };
}> = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      community: "Community",
      bookNow: "Book Now",
      contact: "Contact",
    },
    hero: {
      title: "Experience the Heart of Mpumalanga",
      subtitle: "Guided tours through Mariepskop, Motsepadi, and the Acornhoek region",
      cta: "Explore Tours",
      ctaSecondary: "Contact Us",
    },
    about: {
      title: "About Banhu Travel & Tours",
      description: "Banhu Travel & Tours offers authentic bushveld experiences in the heart of Mpumalanga. We are a community-based tourism operation dedicated to showcasing the natural beauty, rich culture, and warm hospitality of the Acornhoek region.",
      stats: {
        tours: "Tours Offered",
        guests: "Happy Guests",
        rating: "Star Rating",
      },
    },
    tours: {
      title: "Our Tours",
      subtitle: "Discover Mpumalanga's hidden gems",
      bookTour: "Book This Tour",
      comingSoon: "Coming Soon",
      duration: "Duration",
    },
    community: {
      title: "Community First",
      subtitle: "Every tour supports local development",
      learnerGuide: {
        title: "Learner Guide Programme",
        description: "We train and mentor aspiring guides from local villages, creating real career opportunities in tourism.",
      },
      partnership: {
        title: "Local Partnerships",
        description: "Our collaborations with local businesses and schools provide hands-on training placements for learner guides.",
      },
      economic: {
        title: "Economic Impact",
        description: "Tourism revenue flows directly back into local communities, supporting families, education, and small business development.",
      },
    },
    partners: {
      title: "Strategic Partners",
      subtitle: "Together we build a stronger community",
    },
    booking: {
      title: "Book Your Adventure",
      subtitle: "Fill in the form below and we'll confirm your booking via WhatsApp",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        tourSelection: "Tour Selection",
        selectTour: "Select a tour",
        preferredDate: "Preferred Date",
        guests: "Number of Guests",
        specialRequests: "Special Requests",
        submit: "Submit Booking Request",
        submitting: "Submitting...",
        paymentNote: "Payment is via EFT. We'll send banking details after confirmation.",
      },
      success: {
        title: "Booking Request Received",
        message: "Thank you for your booking request! We'll confirm your adventure via WhatsApp shortly.",
        another: "Submit Another Booking",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Hours",
      hoursValue: "Mon-Sat: 8am - 5pm",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      quickLinks: "Quick Links",
      compliance: "Compliance",
      rights: "All rights reserved.",
      tagline: "Authentic bushveld experiences in the heart of Mpumalanga",
    },
  },
  st: {
    nav: {
      home: "Lehae",
      tours: "Maeto",
      community: "Sechaba",
      bookNow: "Beha Joale",
      contact: "Ikopanye",
    },
    hero: {
      title: "Fumana Pelo ea Mpumalanga",
      subtitle: "Maeto a tataisitsoeng ho pholletsa Mariepskop, Motsepadi, le setereke sa Acornhoek",
      cta: "Hlahloba Maeto",
      ctaSecondary: "Ikopanye le Rona",
    },
    about: {
      title: "Ka Banhu Travel & Tours",
      description: "Banhu Travel & Tours e fana ka liphihlelo tsa sebele tsa bushveld pelong ea Mpumalanga. Re mokhatlo oa bohahlauli o thehiloeng sechabeng o ikemiseditseng ho bontsha botle ba tlhaho, setso se ruileng, le kamohelo e futhumetseng ea setereke sa Acornhoek.",
      stats: {
        tours: "Maeto a Fanwang",
        guests: "Baeti ba Thabileng",
        rating: "Linaleli tsa Tlhahlobo",
      },
    },
    tours: {
      title: "Maeto a Rona",
      subtitle: "Fumana mabenyane a patilweng a Mpumalanga",
      bookTour: "Beha Leeto Lena",
      comingSoon: "E Tla Haufi",
      duration: "Nako",
    },
    community: {
      title: "Sechaba Pele",
      subtitle: "Leeto le leng le le leng le tšehetsa ntšetso-pele ea lehae",
      learnerGuide: {
        title: "Lenaneo la Batataisi ba Ithutang",
        description: "Re koetlisa le ho tataisa batataisi ba nang le maikemisetso ho tsoa metseng ea lehae.",
      },
      partnership: {
        title: "Likamano tsa Lehae",
        description: "Tšebelisano-mmoho ea rona le likhoebo tsa lehae le likolo e fana ka koetliso e sebetsang.",
      },
      economic: {
        title: "Phello ea Moruo",
        description: "Chelete ea bohahlauli e khutlela metseng ea lehae, e tšehetsa malapa, thuto, le ntlafatso ea likhoebo.",
      },
    },
    partners: {
      title: "Balekane ba Rona",
      subtitle: "Mmoho re aha sechaba se matla",
    },
    booking: {
      title: "Beha Leeto la Hao",
      subtitle: "Tlatsa foromo e ka tlase mme re tla netefatsa ho beha ha hao ka WhatsApp",
      form: {
        name: "Lebitso le Feletseng",
        email: "Aterese ea Imeile",
        phone: "Nomoro ea Mohala",
        tourSelection: "Khetho ea Leeto",
        selectTour: "Khetha leeto",
        preferredDate: "Letsatsi le Ratehang",
        guests: "Palo ea Baeti",
        specialRequests: "Likopo tse Khethehileng",
        submit: "Romela Kopo ea ho Beha",
        submitting: "E Romela...",
        paymentNote: "Tefo ke ka EFT. Re tla romela lintlha tsa banka ka mor'a netefatso.",
      },
      success: {
        title: "Kopo ea ho Beha e Amohelehile",
        message: "Rea leboha ka kopo ea hao ea ho beha! Re tla netefatsa leeto la hao ka WhatsApp haufi-ufi.",
        another: "Romela Kopo e 'Ngoe",
      },
    },
    contact: {
      title: "Ikopanye le Rona",
      subtitle: "Fumana sehlopha sa rona",
      phone: "Mohala",
      email: "Imeile",
      address: "Aterese",
      hours: "Lihora",
      hoursValue: "Mantaha-Moqebelo: 8am - 5pm",
      whatsapp: "Bua ka WhatsApp",
    },
    footer: {
      quickLinks: "Likhokelo tse Potlakileng",
      compliance: "Tumellano",
      rights: "Litokelo tsohle li bolokiloe.",
      tagline: "Liphihlelo tsa sebele tsa bushveld pelong ea Mpumalanga",
    },
  },
  nso: {
    nav: {
      home: "Gae",
      tours: "Maeto",
      community: "Setšhaba",
      bookNow: "Beha Bjale",
      contact: "Ikgokagantše",
    },
    hero: {
      title: "Itemogele Pelo ya Mpumalanga",
      subtitle: "Maeto a go hlahla ka Mariepskop, Motsepadi, le seleteng sa Acornhoek",
      cta: "Nyakišiša Maeto",
      ctaSecondary: "Ikgokagantše le Rena",
    },
    about: {
      title: "Ka ga Banhu Travel & Tours",
      description: "Banhu Travel & Tours e fa maitemogelo a nnete a bushveld ka gare ga Mpumalanga. Re mokgatlo wa bohahlaudi wo o theilwego setšhabeng wo o ikemišeditšego go bontšha botse bja tlhago, setšo se se humilego, le kamogelo ye borutho ya selete sa Acornhoek.",
      stats: {
        tours: "Maeto a a Fiwago",
        guests: "Baeti ba ba Thabilego",
        rating: "Tekodišišo ya Dinaledi",
      },
    },
    tours: {
      title: "Maeto a Rena",
      subtitle: "Humana mabenyane a a fihlilwego a Mpumalanga",
      bookTour: "Beha Leeto Le",
      comingSoon: "E Tla Kgauswi",
      duration: "Nako",
    },
    community: {
      title: "Setšhaba Pele",
      subtitle: "Leeto le lengwe le le lengwe le thekga tlhabologo ya mo gae",
      learnerGuide: {
        title: "Lenaneo la Bahlahli ba go Ithuta",
        description: "Re hlahlela le go hlahla bahlahli ba go tswa metseng ya mo gae.",
      },
      partnership: {
        title: "Dikamano tša Lehae",
        description: "Tšhomišano ya rena le dikgwebo tša mo gae le dikolo e fa tlhahlo ya go dira.",
      },
      economic: {
        title: "Khuetšo ya Ekonomi",
        description: "Letseno la bohahlaudi le boela metseng ya mo gae, le thekga malapa, thuto, le tlhabologo ya dikgwebo.",
      },
    },
    partners: {
      title: "Bakamani ba Rena",
      subtitle: "Mmogo re aga setšhaba se se tiilego",
    },
    booking: {
      title: "Beha Leeto la Gago",
      subtitle: "Tlatša foromo ye ka fase mme re tla netefatša go beha ga gago ka WhatsApp",
      form: {
        name: "Leina le le Feletšego",
        email: "Aterese ya Imeile",
        phone: "Nomoro ya Mogala",
        tourSelection: "Kgetho ya Leeto",
        selectTour: "Kgetha leeto",
        preferredDate: "Letšatši le le Ratilwego",
        guests: "Palo ya Baeti",
        specialRequests: "Dikgopelo tše di Kgethegilego",
        submit: "Romela Kgopelo ya go Beha",
        submitting: "E Romela...",
        paymentNote: "Tefo ke ka EFT. Re tla romela dintlha tša panka ka morago ga netefatšo.",
      },
      success: {
        title: "Kgopelo ya go Beha e Amogetšwe",
        message: "Re leboga ka kgopelo ya gago ya go beha! Re tla netefatša leeto la gago ka WhatsApp ka pela.",
        another: "Romela Kgopelo ye Nngwe",
      },
    },
    contact: {
      title: "Ikgokagantše le Rena",
      subtitle: "Hwetša sehlopha sa rena",
      phone: "Mogala",
      email: "Imeile",
      address: "Aterese",
      hours: "Diiri",
      hoursValue: "Mošupologo-Mokibelo: 8am - 5pm",
      whatsapp: "Bolela ka WhatsApp",
    },
    footer: {
      quickLinks: "Dikgokagano tše di Potlakilego",
      compliance: "Tumelelano",
      rights: "Ditokelo ka moka di bolokilwe.",
      tagline: "Maitemogelo a nnete a bushveld ka gare ga Mpumalanga",
    },
  },
  ts: {
    nav: {
      home: "Kaya",
      tours: "Maendzo",
      community: "Vaaki",
      bookNow: "Buka Sweswi",
      contact: "Hi Tihlanganise",
    },
    hero: {
      title: "Twanana na Mbilu ya Mpumalanga",
      subtitle: "Maendzo lama kongomisiwaka eka Mariepskop, Motsepadi, na xifundzha xa Acornhoek",
      cta: "Kambisisa Maendzo",
      ctaSecondary: "Hi Tihlanganise na Hina",
    },
    about: {
      title: "Hi tlhelo ra Banhu Travel & Tours",
      description: "Banhu Travel & Tours yi nyika switokombelo swa xiviri swa bushveld eka mbilu ya Mpumalanga. Hi nhlangano wo endlela vaendzi lowu simekiweke eka vaaki lowu tinyiketeke ku kombisa ku saseka ka ntumbuluko, ndhavuko wo fuma, na ku amukeleka ka xifundzha xa Acornhoek.",
      stats: {
        tours: "Maendzo Lama Nyikiwaka",
        guests: "Vaendzi Lava Tsakeke",
        rating: "Xiyenge xa Tinyeleti",
      },
    },
    tours: {
      title: "Maendzo ya Hina",
      subtitle: "Kumana na swilo swa Mpumalanga leswi tsemekiweke",
      bookTour: "Buka Riendzo Leri",
      comingSoon: "Ri Ta Kusuhi",
      duration: "Nkarhi",
    },
    community: {
      title: "Vaaki Ku Sungula",
      subtitle: "Riendzo rin'wana na rin'wana ri seketela nhluvukiso wa kaya",
      learnerGuide: {
        title: "Nongonoko wa Vahlamuseri Lava Dyondzaka",
        description: "Hi dyondzisa na ku hlamusela vahlamuseri lava humaka emitini ya kaya.",
      },
      partnership: {
        title: "Vutirhisani bya Kaya",
        description: "Vutirhisani bya hina na mabindzu ya kaya na swikolo swi nyika ndyondziso ya ku tirha.",
      },
      economic: {
        title: "Nkucetelo wa Ikhonomi",
        description: "Nhundzu wa vaendzi wu tlhelela emitini ya kaya, wu seketela mindyangu, dyondzo, na nhluvukiso wa mabindzu.",
      },
    },
    partners: {
      title: "Vatirhi-sani va Hina",
      subtitle: "Hi vun'we hi aka vaaki lava tiyeke",
    },
    booking: {
      title: "Buka Riendzo ra Wena",
      subtitle: "Tata fomo leyi laha hansi kutani hi ta tiyisisa ku buka ka wena hi WhatsApp",
      form: {
        name: "Vito ro Helela",
        email: "Adirese ya Imeili",
        phone: "Nomboro ya Riqingho",
        tourSelection: "Ku Hlawula Riendzo",
        selectTour: "Hlawula riendzo",
        preferredDate: "Siku leri Rhandziwaka",
        guests: "Nhwalo ya Vaendzi",
        specialRequests: "Swikombelo swo Hlawuleka",
        submit: "Rhumela Xikombelo xa ku Buka",
        submitting: "Yi Rhumela...",
        paymentNote: "Ku hakela hi hi EFT. Hi ta rhumela vuxokoxoko bya banki endzhaku ka ku tiyisisa.",
      },
      success: {
        title: "Xikombelo xa ku Buka Xi Amukeriwile",
        message: "Hi khensa hi xikombelo xa wena xa ku buka! Hi ta tiyisisa riendzo ra wena hi WhatsApp kusuhi.",
        another: "Rhumela Xikombelo Xin'wana",
      },
    },
    contact: {
      title: "Hi Tihlanganise na Hina",
      subtitle: "Kuma ntlawa wa hina",
      phone: "Riqingho",
      email: "Imeili",
      address: "Adirese",
      hours: "Tiawara",
      hoursValue: "Musumbhunuku-Mugqivela: 8am - 5pm",
      whatsapp: "Vulavula hi WhatsApp",
    },
    footer: {
      quickLinks: "Swikhongelo swa Xihatla",
      compliance: "Ku Landzelela Milawu",
      rights: "Timfanelo hinkwato ti hlayisiwile.",
      tagline: "Switokombelo swa xiviri swa bushveld eka mbilu ya Mpumalanga",
    },
  },
  zh: {
    nav: {
      home: "首页",
      tours: "旅游",
      community: "社区",
      bookNow: "立即预订",
      contact: "联系我们",
    },
    hero: {
      title: "体验姆普马兰加的心脏",
      subtitle: "马里普斯科普、莫特塞帕迪和阿科恩胡克地区的导游之旅",
      cta: "探索旅游",
      ctaSecondary: "联系我们",
    },
    about: {
      title: "关于班胡旅游",
      description: "班胡旅游在姆普马兰加的心脏地带提供正宗的丛林体验。我们是一个以社区为基础的旅游运营商，致力于展示阿科恩胡克地区的自然美景、丰富文化和热情好客。",
      stats: {
        tours: "提供的旅游",
        guests: "满意的游客",
        rating: "星级评分",
      },
    },
    tours: {
      title: "我们的旅游",
      subtitle: "发现姆普马兰加的隐藏宝石",
      bookTour: "预订此旅游",
      comingSoon: "即将推出",
      duration: "时长",
    },
    community: {
      title: "社区优先",
      subtitle: "每次旅游都支持当地发展",
      learnerGuide: {
        title: "学徒导游计划",
        description: "我们培训和指导来自当地村庄的有抱负的导游，创造旅游业的真正职业机会。",
      },
      partnership: {
        title: "当地合作伙伴",
        description: "我们与当地企业和学校的合作为学徒导游提供实践培训。",
      },
      economic: {
        title: "经济影响",
        description: "旅游收入直接流回当地社区，支持家庭、教育和小企业发展。",
      },
    },
    partners: {
      title: "战略合作伙伴",
      subtitle: "我们共同建设更强大的社区",
    },
    booking: {
      title: "预订您的冒险",
      subtitle: "填写下面的表格，我们将通过WhatsApp确认您的预订",
      form: {
        name: "全名",
        email: "电子邮件地址",
        phone: "电话号码",
        tourSelection: "选择旅游",
        selectTour: "选择一个旅游",
        preferredDate: "首选日期",
        guests: "游客人数",
        specialRequests: "特殊要求",
        submit: "提交预订请求",
        submitting: "提交中...",
        paymentNote: "付款方式为EFT。确认后我们将发送银行详情。",
      },
      success: {
        title: "预订请求已收到",
        message: "感谢您的预订请求！我们将很快通过WhatsApp确认您的冒险。",
        another: "提交另一个预订",
      },
    },
    contact: {
      title: "联系我们",
      subtitle: "与我们的团队取得联系",
      phone: "电话",
      email: "电子邮件",
      address: "地址",
      hours: "营业时间",
      hoursValue: "周一至周六：上午8点-下午5点",
      whatsapp: "WhatsApp聊天",
    },
    footer: {
      quickLinks: "快速链接",
      compliance: "合规信息",
      rights: "版权所有。",
      tagline: "姆普马兰加心脏地带的正宗丛林体验",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      tours: "Туры",
      community: "Сообщество",
      bookNow: "Забронировать",
      contact: "Контакты",
    },
    hero: {
      title: "Откройте сердце Мпумаланги",
      subtitle: "Экскурсии по Мариепскопу, Мотсепади и региону Акорнхук",
      cta: "Исследовать туры",
      ctaSecondary: "Связаться с нами",
    },
    about: {
      title: "О Banhu Travel & Tours",
      description: "Banhu Travel & Tours предлагает аутентичные впечатления от буша в самом сердце Мпумаланги. Мы — туристическая организация, основанная на сообществе, которая стремится показать природную красоту, богатую культуру и гостеприимство региона Акорнхук.",
      stats: {
        tours: "Предлагаемых туров",
        guests: "Довольных гостей",
        rating: "Звёздный рейтинг",
      },
    },
    tours: {
      title: "Наши туры",
      subtitle: "Откройте скрытые жемчужины Мпумаланги",
      bookTour: "Забронировать тур",
      comingSoon: "Скоро",
      duration: "Длительность",
    },
    community: {
      title: "Сообщество прежде всего",
      subtitle: "Каждый тур поддерживает местное развитие",
      learnerGuide: {
        title: "Программа обучения гидов",
        description: "Мы обучаем и наставляем начинающих гидов из местных деревень, создавая реальные карьерные возможности в туризме.",
      },
      partnership: {
        title: "Местные партнёрства",
        description: "Наше сотрудничество с местным бизнесом и школами обеспечивает практическое обучение.",
      },
      economic: {
        title: "Экономическое влияние",
        description: "Доходы от туризма напрямую возвращаются в местные сообщества, поддерживая семьи, образование и малый бизнес.",
      },
    },
    partners: {
      title: "Стратегические партнёры",
      subtitle: "Вместе мы строим более сильное сообщество",
    },
    booking: {
      title: "Забронируйте приключение",
      subtitle: "Заполните форму ниже, и мы подтвердим бронирование через WhatsApp",
      form: {
        name: "Полное имя",
        email: "Электронная почта",
        phone: "Номер телефона",
        tourSelection: "Выбор тура",
        selectTour: "Выберите тур",
        preferredDate: "Предпочтительная дата",
        guests: "Количество гостей",
        specialRequests: "Особые пожелания",
        submit: "Отправить заявку",
        submitting: "Отправка...",
        paymentNote: "Оплата через EFT. Банковские реквизиты отправим после подтверждения.",
      },
      success: {
        title: "Заявка получена",
        message: "Спасибо за заявку! Мы подтвердим ваше приключение через WhatsApp в ближайшее время.",
        another: "Отправить ещё заявку",
      },
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Свяжитесь с нашей командой",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      hours: "Часы работы",
      hoursValue: "Пн-Сб: 8:00 - 17:00",
      whatsapp: "Написать в WhatsApp",
    },
    footer: {
      quickLinks: "Быстрые ссылки",
      compliance: "Соответствие",
      rights: "Все права защищены.",
      tagline: "Аутентичные впечатления от буша в сердце Мпумаланги",
    },
  },
  hi: {
    nav: {
      home: "होम",
      tours: "पर्यटन",
      community: "समुदाय",
      bookNow: "अभी बुक करें",
      contact: "संपर्क",
    },
    hero: {
      title: "म्पुमालंगा का दिल अनुभव करें",
      subtitle: "मारीप्सकोप, मोत्सेपादी और अकोर्नहोक क्षेत्र के गाइडेड टूर",
      cta: "पर्यटन देखें",
      ctaSecondary: "संपर्क करें",
    },
    about: {
      title: "बंहु ट्रैवल एंड टूर्स के बारे में",
      description: "बंहु ट्रैवल एंड टूर्स म्पुमालंगा के केंद्र में प्रामाणिक बुशवेल्ड अनुभव प्रदान करता है। हम एक समुदाय-आधारित पर्यटन संगठन हैं जो अकोर्नहोक क्षेत्र की प्राकृतिक सुंदरता, समृद्ध संस्कृति और गर्म आतिथ्य प्रदर्शित करने के लिए समर्पित है।",
      stats: {
        tours: "पर्यटन उपलब्ध",
        guests: "खुश मेहमान",
        rating: "स्टार रेटिंग",
      },
    },
    tours: {
      title: "हमारे पर्यटन",
      subtitle: "म्पुमालंगा के छिपे हुए रत्न खोजें",
      bookTour: "यह पर्यटन बुक करें",
      comingSoon: "जल्द आ रहा है",
      duration: "अवधि",
    },
    community: {
      title: "समुदाय पहले",
      subtitle: "हर पर्यटन स्थानीय विकास का समर्थन करता है",
      learnerGuide: {
        title: "शिक्षार्थी गाइड कार्यक्रम",
        description: "हम स्थानीय गांवों से इच्छुक गाइडों को प्रशिक्षित और मार्गदर्शन करते हैं, पर्यटन में वास्तविक करियर के अवसर पैदा करते हैं।",
      },
      partnership: {
        title: "स्थानीय साझेदारी",
        description: "स्थानीय व्यवसायों और स्कूलों के साथ हमारा सहयोग व्यावहारिक प्रशिक्षण प्रदान करता है।",
      },
      economic: {
        title: "आर्थिक प्रभाव",
        description: "पर्यटन राजस्व सीधे स्थानीय समुदायों में वापस जाता है, परिवारों, शिक्षा और छोटे व्यवसाय विकास का समर्थन करता है।",
      },
    },
    partners: {
      title: "रणनीतिक भागीदार",
      subtitle: "मिलकर हम एक मजबूत समुदाय बनाते हैं",
    },
    booking: {
      title: "अपना साहसिक कार्य बुक करें",
      subtitle: "नीचे फॉर्म भरें और हम WhatsApp के माध्यम से आपकी बुकिंग की पुष्टि करेंगे",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        tourSelection: "पर्यटन चयन",
        selectTour: "एक पर्यटन चुनें",
        preferredDate: "पसंदीदा तारीख",
        guests: "मेहमानों की संख्या",
        specialRequests: "विशेष अनुरोध",
        submit: "बुकिंग अनुरोध सबमिट करें",
        submitting: "सबमिट हो रहा है...",
        paymentNote: "भुगतान EFT के माध्यम से है। पुष्टि के बाद हम बैंक विवरण भेजेंगे।",
      },
      success: {
        title: "बुकिंग अनुरोध प्राप्त",
        message: "आपके बुकिंग अनुरोध के लिए धन्यवाद! हम जल्द ही WhatsApp के माध्यम से आपके साहसिक कार्य की पुष्टि करेंगे।",
        another: "एक और बुकिंग सबमिट करें",
      },
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "हमारी टीम से संपर्क करें",
      phone: "फोन",
      email: "ईमेल",
      address: "पता",
      hours: "समय",
      hoursValue: "सोम-शनि: सुबह 8 - शाम 5",
      whatsapp: "WhatsApp पर चैट करें",
    },
    footer: {
      quickLinks: "त्वरित लिंक",
      compliance: "अनुपालन",
      rights: "सर्वाधिकार सुरक्षित।",
      tagline: "म्पुमालंगा के केंद्र में प्रामाणिक बुशवेल्ड अनुभव",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      tours: "Circuits",
      community: "Communauté",
      bookNow: "Réserver",
      contact: "Contact",
    },
    hero: {
      title: "Découvrez le cœur du Mpumalanga",
      subtitle: "Visites guidées à travers Mariepskop, Motsepadi et la région d'Acornhoek",
      cta: "Explorer les circuits",
      ctaSecondary: "Nous contacter",
    },
    about: {
      title: "À propos de Banhu Travel & Tours",
      description: "Banhu Travel & Tours offre des expériences authentiques de bush au cœur du Mpumalanga. Nous sommes un opérateur touristique communautaire dédié à présenter la beauté naturelle, la culture riche et l'hospitalité chaleureuse de la région d'Acornhoek.",
      stats: {
        tours: "Circuits proposés",
        guests: "Clients satisfaits",
        rating: "Note étoilée",
      },
    },
    tours: {
      title: "Nos circuits",
      subtitle: "Découvrez les joyaux cachés du Mpumalanga",
      bookTour: "Réserver ce circuit",
      comingSoon: "Bientôt disponible",
      duration: "Durée",
    },
    community: {
      title: "La communauté d'abord",
      subtitle: "Chaque circuit soutient le développement local",
      learnerGuide: {
        title: "Programme de guides apprentis",
        description: "Nous formons et encadrons des guides en herbe des villages locaux, créant de vraies opportunités de carrière dans le tourisme.",
      },
      partnership: {
        title: "Partenariats locaux",
        description: "Notre collaboration avec les entreprises et écoles locales offre une formation pratique.",
      },
      economic: {
        title: "Impact économique",
        description: "Les revenus du tourisme reviennent directement aux communautés locales, soutenant les familles, l'éducation et les petites entreprises.",
      },
    },
    partners: {
      title: "Partenaires stratégiques",
      subtitle: "Ensemble, nous construisons une communauté plus forte",
    },
    booking: {
      title: "Réservez votre aventure",
      subtitle: "Remplissez le formulaire ci-dessous et nous confirmerons votre réservation via WhatsApp",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        tourSelection: "Sélection du circuit",
        selectTour: "Sélectionnez un circuit",
        preferredDate: "Date préférée",
        guests: "Nombre de personnes",
        specialRequests: "Demandes spéciales",
        submit: "Envoyer la demande",
        submitting: "Envoi en cours...",
        paymentNote: "Paiement par EFT. Nous enverrons les coordonnées bancaires après confirmation.",
      },
      success: {
        title: "Demande de réservation reçue",
        message: "Merci pour votre demande de réservation ! Nous confirmerons votre aventure via WhatsApp sous peu.",
        another: "Soumettre une autre demande",
      },
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Contactez notre équipe",
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
      hours: "Horaires",
      hoursValue: "Lun-Sam : 8h - 17h",
      whatsapp: "Discuter sur WhatsApp",
    },
    footer: {
      quickLinks: "Liens rapides",
      compliance: "Conformité",
      rights: "Tous droits réservés.",
      tagline: "Expériences authentiques de bush au cœur du Mpumalanga",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      tours: "Touren",
      community: "Gemeinschaft",
      bookNow: "Jetzt buchen",
      contact: "Kontakt",
    },
    hero: {
      title: "Erleben Sie das Herz von Mpumalanga",
      subtitle: "Geführte Touren durch Mariepskop, Motsepadi und die Region Acornhoek",
      cta: "Touren erkunden",
      ctaSecondary: "Kontaktieren Sie uns",
    },
    about: {
      title: "Über Banhu Travel & Tours",
      description: "Banhu Travel & Tours bietet authentische Buschveld-Erlebnisse im Herzen von Mpumalanga. Wir sind ein gemeinschaftsbasierter Tourismusbetrieb, der sich der Präsentation der natürlichen Schönheit, reichen Kultur und herzlichen Gastfreundschaft der Region Acornhoek widmet.",
      stats: {
        tours: "Angebotene Touren",
        guests: "Zufriedene Gäste",
        rating: "Sternebewertung",
      },
    },
    tours: {
      title: "Unsere Touren",
      subtitle: "Entdecken Sie Mpumalangas verborgene Schätze",
      bookTour: "Diese Tour buchen",
      comingSoon: "Demnächst verfügbar",
      duration: "Dauer",
    },
    community: {
      title: "Gemeinschaft zuerst",
      subtitle: "Jede Tour unterstützt die lokale Entwicklung",
      learnerGuide: {
        title: "Leitfaden-Ausbildungsprogramm",
        description: "Wir bilden und betreuen angehende Reiseleiter aus lokalen Dörfern und schaffen echte Karrieremöglichkeiten im Tourismus.",
      },
      partnership: {
        title: "Lokale Partnerschaften",
        description: "Unsere Zusammenarbeit mit lokalen Unternehmen und Schulen bietet praktische Ausbildungsplätze.",
      },
      economic: {
        title: "Wirtschaftliche Auswirkungen",
        description: "Tourismuseinnahmen fließen direkt in lokale Gemeinden zurück und unterstützen Familien, Bildung und kleine Unternehmen.",
      },
    },
    partners: {
      title: "Strategische Partner",
      subtitle: "Gemeinsam bauen wir eine stärkere Gemeinschaft auf",
    },
    booking: {
      title: "Buchen Sie Ihr Abenteuer",
      subtitle: "Füllen Sie das Formular aus und wir bestätigen Ihre Buchung per WhatsApp",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        tourSelection: "Tourauswahl",
        selectTour: "Wählen Sie eine Tour",
        preferredDate: "Bevorzugtes Datum",
        guests: "Anzahl der Gäste",
        specialRequests: "Besondere Wünsche",
        submit: "Buchungsanfrage senden",
        submitting: "Wird gesendet...",
        paymentNote: "Zahlung per EFT. Bankdaten senden wir nach Bestätigung.",
      },
      success: {
        title: "Buchungsanfrage erhalten",
        message: "Vielen Dank für Ihre Buchungsanfrage! Wir bestätigen Ihr Abenteuer in Kürze per WhatsApp.",
        another: "Weitere Buchung senden",
      },
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Erreichen Sie unser Team",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      hours: "Öffnungszeiten",
      hoursValue: "Mo-Sa: 8:00 - 17:00",
      whatsapp: "Auf WhatsApp chatten",
    },
    footer: {
      quickLinks: "Schnelllinks",
      compliance: "Compliance",
      rights: "Alle Rechte vorbehalten.",
      tagline: "Authentische Buschveld-Erlebnisse im Herzen von Mpumalanga",
    },
  },
};
