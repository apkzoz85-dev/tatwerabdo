// ============================================================
//  كل إعدادات الموقع في الملف ده — الأرقام، الفورم، التتبع، المشاريع
// ============================================================

export const site = {
  brand: "Grandeur Spaces",
  brandAr: "جرانديور سبيسز",
  developer: "تطوير مصر",
  developerEn: "Tatweer Misr",
  domain: "https://tatweerprojects.org", // ← غيّرها للدومين الفعلي
  phone: "01001090433",
  phoneIntl: "+201001090433",
  whatsapp: "201001090433",
  email: "leads@tatweerprojects.org",

  // ← حط مفتاح Web3Forms هنا. طول ما هو فاضي الفورم بيحوّل على الواتساب
  web3formsKey: "e4c6f68f-4909-43ee-abec-268020bf37b0",

  // ← Google Ads (اختياري) — سيبها فاضية لو مش جاهزة
  googleAdsId: "", // مثال: AW-123456789
  conversions: { form: "", whatsapp: "", call: "" },

  agencyUrl: "https://oneclick.example.com", // ← لينك موقع One Click
};

/** العرض الأساسي — ظاهر في كل المشاريع */
export const offer = {
  title: "استلم فوراً بمقدم 10% فقط",
  sub: "وقسّط الباقي على 9 سنين، ومعاك سنة كاملة سماح قبل أول قسط",
  points: [
    { k: "10%", v: "مقدم فقط" },
    { k: "فوري", v: "استلام الوحدة" },
    { k: "سنة", v: "سماح قبل أول قسط" },
    { k: "9 سنين", v: "تقسيط الباقي" },
  ],
  downPct: 0.1,
  years: 9,
  graceYears: 1,
};

export type Unit = {
  name: string;
  latin: string;
  img: string;
  area: string;
  chips: string[];
  price?: string; // "15,000,000" — لو فاضي بيظهر "اطلب السعر"
  priceNum?: number;
};

export type Project = {
  slug: string;
  name: string;
  latin: string;
  keyword: string; // الكلمة المفتاحية الأساسية
  city: string;
  locationPill: string;
  h1a: string;
  h1b: string;
  heroSub: string;
  startsFrom: string; // بالمليون
  startsFromNum: number;
  ready: boolean; // الصور والأسعار وصلت
  hero: string;
  cardImg: string;
  about: { title: string; body: string[]; img: string; badge: string };
  stats: { k: string; v: string }[];
  units: Unit[];
  lifestyle: { title: string; img: string }[];
  amenities: string[];
  location: { mapQuery: string; distances: { k: string; v: string }[]; nearby: string[] };
  gallery: string[];
  faq: { q: string; a: string }[];
  theme: { from: string; to: string }; // لون مميز للمشروع في الكروت
};

const S = "/images/scenes";

export const projects: Project[] = [
  {
    slug: "scenes",
    name: "سينز المستقبل سيتي",
    latin: "SCENES",
    keyword: "كمبوند سينز المستقبل سيتي",
    city: "المستقبل سيتي — القاهرة الجديدة",
    locationPill: "المستقبل سيتي · امتداد القاهرة الجديدة",
    h1a: "كمبوند سينز تطوير مصر",
    h1b: "فيلتك جاهزة في المستقبل سيتي",
    heroSub:
      "كمبوند فيلات بالكامل على 100 فدان بين البحيرات والمساحات الخضراء — تاون هاوس، توين هاوس وفيلات مستقلة كاملة التشطيب.",
    startsFrom: "15",
    startsFromNum: 15_000_000,
    ready: true,
    hero: `${S}/hero.webp`,
    cardImg: `${S}/hero.webp`,
    about: {
      title: "سينز.. حياة الفيلات وسط البحيرات في قلب المستقبل سيتي",
      body: [
        "كمبوند سينز المستقبل سيتي هو مشروع تطوير مصر المخصص للفيلات فقط، على مساحة حوالي 100 فدان أغلبها لاندسكيب ومسطحات مائية وممرات مشي ودراجات.",
        "التصميم المعماري أبيض بلمسات طوب وخشب، بيوت مفتوحة على الجنينة والبحيرة، وتيراسات وروف لكل وحدة — في موقع قريب من التجمع الخامس والعاصمة الإدارية والدائري الأوسطي.",
      ],
      img: `${S}/lounge.webp`,
      badge: "VILLAS ONLY",
    },
    stats: [
      { k: "100", v: "فدان مساحة المشروع" },
      { k: "100%", v: "فيلات فقط" },
      { k: "جاهز", v: "للاستلام الفوري" },
    ],
    units: [
      { name: "تاون هاوس ميدل", latin: "TOWNHOUSE", img: `${S}/townhouse.webp`, area: "165 م² + روف", chips: ["3 غرف", "جنينة خاصة", "روف"], price: "15,000,000", priceNum: 15_000_000 },
      { name: "تاون هاوس كورنر", latin: "TOWN CORNER", img: `${S}/villas.webp`, area: "185 م² + روف", chips: ["4 غرف", "جنينة أكبر", "روف"] },
      { name: "توين هاوس", latin: "TWIN HOUSE", img: `${S}/twin.webp`, area: "185 م² + روف", chips: ["4 غرف", "جنينة", "على البحيرة"] },
      { name: "فيلا مستقلة", latin: "STANDALONE", img: `${S}/standalone.webp`, area: "210 م² + روف", chips: ["4 غرف", "جنينة خاصة", "روف"] },
    ],
    lifestyle: [
      { title: "ممرات خضراء ودراجات", img: `${S}/greenway.webp` },
      { title: "إطلالات على البحيرات", img: `${S}/terrace.webp` },
      { title: "تيراسات مفتوحة", img: `${S}/balcony.webp` },
      { title: "شوارع هادية وآمنة", img: `${S}/streets.webp` },
    ],
    amenities: ["كلوب هاوس", "بحيرات صناعية", "ممرات جري ودراجات", "مناطق أطفال", "جراجات", "أمن 24 ساعة", "منطقة تجارية", "جيم وسبا"],
    location: {
      mapQuery: "Scenes Tatweer Misr Mostakbal City",
      distances: [
        { k: "5 دقائق", v: "من الدائري الأوسطي" },
        { k: "10 دقائق", v: "من الجامعة الأمريكية" },
        { k: "15 دقيقة", v: "من العاصمة الإدارية" },
        { k: "20 دقيقة", v: "من التجمع الخامس" },
      ],
      nearby: ["مدينتي", "الرحاب", "طريق السويس", "جامعة المستقبل", "مطار القاهرة"],
    },
    gallery: [`${S}/hero.webp`, `${S}/lounge.webp`, `${S}/twin.webp`, `${S}/terrace.webp`, `${S}/standalone.webp`, `${S}/greenway.webp`, `${S}/balcony.webp`, `${S}/townhouse.webp`],
    faq: [
      { q: "أسعار سينز المستقبل سيتي بتبدأ من كام؟", a: "أسعار كمبوند سينز تطوير مصر بتبدأ من 15 مليون جنيه للتاون هاوس، والأسعار استرشادية وبتتغير حسب المساحة والموقع والمتاح." },
      { q: "إيه نظام السداد في سينز؟", a: "الوحدات الجاهزة للاستلام الفوري بمقدم 10% فقط، وتقسيط الباقي على 9 سنين، مع سنة كاملة سماح قبل أول قسط." },
      { q: "إيه أنواع الوحدات المتاحة؟", a: "سينز كمبوند فيلات فقط: تاون هاوس ميدل وكورنر، توين هاوس، وفيلات مستقلة، كلها بروف." },
      { q: "سينز فين بالظبط؟", a: "في المستقبل سيتي امتداد القاهرة الجديدة، قريب من الدائري الأوسطي والجامعة الأمريكية والعاصمة الإدارية." },
    ],
    theme: { from: "#1f5b5f", to: "#0f2e3a" },
  },
  {
    slug: "il-monte-galala",
    name: "المونت جلالة",
    latin: "IL MONTE GALALA",
    keyword: "المونت جلالة العين السخنة",
    city: "العين السخنة — طريق الزعفرانة",
    locationPill: "العين السخنة · هضبة الجلالة",
    h1a: "المونت جلالة تطوير مصر",
    h1b: "استلم شاليهك على البحر الأحمر",
    heroSub:
      "قرية مستوحاة من بورتوفينو الإيطالية على 530 فدان فوق جبل الجلالة، كل الوحدات بإطلالة على البحر وأول لاجون فوق قمة جبل في العالم.",
    startsFrom: "6",
    startsFromNum: 6_000_000, // ← سعر استرشادي من السوق — عدّله لما يوصلك الرسمي
    ready: true,
    hero: "/images/il-monte-galala/hero.webp",
    cardImg: "/images/il-monte-galala/hero.webp",
    about: {
      title: "المونت جلالة.. بورتوفينو على البحر الأحمر",
      body: [
        "المونت جلالة العين السخنة على مساحة 530 فدان (2.2 مليون م²)، من أكبر مشروعات السخنة، بشاطئ رملي ممتد ومدرجات على الجبل بتخلي كل وحدة تطل على البحر.",
        "المشروع فيه لاجون Crystal Lagoons فوق قمة الجبل، فنادق وسبا، أدفنشر بارك ومنطقة تجارية — وقريب من العاصمة الإدارية والقاهرة.",
      ],
      img: "/images/il-monte-galala/balcony.webp",
      badge: "PORTOFINO SPIRIT",
    },
    stats: [
      { k: "530", v: "فدان مساحة المشروع" },
      { k: "1.4 كم", v: "شاطئ على البحر الأحمر" },
      { k: "جاهز", v: "للاستلام الفوري" },
    ],
    units: [
      { name: "شاليه / ستوديو", latin: "CHALET", img: "/images/il-monte-galala/lagoon.webp", area: "من 60 م²", chips: ["إطلالة بحر", "كامل التشطيب"], price: "6,000,000", priceNum: 6_000_000 },
      { name: "شاليه بجاردن", latin: "GARDEN CHALET", img: "/images/il-monte-galala/delivered.webp", area: "من 105 م² + جاردن", chips: ["جنينة خاصة", "إطلالة بحر"] },
      { name: "شاليه تايبيكال", latin: "TYPICAL", img: "/images/il-monte-galala/balcony.webp", area: "95 – 126 م²", chips: ["2–3 غرف", "تراس على البحر"] },
      { name: "توين هاوس", latin: "TWIN HOUSE", img: "/images/il-monte-galala/aerial.webp", area: "من 173 م²", chips: ["جنينة", "إطلالة بحر"] },
    ],
    lifestyle: [
      { title: "لاجون فوق الجبل", img: "/images/il-monte-galala/lagoon.webp" },
      { title: "شاطئ البحر الأحمر", img: "/images/il-monte-galala/sea.webp" },
      { title: "حمامات سباحة إنفينيتي", img: "/images/il-monte-galala/pool.webp" },
      { title: "غروب على الخليج", img: "/images/il-monte-galala/sunset.webp" },
    ],
    amenities: ["كريستال لاجون", "شاطئ رملي", "فنادق", "سبا", "أدفنشر بارك", "منطقة تجارية", "مطاعم وكافيهات", "رياضات مائية"],
    location: {
      mapQuery: "IL Monte Galala Ain Sokhna",
      distances: [
        { k: "30 دقيقة", v: "من العاصمة الإدارية" },
        { k: "90 دقيقة", v: "من القاهرة" },
        { k: "11 كم", v: "من بورتو السخنة" },
        { k: "3 كم", v: "من نزلة طريق الجلالة" },
      ],
      nearby: ["مدينة الجلالة", "جامعة الجلالة", "طريق الزعفرانة", "ميناء السخنة"],
    },
    gallery: ["/images/il-monte-galala/hero.webp", "/images/il-monte-galala/balcony.webp", "/images/il-monte-galala/aerial.webp", "/images/il-monte-galala/lagoon.webp", "/images/il-monte-galala/sea.webp", "/images/il-monte-galala/sunset.webp", "/images/il-monte-galala/pool.webp", "/images/il-monte-galala/delivered.webp"],
    faq: [
      { q: "أسعار المونت جلالة بتبدأ من كام؟", a: "أسعار المونت جلالة العين السخنة بتبدأ من حوالي 6 مليون جنيه للشاليه، والأسعار استرشادية وبتتغير حسب المساحة والدور والإطلالة." },
      { q: "إيه نظام السداد في المونت جلالة؟", a: "الوحدات الجاهزة للاستلام الفوري بمقدم 10%، وتقسيط الباقي على 9 سنين مع سنة سماح قبل أول قسط." },
      { q: "المونت جلالة فين؟", a: "في العين السخنة على طريق الزعفرانة، أول نزلة من طريق الجلالة، وحوالي نص ساعة من العاصمة الإدارية." },
    ],
    theme: { from: "#2a6f86", to: "#123b4a" },
  },
  {
    slug: "bloomfields",
    name: "بلوم فيلدز",
    latin: "BLOOMFIELDS",
    keyword: "كمبوند بلوم فيلدز المستقبل سيتي",
    city: "المستقبل سيتي — القاهرة الجديدة",
    locationPill: "المستقبل سيتي · بين التجمع والعاصمة",
    h1a: "كمبوند بلوم فيلدز تطوير مصر",
    h1b: "استلم شقتك أو فيلتك فوراً",
    heroSub:
      "مدينة متكاملة على 415 فدان بمفهوم College Town — جامعة دولية ومدارس، سنترال بارك 10 فدان، وجراجات تحت الأرض.",
    startsFrom: "4",
    startsFromNum: 4_000_000, // ← سعر استرشادي من السوق
    ready: true,
    hero: "/images/bloomfields/hero.webp",
    cardImg: "/images/bloomfields/hero.webp",
    about: {
      title: "بلوم فيلدز.. مدينة كاملة في قلب المستقبل سيتي",
      body: [
        "كمبوند بلوم فيلدز المستقبل سيتي على 415 فدان، من تصميم المعماري الإيطالي جيانلوكا بيلوفو، بين التجمع الذهبي في القاهرة الجديدة والعاصمة الإدارية.",
        "المشروع فيه زون تعليمي بجامعة دولية و3 مدارس، سنترال بارك 10 فدان، بيزنس هب، وكل الجراجات تحت الأرض عشان الشوارع تفضل خضرا وآمنة.",
      ],
      img: "/images/bloomfields/building.webp",
      badge: "COLLEGE TOWN",
    },
    stats: [
      { k: "415", v: "فدان مساحة المشروع" },
      { k: "10", v: "فدان سنترال بارك" },
      { k: "جاهز", v: "للاستلام الفوري" },
    ],
    units: [
      { name: "شقق", latin: "APARTMENTS", img: "/images/bloomfields/night.webp", area: "من 110 م²", chips: ["2–3 غرف", "جراج"], price: "4,000,000", priceNum: 4_000_000 },
      { name: "شقق بجاردن", latin: "GARDEN APT", img: "/images/bloomfields/terrace.webp", area: "125 م² + جاردن", chips: ["3 غرف", "جنينة خاصة"] },
      { name: "شقق كبيرة / دوبلكس", latin: "FAMILY UNITS", img: "/images/bloomfields/roof.webp", area: "150 – 240 م²", chips: ["3 غرف + غرفة مربية", "تراس"] },
    ],
    lifestyle: [
      { title: "سنترال بارك 10 فدان", img: "/images/bloomfields/garden.webp" },
      { title: "ممرات خضراء", img: "/images/bloomfields/walkway.webp" },
      { title: "حمامات سباحة", img: "/images/bloomfields/pool.webp" },
      { title: "روف جاردن", img: "/images/bloomfields/roof.webp" },
    ],
    amenities: ["جامعة دولية", "3 مدارس", "سنترال بارك", "جراجات تحت الأرض", "كلوب هاوس", "منطقة تجارية", "ممرات دراجات", "منطقة حيوانات أليفة"],
    location: {
      mapQuery: "Bloomfields Tatweer Misr Mostakbal City",
      distances: [
        { k: "دقائق", v: "من الدائري الأوسطي" },
        { k: "10 دقائق", v: "من العاصمة الإدارية" },
        { k: "15 دقيقة", v: "من الجامعة الأمريكية" },
        { k: "دقائق", v: "من طريق السويس" },
      ],
      nearby: ["مدينتي", "التجمع الخامس", "الرحاب", "العاصمة الإدارية"],
    },
    gallery: ["/images/bloomfields/hero.webp", "/images/bloomfields/building.webp", "/images/bloomfields/garden.webp", "/images/bloomfields/pool.webp", "/images/bloomfields/terrace.webp", "/images/bloomfields/walkway.webp", "/images/bloomfields/night.webp", "/images/bloomfields/roof.webp"],
    faq: [
      { q: "أسعار بلوم فيلدز بتبدأ من كام؟", a: "أسعار بلوم فيلدز المستقبل سيتي بتبدأ من حوالي 4 مليون جنيه للشقة الجاهزة، والأسعار استرشادية وبتتغير حسب المساحة والمرحلة والتشطيب." },
      { q: "إيه نظام السداد في بلوم فيلدز؟", a: "الوحدات الجاهزة للاستلام الفوري بمقدم 10%، وتقسيط الباقي على 9 سنين مع سنة سماح قبل أول قسط." },
      { q: "بلوم فيلدز فين؟", a: "في المستقبل سيتي بين التجمع الذهبي في القاهرة الجديدة والعاصمة الإدارية، قريب من الدائري الأوسطي وطريق السويس." },
    ],
    theme: { from: "#5e7d3a", to: "#24391c" },
  },
  {
    slug: "fouka-bay",
    name: "فوكا باي",
    latin: "FOUKA BAY",
    keyword: "فوكا باي الساحل الشمالي",
    city: "رأس الحكمة — الساحل الشمالي",
    locationPill: "الساحل الشمالي · رأس الحكمة ك 211",
    h1a: "فوكا باي تطوير مصر",
    h1b: "استلم وحدتك في رأس الحكمة",
    heroSub:
      "12 جزيرة وسط كريستال لاجونز و7 كم شواطئ رملية في خليج رأس الحكمة — من تصميم 5+1AA وجيانلوكا بيلوفو.",
    startsFrom: "9",
    startsFromNum: 9_200_000, // ← سعر استرشادي من السوق
    ready: true,
    hero: "/images/fouka-bay/aerial.webp",
    cardImg: "/images/fouka-bay/aerial.webp",
    about: {
      title: "فوكا باي.. جزر وسط اللاجون في أجمل خليج على الساحل",
      body: [
        "فوكا باي الساحل الشمالي على مساحة مليون م² في رأس الحكمة، الكيلو 211 من طريق إسكندرية مطروح، مقسّمة لـ 12 جزيرة محاطة بكريستال لاجونز.",
        "المشروع فيه The House Hotel، كلوب هاوس، بيتش هب، سبا ومنطقة تجارية — وجنب طريق الفوكا الجديد اللي بيوصل القاهرة بالساحل.",
      ],
      img: "/images/fouka-bay/sunset.webp",
      badge: "12 ISLANDS",
    },
    stats: [
      { k: "12", v: "جزيرة وسط اللاجون" },
      { k: "7 كم", v: "شواطئ رملية" },
      { k: "جاهز", v: "للاستلام الفوري" },
    ],
    units: [
      { name: "شاليه", latin: "CHALET", img: "/images/fouka-bay/chalets.webp", area: "125 – 129 م²", chips: ["3 غرف", "إطلالة لاجون", "كامل التشطيب"], price: "9,200,000", priceNum: 9_200_000 },
      { name: "شاليه واسع", latin: "LAGOON RESIDENCES", img: "/images/fouka-bay/lagoon.webp", area: "165 – 190 م²", chips: ["3 غرف + مربية", "إطلالة بحر / لاجون"] },
      { name: "تاون هاوس / فيلا", latin: "VILLAS", img: "/images/fouka-bay/pool.webp", area: "حتى 280 م²", chips: ["جنينة", "على اللاجون"] },
    ],
    lifestyle: [
      { title: "كريستال لاجونز", img: "/images/fouka-bay/sunset.webp" },
      { title: "شواطئ رأس الحكمة", img: "/images/fouka-bay/beach.webp" },
      { title: "ليالي على اللاجون", img: "/images/fouka-bay/night.webp" },
      { title: "حمامات سباحة", img: "/images/fouka-bay/pool.webp" },
    ],
    amenities: ["كريستال لاجونز", "فندق", "كلوب هاوس", "بيتش هب", "سبا", "أكوا بارك", "منطقة تجارية", "ملاعب"],
    location: {
      mapQuery: "Fouka Bay Tatweer Misr North Coast",
      distances: [
        { k: "ك 211", v: "طريق إسكندرية مطروح" },
        { k: "75 كم", v: "من مرسى مطروح" },
        { k: "دقيقة", v: "من طريق الفوكا" },
        { k: "3 ساعات", v: "من القاهرة" },
      ],
      nearby: ["مدينة رأس الحكمة الجديدة", "العلمين", "سيدي عبد الرحمن", "مرسى مطروح"],
    },
    gallery: ["/images/fouka-bay/aerial.webp", "/images/fouka-bay/sunset.webp", "/images/fouka-bay/lagoon.webp", "/images/fouka-bay/chalets.webp", "/images/fouka-bay/pool.webp", "/images/fouka-bay/night.webp", "/images/fouka-bay/beach.webp"],
    faq: [
      { q: "أسعار فوكا باي بتبدأ من كام؟", a: "أسعار شاليهات فوكا باي الجاهزة بتبدأ من حوالي 9 مليون جنيه، والأسعار استرشادية وبتتغير حسب المساحة والإطلالة والمرحلة." },
      { q: "إيه نظام السداد في فوكا باي؟", a: "الوحدات الجاهزة للاستلام الفوري بمقدم 10%، وتقسيط الباقي على 9 سنين مع سنة سماح قبل أول قسط." },
      { q: "فوكا باي فين؟", a: "في رأس الحكمة، الكيلو 211 طريق إسكندرية مطروح، على بعد 75 كم من مرسى مطروح." },
    ],
    theme: { from: "#2c8a9b", to: "#0f3d4a" },
  },
  {
    slug: "rivers",
    name: "ريفرز الشيخ زايد",
    latin: "RIVERS",
    keyword: "كمبوند ريفرز الشيخ زايد الجديدة",
    city: "الشيخ زايد الجديدة — غرب القاهرة",
    locationPill: "الشيخ زايد الجديدة · أمام مطار سفنكس",
    h1a: "كمبوند ريفرز تطوير مصر",
    h1b: "استلم في الشيخ زايد الجديدة",
    heroSub:
      "100 فدان من الخضرة والمسطحات المائية في قلب نيو زايد — فيلات مستقلة وتوين وتاون هاوس، وشقق ودوبلكس في فيز ريفرسايد.",
    startsFrom: "6.4",
    startsFromNum: 6_400_000, // ← سعر استرشادي من السوق
    ready: true,
    hero: "/images/rivers/hero.webp",
    cardImg: "/images/rivers/hero.webp",
    about: {
      title: "ريفرز.. هدوء الطبيعة وخصوصية في قلب نيو زايد",
      body: [
        "كمبوند ريفرز الشيخ زايد الجديدة على 100 فدان، بأكتر من 700 وحدة موزعة على 6 زونز، ومساحة مبنية أكتر من 150 ألف م².",
        "المشروع 3 دقايق من مطار سفنكس، وبيوصل مباشرة لمحور الضبعة وطريق مصر إسكندرية الصحراوي ومحور 26 يوليو.",
      ],
      img: "/images/rivers/canal.webp",
      badge: "NEW ZAYED",
    },
    stats: [
      { k: "100", v: "فدان مساحة المشروع" },
      { k: "+700", v: "وحدة في 6 زونز" },
      { k: "جاهز", v: "للاستلام الفوري" },
    ],
    units: [
      { name: "فيلا مستقلة", latin: "STANDALONE", img: "/images/rivers/standalone.webp", area: "من 227 م²", chips: ["جنينة خاصة", "روف"] },
      { name: "توين هاوس", latin: "TWIN HOUSE", img: "/images/rivers/twin.webp", area: "من 205 م²", chips: ["جنينة", "روف"] },
      { name: "تاون هاوس", latin: "TOWNHOUSE", img: "/images/rivers/townhouse.webp", area: "من 180 م²", chips: ["جنينة", "روف"] },
      { name: "شقق ودوبلكس ريفرسايد", latin: "RIVERSIDE", img: "/images/rivers/building.webp", area: "120 – 235 م²", chips: ["2–4 غرف"], price: "6,400,000", priceNum: 6_400_000 },
    ],
    lifestyle: [
      { title: "مسطحات مائية", img: "/images/rivers/canal.webp" },
      { title: "حدائق مركزية", img: "/images/rivers/plaza.webp" },
      { title: "روف جاردن وكلوب هاوس", img: "/images/rivers/aerial.webp" },
      { title: "ممرات مشي ودراجات", img: "/images/rivers/hero.webp" },
    ],
    amenities: ["كلوب هاوس", "سنترال بارك", "جيم مفتوح", "حمامات سباحة", "منطقة تجارية", "مطاعم وكافيهات", "ممرات دراجات", "أمن وكاميرات"],
    location: {
      mapQuery: "Rivers Tatweer Misr New Zayed",
      distances: [
        { k: "3 دقائق", v: "من مطار سفنكس" },
        { k: "12 دقيقة", v: "من الشيخ زايد" },
        { k: "20 دقيقة", v: "من ميدان لبنان" },
        { k: "35 دقيقة", v: "من وسط البلد" },
      ],
      nearby: ["محور الضبعة", "طريق مصر إسكندرية الصحراوي", "محور 26 يوليو", "طريق دهشور"],
    },
    gallery: ["/images/rivers/hero.webp", "/images/rivers/plaza.webp", "/images/rivers/canal.webp", "/images/rivers/aerial.webp", "/images/rivers/townhouse.webp", "/images/rivers/twin.webp", "/images/rivers/standalone.webp", "/images/rivers/building.webp"],
    faq: [
      { q: "أسعار ريفرز الشيخ زايد بتبدأ من كام؟", a: "أسعار كمبوند ريفرز الشيخ زايد الجديدة بتبدأ من حوالي 6.4 مليون جنيه للشقة 120 م²، والأسعار استرشادية وبتتغير حسب المساحة ونوع الوحدة." },
      { q: "إيه نظام السداد في ريفرز؟", a: "الوحدات الجاهزة للاستلام الفوري بمقدم 10%، وتقسيط الباقي على 9 سنين مع سنة سماح قبل أول قسط." },
      { q: "ريفرز فين؟", a: "في الشيخ زايد الجديدة، 3 دقايق من مطار سفنكس و12 دقيقة من الشيخ زايد." },
    ],
    theme: { from: "#3f6f8c", to: "#1a3346" },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
