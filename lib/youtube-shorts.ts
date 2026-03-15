export type ShortCategory =
    | "family"
    | "property"
    | "inheritance"
    | "migration"
    | "fraud"
    | "civil";

export type ShortLocaleContent = {
    title: string;
    summary: string;
};

export type YouTubeShortItem = {
    id: string;
    category: ShortCategory;
    featured?: boolean;
    content: {
        uz: ShortLocaleContent;
        ru: ShortLocaleContent;
        en: ShortLocaleContent;
    };
};

export const channelShortsUrl = "https://www.youtube.com/@AskarbekovaPartner/shorts";

export const youtubeShorts: YouTubeShortItem[] = [
    {
        id: "tgBiEwaYmiE",
        category: "family",
        featured: true,
        content: {
            uz: { title: "Majburiy nikohni bekor qilish", summary: "Majburiy nikoh holatida huquqlarni tiklash bo'yicha yuridik tushuntirish." },
            ru: { title: "Принудительный брак", summary: "Как защитить права и признать брак недействительным." },
            en: { title: "Forced Marriage Case", summary: "How to challenge a forced marriage and restore legal rights." },
        },
    },
    {
        id: "CBgCeEsjj-U",
        category: "fraud",
        featured: true,
        content: {
            uz: { title: "Shantajdan himoya", summary: "Shantaj holatida tezkor va qonuniy choralar bo'yicha tavsiyalar." },
            ru: { title: "Защита от шантажа", summary: "Что делать сразу и как сохранить доказательства." },
            en: { title: "Blackmail Protection", summary: "Immediate legal steps and evidence preservation guidance." },
        },
    },
    {
        id: "8q3K1Id-twU",
        category: "fraud",
        featured: true,
        content: {
            uz: { title: "Oson pul tuzog'i", summary: "Yengil daromad va'dalari ortidagi jinoyat xavflari haqida ogohlantirish." },
            ru: { title: "Ловушка легких денег", summary: "Почему такие предложения опасны и как их распознать." },
            en: { title: "Easy Money Trap", summary: "How to recognize risky offers before it is too late." },
        },
    },
    {
        id: "VK8AMGdNuvw",
        category: "family",
        featured: true,
        content: {
            uz: { title: "Aliment undirish", summary: "Farzandlar uchun adolatli to'lovga erishish bo'yicha amaliy izoh." },
            ru: { title: "Взыскание алиментов", summary: "Ключевые моменты и расчеты по выплатам." },
            en: { title: "Child Support Recovery", summary: "Practical legal points for fair child support payments." },
        },
    },
    {
        id: "lmIgLCjjJss",
        category: "family",
        featured: true,
        content: {
            uz: { title: "Nikohdagi javobgarlik", summary: "Er-xotin majburiyatlari va moddiy qo'llab-quvvatlash masalalari." },
            ru: { title: "Ответственность в браке", summary: "Права и обязанности супругов в ключевых ситуациях." },
            en: { title: "Responsibility in Marriage", summary: "Rights and duties of spouses in practical legal context." },
        },
    },
    {
        id: "1jvn-dauF_M",
        category: "family",
        featured: true,
        content: {
            uz: { title: "Ajralish mavzusi bo'yicha maslahat", summary: "Ajralish jarayonidagi muhim huquqiy savollarga qisqa javoblar." },
            ru: { title: "Консультация по разводу", summary: "Краткий разбор практических вопросов в бракоразводном процессе." },
            en: { title: "Divorce Consultation", summary: "Short legal explainer on common divorce issues." },
        },
    },
    {
        id: "bXm68bWDo2Y",
        category: "civil",
        content: {
            uz: { title: "Tilxat bilan qarzni undirish", summary: "Qarz hujjati asosida pulni qaytarishning qonuniy yo'llari." },
            ru: { title: "Долг по расписке", summary: "Как вернуть деньги, если есть расписка." },
            en: { title: "Debt Recovery by Receipt", summary: "Legal ways to recover debt using a written receipt." },
        },
    },
    {
        id: "HffHJQZk2Nk",
        category: "property",
        content: {
            uz: { title: "Mulk huquqi bo'yicha maslahat", summary: "Ko'chmas mulk bilan bog'liq nizolarda amaliy yondashuv." },
            ru: { title: "Консультация по имуществу", summary: "Практический подход к жилищным и имущественным спорам." },
            en: { title: "Property Advice", summary: "Practical legal approach to real estate disputes." },
        },
    },
    {
        id: "5sHVQVbewV0",
        category: "civil",
        content: {
            uz: { title: "Yuridik maslahat bo'yicha short", summary: "Mijozlar uchun tez-tez uchraydigan huquqiy holatlar sharhi." },
            ru: { title: "Юридический шорт", summary: "Краткий разбор распространенных правовых ситуаций." },
            en: { title: "Legal Short", summary: "Quick explanation of common legal scenarios." },
        },
    },
    {
        id: "SoVgKjJJS4g",
        category: "property",
        content: {
            uz: { title: "Mulk bilan bog'liq muammolar", summary: "Uy hujjatlari va egalik huquqini himoya qilish bo'yicha izohlar." },
            ru: { title: "Проблемы с недвижимостью", summary: "Как защитить права собственности при спорных документах." },
            en: { title: "Real Estate Issues", summary: "How to protect ownership rights in document disputes." },
        },
    },
    {
        id: "E7MlXQCcgg8",
        category: "property",
        content: {
            uz: { title: "Kvartira sotishdagi soliq", summary: "Foyda bilan sotishda soliqlar bo'yicha muhim nuqtalar." },
            ru: { title: "Налог при продаже квартиры", summary: "Что важно учитывать при продаже с прибылью." },
            en: { title: "Tax on Apartment Sale", summary: "Key tax points when selling property with profit." },
        },
    },
    {
        id: "4vyjOVmjsnA",
        category: "property",
        content: {
            uz: { title: "Sobiq egasi/ijarachini chiqarish", summary: "Uy bo'shatilmagan holatda qonuniy harakatlar ketma-ketligi." },
            ru: { title: "Выселение бывшего владельца/арендатора", summary: "Пошаговые законные действия для собственника." },
            en: { title: "Eviction Guidance", summary: "Lawful steps when former occupants refuse to leave." },
        },
    },
    {
        id: "C_vvRV8nPjk",
        category: "family",
        content: {
            uz: { title: "Nikohdagi moliyaviy majburiyatlar", summary: "Ajralish paytida qarz va to'lovlar bo'yicha javobgarlik." },
            ru: { title: "Финансовые обязательства в браке", summary: "Кто отвечает за кредиты и долги при разводе." },
            en: { title: "Financial Duties in Marriage", summary: "Debt and payment responsibility during divorce." },
        },
    },
    {
        id: "48lCd6R8IKY",
        category: "family",
        content: {
            uz: { title: "Ajralishda mulk bo'lish: hayotiy misol", summary: "Qisqa nikoh davrida ham mulk bo'linishi mezonlari." },
            ru: { title: "Раздел имущества: реальный кейс", summary: "Как оцениваются доли сторон при коротком браке." },
            en: { title: "Asset Division Case", summary: "How property is assessed in short-term marriages." },
        },
    },
    {
        id: "aAOGsiyyNjg",
        category: "property",
        content: {
            uz: { title: "Nikohda mol-mulk kimga tegishli", summary: "Umumiy va shaxsiy mulk o'rtasidagi farqlar bo'yicha short." },
            ru: { title: "Кому принадлежит имущество в браке", summary: "Разница между личным и совместным имуществом." },
            en: { title: "Who Owns Marital Property", summary: "Difference between personal and shared marital assets." },
        },
    },
    {
        id: "h-vq1z9QglA",
        category: "property",
        content: {
            uz: { title: "Ro'yxatda bor, lekin yashamaydi", summary: "Uyda yashamaydiganlarni ro'yxatdan chiqarish bo'yicha yo'riqnoma." },
            ru: { title: "Прописан, но не проживает", summary: "Как законно снять с регистрации непроживающих лиц." },
            en: { title: "Registered But Not Living", summary: "How to legally deregister non-residents." },
        },
    },
    {
        id: "zd13Xdf1ZMs",
        category: "family",
        content: {
            uz: { title: "O'zbekistonda ajralish narxi", summary: "Ajrashuv xarajatlari bo'yicha afsona va amaliy raqamlar." },
            ru: { title: "Стоимость развода в Узбекистане", summary: "Мифы и реальные расходы при разводе." },
            en: { title: "Cost of Divorce in Uzbekistan", summary: "Myths versus practical legal expenses." },
        },
    },
    {
        id: "BgC2dY8qDbI",
        category: "civil",
        content: {
            uz: { title: "Advokat bilan tanishing", summary: "Askarbekova Partner yondashuvi va mijozlar uchun qadriyatlar." },
            ru: { title: "Знакомство с адвокатом", summary: "Подход Askarbekova Partner и ключевые принципы работы." },
            en: { title: "Meet the Lawyer", summary: "Askarbekova Partner approach and client-focused values." },
        },
    },
];
