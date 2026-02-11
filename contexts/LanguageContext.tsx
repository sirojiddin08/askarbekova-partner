"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "uz" | "ru" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguageState] = useState<Language>("ru");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const saved = localStorage.getItem("language") as Language;
        if (saved && ["uz", "ru", "en"].includes(saved)) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (isClient) {
            localStorage.setItem("language", lang);
        }
    };

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations[language];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const translations: Record<Language, any> = {
    uz: {
        nav: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            services: "Xizmatlar",
            blog: "Blog",
            whyUs: "Afzalliklar",
            team: "Jamoa",
            faq: "FAQ",
            contact: "Aloqa",
            call: "Qo'ng'iroq qiling",
        },
        hero: {
            title: "Professional",
            titleHighlight: "advokatlik firmasi",
            titleEnd: "Toshkentda",
            subtitle: "Fuqarolik va jinoiy ishlar, iqtisodiy va ma'muriy nizolar bo'yicha advokatlik xizmatlari",
            cta: "Uchrashuv belgilash",
            stat1: "yillik muvaffaqiyatli yuridik amaliyot",
            stat2: "muvaffaqiyatli ko'rib chiqilgan ishlar",
            stat3: "ijobiy qarorlar va hal qilingan nizolar",
            lawyerName: "Gulshoda Askarbekova",
            lawyerTagline: "Qonun — yechim topish qurolidir.",
        },
        about: {
            label: "Biz haqimizda",
            title: "Professional yuridik himoya — sizning ishonchli hamkoringiz",
            subtitle: "35 yillik tajribaga ega advokatlik firmasi. Sizning huquqlaringiz — bizning mas'uliyatimiz.",
            text1: "Askarbekova Partner — 35 yillik tajribaga ega professional advokatlik firmasi. Biz jismoniy va yuridik shaxslarga yuridik xizmatlar ko'rsatamiz.",
            text2: "Bizning maqsadimiz — sizning muammoyingizni foydali va chiroyli hal qilish. Biz ishonchli huquqiy himoya, sudda vakillik va biznes uchun kompleks yordam taqdim etamiz.",
            feature1Title: "Professional yondashuv",
            feature1Text: "Chuqur bilimga ega tajribali advokatlar jamoasi",
            feature2Title: "Maxfiylik",
            feature2Text: "Mijoz ma'lumotlarini qat'iy saqlash",
            feature3Title: "Samarali natijalar",
            feature3Text: "Mijoz muammolarini tez va sifatli hal qilish",
            feature4Title: "35 yillik tajriba",
            feature4Text: "Ko'p yillik amaliyotga asoslangan ishonchli himoya",
        },
        whyUs: {
            label: "Afzalliklar",
            title: "Nega bizni tanlash kerak",
            reason1: "Maxfiylik",
            reason1Desc: "Kompaniyamiz maxfiylik tamoyillariga qat'iy rioya qiladi va mijozlar ma'lumotlarini ishonchli himoya qiladi.",
            reason2: "Etika kafolati",
            reason2Desc: "Biz advokat professional etikasiga qat'iy rioya qilamiz, bu bizning ishimizning asosini tashkil qiladi.",
            reason3: "Aniq shartnoma",
            reason3Desc: "Barcha shartlar aniq va tushunarli ko'rsatilgan, har bir tomonning huquq va majburiyatlari belgilangan shartnoma.",
            reason4: "35 yillik tajriba",
            reason4Desc: "Ko'p yillik sud amaliyoti orqali to'plangan bilim va tajriba har qanday murakkab ishni hal qilish imkonini beradi.",
            reason5: "Individual yondashuv",
            reason5Desc: "Har bir mijozga individual yondashuv — vaziyatni chuqur tahlil qilish va eng samarali strategiyani tanlash.",
            reason6: "Natijaga yo'nalganlik",
            reason6Desc: "Bizning ustuvor maqsadimiz — mijoz manfaatlarini himoya qilish va eng yaxshi natijaga erishish.",
        },
        team: {
            title: "Bizning jamoa",
            description: "Bizning jamoamiz — tajribali advokatlar, professionallik, mas'uliyat va umumiy maqsad bilan birlashgan — mijoz manfaatlarini himoya qilish.",
            member1: "Shuybekova Nilufar",
            member2: "Askarbekov Murod",
            member3: "Murodova Zebo",
            role: "Advokat",
        },
        faq: {
            label: "FAQ",
            title: "Tez-tez so'raladigan savollar",
            q1: "Qachon advokat kerak bo'ladi?",
            a1: "Huquqlaringiz buzilganda, sud jarayonida, jinoyat ishi qo'zg'atilganda, mol-mulk nizolarida, meros masalalarida, shartnoma tuzishda va boshqa yuridik vaziyatlarda advokat sizga professional yordam beradi.",
            q2: "Suddan oldin maslahat olish mumkinmi?",
            a2: "Ha, biz suddan oldingi bosqichda dastlabki konsultatsiya taqdim etamiz. Bu sizga vaziyatingizni tushunish va to'g'ri qaror qabul qilishga yordam beradi.",
            q3: "Sudda advokatning ishtiroki majburiyatmi?",
            a3: "Qonunga ko'ra ayrim hollarda advokat ishtiroki majburiy. Lekin advokatning professional yordami har qanday sudda sizning manfaatlaringizni himoya qilish imkoniyatini sezilarli darajada oshiradi.",
            q4: "Siz jismoniy shaxslar bilan ishlaydimi?",
            a4: "Ha, biz jismoniy va yuridik shaxslarga barcha fuqarolik masalalari bo'yicha xizmat ko'rsatamiz.",
            q5: "Nizoni sudsiz hal qilish mumkinmi?",
            a5: "Ha, ko'p hollarda nizoni muzokaralar, mediatsiya yoki sudgacha kelishuv orqali hal qilish mumkin. Bizning advokatlar sudsiz yechimlar topishda ham yordam beradi.",
            q6: "Ijobiy natijaga kafolat berasizmi?",
            a6: "Shartnoma imzolangandan so'ng firma sizning ishingiz bo'yicha kafolatlangan yondashuvni taqdim etadi. Firma ishni to'liq o'rganib chiqqandan keyingina shartnomani kafolat bilan taklif qiladi.",
            q7: "Sud jarayoni qancha davom etadi?",
            a7: "Bu ish turi va sud darajasiga bog'liq. Oddiy fuqarolik ishlari bir necha oy, murakkab jinoyat ishlari esa bir yildan ortiq davom etishi mumkin.",
            q8: "Onlayn murojaat qilish mumkinmi?",
            a8: "Ha, siz onlayn murojaat qilishingiz mumkin. Bizning call-markazimizga qo'ng'iroq qiling va biz siz uchun advokat bilan videokall tashkil qilamiz.",
            q9: "Maxfiylik saqlanadimi?",
            a9: "Ha, advokatlik maxfiyligi qat'iy saqlanadi. Mijozlarimizning barcha ma'lumotlari ishonchli himoyalangan.",
        },
        contact: {
            label: "Aloqa",
            title: "Biz bilan bog'laning",
            subtitle: "Savollaringizga javob olish yoki yuridik yordam uchun biz bilan bog'laning",
            phone: "Telefon",
            address: "Manzil",
            addressValue: "Alisher Navoiy shoh ko'chasi, 5, 1-qavat",
            workHours: "Ish vaqti",
            workHoursValue: "Dush–Juma: 09:00–17:00",
            email: "Email",
            callUs: "Qo'ng'iroq qiling",
            viewMap: "Xaritada ko'rish",
            writeUs: "Xat yozing",
            district: "Shayxontohur tumani, Toshkent",
            ctaTitle: "Yuridik yordam kerakmi?",
            ctaDesc: "Hoziroq qo'ng'iroq qiling!",
        },
        footer: {
            description: "Professional advokatlik firmasi — yuridik himoya va sud vakiligi. 35 yillik tajriba.",
            pages: "Sahifalar",
            addressShort: "Navoiy ko'chasi 5, Toshkent",
            rights: "Barcha huquqlar himoyalangan",
            legal: "O'zbekiston Respublikasi qonunchiligiga muvofiq faoliyat yuritadi",
        },
        services: {
            label: "Xizmatlar",
            title: "Bizning xizmatlarimiz",
            subtitle: "Jismoniy va yuridik shaxslar uchun professional yuridik yordam",
            civil: "Fuqarolik ishlari",
            civilDesc: "Meros, shartnomalar, mol-mulk nizolari va boshqa fuqarolik masalalari bo'yicha konsultatsiya va sud vakiligi.",
            criminal: "Jinoyat ishlari",
            criminalDesc: "Jinoyat ishlari bo'yicha barcha bosqichlarda professional himoya va sud vakiligi.",
            economic: "Iqtisodiy nizolar",
            economicDesc: "Sudgacha va sudda hal qilish, iqtisodiy shartnomalar va qarorlarni ijro ettirish.",
            administrative: "Ma'muriy nizolar",
            administrativeDesc: "Davlat organlari bilan munosabatlarda huquqlarni himoya qilish va sud vakiligi.",
            inheritance: "Meros masalalari",
            inheritanceDesc: "Meros masalalari bo'yicha konsultatsiya, hujjatlar tayyorlash va nizolarni hal qilish.",
            business: "Biznes huquqiy yordam",
            businessDesc: "Biznes uchun kompleks yuridik xizmat ko'rsatish va huquqiy maslahatlar.",
            learnMore: "Batafsil",
        },
    },
    ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            blog: "Блог",
            whyUs: "Преимущества",
            team: "Команда",
            faq: "Вопросы",
            contact: "Контакты",
            call: "Позвонить",
        },
        hero: {
            title: "Профессиональная",
            titleHighlight: "адвокатская фирма",
            titleEnd: "в Ташкенте",
            subtitle: "Адвокатские услуги по гражданским и уголовным делам, экономическим и административным спорам",
            cta: "Назначить встречу",
            stat1: "лет успешной юридической практики",
            stat2: "успешно рассмотренных дела",
            stat3: "положительных решений и урегулированных споров",
            lawyerName: "Гулшода Аскарбекова",
            lawyerTagline: "Закон — инструмент выхода.",
        },
        about: {
            label: "О фирме",
            title: "Профессиональная юридическая защита — ваш надёжный партнёр",
            subtitle: "Адвокатская фирма с 35-летним опытом. Ваши права — наша ответственность.",
            text1: "Askarbekova Partner — профессиональная адвокатская фирма с 35-летним опытом. Мы оказываем юридические услуги физическим и юридическим лицам.",
            text2: "Наша цель — решить вашу проблему выгодно и изящно. Мы обеспечиваем надёжную правовую защиту, представительство в судах и комплексное сопровождение бизнеса.",
            feature1Title: "Профессиональный подход",
            feature1Text: "Команда опытных адвокатов с глубокими знаниями",
            feature2Title: "Конфиденциальность",
            feature2Text: "Строгое соблюдение принципов конфиденциальности",
            feature3Title: "Эффективные результаты",
            feature3Text: "Быстрое и качественное решение проблем клиента",
            feature4Title: "35 лет опыта",
            feature4Text: "Надёжная защита, основанная на многолетней практике",
        },
        whyUs: {
            label: "Преимущества",
            title: "Почему выбирают нас",
            reason1: "Конфиденциальность",
            reason1Desc: "Наша компания строго соблюдает принципы конфиденциальности и надёжно защищает информацию клиентов.",
            reason2: "Гарантия соблюдения этики",
            reason2Desc: "Мы неукоснительно соблюдаем профессиональную этику адвоката, что является основой нашей работы.",
            reason3: "Чёткий и понятный договор",
            reason3Desc: "Договор, в котором подробно и прозрачно изложены все условия, чётко определены права и обязанности каждой стороны.",
            reason4: "35 лет опыта",
            reason4Desc: "Знания и опыт, накопленные за многолетнюю судебную практику, позволяют решать дела любой сложности.",
            reason5: "Индивидуальный подход",
            reason5Desc: "К каждому клиенту — индивидуальный подход: глубокий анализ ситуации и выбор наиболее эффективной стратегии.",
            reason6: "Нацеленность на результат",
            reason6Desc: "Наш приоритет — защита интересов клиента и достижение наилучшего результата.",
        },
        team: {
            title: "Наша команда",
            description: "Наша команда — это опытные адвокаты, объединённые профессионализмом, ответственностью и общей целью — защитой интересов клиента.",
            member1: "Шуйбекова Нилуфар",
            member2: "Аскарбеков Мурад",
            member3: "Мурадова Зебо",
            role: "Адвокат",
        },
        faq: {
            label: "Вопросы",
            title: "Часто задаваемые вопросы",
            q1: "Когда мне нужен адвокат?",
            a1: "При нарушении ваших прав, в судебных процессах, при возбуждении уголовного дела, имущественных спорах, вопросах наследства, заключении договоров и других юридических ситуациях адвокат окажет вам профессиональную помощь.",
            q2: "Можно ли получить консультацию до суда?",
            a2: "Да, мы предоставляем консультацию на досудебной стадии. Это поможет вам понять ситуацию и принять правильное решение.",
            q3: "Обязательно ли участие адвоката в суде?",
            a3: "По закону в некоторых случаях участие адвоката обязательно. Однако профессиональная помощь адвоката значительно повышает шансы на защиту ваших интересов в любом суде.",
            q4: "Вы работаете с частными лицами?",
            a4: "Да, мы оказываем услуги физическим и юридическим лицам по всем гражданским вопросам.",
            q5: "Можно ли решить спор без суда?",
            a5: "Да, во многих случаях спор можно решить путём переговоров, медиации или досудебного соглашения. Наши адвокаты помогут найти внесудебное решение.",
            q6: "Гарантируете ли вы положительный результат?",
            a6: "После подписания договора фирма предоставляет гарантированный подход к вашему делу. Фирма предлагает договор с гарантией только после полного ознакомления с делом.",
            q7: "Сколько длится судебное разбирательство?",
            a7: "Это зависит от типа дела и уровня суда. Простые гражданские дела могут длиться несколько месяцев, сложные уголовные — более года.",
            q8: "Можно ли обратиться онлайн?",
            a8: "Да, вы можете обратиться онлайн. Позвоните в наш call-центр, и мы организуем для вас видеозвонок с адвокатом.",
            q9: "Соблюдается ли конфиденциальность?",
            a9: "Да, адвокатская тайна строго соблюдается. Вся информация наших клиентов надёжно защищена.",
        },
        contact: {
            label: "Контакты",
            title: "Свяжитесь с нами",
            subtitle: "Свяжитесь с нами для получения ответов на ваши вопросы",
            phone: "Телефон",
            address: "Адрес",
            addressValue: "ул. Алишера Навои, 5, 1-й этаж",
            workHours: "Часы работы",
            workHoursValue: "Пн–Пт: 09:00–17:00",
            email: "Email",
            callUs: "Позвонить",
            viewMap: "Посмотреть на карте",
            writeUs: "Написать письмо",
            district: "Шайхантахурский район, Ташкент",
            ctaTitle: "Нужна юридическая помощь?",
            ctaDesc: "Позвоните прямо сейчас!",
        },
        footer: {
            description: "Профессиональная адвокатская фирма — юридическая защита и судебное представительство. 35 лет опыта.",
            pages: "Страницы",
            addressShort: "ул. Навои 5, Ташкент",
            rights: "Все права защищены",
            legal: "Деятельность осуществляется в соответствии с законодательством Республики Узбекистан",
        },
        services: {
            label: "Услуги",
            title: "Наши услуги",
            subtitle: "Профессиональная юридическая помощь для физических и юридических лиц",
            civil: "Гражданские дела",
            civilDesc: "Консультации по наследству, договорам, имущественным спорам и другим гражданским вопросам, представительство в суде.",
            criminal: "Уголовные дела",
            criminalDesc: "Профессиональная защита по уголовным делам на всех этапах следствия и в суде.",
            economic: "Экономические споры",
            economicDesc: "Досудебное и судебное урегулирование, хозяйственные договоры и исполнение решений.",
            administrative: "Административные споры",
            administrativeDesc: "Защита прав при взаимодействии с государственными органами и судебное представительство.",
            inheritance: "Наследственные споры",
            inheritanceDesc: "Консультации по вопросам наследства, подготовка документов и решение споров.",
            business: "Юридическая поддержка бизнеса",
            businessDesc: "Комплексное юридическое обслуживание и правовые консультации для бизнеса.",
            learnMore: "Подробнее",
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",            blog: "Blog",            whyUs: "Advantages",
            team: "Team",
            faq: "FAQ",
            contact: "Contact",
            call: "Call Us",
        },
        hero: {
            title: "Professional",
            titleHighlight: "law firm",
            titleEnd: "in Tashkent",
            subtitle: "Legal services for civil and criminal cases, economic and administrative disputes",
            cta: "Schedule a meeting",
            stat1: "years of successful legal practice",
            stat2: "successfully handled cases",
            stat3: "positive decisions and resolved disputes",
            lawyerName: "Gulshoda Askarbekova",
            lawyerTagline: "Law is a tool for solutions.",
        },
        about: {
            label: "About Us",
            title: "Professional legal protection — your reliable partner",
            subtitle: "Law firm with 35 years of experience. Your rights are our responsibility.",
            text1: "Askarbekova Partner is a professional law firm with 35 years of experience. We provide legal services to individuals and legal entities.",
            text2: "Our goal is to solve your problem efficiently and elegantly. We provide reliable legal protection, court representation, and comprehensive business support.",
            feature1Title: "Professional approach",
            feature1Text: "Team of experienced lawyers with deep knowledge",
            feature2Title: "Confidentiality",
            feature2Text: "Strict adherence to confidentiality principles",
            feature3Title: "Effective results",
            feature3Text: "Fast and quality problem solving for clients",
            feature4Title: "35 years of experience",
            feature4Text: "Reliable protection based on decades of practice",
        },
        services: {
            label: "Services",
            title: "Our Services",
            subtitle: "Professional legal assistance for individuals and legal entities",
            civil: "Civil Cases",
            civilDesc: "Consultations on inheritance, contracts, property disputes and other civil matters, court representation.",
            criminal: "Criminal Cases",
            criminalDesc: "Professional defense in criminal cases at all stages of investigation and in court.",
            economic: "Economic Disputes",
            economicDesc: "Pre-trial and court settlement, commercial contracts and enforcement of decisions.",
            administrative: "Administrative Disputes",
            administrativeDesc: "Protection of rights when dealing with government agencies and court representation.",
            inheritance: "Inheritance Disputes",
            inheritanceDesc: "Consultations on inheritance issues, document preparation and dispute resolution.",
            business: "Business Legal Support",
            businessDesc: "Comprehensive legal services and legal consultations for businesses.",
            learnMore: "Learn more",
        },
        whyUs: {
            label: "Advantages",
            title: "Why Choose Us",
            reason1: "Confidentiality",
            reason1Desc: "Our company strictly adheres to confidentiality principles and reliably protects client information.",
            reason2: "Ethics Guarantee",
            reason2Desc: "We strictly comply with the professional ethics of lawyers, which is the foundation of our work.",
            reason3: "Clear and Understandable Contract",
            reason3Desc: "A contract that clearly and transparently outlines all conditions, with clearly defined rights and obligations of each party.",
            reason4: "35 Years of Experience",
            reason4Desc: "Knowledge and experience accumulated through decades of court practice allow us to handle cases of any complexity.",
            reason5: "Individual Approach",
            reason5Desc: "An individual approach to each client — deep analysis of the situation and selection of the most effective strategy.",
            reason6: "Result-Oriented",
            reason6Desc: "Our priority is protecting client interests and achieving the best possible outcome.",
        },
        team: {
            title: "Our Team",
            description: "Our team consists of experienced lawyers united by professionalism, responsibility and a common goal — protecting the client's interests.",
            member1: "Shuybekova Nilufar",
            member2: "Askarbekov Murod",
            member3: "Murodova Zebo",
            role: "Lawyer",
        },
        faq: {
            label: "FAQ",
            title: "Frequently Asked Questions",
            q1: "When do I need a lawyer?",
            a1: "When your rights are violated, in court proceedings, when a criminal case is initiated, in property disputes, inheritance matters, contract conclusion, and other legal situations, a lawyer will provide you with professional assistance.",
            q2: "Can I get a consultation before court?",
            a2: "Yes, we provide a initial consultation at the pre-trial stage. This will help you understand the situation and make the right decision.",
            q3: "Is it mandatory for a lawyer to participate in court?",
            a3: "By law, in some cases the participation of a lawyer is mandatory. However, professional assistance of a lawyer significantly increases the chances of protecting your interests in any court.",
            q4: "Do you work with individuals?",
            a4: "Yes, we provide services to individuals and legal entities on all civil matters.",
            q5: "Is it possible to resolve a dispute without court?",
            a5: "Yes, in many cases a dispute can be resolved through negotiations, mediation, or pre-trial agreement. Our lawyers will help find an out-of-court solution.",
            q6: "Do you guarantee a positive result?",
            a6: "After signing the contract, the firm provides a guaranteed approach to your case. The firm offers a contract with a guarantee only after a full review of the case.",
            q7: "How long does a court proceeding last?",
            a7: "It depends on the type of case and the level of court. Simple civil cases can last several months, complex criminal cases can last more than a year.",
            q8: "Can I apply online?",
            a8: "Yes, you can apply online. Call our call center and we will arrange a video call with a lawyer for you.",
            q9: "Is confidentiality maintained?",
            a9: "Yes, attorney-client privilege is strictly maintained. All information of our clients is reliably protected.",
        },
        contact: {
            label: "Contact",
            title: "Contact Us",
            subtitle: "Contact us for answers to your questions or legal assistance",
            phone: "Phone",
            address: "Address",
            addressValue: "5 Alisher Navoi Street, 1st floor",
            workHours: "Working Hours",
            workHoursValue: "Mon–Fri: 09:00–17:00",
            email: "Email",
            callUs: "Call",
            viewMap: "View on map",
            writeUs: "Send email",
            district: "Shaykhantahur District, Tashkent",
            ctaTitle: "Need legal help?",
            ctaDesc: "Call now!",
        },
        footer: {
            description: "Professional law firm — legal protection and court representation. 35 years of experience.",
            pages: "Pages",
            addressShort: "5 Navoi Street, Tashkent",
            rights: "All rights reserved",
            legal: "Operating in accordance with the legislation of the Republic of Uzbekistan",
        },
    },
};
