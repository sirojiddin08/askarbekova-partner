export interface ServicePageData {
    slug: string;
    icon: string;
    keywords: {
        uz: string[];
        ru: string[];
        en: string[];
    };
    content: {
        uz: {
            title: string;
            metaTitle: string;
            metaDescription: string;
            heroSubtitle: string;
            sections: { heading: string; text: string }[];
            features: string[];
            faq: { q: string; a: string }[];
        };
        ru: {
            title: string;
            metaTitle: string;
            metaDescription: string;
            heroSubtitle: string;
            sections: { heading: string; text: string }[];
            features: string[];
            faq: { q: string; a: string }[];
        };
        en: {
            title: string;
            metaTitle: string;
            metaDescription: string;
            heroSubtitle: string;
            sections: { heading: string; text: string }[];
            features: string[];
            faq: { q: string; a: string }[];
        };
    };
}

export const servicesData: ServicePageData[] = [
    {
        slug: "fuqarolik-ishlari",
        icon: "FiHome",
        keywords: {
            uz: ["fuqarolik ishlari", "advokat fuqarolik ishi", "fuqarolik sud", "mol-mulk nizolari", "shartnoma nizo", "sud vakili Toshkent"],
            ru: ["гражданские дела адвокат", "гражданский адвокат Ташкент", "имущественные споры", "договорные споры", "представительство в суде", "юрист по гражданским делам"],
            en: ["civil cases lawyer Tashkent", "civil litigation Uzbekistan", "property disputes", "contract disputes lawyer"],
        },
        content: {
            uz: {
                title: "Fuqarolik ishlari",
                metaTitle: "Fuqarolik ishlari bo'yicha advokat Toshkent | Askarbekova Partner",
                metaDescription: "Fuqarolik ishlari bo'yicha professional yuridik yordam. Mol-mulk nizolari, shartnomalar, oilaviy ishlar. 35 yillik tajriba.",
                heroSubtitle: "Mol-mulk nizolari, shartnomalar va boshqa fuqarolik masalalari bo'yicha professional yuridik himoya va sud vakiligi",
                sections: [
                    {
                        heading: "Fuqarolik ishlari bo'yicha yuridik xizmatlar",
                        text: "Askarbekova Partner advokatlik firmasi fuqarolik ishlari bo'yicha keng ko'lamli yuridik xizmatlar ko'rsatadi. Bizning tajribali advokatlar jamoasi 35 yildan ortiq amaliyot davomida minglab fuqarolik ishlarini muvaffaqiyatli hal qilgan. Biz har bir mijozga individual yondashuv bilan xizmat ko'rsatamiz va eng samarali huquqiy strategiyani tanlaymiz.",
                    },
                    {
                        heading: "Qanday masalalarda yordam beramiz?",
                        text: "Biz quyidagi fuqarolik masalalari bo'yicha professional yordam ko'rsatamiz: mol-mulk nizolari va huquqlarini himoya qilish, shartnomaviy munosabatlardagi nizolar, turar-joy masalalari, mehnat nizolari, iste'molchilar huquqlarini himoya qilish, zarar va ziyonni undirib olish, hamda boshqa fuqarolik huquqiy masalalar. Har bir holatda biz mijozning manfaatlarini birinchi o'ringa qo'yamiz.",
                    },
                    {
                        heading: "Bizning ustunliklarimiz",
                        text: "Bizning advokatlar fuqarolik qonunchiligi sohasida chuqur bilimga ega. Biz har doim yangi qonun hujjatlarini kuzatib boramiz va mijozlarimizga eng zamonaviy yuridik yechimlarni taklif qilamiz. 95% dan ortiq ishlarimiz mijoz foydasiga hal qilingan. Sudgacha kelishuv imkoniyatlarini ham faol qo'llaymiz.",
                    },
                ],
                features: [
                    "Mol-mulk nizolari va huquqlarini himoya qilish",
                    "Shartnomaviy nizolarni hal qilish",
                    "Turar-joy masalalari bo'yicha maslahat",
                    "Mehnat nizolari va huquqlarini himoya",
                    "Iste'molchilar huquqlarini himoya qilish",
                    "Zarar va ziyonni undirib olish",
                ],
                faq: [
                    { q: "Fuqarolik ishi qancha vaqt davom etadi?", a: "Oddiy fuqarolik ishlari 2-4 oy ichida hal qilinadi. Murakkab holatlar 6 oydan 1 yilgacha davom etishi mumkin. Biz har doim eng tez va samarali yechim topishga harakat qilamiz." },
                    { q: "Sudgacha kelishuv mumkinmi?", a: "Ha, ko'p hollarda biz sudgacha bosqichda nizoni muzokaralar yoki mediatsiya orqali hal qilamiz. Bu vaqt va pul tejaydi." },
                    { q: "Dastlabki konsultatsiya pullikmi?", a: "Ha, dastlabki konsultatsiya pullik. Biz sizning vaziyatingizni tahlil qilamiz va eng to'g'ri yechimni taklif qilamiz." },
                ],
            },
            ru: {
                title: "Гражданские дела",
                metaTitle: "Адвокат по гражданским делам Ташкент | Аскарбекова Партнер",
                metaDescription: "Профессиональная юридическая помощь по гражданским делам в Ташкенте. Имущественные, договорные споры, представительство в суде. 35 лет опыта.",
                heroSubtitle: "Профессиональная правовая защита и представительство в суде по имущественным спорам, договорам и другим гражданским делам",
                sections: [
                    {
                        heading: "Юридические услуги по гражданским делам",
                        text: "Адвокатская фирма «Аскарбекова Партнер» оказывает широкий спектр юридических услуг по гражданским делам. Наша команда опытных адвокатов за более чем 35 лет практики успешно разрешила тысячи гражданских дел. Мы обеспечиваем индивидуальный подход к каждому клиенту и выбираем наиболее эффективную правовую стратегию.",
                    },
                    {
                        heading: "По каким вопросам мы помогаем?",
                        text: "Мы оказываем профессиональную помощь по следующим гражданским вопросам: имущественные споры и защита прав собственности, договорные споры, жилищные вопросы, трудовые споры, защита прав потребителей, взыскание ущерба и убытков, а также другие гражданско-правовые вопросы. В каждом случае интересы клиента для нас на первом месте.",
                    },
                    {
                        heading: "Наши преимущества",
                        text: "Наши адвокаты обладают глубокими знаниями в области гражданского законодательства. Мы постоянно следим за изменениями в законодательстве и предлагаем клиентам самые современные правовые решения. Более 95% дел завершены в пользу клиента. Мы активно используем возможности досудебного урегулирования споров.",
                    },
                ],
                features: [
                    "Имущественные споры и защита прав собственности",
                    "Разрешение договорных споров",
                    "Консультации по жилищным вопросам",
                    "Трудовые споры и защита прав",
                    "Защита прав потребителей",
                    "Взыскание ущерба и убытков",
                ],
                faq: [
                    { q: "Сколько длится гражданское дело?", a: "Простые гражданские дела разрешаются за 2-4 месяца. Сложные случаи могут занять от 6 месяцев до 1 года. Мы всегда стремимся найти максимально быстрое и эффективное решение." },
                    { q: "Возможно ли досудебное урегулирование?", a: "Да, во многих случаях мы разрешаем спор на досудебном этапе путём переговоров или медиации. Это экономит время и средства." },
                    { q: "Первичная консультация платная?", a: "Да, первичная консультация платная. Мы проанализируем вашу ситуацию и предложим оптимальное решение." },
                ],
            },
            en: {
                title: "Civil Cases",
                metaTitle: "Civil Cases Lawyer Tashkent | Askarbekova Partner",
                metaDescription: "Professional legal assistance in civil cases in Tashkent. Property disputes, contracts, court representation. 35 years of experience.",
                heroSubtitle: "Professional legal protection and court representation in property disputes, contracts and other civil matters",
                sections: [
                    {
                        heading: "Legal Services for Civil Cases",
                        text: "Askarbekova Partner law firm provides a wide range of legal services in civil cases. Our team of experienced lawyers has successfully resolved thousands of civil cases over more than 35 years of practice. We provide an individual approach to each client and select the most effective legal strategy.",
                    },
                    {
                        heading: "What Issues Do We Help With?",
                        text: "We provide professional assistance on the following civil matters: property disputes and property rights protection, contractual disputes, housing issues, labor disputes, consumer rights protection, damage and loss recovery, and other civil law matters. In every case, the client's interests come first.",
                    },
                    {
                        heading: "Our Advantages",
                        text: "Our lawyers have deep knowledge of civil legislation. We constantly follow changes in legislation and offer clients the most modern legal solutions. More than 95% of cases are resolved in favor of the client. We actively use pre-trial dispute resolution opportunities.",
                    },
                ],
                features: [
                    "Property disputes and rights protection",
                    "Resolution of contractual disputes",
                    "Consultations on housing issues",
                    "Labor disputes and rights protection",
                    "Consumer rights protection",
                    "Recovery of damages and losses",
                ],
                faq: [
                    { q: "How long does a civil case take?", a: "Simple civil cases are resolved within 2-4 months. Complex cases can take from 6 months to 1 year. We always strive to find the fastest and most effective solution." },
                    { q: "Is pre-trial settlement possible?", a: "Yes, in many cases we resolve disputes at the pre-trial stage through negotiations or mediation. This saves time and money." },
                    { q: "Is the initial consultation free?", a: "No, the initial consultation is paid. We will analyze your situation and suggest the best solution." },
                ],
            },
        },
    },
    {
        slug: "jinoyat-ishlari",
        icon: "FiShield",
        keywords: {
            uz: ["jinoyat ishi advokat", "jinoyat advokat Toshkent", "jinoiy ish himoya", "jinoyat qonuni", "sudlanuvchi himoyachisi"],
            ru: ["адвокат по уголовным делам Ташкент", "уголовный адвокат", "защита по уголовным делам", "уголовное дело адвокат", "защитник в суде"],
            en: ["criminal defense lawyer Tashkent", "criminal cases attorney", "defense lawyer Uzbekistan"],
        },
        content: {
            uz: {
                title: "Jinoyat ishlari",
                metaTitle: "Jinoyat ishlari bo'yicha advokat Toshkent | Askarbekova Partner",
                metaDescription: "Jinoyat ishlari bo'yicha professional himoya. Tergov, sud jarayoni barcha bosqichlarida tajribali advokat. 35 yillik amaliyot. Toshkent.",
                heroSubtitle: "Jinoyat ishlari bo'yicha barcha bosqichlarda — tergovdan to sudgacha — professional himoya va sud vakiligi",
                sections: [
                    {
                        heading: "Jinoyat ishlari bo'yicha himoya",
                        text: "Askarbekova Partner advokatlik firmasi jinoyat ishlari bo'yicha eng yuqori darajadagi professional himoyani ta'minlaydi. Bizning advokatlар jinoyat qonunchiligi sohasida 35 yildan ortiq tajribaga ega. Biz mijozlarimizning huquqlarini tergov bosqichidan boshlab sud jarayoni yakunigacha himoya qilamiz.",
                    },
                    {
                        heading: "Qanday jinoyat ishlarida yordam beramiz?",
                        text: "Biz quyidagi jinoyat ishlari bo'yicha professional himoya ko'rsatamiz: iqtisodiy jinoyatlar, mulkka qarshi jinoyatlar, shaxsga qarshi jinoyatlar, transport jinoyatlari, mansabdorlik jinoyatlari, narkotik moddalar bilan bog'liq ishlar va boshqa jinoyat ishlari. Har bir holatda biz eng samarali himoya strategiyasini ishlab chiqamiz.",
                    },
                    {
                        heading: "Nima uchun bizni tanlash kerak?",
                        text: "Jinoyat ishlari — bu advokat tajribasining eng muhim ko'rsatkichi. Bizning jamoa 35 yildan ortiq jinoyat ishlari bo'yicha tajribaga ega. Biz mijozlarimizning huquqlari va erkinliklarini himoya qilish uchun barcha qonuniy vositalardan foydalanamiz. Maxfiylik va etika tamoyillariga qat'iy rioya qilamiz.",
                    },
                ],
                features: [
                    "Tergov bosqichida himoya va vakillik",
                    "Sudda professional himoyachi sifatida qatnashish",
                    "Iqtisodiy jinoyatlar bo'yicha himoya",
                    "Apellyatsiya va kassatsiya shikoyatlari",
                    "Hibsga olish sanksiyasiga e'tirozlar",
                    "Jinoyat ishini tugatish uchun harakat",
                ],
                faq: [
                    { q: "Jinoyat ishi bo'yicha advokat qachon kerak?", a: "Advokat jinoyat ishi qo'zg'atilgan paytdan boshlab zarur. Qancha erta advokat jalb qilinsa, himoya shuncha samarali bo'ladi. Tergov bosqichida advokatsiz so'roq qilish mumkin emas." },
                    { q: "Advokat maxfiylikni saqlaydi degan kafolat bormi?", a: "Ha, advokat-mijoz maxfiyligi qonun bilan kafolatlangan. Barcha ma'lumotlar qat'iy maxfiy saqlanadi." },
                    { q: "Jinoyat ishida natija kafolatlanadimi?", a: "Biz natija kafolatlamaymiz, lekin eng samarali himoya strategiyasini qo'llaymiz. 35 yillik tajribamiz ko'plab ijobiy natijalarga erishganimizni ko'rsatadi." },
                ],
            },
            ru: {
                title: "Уголовные дела",
                metaTitle: "Адвокат по уголовным делам Ташкент | Аскарбекова Партнер",
                metaDescription: "Профессиональная защита по уголовным делам в Ташкенте. Защита на всех этапах — от следствия до суда. 35 лет практики. Конфиденциальность гарантирована.",
                heroSubtitle: "Профессиональная защита по уголовным делам на всех этапах — от следствия до суда",
                sections: [
                    {
                        heading: "Защита по уголовным делам",
                        text: "Адвокатская фирма «Аскарбекова Партнер» обеспечивает профессиональную защиту по уголовным делам высочайшего уровня. Наши адвокаты имеют более 35 лет опыта в области уголовного права. Мы защищаем права наших клиентов начиная с этапа следствия и до завершения судебного процесса.",
                    },
                    {
                        heading: "По каким уголовным делам мы помогаем?",
                        text: "Мы обеспечиваем профессиональную защиту по следующим категориям уголовных дел: экономические преступления, преступления против собственности, преступления против личности, транспортные преступления, должностные преступления, дела, связанные с наркотическими веществами, и другие уголовные дела.",
                    },
                    {
                        heading: "Почему выбирают нас?",
                        text: "Уголовные дела — это важнейший показатель опыта адвоката. Наша команда имеет более 35 лет опыта в уголовных делах. Мы используем все законные средства для защиты прав и свобод наших клиентов. Строго соблюдаем принципы конфиденциальности и профессиональной этики.",
                    },
                ],
                features: [
                    "Защита и представительство на этапе следствия",
                    "Участие в суде в качестве защитника",
                    "Защита по экономическим преступлениям",
                    "Апелляционные и кассационные жалобы",
                    "Обжалование меры пресечения",
                    "Ходатайства о прекращении уголовного дела",
                ],
                faq: [
                    { q: "Когда нужен адвокат по уголовному делу?", a: "Адвокат необходим с момента возбуждения уголовного дела. Чем раньше привлечён адвокат, тем эффективнее защита. Допрос без адвоката на этапе следствия недопустим." },
                    { q: "Гарантируется ли конфиденциальность?", a: "Да, адвокатская тайна гарантирована законом. Вся информация хранится в строгой конфиденциальности." },
                    { q: "Гарантируете ли вы результат?", a: "Мы не гарантируем результат, но применяем максимально эффективную стратегию защиты. Наш 35-летний опыт свидетельствует о множестве положительных исходов." },
                ],
            },
            en: {
                title: "Criminal Cases",
                metaTitle: "Criminal Defense Lawyer Tashkent | Askarbekova Partner",
                metaDescription: "Professional criminal defense in Tashkent. Defense at all stages — from investigation to trial. 35 years of practice. Confidentiality guaranteed.",
                heroSubtitle: "Professional defense in criminal cases at all stages — from investigation to trial",
                sections: [
                    {
                        heading: "Criminal Case Defense",
                        text: "Askarbekova Partner law firm provides the highest level of professional defense in criminal cases. Our lawyers have over 35 years of experience in criminal law. We protect our clients' rights from the investigation stage through the completion of the trial.",
                    },
                    {
                        heading: "What Criminal Cases Do We Handle?",
                        text: "We provide professional defense in the following categories of criminal cases: economic crimes, crimes against property, crimes against persons, traffic crimes, official crimes, drug-related cases, and other criminal matters.",
                    },
                    {
                        heading: "Why Choose Us?",
                        text: "Criminal cases are the most important indicator of a lawyer's experience. Our team has over 35 years of experience in criminal cases. We use all legal means to protect the rights and freedoms of our clients. We strictly adhere to principles of confidentiality and professional ethics.",
                    },
                ],
                features: [
                    "Defense and representation during investigation",
                    "Court participation as defense counsel",
                    "Defense in economic crimes",
                    "Appeal and cassation complaints",
                    "Challenging detention measures",
                    "Motions for case dismissal",
                ],
                faq: [
                    { q: "When do I need a criminal defense lawyer?", a: "A lawyer is needed from the moment a criminal case is opened. The earlier a lawyer is involved, the more effective the defense. Interrogation without a lawyer during investigation is not permitted." },
                    { q: "Is confidentiality guaranteed?", a: "Yes, attorney-client privilege is guaranteed by law. All information is kept in strict confidence." },
                    { q: "Do you guarantee results?", a: "We don't guarantee results, but we apply the most effective defense strategy. Our 35 years of experience demonstrate many positive outcomes." },
                ],
            },
        },
    },
    {
        slug: "iqtisodiy-nizolar",
        icon: "FiTrendingUp",
        keywords: {
            uz: ["iqtisodiy nizolar advokat", "biznes nizo advokat", "iqtisodiy sud Toshkent", "xo'jalik nizo", "shartnoma nizo"],
            ru: ["экономические споры адвокат Ташкент", "хозяйственные споры", "арбитражный адвокат", "бизнес спор юрист", "коммерческие споры"],
            en: ["economic disputes lawyer Tashkent", "commercial litigation", "business disputes attorney"],
        },
        content: {
            uz: {
                title: "Iqtisodiy nizolar",
                metaTitle: "Iqtisodiy nizolar bo'yicha advokat Toshkent | Askarbekova Partner",
                metaDescription: "Iqtisodiy va xo'jalik nizolari bo'yicha professional yuridik xizmat. Sudgacha va sudda hal qilish. Shartnomalar, qarorlar ijrosi. Toshkent.",
                heroSubtitle: "Iqtisodiy va xo'jalik nizolarini sudgacha va sudda professional hal qilish, shartnomalar va qarorlarni ijro ettirish",
                sections: [
                    {
                        heading: "Iqtisodiy nizolar bo'yicha yuridik xizmatlar",
                        text: "Askarbekova Partner advokatlik firmasi iqtisodiy va xo'jalik nizolari bo'yicha professional yuridik xizmatlar ko'rsatadi. Biz tadbirkorlar, kompaniyalar va tashkilotlar o'rtasidagi nizolarni samarali hal qilishda 35 yildan ortiq tajribaga egamiz. Har bir ish uchun individual strategiya ishlab chiqamiz.",
                    },
                    {
                        heading: "Qanday iqtisodiy masalalarda yordam beramiz?",
                        text: "Bizning xizmatlar orasiga quyidagilar kiradi: xo'jalik shartnomalar bo'yicha nizolar, qarz va to'lovlar bo'yicha nizolar, bankrotlik masalalari, intellektual mulk huquqlarini himoya, soliq nizolari, raqobat huquqi masalalari va korporativ nizolar. Biz har bir holatda mijoz manfaatlarini himoya qilamiz.",
                    },
                    {
                        heading: "Sudgacha va sudda vakillik",
                        text: "Biz iqtisodiy nizolarni avval sudgacha bosqichda hal qilishga harakat qilamiz. Muzokaralar, mediatsiya va kelishuv orqali vaqt va mablag' tejash mumkin. Agar sud zarur bo'lsa, bizning advokatlar iqtisodiy sudda mijoz manfaatlarini professional darajada himoya qiladi. Qarorlarni ijro ettirish bosqichida ham yordam beramiz.",
                    },
                ],
                features: [
                    "Xo'jalik shartnomalar bo'yicha nizolar",
                    "Qarz va to'lovlarni undirib olish",
                    "Bankrotlik masalalari",
                    "Intellektual mulk huquqlarini himoya",
                    "Soliq nizolari va huquqiy maslahat",
                    "Korporativ nizolar va qarorlar ijrosi",
                ],
                faq: [
                    { q: "Iqtisodiy nizoni sudsiz hal qilish mumkinmi?", a: "Ha, ko'p hollarda biz nizoni muzokaralar yoki mediatsiya orqali sudgacha hal qilamiz. Bu biznes munosabatlarni saqlab qolishga yordam beradi." },
                    { q: "Iqtisodiy sud ishlarida tajribangiz qanday?", a: "35 yildan ortiq amaliyot davomida minglab iqtisodiy ishlarni muvaffaqiyatli hal qilganmiz. Tajribamiz va bilimimiz sizga ishonchli himoyani kafolatlaydi." },
                    { q: "Shartnoma tuzishda yordam berasizmi?", a: "Ha, biz shartnomalarni tayyorlash, tekshirish va tahlil qilish bo'yicha ham xizmat ko'rsatamiz." },
                ],
            },
            ru: {
                title: "Экономические споры",
                metaTitle: "Адвокат по экономическим спорам Ташкент | Аскарбекова Партнер",
                metaDescription: "Профессиональные юридические услуги по экономическим и хозяйственным спорам. Досудебное и судебное урегулирование. Договоры, исполнение решений. Ташкент.",
                heroSubtitle: "Профессиональное разрешение экономических и хозяйственных споров — досудебное урегулирование и судебное представительство",
                sections: [
                    {
                        heading: "Юридические услуги по экономическим спорам",
                        text: "Адвокатская фирма «Аскарбекова Партнер» оказывает профессиональные юридические услуги по экономическим и хозяйственным спорам. Мы имеем более 35 лет опыта в эффективном разрешении споров между предпринимателями, компаниями и организациями. Для каждого дела разрабатываем индивидуальную стратегию.",
                    },
                    {
                        heading: "По каким экономическим вопросам мы помогаем?",
                        text: "Наши услуги включают: споры по хозяйственным договорам, взыскание задолженностей и платежей, вопросы банкротства, защита прав интеллектуальной собственности, налоговые споры, вопросы конкурентного права и корпоративные споры. В каждом случае мы защищаем интересы клиента.",
                    },
                    {
                        heading: "Досудебное и судебное представительство",
                        text: "Мы стремимся разрешить экономические споры на досудебном этапе. Переговоры, медиация и мировое соглашение позволяют сэкономить время и средства. Если суд необходим, наши адвокаты профессионально защищают интересы клиента в экономическом суде. Оказываем помощь и на этапе исполнения решений.",
                    },
                ],
                features: [
                    "Споры по хозяйственным договорам",
                    "Взыскание задолженностей и платежей",
                    "Вопросы банкротства",
                    "Защита прав интеллектуальной собственности",
                    "Налоговые споры и консультации",
                    "Корпоративные споры и исполнение решений",
                ],
                faq: [
                    { q: "Можно ли решить экономический спор без суда?", a: "Да, во многих случаях мы разрешаем спор путём переговоров или медиации на досудебном этапе. Это помогает сохранить деловые отношения." },
                    { q: "Какой у вас опыт в экономических делах?", a: "За более чем 35 лет практики мы успешно разрешили тысячи экономических дел. Наш опыт и знания гарантируют вам надёжную защиту." },
                    { q: "Помогаете ли вы с составлением договоров?", a: "Да, мы оказываем услуги по подготовке, проверке и анализу договоров." },
                ],
            },
            en: {
                title: "Economic Disputes",
                metaTitle: "Economic Disputes Lawyer Tashkent | Askarbekova Partner",
                metaDescription: "Professional legal services for economic and commercial disputes. Pre-trial and court resolution. Contracts, enforcement of decisions. Tashkent.",
                heroSubtitle: "Professional resolution of economic and commercial disputes — pre-trial settlement and court representation",
                sections: [
                    {
                        heading: "Legal Services for Economic Disputes",
                        text: "Askarbekova Partner law firm provides professional legal services for economic and commercial disputes. We have over 35 years of experience effectively resolving disputes between entrepreneurs, companies and organizations. We develop an individual strategy for each case.",
                    },
                    {
                        heading: "What Economic Issues Do We Help With?",
                        text: "Our services include: commercial contract disputes, debt and payment collection, bankruptcy issues, intellectual property rights protection, tax disputes, competition law matters and corporate disputes. In every case, we protect the client's interests.",
                    },
                    {
                        heading: "Pre-trial and Court Representation",
                        text: "We strive to resolve economic disputes at the pre-trial stage. Negotiations, mediation and settlement agreements save time and money. If court is necessary, our lawyers professionally defend the client's interests in economic court. We also assist at the decision enforcement stage.",
                    },
                ],
                features: [
                    "Commercial contract disputes",
                    "Debt and payment collection",
                    "Bankruptcy issues",
                    "Intellectual property rights protection",
                    "Tax disputes and consultations",
                    "Corporate disputes and decision enforcement",
                ],
                faq: [
                    { q: "Can economic disputes be resolved without court?", a: "Yes, in many cases we resolve disputes through negotiations or mediation at the pre-trial stage. This helps preserve business relationships." },
                    { q: "What is your experience in economic cases?", a: "In over 35 years of practice, we have successfully resolved thousands of economic cases. Our experience and knowledge guarantee you reliable protection." },
                    { q: "Do you help with contract drafting?", a: "Yes, we provide services for preparation, review and analysis of contracts." },
                ],
            },
        },
    },
    {
        slug: "mamuriy-nizolar",
        icon: "FiFileText",
        keywords: {
            uz: ["ma'muriy nizolar advokat", "davlat organlari bilan nizo", "ma'muriy sud", "ma'muriy huquq", "soliq nizo advokat"],
            ru: ["административные споры адвокат Ташкент", "административное право", "споры с государственными органами", "административный суд", "обжалование решений"],
            en: ["administrative disputes lawyer Tashkent", "government disputes attorney", "administrative law"],
        },
        content: {
            uz: {
                title: "Ma'muriy nizolar",
                metaTitle: "Ma'muriy nizolar bo'yicha advokat Toshkent | Askarbekova Partner",
                metaDescription: "Ma'muriy nizolar bo'yicha professional yuridik yordam. Davlat organlari bilan munosabatlarda huquqlarni himoya qilish. 35 yillik tajriba. Toshkent.",
                heroSubtitle: "Davlat organlari bilan munosabatlarda huquqlaringizni himoya qilish va ma'muriy sudda vakillik",
                sections: [
                    {
                        heading: "Ma'muriy nizolar bo'yicha yuridik xizmatlar",
                        text: "Askarbekova Partner advokatlik firmasi ma'muriy nizolar sohasida professional yuridik yordam ko'rsatadi. Biz fuqarolar va tashkilotlarning davlat organlari bilan bo'lgan munosabatlarida huquqlarni himoya qilamiz. 35 yildan ortiq tajribamiz ma'muriy qonunchilik bo'yicha chuqur bilimimizni ta'minlaydi.",
                    },
                    {
                        heading: "Qanday ma'muriy masalalarda yordam beramiz?",
                        text: "Biz quyidagi ma'muriy masalalar bo'yicha professional yordam ko'rsatamiz: davlat organlari qarorlarini sud orqali bekor qilish, ma'muriy jarimalarga e'tiroz bildirish, soliq organlari bilan nizolar, litsenziya va ruxsatnomalar bilan bog'liq masalalar, yer masalalari, qurilish va arxitektura sohasidagi nizolar.",
                    },
                    {
                        heading: "Ma'muriy sudda vakillik",
                        text: "Bizning advokatlар ma'muriy sudda mijozlar manfaatlarini professional darajada himoya qiladi. Biz davlat organlari qarorlariga e'tirozlar tayyorlash, ma'muriy ishlarni ko'rib chiqish jarayonida vakillik va qarorlarni ijro ettirish masalalarida yordam beramiz.",
                    },
                ],
                features: [
                    "Davlat organlari qarorlarini bekor qilish",
                    "Ma'muriy jarimalarga e'tiroz bildirish",
                    "Soliq organlari bilan nizolar",
                    "Litsenziya va ruxsatnomalar masalalari",
                    "Yer va qurilish masalalari",
                    "Ma'muriy sudda vakillik",
                ],
                faq: [
                    { q: "Davlat organi qarorini bekor qilish mumkinmi?", a: "Ha, noqonuniy qarorlar sudda bekor qilinishi mumkin. Biz sizga dalillar to'plash va sudga murojaat qilishda yordam beramiz." },
                    { q: "Ma'muriy jarimaga qanday e'tiroz bildirish mumkin?", a: "Ma'muriy jarimaga 10 kun ichida e'tiroz bildirish mumkin. Biz e'tiroz ariza tayyorlash va sudda vakillik qilishda yordam beramiz." },
                    { q: "Soliq bilan bog'liq nizolarda yordam berasizmi?", a: "Ha, soliq organlari bilan nizolar, soliq tekshiruvlari natijalari va qarorlariga e'tiroz bildirish bo'yicha professional yordam ko'rsatamiz." },
                ],
            },
            ru: {
                title: "Административные споры",
                metaTitle: "Адвокат по административным спорам Ташкент | Аскарбекова Партнер",
                metaDescription: "Профессиональная юридическая помощь по административным спорам. Защита прав при взаимодействии с госорганами. 35 лет опыта. Ташкент.",
                heroSubtitle: "Защита ваших прав при взаимодействии с государственными органами и представительство в административном суде",
                sections: [
                    {
                        heading: "Юридические услуги по административным спорам",
                        text: "Адвокатская фирма «Аскарбекова Партнер» оказывает профессиональную юридическую помощь в сфере административных споров. Мы защищаем права граждан и организаций во взаимоотношениях с государственными органами. Более 35 лет опыта обеспечивают глубокие знания административного законодательства.",
                    },
                    {
                        heading: "По каким административным вопросам мы помогаем?",
                        text: "Мы оказываем профессиональную помощь по следующим административным вопросам: обжалование решений госорганов в суде, оспаривание административных штрафов, споры с налоговыми органами, вопросы лицензирования и разрешений, земельные вопросы, споры в сфере строительства и архитектуры.",
                    },
                    {
                        heading: "Представительство в административном суде",
                        text: "Наши адвокаты профессионально защищают интересы клиентов в административном суде. Мы помогаем в подготовке жалоб на решения госорганов, представительстве при рассмотрении административных дел и вопросах исполнения решений.",
                    },
                ],
                features: [
                    "Обжалование решений государственных органов",
                    "Оспаривание административных штрафов",
                    "Споры с налоговыми органами",
                    "Вопросы лицензирования и разрешений",
                    "Земельные и строительные вопросы",
                    "Представительство в административном суде",
                ],
                faq: [
                    { q: "Можно ли отменить решение госоргана?", a: "Да, незаконные решения могут быть отменены в судебном порядке. Мы поможем вам собрать доказательства и обратиться в суд." },
                    { q: "Как обжаловать административный штраф?", a: "Административный штраф можно обжаловать в течение 10 дней. Мы помогаем в подготовке жалобы и представительстве в суде." },
                    { q: "Помогаете ли вы в налоговых спорах?", a: "Да, мы оказываем профессиональную помощь по спорам с налоговыми органами, результатам проверок и обжалованию решений." },
                ],
            },
            en: {
                title: "Administrative Disputes",
                metaTitle: "Administrative Disputes Lawyer Tashkent | Askarbekova Partner",
                metaDescription: "Professional legal assistance in administrative disputes. Protection of rights in dealings with government agencies. 35 years of experience. Tashkent.",
                heroSubtitle: "Protection of your rights in dealings with government agencies and representation in administrative court",
                sections: [
                    {
                        heading: "Legal Services for Administrative Disputes",
                        text: "Askarbekova Partner law firm provides professional legal assistance in administrative disputes. We protect the rights of citizens and organizations in their relations with government agencies. Over 35 years of experience ensure deep knowledge of administrative law.",
                    },
                    {
                        heading: "What Administrative Issues Do We Help With?",
                        text: "We provide professional assistance on: challenging government decisions in court, contesting administrative fines, disputes with tax authorities, licensing and permit issues, land matters, and disputes in construction and architecture.",
                    },
                    {
                        heading: "Administrative Court Representation",
                        text: "Our lawyers professionally defend clients' interests in administrative court. We assist in preparing complaints against government decisions, representation during administrative case hearings, and decision enforcement matters.",
                    },
                ],
                features: [
                    "Challenging government agency decisions",
                    "Contesting administrative fines",
                    "Disputes with tax authorities",
                    "Licensing and permit issues",
                    "Land and construction matters",
                    "Administrative court representation",
                ],
                faq: [
                    { q: "Can a government decision be reversed?", a: "Yes, unlawful decisions can be reversed through court. We will help you gather evidence and file a court appeal." },
                    { q: "How to contest an administrative fine?", a: "An administrative fine can be contested within 10 days. We help prepare the complaint and represent you in court." },
                    { q: "Do you help with tax disputes?", a: "Yes, we provide professional assistance with tax authority disputes, audit results, and appealing decisions." },
                ],
            },
        },
    },
    {
        slug: "meros-masalalari",
        icon: "FiHeart",
        keywords: {
            uz: ["meros advokat Toshkent", "meros masalasi", "meros nizo", "vasiyatnoma advokat", "meros huquqi"],
            ru: ["наследственные споры адвокат Ташкент", "адвокат по наследству", "наследственное дело", "оспаривание завещания", "вступление в наследство"],
            en: ["inheritance lawyer Tashkent", "inheritance disputes", "probate attorney Uzbekistan"],
        },
        content: {
            uz: {
                title: "Meros masalalari",
                metaTitle: "Meros masalalari bo'yicha advokat Toshkent | Askarbekova Partner",
                metaDescription: "Meros masalalari bo'yicha professional yuridik yordam. Vasiyatnomalar, meros nizolari, hujjatlar tayyorlash. 35 yillik tajriba.",
                heroSubtitle: "Meros masalalari bo'yicha konsultatsiya, hujjatlar tayyorlash va nizolarni professional hal qilish",
                sections: [
                    {
                        heading: "Meros masalalari bo'yicha yuridik xizmatlar",
                        text: "Askarbekova Partner advokatlik firmasi meros masalalari bo'yicha keng ko'lamli yuridik xizmatlar ko'rsatadi. Meros masalalari — bu oilaviy munosabatlar bilan chambarchas bog'liq bo'lib, ularni hal qilishda nafaqat yuridik bilim, balki insoniy munosabat va ehtiyotkorlik ham zarur. Bizning 35 yillik tajribamiz sizga ishonchli himoyani kafolatlaydi.",
                    },
                    {
                        heading: "Qanday meros masalalarida yordam beramiz?",
                        text: "Biz quyidagi meros masalalari bo'yicha professional yordam ko'rsatamiz: merosga kirishish tartibi, vasiyatnomalarni tuzish va tekshirish, vasiyatnomaga e'tiroz bildirish, merosxo'rlar o'rtasidagi nizolarni hal qilish, meros mulkini taqsimlash, meros huquqlarini tiklash va meros bo'yicha sudda vakillik.",
                    },
                    {
                        heading: "Professional va ehtiyotkor yondashuv",
                        text: "Meros masalalari ko'pincha oilaviy munosabatlar bilan bog'liq bo'lib, emotsional jihatdan murakkab bo'lishi mumkin. Biz har bir holatga ehtiyotkor va professional yondashuvni ta'minlaymiz. Bizning maqsadimiz — nizoni eng kami yo'qotishlar bilan, iloji bo'lsa kelishuv asosida hal qilish.",
                    },
                ],
                features: [
                    "Merosga kirishish tartibi va hujjatlar",
                    "Vasiyatnomalarni tuzish va tekshirish",
                    "Vasiyatnomaga e'tiroz bildirish",
                    "Merosxo'rlar o'rtasidagi nizolar",
                    "Meros mulkini taqsimlash",
                    "Meros huquqlarini tiklash",
                ],
                faq: [
                    { q: "Merosga kirishish muddati qancha?", a: "Qonunga ko'ra merosga kirishish muddati 6 oy. Bu muddatni o'tkazib yuborsangiz, sudda tiklash mumkin." },
                    { q: "Vasiyatnomani bekor qilish mumkinmi?", a: "Ha, qonuniy asoslarga ega bo'lsangiz vasiyatnomani sudda bekor qilish mumkin. Biz sizga dalillar to'plash va sudga murojaat qilishda yordam beramiz." },
                    { q: "Meros hujjatlarini tayyorlashda yordam berasizmi?", a: "Ha, biz merosga kirishish uchun zarur barcha hujjatlarni tayyorlash va notariusga topshirishda yordam beramiz." },
                ],
            },
            ru: {
                title: "Наследственные споры",
                metaTitle: "Адвокат по наследственным делам Ташкент | Аскарбекова Партнер",
                metaDescription: "Профессиональная юридическая помощь по наследственным делам. Завещания, наследственные споры, подготовка документов. 35 лет опыта.",
                heroSubtitle: "Консультации по наследственным вопросам, подготовка документов и профессиональное разрешение споров",
                sections: [
                    {
                        heading: "Юридические услуги по наследственным делам",
                        text: "Адвокатская фирма «Аскарбекова Партнер» оказывает широкий спектр услуг по наследственным делам. Наследственные вопросы тесно связаны с семейными отношениями, и для их решения необходимы не только юридические знания, но и деликатный, внимательный подход. Наш 35-летний опыт гарантирует вам надёжную защиту.",
                    },
                    {
                        heading: "По каким наследственным вопросам мы помогаем?",
                        text: "Мы оказываем профессиональную помощь по следующим наследственным вопросам: порядок вступления в наследство, составление и проверка завещаний, оспаривание завещания, разрешение споров между наследниками, раздел наследственного имущества, восстановление наследственных прав и судебное представительство.",
                    },
                    {
                        heading: "Профессиональный и деликатный подход",
                        text: "Наследственные дела часто связаны с семейными отношениями и могут быть эмоционально сложными. Мы обеспечиваем деликатный и профессиональный подход в каждом случае. Наша цель — разрешить спор с минимальными потерями, по возможности на основе мирового соглашения.",
                    },
                ],
                features: [
                    "Порядок вступления в наследство и документы",
                    "Составление и проверка завещаний",
                    "Оспаривание завещания",
                    "Споры между наследниками",
                    "Раздел наследственного имущества",
                    "Восстановление наследственных прав",
                ],
                faq: [
                    { q: "Каков срок вступления в наследство?", a: "По закону срок вступления в наследство составляет 6 месяцев. Если вы пропустили этот срок, его можно восстановить через суд." },
                    { q: "Можно ли отменить завещание?", a: "Да, при наличии законных оснований завещание может быть отменено в судебном порядке. Мы поможем вам собрать доказательства и обратиться в суд." },
                    { q: "Помогаете ли вы с подготовкой документов по наследству?", a: "Да, мы помогаем в подготовке всех необходимых документов для вступления в наследство и в подаче их нотариусу." },
                ],
            },
            en: {
                title: "Inheritance Disputes",
                metaTitle: "Inheritance Lawyer Tashkent | Askarbekova Partner",
                metaDescription: "Professional legal assistance in inheritance matters. Wills, inheritance disputes, document preparation. 35 years of experience.",
                heroSubtitle: "Consultations on inheritance matters, document preparation and professional dispute resolution",
                sections: [
                    {
                        heading: "Legal Services for Inheritance Matters",
                        text: "Askarbekova Partner law firm provides a wide range of services in inheritance matters. Inheritance issues are closely linked to family relationships, and resolving them requires not only legal knowledge but also a delicate, attentive approach. Our 35 years of experience guarantee you reliable protection.",
                    },
                    {
                        heading: "What Inheritance Issues Do We Help With?",
                        text: "We provide professional assistance on: inheritance procedures, will drafting and verification, will contestation, resolving disputes between heirs, division of inherited property, restoration of inheritance rights, and court representation.",
                    },
                    {
                        heading: "Professional and Delicate Approach",
                        text: "Inheritance cases are often linked to family relationships and can be emotionally complex. We ensure a delicate and professional approach in every case. Our goal is to resolve disputes with minimal losses, preferably through settlement agreements.",
                    },
                ],
                features: [
                    "Inheritance procedures and documents",
                    "Will drafting and verification",
                    "Will contestation",
                    "Disputes between heirs",
                    "Division of inherited property",
                    "Restoration of inheritance rights",
                ],
                faq: [
                    { q: "What is the deadline for claiming inheritance?", a: "By law, the deadline for claiming inheritance is 6 months. If you've missed this deadline, it can be restored through court." },
                    { q: "Can a will be contested?", a: "Yes, with valid legal grounds, a will can be contested in court. We will help you gather evidence and file a court appeal." },
                    { q: "Do you help with inheritance document preparation?", a: "Yes, we help prepare all necessary documents for claiming inheritance and submitting them to the notary." },
                ],
            },
        },
    },
    {
        slug: "biznes-yuridik-yordam",
        icon: "FiBriefcase",
        keywords: {
            uz: ["biznes advokat Toshkent", "yuridik xizmat biznes", "korporativ huquq", "biznes maslahat", "kompaniya tashkil etish"],
            ru: ["юридическая поддержка бизнеса Ташкент", "корпоративный юрист", "юридическое сопровождение бизнеса", "бизнес адвокат", "регистрация компании"],
            en: ["business lawyer Tashkent", "corporate legal services", "business legal support Uzbekistan"],
        },
        content: {
            uz: {
                title: "Biznes yuridik yordam",
                metaTitle: "Biznes yuridik yordam Toshkent | Askarbekova Partner",
                metaDescription: "Biznes uchun kompleks yuridik xizmat ko'rsatish. Kompaniya tashkil etish, shartnomalar, soliq maslahat, korporativ huquq. 35 yillik tajriba. Toshkent.",
                heroSubtitle: "Biznesingiz uchun kompleks yuridik xizmat ko'rsatish va huquqiy maslahatlar — kompaniya tashkil etishdan to xalqaro operatsiyalargacha",
                sections: [
                    {
                        heading: "Biznes uchun yuridik xizmatlar",
                        text: "Askarbekova Partner advokatlik firmasi biznes uchun kompleks yuridik xizmat ko'rsatish sohasida keng tajribaga ega. Biz kichik va o'rta biznesdan tortib yirik korporatsiyalargacha turli masshtabdagi kompaniyalarga yuridik yordam ko'rsatamiz. Bizning maqsadimiz — sizning biznesingiz qonuniy va samarali ishlashi uchun barcha sharoitlarni yaratish.",
                    },
                    {
                        heading: "Biznes uchun qanday xizmatlar ko'rsatamiz?",
                        text: "Bizning xizmatlar orasiga quyidagilar kiradi: kompaniya va korxonalarni ro'yxatdan o'tkazish, tijorat shartnomalarini tayyorlash va tekshirish, soliq maslahat va rejalashtirish, korporativ boshqaruv masalalari, mehnat huquqi va xodimlar bilan munosabatlar, intellektual mulk huquqlarini himoya qilish va xalqaro tijorat operatsiyalari.",
                    },
                    {
                        heading: "Doimiy yuridik hamkorlik",
                        text: "Biz bizneslar bilan doimiy yuridik hamkorlik o'rnatishni taklif qilamiz. Bu sizga kundalik faoliyatda yuzaga keladigan barcha yuridik masalalarni tezkor va samarali hal qilish imkonini beradi. Doimiy hamkorlik bir martalik konsultatsiyalarga qaraganda tejamkor va samaraliroqdir.",
                    },
                ],
                features: [
                    "Kompaniya va korxonalarni ro'yxatdan o'tkazish",
                    "Tijorat shartnomalarini tayyorlash",
                    "Soliq maslahat va rejalashtirish",
                    "Korporativ boshqaruv masalalari",
                    "Mehnat huquqi va xodimlar masalalari",
                    "Intellektual mulk huquqlarini himoya",
                ],
                faq: [
                    { q: "Kompaniya tashkil etishda yordam berasizmi?", a: "Ha, biz kompaniya tashkil etishning barcha bosqichlarida — hujjatlar tayyorlash, ro'yxatdan o'tkazish va litsenziyalash masalalarida yordam beramiz." },
                    { q: "Doimiy yuridik hamkorlik qancha turadi?", a: "Narx kompaniyaning kattaligi va ehtiyojlariga qarab belgilanadi. Biz har bir mijoz uchun individual taklif ishlab chiqamiz." },
                    { q: "Xalqaro shartnomalar bo'yicha yordam berasizmi?", a: "Ha, biz xalqaro tijorat shartnomalarini tayyorlash, tekshirish va xo'jalik faoliyatida qonuniy maslahat berish bo'yicha tajribaga egamiz." },
                ],
            },
            ru: {
                title: "Юридическая поддержка бизнеса",
                metaTitle: "Юридическая поддержка бизнеса Ташкент | Аскарбекова Партнер",
                metaDescription: "Комплексное юридическое обслуживание бизнеса. Регистрация компаний, договоры, налоговые консультации, корпоративное право. 35 лет опыта. Ташкент.",
                heroSubtitle: "Комплексное юридическое обслуживание вашего бизнеса — от регистрации компании до международных операций",
                sections: [
                    {
                        heading: "Юридические услуги для бизнеса",
                        text: "Адвокатская фирма «Аскарбекова Партнер» имеет обширный опыт в области комплексного юридического обслуживания бизнеса. Мы оказываем юридическую помощь компаниям различного масштаба — от малого и среднего бизнеса до крупных корпораций. Наша цель — создать все условия для законной и эффективной работы вашего бизнеса.",
                    },
                    {
                        heading: "Какие услуги мы оказываем бизнесу?",
                        text: "Наши услуги включают: регистрацию компаний и предприятий, подготовку и проверку коммерческих договоров, налоговые консультации и планирование, вопросы корпоративного управления, трудовое право и отношения с сотрудниками, защиту прав интеллектуальной собственности и международные коммерческие операции.",
                    },
                    {
                        heading: "Постоянное юридическое сопровождение",
                        text: "Мы предлагаем постоянное юридическое сопровождение бизнеса. Это позволяет оперативно и эффективно решать все юридические вопросы, возникающие в повседневной деятельности. Постоянное сопровождение экономичнее и эффективнее разовых консультаций.",
                    },
                ],
                features: [
                    "Регистрация компаний и предприятий",
                    "Подготовка коммерческих договоров",
                    "Налоговые консультации и планирование",
                    "Вопросы корпоративного управления",
                    "Трудовое право и вопросы с сотрудниками",
                    "Защита прав интеллектуальной собственности",
                ],
                faq: [
                    { q: "Помогаете ли вы с регистрацией компании?", a: "Да, мы помогаем на всех этапах регистрации компании — подготовка документов, регистрация и вопросы лицензирования." },
                    { q: "Сколько стоит постоянное юридическое сопровождение?", a: "Стоимость определяется в зависимости от размера компании и её потребностей. Мы разрабатываем индивидуальное предложение для каждого клиента." },
                    { q: "Помогаете ли вы с международными контрактами?", a: "Да, мы имеем опыт подготовки, проверки международных коммерческих контрактов и юридических консультаций в хозяйственной деятельности." },
                ],
            },
            en: {
                title: "Business Legal Support",
                metaTitle: "Business Legal Support Tashkent | Askarbekova Partner",
                metaDescription: "Comprehensive legal services for business. Company registration, contracts, tax consulting, corporate law. 35 years of experience. Tashkent.",
                heroSubtitle: "Comprehensive legal services for your business — from company registration to international operations",
                sections: [
                    {
                        heading: "Legal Services for Business",
                        text: "Askarbekova Partner law firm has extensive experience in comprehensive legal services for business. We provide legal assistance to companies of various scales — from small and medium businesses to large corporations. Our goal is to create all conditions for the legal and effective operation of your business.",
                    },
                    {
                        heading: "What Services Do We Provide for Business?",
                        text: "Our services include: company and enterprise registration, preparation and review of commercial contracts, tax consulting and planning, corporate governance matters, labor law and employee relations, intellectual property rights protection, and international commercial operations.",
                    },
                    {
                        heading: "Ongoing Legal Support",
                        text: "We offer ongoing legal support for businesses. This allows you to promptly and effectively resolve all legal issues that arise in daily operations. Ongoing support is more cost-effective and efficient than one-time consultations.",
                    },
                ],
                features: [
                    "Company and enterprise registration",
                    "Preparation of commercial contracts",
                    "Tax consulting and planning",
                    "Corporate governance matters",
                    "Labor law and employee matters",
                    "Intellectual property rights protection",
                ],
                faq: [
                    { q: "Do you help with company registration?", a: "Yes, we help at all stages of company registration — document preparation, registration and licensing matters." },
                    { q: "How much does ongoing legal support cost?", a: "The cost depends on the size of the company and its needs. We develop an individual proposal for each client." },
                    { q: "Do you help with international contracts?", a: "Yes, we have experience in preparing, reviewing international commercial contracts and providing legal consultations in business activities." },
                ],
            },
        },
    },
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
    return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map((s) => s.slug);
}
