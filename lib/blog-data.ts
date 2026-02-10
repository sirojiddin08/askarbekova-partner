export interface BlogPost {
  slug: string;
  category: string;
  readTime: number;
  publishDate: string;
  author: string;
  image: string;
  content: {
    uz: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      excerpt: string;
      sections: { heading: string; paragraphs: string[] }[];
      tags: string[];
    };
    ru: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      excerpt: string;
      sections: { heading: string; paragraphs: string[] }[];
      tags: string[];
    };
    en: {
      title: string;
      metaTitle: string;
      metaDescription: string;
      excerpt: string;
      sections: { heading: string; paragraphs: string[] }[];
      tags: string[];
    };
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jinoyat-ishida-advokat-qachon-kerak",
    category: "Jinoiy huquq",
    readTime: 5,
    publishDate: "2026-02-10",
    author: "Gulshoda Askarbekova",
    image: "/blog/criminal-defense.jpg",
    content: {
      uz: {
        title: "Jinoyat ishida advokat qachon kerak? | Toshkent 2026",
        metaTitle: "Jinoyat ishida advokat qachon kerak? Professional maslahat Toshkent",
        metaDescription: "Jinoyat ishi qo'zg'atilganda advokat qachon jalb qilish kerak? Qanday hollarda advokat majburiy? Professional maslahat. Toshkent, 2026.",
        excerpt: "Jinoyat ishi qo'zg'atilganda advokat jalb qilish — bu sizning asosiy huquqingiz. Lekin ko'p odamlar qachon advokat kerakligini bilmaydi. Ushbu maqolada barcha holatlarda advokat zarurligini tushuntiramiz.",
        sections: [
          {
            heading: "Jinoyat ishi qo'zg'atilishi — birinchi signal",
            paragraphs: [
              "Jinoyat ishi qo'zg'atilgan paytdan boshlab sizda advokat jalb qilish huquqi bor. Bu huquq O'zbekiston Jinoyat-protsessual kodeksida belgilangan. Advokat sizning barcha huquqlaringizni himoya qiladi va jarayonning har bir bosqichida sizni qo'llab-quvvatlaydi.",
              "Ko'p odamlar 'hali hech narsa bo'lmagan, keyinroq jalb qilaman' deb o'ylaydi. Bu eng katta xato! Tergov bosqichida berilgan ko'rsatmalar keyinchalik sudda asosiy dalil bo'lib qoladi. Shuning uchun advokat bilan dastlabki so'roqdan oldin gaplashish juda muhim.",
              "Advokat sizning huquqlaringizni tushuntiradi, qanday javob berishni maslahat beradi va qonunga xilof harakatlarning oldini oladi. Tergov organlari ba'zan bosim o'tkazishi mumkin — advokat sizni bunday vaziyatlardan himoya qiladi.",
            ],
          },
          {
            heading: "Qanday hollarda advokat majburiy?",
            paragraphs: [
              "O'zbekiston qonunchiligida ba'zi hollarda advokat jalb qilish majburiy hisoblanadi:",
              "1. Agar gumon qilinuvchi yoki sudlanuvchi voyaga yetmagan bo'lsa\n2. Agar shaxs jismoniy yoki ruhiy nuqsoni tufayli o'zini himoya qila olmasa\n3. Agar shaxs gaplasha olmasa (kar, soqov)\n4. Agar jinoyat ishi og'ir yoki ayniqsa og'ir jinoyat uchun qo'zg'atilgan bo'lsa\n5. Agar sud qaroriga ko'ra advokat kerak bo'lsa",
              "Bu hollarda agar siz advokat jalb qilmasangiz, tergovchi yoki sud sizga davlat hisobidan advokat tayinlaydi. Lekin yaxshisi — o'zingiz tanlagan tajribali advokatni jalb qiling.",
            ],
          },
          {
            heading: "Advokat qanday yordam beradi?",
            paragraphs: [
              "Tajribali jinoyat advokati quyidagi xizmatlarni ko'rsatadi:",
              "• Tergov paytida so'roqlarda qatnashish va sizning manfaatlaringizni himoya qilish\n• Dalillarni to'plash va tahlil qilish\n• Hibsga olish sanksiyasiga e'tiroz bildirish\n• Jinoyat ishini tugatish uchun ariza tayyorlash\n• Sudda professional himoya qilish\n• Apellyatsiya va kassatsiya shikoyatlari tayyorlash",
              "Advokat — bu nafaqat huquqshunos, balki sizning strategik maslahatchingiz. U har bir holatni chuqur tahlil qilib, eng yaxshi himoya usulini tanlaydi.",
            ],
          },
          {
            heading: "Advokat qachon jalb qilish kerak?",
            paragraphs: [
              "Javob oddiy: ILOJI BORICHA TEZROQ! Ideal variant — jinoyat ishi qo'zg'atilgani haqida xabar olganingizdan darhol. Hatto agar sizni hali chaqirmagan bo'lsa ham, advokat bilan maslahat qiling.",
              "Qancha erta advokat jalb qilsangiz, himoya shuncha samarali bo'ladi. Dastlabki bosqichda qilingan xatolarni keyinchalik tuzatish juda qiyin, ba'zan esa mumkin emas.",
              "Agar siz yoki yaqiningiz jinoyat ishiga oid muammoga duch kelgan bo'lsa, kechiktirmang. Professional advokat sizning huquqlaringizni himoya qiladi va eng yaxshi natijaga erishishga yordam beradi.",
            ],
          },
          {
            heading: "Askarbekova Partner — tajribali jinoyat advokatlari",
            paragraphs: [
              "Askarbekova Partner advokatlik firmasi 35 yildan ortiq jinoyat ishlari bo'yicha tajribaga ega. Bizning advokatlarimiz minglab jinoyat ishlarida muvaffaqiyatli himoya ko'rsatgan.",
              "Biz har bir mijozga individual yondashamiz va eng murakkab vaziyatlarda ham huquqlaringizni himoya qilamiz. Dastlabki konsultatsiya bepul.",
              "Agar sizga yoki yaqinlaringizga jinoyat advokati kerak bo'lsa, bugun bizga qo'ng'iroq qiling: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "jinoyat advokati",
          "advokat Toshkent",
          "jinoyat ishi",
          "huquqiy yordam",
          "tergov advokati",
        ],
      },
      ru: {
        title: "Когда нужен адвокат по уголовному делу? | Ташкент 2026",
        metaTitle: "Когда нужен адвокат по уголовному делу? Профессиональная консультация Ташкент",
        metaDescription: "Когда привлекать адвоката при возбуждении уголовного дела? В каких случаях адвокат обязателен? Профессиональная консультация. Ташкент, 2026.",
        excerpt: "Привлечение адвоката при возбуждении уголовного дела — это ваше основное право. Но многие не знают, когда именно нужен адвокат. В этой статье объясняем необходимость адвоката во всех ситуациях.",
        sections: [
          {
            heading: "Возбуждение уголовного дела — первый сигнал",
            paragraphs: [
              "С момента возбуждения уголовного дела у вас есть право привлечь адвоката. Это право закреплено в Уголовно-процессуальном кодексе Узбекистана. Адвокат защитит все ваши права и поддержит на каждом этапе процесса.",
              "Многие думают: 'Пока ничего не случилось, привлеку позже'. Это самая большая ошибка! Показания, данные на этапе следствия, становятся основными доказательствами в суде. Поэтому важно поговорить с адвокатом до первого допроса.",
              "Адвокат объяснит ваши права, посоветует, как отвечать на вопросы, и предотвратит незаконные действия. Следственные органы иногда могут давить — адвокат защитит вас от таких ситуаций.",
            ],
          },
          {
            heading: "В каких случаях адвокат обязателен?",
            paragraphs: [
              "Законодательство Узбекистана предусматривает случаи, когда участие адвоката обязательно:",
              "1. Если подозреваемый или обвиняемый несовершеннолетний\n2. Если лицо не может защищать себя из-за физических или психических недостатков\n3. Если лицо не может говорить (глухонемое)\n4. Если уголовное дело возбуждено за тяжкое или особо тяжкое преступление\n5. Если по решению суда требуется адвокат",
              "В этих случаях, если вы не привлечёте адвоката, следователь или суд назначит вам адвоката за счёт государства. Но лучше — привлеките опытного адвоката по собственному выбору.",
            ],
          },
          {
            heading: "Как помогает адвокат?",
            paragraphs: [
              "Опытный уголовный адвокат оказывает следующие услуги:",
              "• Участие в допросах на этапе следствия и защита ваших интересов\n• Сбор и анализ доказательств\n• Обжалование меры пресечения (заключение под стражу)\n• Подготовка ходатайств о прекращении уголовного дела\n• Профессиональная защита в суде\n• Подготовка апелляционных и кассационных жалоб",
              "Адвокат — это не просто юрист, а ваш стратегический советник. Он глубоко анализирует каждую ситуацию и выбирает лучший способ защиты.",
            ],
          },
          {
            heading: "Когда привлекать адвоката?",
            paragraphs: [
              "Ответ прост: КАК МОЖНО СКОРЕЕ! Идеальный вариант — сразу после получения сведений о возбуждении уголовного дела. Даже если вас ещё не вызвали, проконсультируйтесь с адвокатом.",
              "Чем раньше вы привлечёте адвоката, тем эффективнее будет защита. Ошибки, допущенные на начальном этапе, очень трудно исправить позже, а иногда — невозможно.",
              "Если вы или ваши близкие столкнулись с проблемой, связанной с уголовным делом, не медлите. Профессиональный адвокат защитит ваши права и поможет достичь лучшего результата.",
            ],
          },
          {
            heading: "Askarbekova Partner — опытные уголовные адвокаты",
            paragraphs: [
              "Адвокатская фирма Askarbekova Partner имеет более 35 лет опыта по уголовным делам. Наши адвокаты успешно защитили тысячи клиентов в уголовных делах.",
              "Мы применяем индивидуальный подход к каждому клиенту и защищаем права даже в самых сложных ситуациях. Первичная консультация бесплатная.",
              "Если вам или вашим близким нужен уголовный адвокат, позвоните нам сегодня: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "уголовный адвокат",
          "адвокат Ташкент",
          "уголовное дело",
          "юридическая помощь",
          "адвокат на следствии",
        ],
      },
      en: {
        title: "When Do You Need a Criminal Defense Lawyer? | Tashkent 2026",
        metaTitle: "When Do You Need a Criminal Defense Lawyer? Professional Advice Tashkent",
        metaDescription: "When to hire a lawyer when a criminal case is filed? In what cases is a lawyer mandatory? Professional consultation. Tashkent, 2026.",
        excerpt: "Hiring a lawyer when a criminal case is initiated is your fundamental right. But many don't know exactly when a lawyer is needed. This article explains the necessity of a lawyer in all situations.",
        sections: [
          {
            heading: "Criminal Case Initiation — First Signal",
            paragraphs: [
              "From the moment a criminal case is initiated, you have the right to hire a lawyer. This right is enshrined in the Criminal Procedure Code of Uzbekistan. A lawyer will protect all your rights and support you at every stage of the process.",
              "Many think: 'Nothing has happened yet, I'll hire one later'. This is the biggest mistake! Testimony given during the investigation stage becomes the main evidence in court. Therefore, it's important to talk to a lawyer before the first interrogation.",
              "A lawyer will explain your rights, advise you on how to answer questions, and prevent illegal actions. Investigative authorities may sometimes pressure you — a lawyer will protect you from such situations.",
            ],
          },
          {
            heading: "When Is a Lawyer Mandatory?",
            paragraphs: [
              "Uzbekistan's legislation provides cases where a lawyer's participation is mandatory:",
              "1. If the suspect or accused is a minor\n2. If the person cannot defend themselves due to physical or mental disabilities\n3. If the person cannot speak (deaf-mute)\n4. If the criminal case is for a grave or especially grave crime\n5. If required by court decision",
              "In these cases, if you don't hire a lawyer, the investigator or court will appoint a state-funded lawyer. But it's better to hire an experienced lawyer of your own choice.",
            ],
          },
          {
            heading: "How Does a Lawyer Help?",
            paragraphs: [
              "An experienced criminal lawyer provides the following services:",
              "• Participation in interrogations during investigation and protection of your interests\n• Collection and analysis of evidence\n• Challenging detention measures\n• Preparing motions to dismiss the criminal case\n• Professional defense in court\n• Preparing appeals and cassation complaints",
              "A lawyer is not just a legal expert, but your strategic advisor. They deeply analyze each situation and choose the best defense method.",
            ],
          },
          {
            heading: "When to Hire a Lawyer?",
            paragraphs: [
              "The answer is simple: AS SOON AS POSSIBLE! The ideal option is immediately after learning about the criminal case initiation. Even if you haven't been summoned yet, consult with a lawyer.",
              "The earlier you hire a lawyer, the more effective the defense will be. Mistakes made at the initial stage are very difficult to correct later, and sometimes impossible.",
              "If you or your loved ones face a problem related to a criminal case, don't delay. A professional lawyer will protect your rights and help achieve the best outcome.",
            ],
          },
          {
            heading: "Askarbekova Partner — Experienced Criminal Lawyers",
            paragraphs: [
              "Askarbekova Partner law firm has over 35 years of experience in criminal cases. Our lawyers have successfully defended thousands of clients in criminal matters.",
              "We apply an individual approach to each client and protect rights even in the most complex situations. Initial consultation is free.",
              "If you or your loved ones need a criminal lawyer, call us today: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "criminal lawyer",
          "lawyer Tashkent",
          "criminal case",
          "legal assistance",
          "defense attorney",
        ],
      },
    },
  },
  {
    slug: "meros-huquqini-qanday-himoya-qilish",
    category: "Meros huquqi",
    readTime: 6,
    publishDate: "2026-02-08",
    author: "Gulshoda Askarbekova",
    image: "/blog/inheritance-law.jpg",
    content: {
      uz: {
        title: "Meros huquqini qanday himoya qilish mumkin? | To'liq qo'llanma 2026",
        metaTitle: "Meros huquqini himoya qilish — professional maslahat Toshkent 2026",
        metaDescription: "Meros huquqingiz buzilganmi? Qanday qilib meros huquqini himoya qilish mumkin? Vasiyatnomaga e'tiroz, merosdan mahrum qilish. Professional advokat maslahati.",
        excerpt: "Meros masalalari — eng nozik va emotsional jihatdan murakkab yuridik masalalardan biri. Agar sizning meros huquqingiz buzilgan bo'lsa, uni qanday himoya qilishni bilish kerak.",
        sections: [
          {
            heading: "Meros huquqi va uning asoslari",
            paragraphs: [
              "O'zbekiston Fuqarolik kodeksiga ko'ra, merosxo'rlar ikki yo'l bilan belgilanadi: qonun bo'yicha va vasiyatnoma bo'yicha. Qonun bo'yicha meros — bu vafot etgan shaxsning eng yaqin qarindoshlari tomonidan merosni olish. Vasiyatnoma bo'yicha meros — vafot etgan shaxs o'zi ko'rsatgan shaxslarga meros qoldirish.",
              "Birinchi navbat merosxo'rlar: er yoki xotin, farzandlar, ota-ona. Ikkinchi navbat: aka-uka, opa-singil, buvi va bobo. Uchinchi navbat: amaki, tog'a, xola, amma va boshqalar. Agar birinchi navbat merosxo'rlar bo'lmasa, ikkinchi navbatga o'tiladi.",
              "Lekin amalda ko'pincha murakkab vaziyatlar yuzaga keladi: vasiyatnomalar bezor qilinadi, merosxo'rlar o'rtasida nizolar chiqadi, ba'zi merosxo'rlar merosdan mahrum qilinadi. Bunday hollarda professional advokat yordam qiladi.",
            ],
          },
          {
            heading: "Meros huquqi qachon buziladi?",
            paragraphs: [
              "Eng ko'p uchraydigan holatlar:",
              "1. Vasiyatnoma qonunga xilof tuzilgan (notarius oldida emas, imzo qalbakilashtirilgan)\n2. Vafot etgan shaxs vasiyatnoma tuzish paytida o'z harakatlarini anglamagan (kasallik, ruhiy holat)\n3. Boshqa merosxo'rlar sizni merosdan sun'iy ravishda chetlatishga harakat qilmoqda\n4. Merosga kirishish muddati (6 oy) o'tkazib yuborilgan\n5. Majburiy ulush huquqi buzilgan (voyaga yetmagan farzandlar, mehnatga layoqatsiz ota-ona)",
              "Agar yuqoridagi holatlardan birortasi bo'lsa, darhol advokatga murojaat qiling. Vaqt juda muhim — qancha erta harakat qilsangiz, huquqingizni qaytarib olish ehtimoli shuncha yuqori.",
            ],
          },
          {
            heading: "Vasiyatnomaga qanday e'tiroz bildirish mumkin?",
            paragraphs: [
              "Agar vasiyatnoma qonunga xilof deb hisoblasangiz, uni sud orqali bekor qilish mumkin. Buning uchun:",
              "• Vasiyatnoma qonun talablariga javob bermasligini isbotlash kerak (notarius oldida emas, imzo qalbakilashtirilgan, guvohlar bo'lmagan)\n• Vafot etgan shaxs vasiyatnoma tuzish paytida o'z harakatlarini anglamaganligi haqida dalillar to'plash (tibbiy hujjatlar, guvohlar ko'rsatmalari)\n• Vasiyatnoma majburlash, aldash yoki tahdid qo'llash orqali tuzilganligi haqida dalillar keltirish",
              "Tajribali meros advokati barcha zarur dalillarni to'plashda yordam beradi va sud jarayonida sizning manfaatlaringizni professional darajada himoya qiladi.",
            ],
          },
          {
            heading: "Merosga kirishish muddatini o'tkazib yuborsam?",
            paragraphs: [
              "Qonunga ko'ra merosga kirishish muddati — vafot etgan kundan boshlab 6 oy. Lekin agar bu muddatni o'tkazib yuborsangiz, tiklash mumkin. Buning uchun:",
              "• Muddatni o'tkazish sabablari muhim bo'lishi kerak (kasallik, uzoq safarда bo'lish, meros haqida bilmaslik)\n• Sud arizasi orqali muddatni tiklash so'raladi\n• Muddatni o'tkazish uchun asosli sabablar taqdim etiladi (tibbiy ma'lumotlar, xizmat safari buyrug'i va h.k.)",
              "Tajribali advokat muddat o'tkazish sabablarini to'g'ri asoslaydi va sudda sizning pozitsiyangizni himoya qiladi. Ko'p hollarda muddatni tiklash mumkin.",
            ],
          },
          {
            heading: "Majburiy ulush huquqi nima?",
            paragraphs: [
              "Majburiy ulush — bu qonun tomonidan kafolatlangan meros ulushi. Quyidagi shaxslar vasiyatnoma mavjud bo'lsa ham merosning ma'lum qismini olishga haqli:",
              "• Voyaga yetmagan farzandlar\n• Mehnatga layoqatsiz ota-ona (pensionerlar, nogironlar)\n• Mehnatga layoqatsiz er yoki xotin\n• Mehnatga layoqatsiz qaramog'idagilar",
              "Majburiy ulush — vasiyatnoma bo'yicha meros ulushining kamida yarmini tashkil etadi. Agar kimdir sizni majburiy ulushdan mahrum qilmoqchi bo'lsa, bu qonunga xilofdir.",
              "Professional advokat majburiy ulush huquqingizni himoya qiladi va sudda sizning manfaatlaringizni ta'minlaydi.",
            ],
          },
          {
            heading: "Askarbekova Partner — meros masalalari bo'yicha mutaxassislar",
            paragraphs: [
              "Askarbekova Partner advokatlik firmasi meros masalalari bo'yicha keng tajribaga ega. Biz yuzlab meros nizolarini muvaffaqiyatli hal qilganmiz.",
              "Meros masalalari oilaviy munosabatlar bilan bog'liq va ehtiyotkorlik talab qiladi. Biz har bir holatga individual va delikat yondashuvni ta'minlaymiz.",
              "Agar sizning meros huquqingiz buzilgan bo'lsa yoki meros nizosi bilan duch kelgan bo'lsangiz, bugun bizga qo'ng'iroq qiling: +998 97 778 95 40. Dastlabki konsultatsiya bepul.",
            ],
          },
        ],
        tags: [
          "meros huquqi",
          "meros advokati",
          "vasiyatnoma",
          "meros nizosi",
          "majburiy ulush",
        ],
      },
      ru: {
        title: "Как защитить свое право на наследство? | Полное руководство 2026",
        metaTitle: "Защита права на наследство — профессиональная консультация Ташкент 2026",
        metaDescription: "Нарушено ваше право на наследство? Как защитить право на наследство? Оспаривание завещания, лишение наследства. Консультация адвоката.",
        excerpt: "Наследственные вопросы — одни из самых деликатных и эмоционально сложных юридических дел. Если ваше право наследства нарушено, важно знать, как его защитить.",
        sections: [
          {
            heading: "Право наследства и его основы",
            paragraphs: [
              "Согласно Гражданскому кодексу Узбекистана, наследники определяются двумя путями: по закону и по завещанию. Наследство по закону — это получение наследства ближайшими родственниками умершего. Наследство по завещанию — оставление наследства лицам, указанным самим умершим.",
              "Наследники первой очереди: супруг(а), дети, родители. Второй очереди: братья, сёстры, бабушки и дедушки. Третьей очереди: дяди, тёти и другие. Если нет наследников первой очереди, наследство переходит ко второй очереди.",
              "Но на практике часто возникают сложные ситуации: завещания оспариваются, между наследниками возникают споры, некоторые наследники лишаются наследства. В таких случаях поможет профессиональный адвокат.",
            ],
          },
          {
            heading: "Когда нарушается право наследства?",
            paragraphs: [
              "Наиболее частые случаи:",
              "1. Завещание составлено с нарушением закона (не у нотариуса, подделка подписи)\n2. Умерший не понимал своих действий при составлении завещания (болезнь, психическое состояние)\n3. Другие наследники пытаются искусственно отстранить вас от наследства\n4. Пропущен срок вступления в наследство (6 месяцев)\n5. Нарушено право на обязательную долю (несовершеннолетние дети, нетрудоспособные родители)",
              "Если имеется хотя бы один из вышеперечисленных случаев, немедленно обратитесь к адвокату. Время очень важно — чем раньше вы действуете, тем выше вероятность вернуть ваше право.",
            ],
          },
          {
            heading: "Как оспорить завещание?",
            paragraphs: [
              "Если вы считаете, что завещание незаконно, его можно оспорить через суд. Для этого:",
              "• Нужно доказать, что завещание не соответствует требованиям закона (не у нотариуса, подделка подписи, отсутствие свидетелей)\n• Собрать доказательства того, что умерший не понимал своих действий при составлении завещания (медицинские документы, показания свидетелей)\n• Представить доказательства того, что завещание составлено под принуждением, обманом или угрозой",
              "Опытный адвокат по наследству поможет собрать все необходимые доказательства и профессионально защитит ваши интересы в суде.",
            ],
          },
          {
            heading: "Если я пропустил срок вступления в наследство?",
            paragraphs: [
              "По закону срок вступления в наследство — 6 месяцев со дня смерти. Но если вы пропустили этот срок, его можно восстановить. Для этого:",
              "• Причины пропуска срока должны быть уважительными (болезнь, длительная командировка, незнание о наследстве)\n• Через судебное заявление запрашивается восстановление срока\n• Представляются обоснованные причины пропуска срока (медицинские справки, приказ о командировке и т.д.)",
              "Опытный адвокат правильно обоснует причины пропуска срока и защитит вашу позицию в суде. Во многих случаях срок можно восстановить.",
            ],
          },
          {
            heading: "Что такое обязательная доля?",
            paragraphs: [
              "Обязательная доля — это гарантированная законом часть наследства. Следующие лица имеют право на определённую часть наследства даже при наличии завещания:",
              "• Несовершеннолетние дети\n• Нетрудоспособные родители (пенсионеры, инвалиды)\n• Нетрудоспособный супруг(а)\n• Нетрудоспособные иждивенцы",
              "Обязательная доля составляет не менее половины доли наследства по завещанию. Если кто-то пытается лишить вас обязательной доли, это незаконно.",
              "Профессиональный адвокат защитит ваше право на обязательную долю и обеспечит ваши интересы в суде.",
            ],
          },
          {
            heading: "Askarbekova Partner — эксперты по наследственным делам",
            paragraphs: [
              "Адвокатская фирма Askarbekova Partner имеет обширный опыт в наследственных делах. Мы успешно разрешили сотни наследственных споров.",
              "Наследственные дела связаны с семейными отношениями и требуют деликатности. Мы обеспечиваем индивидуальный и деликатный подход к каждому случаю.",
              "Если ваше право наследства нарушено или вы столкнулись с наследственным спором, позвоните нам сегодня: +998 97 778 95 40. Первичная консультация бесплатная.",
            ],
          },
        ],
        tags: [
          "право наследства",
          "адвокат по наследству",
          "завещание",
          "наследственный спор",
          "обязательная доля",
        ],
      },
      en: {
        title: "How to Protect Your Inheritance Rights? | Complete Guide 2026",
        metaTitle: "Protecting Inheritance Rights — Professional Consultation Tashkent 2026",
        metaDescription: "Is your inheritance right violated? How to protect inheritance rights? Contesting wills, disinheritance. Lawyer consultation.",
        excerpt: "Inheritance matters are among the most delicate and emotionally complex legal issues. If your inheritance right is violated, it's important to know how to protect it.",
        sections: [
          {
            heading: "Inheritance Rights and Their Basis",
            paragraphs: [
              "According to Uzbekistan's Civil Code, heirs are determined in two ways: by law and by will. Inheritance by law is the receipt of inheritance by the closest relatives of the deceased. Inheritance by will is leaving inheritance to persons designated by the deceased themselves.",
              "First-line heirs: spouse, children, parents. Second line: siblings, grandparents. Third line: uncles, aunts, and others. If there are no first-line heirs, inheritance passes to the second line.",
              "But in practice, complex situations often arise: wills are contested, disputes arise between heirs, some heirs are disinherited. In such cases, a professional lawyer will help.",
            ],
          },
          {
            heading: "When Is Inheritance Right Violated?",
            paragraphs: [
              "Most common cases:",
              "1. Will drawn up in violation of law (not with notary, forged signature)\n2. Deceased didn't understand their actions when making the will (illness, mental state)\n3. Other heirs trying to artificially exclude you from inheritance\n4. Missed deadline for claiming inheritance (6 months)\n5. Violated right to compulsory share (minor children, incapacitated parents)",
              "If at least one of the above cases applies, immediately contact a lawyer. Time is very important — the earlier you act, the higher the likelihood of recovering your right.",
            ],
          },
          {
            heading: "How to Contest a Will?",
            paragraphs: [
              "If you believe a will is illegal, it can be contested through court. For this:",
              "• Need to prove the will doesn't meet legal requirements (not with notary, forged signature, no witnesses)\n• Collect evidence that the deceased didn't understand their actions when making the will (medical documents, witness testimony)\n• Present evidence that the will was made under coercion, deception, or threat",
              "An experienced inheritance lawyer will help collect all necessary evidence and professionally defend your interests in court.",
            ],
          },
          {
            heading: "If I Missed the Inheritance Deadline?",
            paragraphs: [
              "By law, the deadline for claiming inheritance is 6 months from the date of death. But if you missed this deadline, it can be restored. For this:",
              "• Reasons for missing the deadline must be valid (illness, long business trip, unawareness of inheritance)\n• Through court petition, restoration of deadline is requested\n• Justified reasons for missing deadline are presented (medical certificates, business trip orders, etc.)",
              "An experienced lawyer will properly substantiate reasons for missing the deadline and defend your position in court. In many cases, the deadline can be restored.",
            ],
          },
          {
            heading: "What Is a Compulsory Share?",
            paragraphs: [
              "A compulsory share is a guaranteed by law portion of inheritance. The following persons have the right to a certain part of inheritance even with a will:",
              "• Minor children\n• Incapacitated parents (pensioners, disabled persons)\n• Incapacitated spouse\n• Incapacitated dependents",
              "The compulsory share is at least half of the inheritance share by will. If someone tries to deprive you of the compulsory share, it's illegal.",
              "A professional lawyer will defend your right to a compulsory share and ensure your interests in court.",
            ],
          },
          {
            heading: "Askarbekova Partner — Experts in Inheritance Cases",
            paragraphs: [
              "Askarbekova Partner law firm has extensive experience in inheritance cases. We have successfully resolved hundreds of inheritance disputes.",
              "Inheritance cases are related to family relationships and require delicacy. We ensure an individual and delicate approach to each case.",
              "If your inheritance right is violated or you face an inheritance dispute, call us today: +998 97 778 95 40. Initial consultation is free.",
            ],
          },
        ],
        tags: [
          "inheritance right",
          "inheritance lawyer",
          "will",
          "inheritance dispute",
          "compulsory share",
        ],
      },
    },
  },
  {
    slug: "advokat-xizmati-qancha-turadi-toshkentda",
    category: "Yuridik xizmatlar",
    readTime: 4,
    publishDate: "2026-02-05",
    author: "Gulshoda Askarbekova",
    image: "/blog/lawyer-costs.jpg",
    content: {
      uz: {
        title: "Advokat xizmati qancha turadi Toshkentda? | Tarif 2026",
        metaTitle: "Advokat xizmati narxi Toshkent 2026 — to'liq tariflar ro'yxati",
        metaDescription: "Advokat xizmati qancha turadi Toshkentda? 2026 yil tariflari, narxlar, konsultatsiya narxi. Professional advokat xizmatlarining to'liq ro'yxati va narxlar.",
        excerpt: "Advokat xizmatining narxi — bu mijozlarni eng ko'p qiziqtirgan savollardan biri. Ushbu maqolada Toshkentdagi advokat xizmatlarining 2026 yil tariflarini batafsil ko'rib chiqamiz.",
        sections: [
          {
            heading: "Advokat xizmati narxiga nima ta'sir qiladi?",
            paragraphs: [
              "Advokat xizmatining narxi bir qancha omillarga bog'liq:",
              "• Ishning murakkabligi (oddiy konsultatsiya yoki sudda himoya)\n• Advokat tajribasi va malakasi (35 yillik tajriba vs yangi advokat)\n• Ishning davomiyligi (bir marta konsultatsiya yoki uzoq muddatli himoya)\n• Sud darajalari (birinchi sud, apellyatsiya, kassatsiya)\n• Hujjatlar tayyorlash va tergovda qatnashish",
              "Professional tajribali advokat ko'proq pul talab qilishi mumkin, lekin bu sizning ishingiz uchun eng yaxshi natijadir. Arzon advokat tanlash — ko'pincha qimmatga tushadi.",
            ],
          },
          {
            heading: "Konsultatsiya narxi",
            paragraphs: [
              "Dastlabki yuridik konsultatsiya narxi odatda 200 000 dan 500 000 so'mgacha. Askarbekova Partner firmamizda birinchi konsultatsiya BEPUL.",
              "Konsultatsiya davomida advokat:",
              "• Muammoingizni chuqur tahlil qiladi\n• Mumkin bo'lgan yechimlarni tushuntiradi\n• Huquqiy pozitsiyangizni baholaydi\n• Keyingi qadamlar bo'yicha maslahat beradi\n• Ish narxi va muddatlari haqida ma'lumot beradi",
              "Dastlabki konsultatsiya — bu advokat bilan tanishish va ishingiz bo'yicha dastlabki tahlil olish imkoniyati. Shuning uchun biz uni bepul qilamiz.",
            ],
          },
          {
            heading: "Jinoyat ishlari bo'yicha tarif",
            paragraphs: [
              "Jinoyat ishlarida advokat xizmati narxi ishning murakkabligiga bog'liq:",
              "• Tergovda qatnashish: 5 000 000 — 15 000 000 so'm\n• Birinchi sud himoyasi: 7 000 000 — 25 000 000 so'm\n• Apellyatsiya sud: 5 000 000 — 15 000 000 so'm\n• Kassatsiya sud: 5 000 000 — 15 000 000 so'm",
              "Og'ir va ayniqsa og'ir jinoyat ishlari yuqori tarif talab qiladi, chunki bu ishlar ko'proq vaqt va chuqur tahlilni talab qiladi. Lekin professional himoya erkinlik va obro'-e'tiborni saqlashga yordam beradi.",
              "Jinoyat ishlarida advokat — bu nafaqat huquqshunos, balki hayotingizni saqlab qoluvchi. Shuning uchun tajribali advokatga sarmoya kiritish har doim oqlanadi.",
            ],
          },
          {
            heading: "Fuqarolik va iqtisodiy nizolar tariflari",
            paragraphs: [
              "Fuqarolik va iqtisodiy ishlar bo'yicha tarif:",
              "• Oddiy fuqarolik ishi (ajralish, aliment): 3 000 000 — 10 000 000 so'm\n• Mulkiy nizolar: 5 000 000 — 20 000 000 so'm (da'vo qiymatiga bog'liq)\n• Meros nizolari: 7 000 000 — 25 000 000 so'm\n• Biznes nizolar: 10 000 000 — 50 000 000 so'm va undan yuqori\n• Shartnoma ekspertizasi: 500 000 — 3 000 000 so'm",
              "Katta summalik nizolarda advokat xarajati odatda da'vo summasi yoki nizodagi mulk qiymatining 5-15% ni tashkil qiladi. Lekin muvaffaqiyatli sudda yutilgan summalar advokat xarajatlarini to'liq qoplaydi.",
            ],
          },
          {
            heading: "Qo'shimcha xizmatlar",
            paragraphs: [
              "Advokat xizmati faqat sudda himoya emas:",
              "• Shartnomalar tayyorlash: 1 000 000 — 5 000 000 so'm\n• Huquqiy audit (biznes uchun): 5 000 000 — 20 000 000 so'm\n• Da'vodan oldin ko'rishish: 1 000 000 — 5 000 000 so'm\n• Hujjatlar tayyorlash (ariza, shikoyat): 500 000 — 2 000 000 so'm\n• Biznes yuridik xizmat (oylik abonent): 10 000 000 — 30 000 000 so'm",
              "Oylik yuridik xizmat — bu biznesingiz uchun eng tejamkor variant. Siz har doim professional advokatga murojaat qilishingiz mumkin va barcha yuridik masalalarni yechib olasiz.",
            ],
          },
          {
            heading: "Askarbekova Partner — shaffof tarif siyosati",
            paragraphs: [
              "Askarbekova Partner firmamizda biz shaffof narxlarni ta'minlaymiz. Dastlabki konsultatsiyada sizga aniq tarif va to'lov grafigi beriladi. Hech qanday yashirin to'lovlar yo'q.",
              "Biz har bir mijozga individual yondashuvni ta'minlaymiz va murakkab moddiy vaziyatda bo'lgan mijozlar uchun to'lov rejalarini taklif qilamiz.",
              "Professional yuridik yordam — bu investitsiya, chunki u sizning huquqlaringizni, mulkingizni va erkinligingizni himoya qiladi. Dastlabki BEPUL konsultatsiya uchun bugun qo'ng'iroq qiling: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "advokat narxi",
          "advokat xizmati",
          "yuridik tarif",
          "advokat Toshkent narx",
          "konsultatsiya narxi",
        ],
      },
      ru: {
        title: "Сколько стоит услуга адвоката в Ташкенте? | Тарифы 2026",
        metaTitle: "Стоимость услуг адвоката Ташкент 2026 — полный прайс-лист",
        metaDescription: "Сколько стоит услуга адвоката в Ташкенте? Тарифы 2026 года, цены, стоимость консультации. Полный список услуг адвоката и цены.",
        excerpt: "Стоимость услуг адвоката — один из самых частых вопросов клиентов. В этой статье подробно рассмотрим тарифы на адвокатские услуги в Ташкенте на 2026 год.",
        sections: [
          {
            heading: "Что влияет на стоимость услуг адвоката?",
            paragraphs: [
              "Стоимость услуг адвоката зависит от нескольких факторов:",
              "• Сложность дела (простая консультация или защита в суде)\n• Опыт и квалификация адвоката (35 лет опыта vs начинающий адвокат)\n• Длительность дела (разовая консультация или длительная защита)\n• Судебные инстанции (первая инстанция, апелляция, кассация)\n• Подготовка документов и участие в следствии",
              "Профессиональный опытный адвокат может стоить дороже, но это лучший результат для вашего дела. Выбор дешёвого адвоката — часто обходится дороже.",
            ],
          },
          {
            heading: "Стоимость консультации",
            paragraphs: [
              "Первичная юридическая консультация обычно стоит от 200 000 до 500 000 сум. В нашей фирме Askarbekova Partner первая консультация БЕСПЛАТНА.",
              "Во время консультации адвокат:",
              "• Глубоко анализирует вашу проблему\n• Объясняет возможные решения\n• Оценивает вашу правовую позицию\n• Консультирует по дальнейшим шагам\n• Информирует о стоимости и сроках дела",
              "Первичная консультация — это возможность познакомиться с адвокатом и получить первичный анализ по вашему делу. Поэтому мы делаем её бесплатной.",
            ],
          },
          {
            heading: "Тарифы на уголовные дела",
            paragraphs: [
              "Стоимость услуг адвоката по уголовным делам зависит от сложности дела:",
              "• Участие в следствии: 5 000 000 — 15 000 000 сум\n• Защита в суде первой инстанции: 7 000 000 — 25 000 000 сум\n• Апелляционный суд: 5 000 000 — 15 000 000 сум\n• Кассационный суд: 5 000 000 — 15 000 000 сум",
              "Тяжкие и особо тяжкие уголовные дела требуют более высоких тарифов, так как эти дела требуют больше времени и глубокого анализа. Но профессиональная защита помогает сохранить свободу и репутацию.",
              "В уголовных делах адвокат — это не просто юрист, а спасатель вашей жизни. Поэтому инвестиция в опытного адвоката всегда оправдывается.",
            ],
          },
          {
            heading: "Тарифы на гражданские и экономические споры",
            paragraphs: [
              "Тарифы на гражданские и экономические дела:",
              "• Простое гражданское дело (развод, алименты): 3 000 000 — 10 000 000 сум\n• Имущественные споры: 5 000 000 — 20 000 000 сум (зависит от цены иска)\n• Наследственные споры: 7 000 000 — 25 000 000 сум\n• Бизнес-споры: 10 000 000 — 50 000 000 сум и выше\n• Экспертиза договора: 500 000 — 3 000 000 сум",
              "В крупных спорах расходы на адвоката обычно составляют 5-15% от суммы иска или стоимости имущества в споре. Но успешно выигранные в суде суммы полностью покрывают расходы на адвоката.",
            ],
          },
          {
            heading: "Дополнительные услуги",
            paragraphs: [
              "Услуги адвоката — это не только защита в суде:",
              "• Подготовка договоров: 1 000 000 — 5 000 000 сум\n• Юридический аудит (для бизнеса): 5 000 000 — 20 000 000 сум\n• Досудебное урегулирование: 1 000 000 — 5 000 000 сум\n• Подготовка документов (заявления, жалобы): 500 000 — 2 000 000 сум\n• Бизнес юридическое обслуживание (ежемесячный абонемент): 10 000 000 — 30 000 000 сум",
              "Ежемесячное юридическое обслуживание — это самый экономный вариант для вашего бизнеса. Вы всегда можете обратиться к профессиональному адвокату и решить все юридические вопросы.",
            ],
          },
          {
            heading: "Askarbekova Partner — прозрачная тарифная политика",
            paragraphs: [
              "В нашей фирме Askarbekova Partner мы обеспечиваем прозрачные цены. На первой консультации вам будет предоставлен точный тариф и график оплаты. Никаких скрытых платежей.",
              "Мы обеспечиваем индивидуальный подход к каждому клиенту и предлагаем планы оплаты для клиентов в сложной финансовой ситуации.",
              "Профессиональная юридическая помощь — это инвестиция, так как она защищает ваши права, имущество и свободу. Для первой БЕСПЛАТНОЙ консультации звоните сегодня: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "стоимость адвоката",
          "услуги адвоката",
          "юридические тарифы",
          "адвокат Ташкент цены",
          "стоимость консультации",
        ],
      },
      en: {
        title: "How Much Does a Lawyer Cost in Tashkent? | Rates 2026",
        metaTitle: "Lawyer Service Costs Tashkent 2026 — Full Price List",
        metaDescription: "How much does a lawyer cost in Tashkent? 2026 rates, prices, consultation cost. Complete list of lawyer services and prices.",
        excerpt: "The cost of lawyer services is one of the most frequent client questions. This article provides a detailed look at lawyer service rates in Tashkent for 2026.",
        sections: [
          {
            heading: "What Affects Lawyer Service Costs?",
            paragraphs: [
              "Lawyer service costs depend on several factors:",
              "• Case complexity (simple consultation or court defense)\n• Lawyer experience and qualifications (35 years experience vs new lawyer)\n• Case duration (one-time consultation or long-term defense)\n• Court levels (first instance, appeal, cassation)\n• Document preparation and investigation participation",
              "A professional experienced lawyer may cost more, but it's the best result for your case. Choosing a cheap lawyer — often costs more.",
            ],
          },
          {
            heading: "Consultation Cost",
            paragraphs: [
              "Initial legal consultation usually costs from 200,000 to 500,000 soums. At our firm Askarbekova Partner, the first consultation is FREE.",
              "During consultation, the lawyer:",
              "• Deeply analyzes your problem\n• Explains possible solutions\n• Assesses your legal position\n• Advises on next steps\n• Informs about case cost and timelines",
              "Initial consultation is an opportunity to meet the lawyer and get initial analysis of your case. That's why we make it free.",
            ],
          },
          {
            heading: "Criminal Case Rates",
            paragraphs: [
              "Lawyer service cost for criminal cases depends on case complexity:",
              "• Investigation participation: 5,000,000 — 15,000,000 soums\n• First instance court defense: 7,000,000 — 25,000,000 soums\n• Appeal court: 5,000,000 — 15,000,000 soums\n• Cassation court: 5,000,000 — 15,000,000 soums",
              "Grave and especially grave criminal cases require higher rates, as these cases require more time and deep analysis. But professional defense helps preserve freedom and reputation.",
              "In criminal cases, a lawyer is not just a legal expert, but a life saver. Therefore, investment in an experienced lawyer always pays off.",
            ],
          },
          {
            heading: "Civil and Economic Dispute Rates",
            paragraphs: [
              "Rates for civil and economic cases:",
              "• Simple civil case (divorce, alimony): 3,000,000 — 10,000,000 soums\n• Property disputes: 5,000,000 — 20,000,000 soums (depends on claim value)\n• Inheritance disputes: 7,000,000 — 25,000,000 soums\n• Business disputes: 10,000,000 — 50,000,000 soums and higher\n• Contract review: 500,000 — 3,000,000 soums",
              "In large disputes, lawyer expenses usually constitute 5-15% of the claim amount or property value in dispute. But successfully won court sums fully cover lawyer expenses.",
            ],
          },
          {
            heading: "Additional Services",
            paragraphs: [
              "Lawyer services are not only court defense:",
              "• Contract preparation: 1,000,000 — 5,000,000 soums\n• Legal audit (for business): 5,000,000 — 20,000,000 soums\n• Pre-trial settlement: 1,000,000 — 5,000,000 soums\n• Document preparation (applications, complaints): 500,000 — 2,000,000 soums\n• Business legal service (monthly retainer): 10,000,000 — 30,000,000 soums",
              "Monthly legal service is the most economical option for your business. You can always contact a professional lawyer and resolve all legal issues.",
            ],
          },
          {
            heading: "Askarbekova Partner — Transparent Pricing Policy",
            paragraphs: [
              "At our firm Askarbekova Partner, we ensure transparent pricing. At the first consultation, you will be provided with exact rates and payment schedule. No hidden fees.",
              "We provide an individual approach to each client and offer payment plans for clients in difficult financial situations.",
              "Professional legal assistance is an investment, as it protects your rights, property, and freedom. For the first FREE consultation, call today: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "lawyer cost",
          "lawyer services",
          "legal rates",
          "lawyer Tashkent prices",
          "consultation cost",
        ],
      },
    },
  },
  {
    slug: "shartnoma-tuzishda-xatolardan-qochish",
    category: "Biznes huquq",
    readTime: 5,
    publishDate: "2026-02-03",
    author: "Gulshoda Askarbekova",
    image: "/blog/contract-mistakes.jpg",
    content: {
      uz: {
        title: "Shartnoma tuzishda qanday xatolardan qochish kerak? | 2026",
        metaTitle: "Shartnoma tuzishda eng katta xatolar va ulardan qanday qochish? Toshkent 2026",
        metaDescription: "Shartnoma tuzishda eng ko'p uchraydigan xatolar va ulardan qanday qochish? Professional advokat maslahati. Biznes uchun zarur ma'lumot.",
        excerpt: "Shartnoma — biznesingiz va shaxsiy hayotingiz uchun muhim hujjat. Lekin ko'p odamlar va kompaniyalar shartnoma tuzishda jiddiy xatolarga yo'l qo'yadilar. Bu xatolar million so'mlarga olib kelishi mumkin.",
        sections: [
          {
            heading: "Xato #1: Og'zaki kelishuvga ishonish",
            paragraphs: [
              "Eng katta xato — 'biz do'stmiz, hamma narsani og'zaki kelishib oldik' deb o'ylash. O'zbekiston qonunchiligida ko'plab shartnomalar yozma shaklda bo'lishi shart. Og'zaki kelishuvlarni sudda isbotlash juda qiyin.",
              "Hatto eng yaqin do'stingiz bilan ham biznes aloqalarda yozma shartnoma tuzing. Bu ikki tomonni ham himoya qiladi va noaniqlikni bartaraf etadi.",
              "Muhim: Quyidagi shartnomalar MAJBURIY yozma shaklda bo'lishi kerak: ko'chmas mulk shartnomasi, kredit shartnomasi, kafolat shartnomasi, ishonchnoma, meros shartnomasi. Aks holda shartnoma haqiqiy emas.",
            ],
          },
          {
            heading: "Xato #2: Internet shablonlaridan nusxa ko'chirish",
            paragraphs: [
              "Ko'p odamlar internetdan shartnoma shablonini yuklab olib, o'z nomini qo'yib imzolaydi. Bu juda xavfli!",
              "Internetdagi shablonlar:",
              "• Sizning vaziyatingizga mos kelmasligi mumkin\n• O'zbekiston qonunlariga mos kelmasligi mumkin (chet el shablonlari)\n• Eski va bekor bo'lgan qonunlarga asoslangan bo'lishi mumkin\n• Sizning manfaatlaringizni himoya qilmasligi mumkin",
              "Har bir shartnoma individual vaziyatga moslab tayyorlanishi kerak. Professional advokat shartnomani sizning manfaatlaringizni hisobga olgan holda tuzadi.",
            ],
          },
          {
            heading: "Xato #3: Barcha shartlarni aniq yozmaslik",
            paragraphs: [
              "Shartnomada quyidagi shartlar aniq ko'rsatilishi kerak:",
              "• To'lov summasi va to'lov grafigi (qachon, qancha, qanday)\n• Xizmat yoki mahsulot yetkazish muddatlari (aniq sanalar)\n• Tomonlarning majburiyatlari (kim nimani qilishi kerak)\n• Javobgarlik va jarimalar (majburiyatni bajarmasa nima bo'ladi)\n• Nizolarni hal qilish tartibi (sud yoki arbitraj)\n• Shartnomani bekor qilish shartlari",
              "Noaniq shartlar — bu kelgusidagi nizolarning manbai. 'Yaqin kelajakda', 'razm miqdorda', 'o'z-o'zidan tushunarli' kabi iboralardan qoching.",
            ],
          },
          {
            heading: "Xato #4: Kontr-agentni tekshirmaslik",
            paragraphs: [
              "Shartnoma imzolashdan oldin ikkinchi tomonni tekshirish juda muhim:",
              "• Kompaniya davlat reestriga kiritilganmi? (soliq.uz orqali tekshirish)\n• Kompaniya rahbari kim va uning vakolatlari bormi?\n• Kompaniya aktiv va to'lovga qobilmi?\n• Kompaniyaning sudlardagi nizolari bormi?\n• Kompaniya obro'si va sharhlari qanday?",
              "Agar kompaniya yaroqsiz, bankrot yoki 'firma yashovchi' bo'lsa, shartnoma hech qanday yaroqsiz bo'ladi. Pul va vaqtingizni yo'qotasiz.",
              "Professional advokat kontr-agent yuridik holatini to'liq tekshiradi va xavflarni ogohlantirishadi.",
            ],
          },
          {
            heading: "Xato #5: Imzolaganingizni o'qimaslik",
            paragraphs: [
              "Shoshqaloqlikda shartnomani o'qimay imzolash — keng tarqalgan va xavfli xato. Shartnomada:",
              "• Yashirin to'lovlar va jarimalar bo'lishi mumkin\n• Siz rozi bo'lmagan shartlar kiritilgan bo'lishi mumkin\n• Bir tomonlama majburiyatlar belgilangan bo'lishi mumkin\n• Sizning huquqlaringizni cheklovchi bandlar bo'lishi mumkin",
              "HAR DOIM shartnomani boshdan-oxiri o'qing. Tushunmagan bandlar bo'lsa — advokatdan tushuntirish so'rang. Imzo qo'yish — rozilikning belgisi, bilmaslik sizni oqlamaydi.",
              "Yodda tuting: Shartnomani tuzish va tekshirish uchun advokatga to'laydigan pul — bu kelgusidagi nizolar va yo'qotishlardan saqlaydi. Bu eng tejamkor investitsiya!",
            ],
          },
          {
            heading: "Askarbekova Partner — shartnomalar bo'yicha mutaxassislar",
            paragraphs: [
              "Askarbekova Partner advokatlik firmasi shartnomalarni tayyorlash va ekspertiza qilish bo'yicha katta tajribaga ega. Biz har yili minglab shartnomalarni tekshiramiz va mijozlarimizni million so'mlik yo'qotishlardan saqlaymiz.",
              "Bizning xizmatlar:",
              "• Har qanday turdagi shartnomalarni tayyorlash (savdo, xizmat, mehnat, rent va h.k.)\n• Mavjud shartnomalarni ekspertiza qilish va xavflarni aniqlash\n• Shartnoma muzokaralarida qatnashish\n• Shartnoma nizolarini suddan oldin va sudda hal qilish",
              "Shartnoma tuzishdan oldin professional maslahat oling. Dastlabki konsultatsiya bepul: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "shartnoma",
          "shartnoma xatolari",
          "biznes yuridik",
          "shartnoma advokati",
          "yuridik ekspertiza",
        ],
      },
      ru: {
        title: "Каких ошибок избегать при заключении договора? | 2026",
        metaTitle: "Самые большие ошибки при заключении договора и как их избежать? Ташкент 2026",
        metaDescription: "Самые частые ошибки при заключении договоров и как их избежать? Профессиональная консультация адвоката. Важная информация для бизнеса.",
        excerpt: "Договор — важный документ для вашего бизнеса и личной жизни. Но многие люди и компании допускают серьёзные ошибки при заключении договоров. Эти ошибки могут стоить миллионы сумов.",
        sections: [
          {
            heading: "Ошибка #1: Доверять устным договорённостям",
            paragraphs: [
              "Самая большая ошибка — думать 'мы друзья, договорились устно обо всём'. Законодательство Узбекистана требует письменной формы для многих договоров. Устные договорённости очень трудно доказать в суде.",
              "Даже с самым близким другом заключайте письменный договор в деловых отношениях. Это защищает обе стороны и устраняет неопределённость.",
              "Важно: Следующие договоры ОБЯЗАТЕЛЬНО должны быть в письменной форме: договор недвижимости, кредитный договор, договор поручительства, доверенность, наследственный договор. Иначе договор недействителен.",
            ],
          },
          {
            heading: "Ошибка #2: Копировать шаблоны из интернета",
            paragraphs: [
              "Многие скачивают шаблон договора из интернета, вписывают своё имя и подписывают. Это очень опасно!",
              "Шаблоны из интернета:",
              "• Могут не подходить к вашей ситуации\n• Могут не соответствовать законам Узбекистана (зарубежные шаблоны)\n• Могут быть основаны на устаревших и отменённых законах\n• Могут не защищать ваши интересы",
              "Каждый договор должен быть подготовлен с учётом индивидуальной ситуации. Профессиональный адвокат составит договор с учётом ваших интересов.",
            ],
          },
          {
            heading: "Ошибка #3: Не прописывать все условия чётко",
            paragraphs: [
              "В договоре должны быть чётко указаны следующие условия:",
              "• Сумма оплаты и график платежей (когда, сколько, как)\n• Сроки поставки услуги или продукта (точные даты)\n• Обязанности сторон (кто что должен делать)\n• Ответственность и штрафы (что будет, если не выполнит обязательство)\n• Порядок разрешения споров (суд или арбитраж)\n• Условия расторжения договора",
              "Неопределённые условия — это источник будущих споров. Избегайте фраз типа 'в ближайшее время', 'в разумном размере', 'само собой разумеется'.",
            ],
          },
          {
            heading: "Ошибка #4: Не проверять контрагента",
            paragraphs: [
              "Перед подписанием договора очень важно проверить вторую сторону:",
              "• Компания зарегистрирована в государственном реестре? (проверка через soliq.uz)\n• Кто руководитель компании и есть ли у него полномочия?\n• Компания активна и платёжеспособна?\n• Есть ли у компании споры в судах?\n• Какова репутация и отзывы о компании?",
              "Если компания недействительна, банкрот или 'фирма-однодневка', договор будет бесполезен. Вы потеряете деньги и время.",
              "Профессиональный адвокат полностью проверит юридический статус контрагента и предупредит о рисках.",
            ],
          },
          {
            heading: "Ошибка #5: Не читать то, что подписываешь",
            paragraphs: [
              "Подписание договора в спешке, не читая — распространённая и опасная ошибка. В договоре могут быть:",
              "• Скрытые платежи и штрафы\n• Включены условия, с которыми вы не согласны\n• Установлены односторонние обязательства\n• Пункты, ограничивающие ваши права",
              "ВСЕГДА читайте договор от начала до конца. Если есть непонятные пункты — попросите адвоката объяснить. Подпись — знак согласия, незнание не оправдывает.",
              "Помните: Деньги, которые вы платите адвокату за составление и проверку договора — это защита от будущих споров и потерь. Это самая экономная инвестиция!",
            ],
          },
          {
            heading: "Askarbekova Partner — специалисты по договорам",
            paragraphs: [
              "Адвокатская фирма Askarbekova Partner имеет большой опыт в подготовке и экспертизе договоров. Мы ежегодно проверяем тысячи договоров и спасаем наших клиентов от миллионных потерь.",
              "Наши услуги:",
              "• Подготовка любых видов договоров (купли-продажи, услуг, трудовых, аренды и т.д.)\n• Экспертиза существующих договоров и выявление рисков\n• Участие в переговорах по договору\n• Разрешение договорных споров досудебно и в суде",
              "Получите профессиональную консультацию перед заключением договора. Первичная консультация бесплатная: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "договор",
          "ошибки в договорах",
          "бизнес юриспруденция",
          "адвокат по договорам",
          "юридическая экспертиза",
        ],
      },
      en: {
        title: "What Mistakes to Avoid When Making a Contract? | 2026",
        metaTitle: "Biggest Mistakes When Making a Contract and How to Avoid Them? Tashkent 2026",
        metaDescription: "Most common mistakes when concluding contracts and how to avoid them? Professional lawyer consultation. Essential business information.",
        excerpt: "A contract is an important document for your business and personal life. But many people and companies make serious mistakes when concluding contracts. These mistakes can cost millions of soums.",
        sections: [
          {
            heading: "Mistake #1: Trusting Oral Agreements",
            paragraphs: [
              "The biggest mistake is thinking 'we're friends, we agreed on everything orally'. Uzbekistan's legislation requires written form for many contracts. Oral agreements are very difficult to prove in court.",
              "Even with your closest friend, make a written contract in business relations. This protects both sides and eliminates uncertainty.",
              "Important: The following contracts MUST be in written form: real estate contract, credit agreement, guarantee agreement, power of attorney, inheritance contract. Otherwise, the contract is invalid.",
            ],
          },
          {
            heading: "Mistake #2: Copying Templates from the Internet",
            paragraphs: [
              "Many download a contract template from the internet, fill in their name, and sign. This is very dangerous!",
              "Internet templates:",
              "• May not fit your situation\n• May not comply with Uzbekistan laws (foreign templates)\n• May be based on outdated and repealed laws\n• May not protect your interests",
              "Each contract should be prepared taking into account the individual situation. A professional lawyer will draft a contract considering your interests.",
            ],
          },
          {
            heading: "Mistake #3: Not Clearly Defining All Terms",
            paragraphs: [
              "The contract must clearly specify the following terms:",
              "• Payment amount and payment schedule (when, how much, how)\n• Service or product delivery deadlines (exact dates)\n• Parties' obligations (who should do what)\n• Liability and penalties (what happens if obligation not fulfilled)\n• Dispute resolution procedure (court or arbitration)\n• Contract termination conditions",
              "Vague terms are a source of future disputes. Avoid phrases like 'in the near future', 'in reasonable amount', 'goes without saying'.",
            ],
          },
          {
            heading: "Mistake #4: Not Checking the Counterparty",
            paragraphs: [
              "Before signing a contract, it's very important to check the other party:",
              "• Is the company registered in the state register? (check via soliq.uz)\n• Who is the company director and do they have authority?\n• Is the company active and solvent?\n• Does the company have court disputes?\n• What is the company's reputation and reviews?",
              "If the company is invalid, bankrupt, or a 'shell company', the contract will be useless. You'll lose money and time.",
              "A professional lawyer will fully check the counterparty's legal status and warn about risks.",
            ],
          },
          {
            heading: "Mistake #5: Not Reading What You Sign",
            paragraphs: [
              "Signing a contract in haste without reading — a common and dangerous mistake. The contract may contain:",
              "• Hidden payments and penalties\n• Included terms you don't agree with\n• Established one-sided obligations\n• Clauses restricting your rights",
              "ALWAYS read the contract from beginning to end. If there are unclear clauses — ask a lawyer to explain. A signature is a sign of consent, ignorance doesn't excuse.",
              "Remember: The money you pay a lawyer for drafting and reviewing a contract is protection from future disputes and losses. This is the most economical investment!",
            ],
          },
          {
            heading: "Askarbekova Partner — Contract Specialists",
            paragraphs: [
              "Askarbekova Partner law firm has extensive experience in contract preparation and review. We annually review thousands of contracts and save our clients from million-sum losses.",
              "Our services:",
              "• Preparation of any type of contract (sale, service, employment, lease, etc.)\n• Review of existing contracts and risk identification\n• Participation in contract negotiations\n• Resolution of contract disputes pre-trial and in court",
              "Get professional consultation before concluding a contract. Initial consultation is free: +998 97 778 95 40",
            ],
          },
        ],
        tags: [
          "contract",
          "contract mistakes",
          "business law",
          "contract lawyer",
          "legal review",
        ],
      },
    },
  },
  {
    slug: "fuqarolik-ishida-advokat-zarurmi",
    category: "Fuqarolik huquq",
    readTime: 5,
    publishDate: "2026-02-01",
    author: "Gulshoda Askarbekova",
    image: "/blog/civil-lawyer.jpg",
    content: {
      uz: {
        title: "Fuqarolik ishida advokat zarurmi? | Professional maslahat 2026",
        metaTitle: "Fuqarolik ishida advokat zarurmi? Qachon kerak? Toshkent 2026",
        metaDescription: "Fuqarolik ishida advokat kerakmi? Qanday hollarda advokat zarur? Ajralish, mulkiy nizolar, aliment. Professional advokat maslahati Toshkent.",
        excerpt: "Fuqarolik ishi — bu ajralish, mulkiy nizolar, aliment, shartnomalar va boshqa shaxsiy huquq munosabatlari. Ko'p odamlar 'oddiy ish, o'zim hal qilaman' deb o'ylaydi. Lekin bu xavfli!",
        sections: [
          {
            heading: "Fuqarolik ishi nima?",
            paragraphs: [
              "Fuqarolik ishlari — bu shaxslar o'rtasidagi nizolarni sud orqali hal qilish. Eng keng tarqalgan fuqarolik ishlari:",
              "• Ajralish va oila nizolari (farzandlarni tarbiyalash, aliment)\n• Mulkiy nizolar (uy-joy, yer, avtomobil)\n• Shartnoma nizolari (shartnomani bajarmaslik, qarz qaytarmaslik)\n• Meros nizolari (merosni taqsimlash, vasiyatnomaga e'tiroz)\n• Iste'mol huquqlari (sifatsiz mahsulot, xizmat)",
              "Fuqarolik jarayoni murakkab va ko'p qoidalarga ega. Bir xato butun ishni yo'qotishga olib kelishi mumkin.",
            ],
          },
          {
            heading: "Qanday hollarda advokat MAJBURIY?",
            paragraphs: [
              "O'zbekiston qonunchiligida ba'zi fuqarolik ishlarida advokat yoki vakil talab qilinadi:",
              "• Agar siz boshqa shaharda yashaysiz va sudga kela olmaysiz\n• Agar siz kasallik yoki nogironlik tufayli sudda qatnasha olmaysiz\n• Agar ish yuqori sud (apellyatsiya, kassatsiya) darajasida\n• Agar ikkinchi tomonning professional advokati bor",
              "Lekin qonun majburiy bo'lmasa ham, fuqarolik ishlari bo'yicha advokat jalb qilish doimo foydali. Chunki professional himoya sizning muvaffaqiyatingizni 2-3 baravar oshiradi.",
            ],
          },
          {
            heading: "Advokat qanday yordam beradi?",
            paragraphs: [
              "Tajribali fuqarolik advokati quyidagi xizmatlarni ko'rsatadi:",
              "• Da'vo arizasini professional tayyorlash (noto'g'ri da'vo — yo'qotilgan ish)\n• Barcha zarur dalillarni to'plash va taqdim etish\n• Sudda sizning manfaatlaringizni himoya qilish\n• Qarama-qarshi tomonning dalillariga professional javob berish\n• Sudning noto'g'ri qarorlariga e'tiroz bildirish (apellyatsiya, kassatsiya)\n• Ijro jarayonini nazorat qilish (sud qarori ijro etilishini ta'minlash)",
              "Advokatning eng muhim vazifasi — sudni sizning pozitsiyangiz to'g'ri ekanligiga ishontirish. Buning uchun yuridik bilim va tajriba kerak.",
            ],
          },
          {
            heading: "Advokatsiz nimalar yo'qoladi?",
            paragraphs: [
              "Agar advokatni jalb qilmasangiz, quyidagi muammolarga duch kelasiz:",
              "• Da'vo arizasi noto'g'ri tuziladi va sud rad etadi\n• Zarur dalillar to'planmaydi va sud sizni ishonmaydi\n• Protsessual muddatlar o'tkazib yuboriladi (hujjat taqdim etish muddati, e'tiroz muddati)\n• Sud majlislarida nimani aytish kerakligini bilmaysiz\n• Ikkinchi tomonning advokati sizni 'mag'lub etadi'\n• Sud qarori sizning zararingizga chiqadi",
              "Statistika shuni ko'rsatadiki: Advokatli tomonning g'alabasiga erishish ehtimoli 60-70%, advokatsiz — faqat 20-30%. Farq aniq!",
              "Advokat — bu nafaqat yuridik bilim, balki sud jarayonlari tajribasi, psixologik tayyorgarlik va strategik fikrlash.",
            ],
          },
          {
            heading: "Ajralish ishida advokat kerakmi?",
            paragraphs: [
              "Ajralish — eng keng tarqalgan fuqarolik ishi. Ko'pchilik 'oddiy ajralish, advokat kerak emas' deb o'ylaydi. Lekin:",
              "• Agar farzandlar bor — kim bilan qoladi, aliment qancha?\n• Agar umumiy mulk bor — uy, mashina, mebel qanday bo'linadi?\n• Agar ikkinchi tomonning advokati bor — u sizni aldaydi va ko'proq oladi\n• Agar er yoki xotin ajrashishga rozi emas — sud jarayoni uzoq va murakkab",
              "Tajribali oilaviy advokat sizning huquqlaringizni himoya qiladi, farzandlar bilan ko'rishish tartibini belgilaydi va mulkni adolatli taqsimlashga erishadi.",
              "Ajralish — bu nafaqat yuridik, balki emotsional jarayon. Advokat sizga professional maslahat beradi va eng yaxshi natiajga erishishga yordam beradi.",
            ],
          },
          {
            heading: "Askarbekova Partner — fuqarolik ishlari bo'yicha mutaxassislar",
            paragraphs: [
              "Askarbekova Partner advokatlik firmasi fuqarolik ishlari bo'yicha 35 yillik tajribaga ega. Biz minglab fuqarolik nizolarini muvaffaqiyatli hal qilganmiz:",
              "• Ajralish va oila nizolari\n• Mulkiy da'volar\n• Shartnoma nizolari\n• Meros ishlari\n• Iste'mol huquqlarini himoya qilish",
              "Biz har bir mijozga individual yondashamiz va maksimal natijaga erishish uchun harakat qilamiz. Dastlabki konsultatsiya bepul.",
              "Agar sizda fuqarolik ishi bor yoki nizoga duch kelgan bo'lsangiz, bugun bizga qo'ng'iroq qiling: +998 97 778 95 40. Professional advokat sizning huquqlaringizni himoya qiladi!",
            ],
          },
        ],
        tags: [
          "fuqarolik advokati",
          "ajralish advokati",
          "mulkiy nizolar",
          "oilaviy huquq",
          "advokat Toshkent",
        ],
      },
      ru: {
        title: "Нужен ли адвокат в гражданском деле? | Профессиональная консультация 2026",
        metaTitle: "Нужен ли адвокат в гражданском деле? Когда нужен? Ташкент 2026",
        metaDescription: "Нужен ли адвокат в гражданском деле? В каких случаях адвокат необходим? Развод, имущественные споры, алименты. Консультация адвоката Ташкент.",
        excerpt: "Гражданское дело — это развод, имущественные споры, алименты, договоры и другие личные правовые отношения. Многие думают 'простое дело, сам справлюсь'. Но это опасно!",
        sections: [
          {
            heading: "Что такое гражданское дело?",
            paragraphs: [
              "Гражданские дела — это разрешение споров между лицами через суд. Наиболее распространённые гражданские дела:",
              "• Развод и семейные споры (воспитание детей, алименты)\n• Имущественные споры (жильё, земля, автомобиль)\n• Договорные споры (неисполнение договора, невозврат долга)\n• Наследственные споры (раздел наследства, оспаривание завещания)\n• Права потребителей (некачественный товар, услуга)",
              "Гражданский процесс сложен и имеет много правил. Одна ошибка может привести к проигрышу всего дела.",
            ],
          },
          {
            heading: "В каких случаях адвокат ОБЯЗАТЕЛЕН?",
            paragraphs: [
              "Законодательство Узбекистана требует адвоката или представителя в некоторых гражданских делах:",
              "• Если вы живёте в другом городе и не можете прийти в суд\n• Если вы не можете участвовать в суде из-за болезни или инвалидности\n• Если дело в вышестоящем суде (апелляция, кассация)\n• Если у второй стороны есть профессиональный адвокат",
              "Но даже если закон не обязывает, привлечение адвоката в гражданских делах всегда полезно. Потому что профессиональная защита увеличивает ваш успех в 2-3 раза.",
            ],
          },
          {
            heading: "Как помогает адвокат?",
            paragraphs: [
              "Опытный адвокат по гражданским делам оказывает следующие услуги:",
              "• Профессиональная подготовка искового заявления (неправильный иск — проигранное дело)\n• Сбор и представление всех необходимых доказательств\n• Защита ваших интересов в суде\n• Профессиональный ответ на доказательства противоположной стороны\n• Обжалование неправильных решений суда (апелляция, кассация)\n• Контроль исполнительного производства (обеспечение исполнения судебного решения)",
              "Самая важная задача адвоката — убедить суд в правильности вашей позиции. Для этого нужны юридические знания и опыт.",
            ],
          },
          {
            heading: "Что теряется без адвоката?",
            paragraphs: [
              "Если вы не привлечёте адвоката, столкнётесь со следующими проблемами:",
              "• Исковое заявление будет составлено неправильно и суд отклонит\n• Необходимые доказательства не будут собраны и суд вам не поверит\n• Процессуальные сроки будут пропущены (срок подачи документов, срок возражения)\n• Вы не будете знать, что говорить на судебных заседаниях\n• Адвокат второй стороны вас 'победит'\n• Судебное решение выйдет в вашу пользу",
              "Статистика показывает: Вероятность выигрыша стороны с адвокатом 60-70%, без адвоката — только 20-30%. Разница очевидна!",
              "Адвокат — это не только юридические знания, но и опыт судебных процессов, психологическая подготовка и стратегическое мышление.",
            ],
          },
          {
            heading: "Нужен ли адвокат в деле о разводе?",
            paragraphs: [
              "Развод — самое распространённое гражданское дело. Большинство думает 'простой развод, адвокат не нужен'. Но:",
              "• Если есть дети — с кем останутся, сколько алименты?\n• Если есть общее имущество — как разделить дом, машину, мебель?\n• Если у второй стороны есть адвокат — он обманет вас и получит больше\n• Если муж или жена не согласен на развод — судебный процесс долгий и сложный",
              "Опытный семейный адвокат защитит ваши права, установит порядок общения с детьми и обеспечит справедливый раздел имущества.",
              "Развод — это не только юридический, но и эмоциональный процесс. Адвокат даст профессиональную консультацию и поможет достичь лучшего результата.",
            ],
          },
          {
            heading: "Askarbekova Partner — специалисты по гражданским делам",
            paragraphs: [
              "Адвокатская фирма Askarbekova Partner имеет 35-летний опыт в гражданских делах. Мы успешно разрешили тысячи гражданских споров:",
              "• Развод и семейные споры\n• Имущественные иски\n• Договорные споры\n• Наследственные дела\n• Защита прав потребителей",
              "Мы применяем индивидуальный подход к каждому клиенту и работаем для достижения максимального результата. Первичная консультация бесплатная.",
              "Если у вас есть гражданское дело или вы столкнулись со спором, позвоните нам сегодня: +998 97 778 95 40. Профессиональный адвокат защитит ваши права!",
            ],
          },
        ],
        tags: [
          "адвокат гражданское дело",
          "адвокат развод",
          "имущественные споры",
          "семейное право",
          "адвокат Ташкент",
        ],
      },
      en: {
        title: "Is a Lawyer Necessary in a Civil Case? | Professional Consultation 2026",
        metaTitle: "Is a Lawyer Necessary in a Civil Case? When Needed? Tashkent 2026",
        metaDescription: "Is a lawyer needed in a civil case? In what cases is a lawyer necessary? Divorce, property disputes, alimony. Lawyer consultation Tashkent.",
        excerpt: "A civil case is divorce, property disputes, alimony, contracts, and other personal legal relations. Many think 'simple case, I can handle it myself'. But this is dangerous!",
        sections: [
          {
            heading: "What Is a Civil Case?",
            paragraphs: [
              "Civil cases are the resolution of disputes between persons through court. Most common civil cases:",
              "• Divorce and family disputes (child custody, alimony)\n• Property disputes (housing, land, automobile)\n• Contract disputes (contract non-performance, debt non-repayment)\n• Inheritance disputes (inheritance division, will contestation)\n• Consumer rights (defective product, service)",
              "Civil procedure is complex and has many rules. One mistake can lead to losing the entire case.",
            ],
          },
          {
            heading: "When Is a Lawyer MANDATORY?",
            paragraphs: [
              "Uzbekistan's legislation requires a lawyer or representative in some civil cases:",
              "• If you live in another city and cannot come to court\n• If you cannot participate in court due to illness or disability\n• If the case is in a higher court (appeal, cassation)\n• If the other party has a professional lawyer",
              "But even if the law doesn't require, hiring a lawyer in civil cases is always beneficial. Because professional defense increases your success 2-3 times.",
            ],
          },
          {
            heading: "How Does a Lawyer Help?",
            paragraphs: [
              "An experienced civil lawyer provides the following services:",
              "• Professional preparation of claim statement (wrong claim — lost case)\n• Collection and presentation of all necessary evidence\n• Defense of your interests in court\n• Professional response to opposing party's evidence\n• Appealing incorrect court decisions (appeal, cassation)\n• Control of enforcement proceedings (ensuring court decision execution)",
              "The lawyer's most important task is to convince the court of the correctness of your position. This requires legal knowledge and experience.",
            ],
          },
          {
            heading: "What Is Lost Without a Lawyer?",
            paragraphs: [
              "If you don't hire a lawyer, you'll face the following problems:",
              "• Claim statement will be incorrectly drafted and court will reject\n• Necessary evidence won't be collected and court won't believe you\n• Procedural deadlines will be missed (document submission deadline, objection deadline)\n• You won't know what to say at court hearings\n• The other party's lawyer will 'defeat' you\n• Court decision will come out against you",
              "Statistics show: Probability of winning for a party with a lawyer is 60-70%, without a lawyer — only 20-30%. The difference is clear!",
              "A lawyer is not only legal knowledge, but also court process experience, psychological preparation, and strategic thinking.",
            ],
          },
          {
            heading: "Is a Lawyer Needed in a Divorce Case?",
            paragraphs: [
              "Divorce is the most common civil case. Most think 'simple divorce, no lawyer needed'. But:",
              "• If there are children — who will they stay with, how much is alimony?\n• If there's common property — how to divide house, car, furniture?\n• If the other party has a lawyer — they'll deceive you and get more\n• If husband or wife doesn't agree to divorce — court process is long and complex",
              "An experienced family lawyer will protect your rights, establish child visitation order, and achieve fair property division.",
              "Divorce is not only a legal but also an emotional process. A lawyer will provide professional consultation and help achieve the best result.",
            ],
          },
          {
            heading: "Askarbekova Partner — Civil Case Specialists",
            paragraphs: [
              "Askarbekova Partner law firm has 35 years of experience in civil cases. We have successfully resolved thousands of civil disputes:",
              "• Divorce and family disputes\n• Property claims\n• Contract disputes\n• Inheritance cases\n• Consumer rights protection",
              "We apply an individual approach to each client and work to achieve maximum results. Initial consultation is free.",
              "If you have a civil case or face a dispute, call us today: +998 97 778 95 40. A professional lawyer will protect your rights!",
            ],
          },
        ],
        tags: [
          "civil case lawyer",
          "divorce lawyer",
          "property disputes",
          "family law",
          "lawyer Tashkent",
        ],
      },
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
