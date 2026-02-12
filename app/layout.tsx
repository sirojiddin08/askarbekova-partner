import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicLang from "@/components/DynamicLang";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://askarbekova-partner.uz"),
    title: {
        default:
            "Адвокат в Ташкенте — лучший адвокат Узбекистана | Askarbekova Partner",
        template: "%s | Askarbekova Partner — Лучший адвокат в Ташкенте",
    },
    description:
        "⭐ Лучший адвокат в Ташкенте с 35-летним опытом. Профессиональная защита по гражданским, уголовным, экономическим делам. Advokat Toshkent — eng yaxshi yuridik xizmatlar. Консультация ☎️ +998 97 778 95 40",
    keywords: [
        // Приоритетные ключевые слова (наиболее важные)
        "адвокат в ташкенте",
        "лучший адвокат в ташкенте",
        "адвокат ташкент",
        "лучший адвокат ташкент",
        "адвокат узбекистан",
        "юрист в ташкенте",
        "лучший юрист ташкент",
        // O'zbek keywords
        "eng yaxshi advokat toshkent",
        "advokat toshkent",
        "advokat o'zbekiston",
        "yuridik xizmat toshkent",
        "huquqiy himoya",
        "sud vakili toshkent",
        "advokatlik firmasi toshkent",
        "eng yaxshi yurist toshkent",
        "professional advokat",
        "tajribali advokat toshkent",
        // Русские ключевые слова (специализация)
        "адвокат по уголовным делам ташкент",
        "адвокат по гражданским делам ташкент",
        "уголовный адвокат ташкент",
        "гражданский адвокат ташкент",
        "адвокатская фирма ташкент",
        "юридические услуги ташкент",
        "юридическая помощь узбекистан",
        "экономические споры адвокат",
        "административные споры адвокат",
        "юрист ташкент",
        "правовая защита ташкент",
        "представительство в суде ташкент",
        "адвокат по наследственным делам",
        "юридическая консультация ташкент",
        "профессиональный адвокат",
        "опытный адвокат ташкент",
        "адвокат 35 лет опыта",
        "надежный адвокат ташкент",
        // Брендовые ключевые слова
        "Askarbekova Partner",
        "Аскарбекова Партнер",
        "Gulshoda Askarbekova",
        "Гулшода Аскарбекова",
    ],
    authors: [{ name: "Askarbekova Partner" }],
    creator: "Askarbekova Partner",
    publisher: "Askarbekova Partner",
    alternates: {
        canonical: "https://askarbekova-partner.uz",
        languages: {
            "uz-UZ": "https://askarbekova-partner.uz",
            "ru-RU": "https://askarbekova-partner.uz",
            "en-US": "https://askarbekova-partner.uz",
            "x-default": "https://askarbekova-partner.uz",
        },
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        alternateLocale: ["uz_UZ", "en_US"],
        url: "https://askarbekova-partner.uz",
        siteName: "Askarbekova Partner — Лучший адвокат в Ташкенте",
        title:
            "Лучший адвокат в Ташкенте — Askarbekova Partner | 35 лет опыта",
        description:
            "⭐ Лучший адвокат в Ташкенте с 35-летним опытом. Гражданские, уголовные, экономические дела. Eng yaxshi advokat Toshkent. Консультация. ☎️ +998 97 778 95 40",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Askarbekova Partner — Advokatlik firmasi Toshkent",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Askarbekova Partner — Advokat Toshkent",
        description:
            "35 yillik tajribaga ega advokatlik firmasi. Toshkent, O'zbekiston. Профессиональная адвокатская фирма.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.png", type: "image/png" },
        ],
        apple: "/favicon.png",
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "7c76e5297f4eba62",
    },
    category: "Legal Services",
    other: {
        "theme-color": "#0a1628",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "format-detection": "telephone=no",
    },
};

const jsonLdLegalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://askarbekova-partner.uz/#organization",
    name: "Askarbekova Partner — Лучший адвокат в Ташкенте",
    alternateName: [
        "Askarbekova Partnyor Advokatlik Firmasi",
        "Аскарбекова Партнер",
        "Адвокатская фирма Аскарбекова",
        "Лучший адвокат в Ташкенте",
        "Лучший адвокат Ташкента",
        "Адвокат в Ташкенте",
        "Eng yaxshi advokat Toshkent",
    ],
    url: "https://askarbekova-partner.uz",
    telephone: ["+998977789540", "+998909383836"],
    email: "info@askarbekova-partner.uz",
    description:
        "⭐ Лучший адвокат в Ташкенте с 35-летним опытом. Профессиональная защита по гражданским, уголовным, экономическим делам. Eng yaxshi advokat Toshkent — yuridik himoya va sud vakiligi.",
    foundingDate: "1991",
    founder: {
        "@type": "Person",
        name: "Gulshoda Askarbekova",
        alternateName: "Гулшода Аскарбекова",
        jobTitle: "Bosh advokat",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "Alisher Navoiy shoh ko'chasi, 5, 1-qavat",
        addressLocality: "Toshkent",
        addressRegion: "Toshkent shahri",
        postalCode: "100011",
        addressCountry: "UZ",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "41.311081",
        longitude: "69.279737",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "13:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "14:00",
            closes: "17:00",
        },
    ],
    areaServed: [
        { "@type": "City", name: "Toshkent" },
        { "@type": "Country", name: "O'zbekiston" },
    ],
    priceRange: "$$",
    image: "https://askarbekova-partner.uz/og-image.jpg",
    logo: "https://askarbekova-partner.uz/logo.png",
    sameAs: [],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
    },
    numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 4,
        maxValue: 10,
    },
    knowsLanguage: ["uz", "ru", "en"],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Yuridik Xizmatlar",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Iqtisodiy nizolar bo'yicha yuridik yordam",
                    description:
                        "Iqtisodiy nizolarni hal qilish, sudgacha va sudda vakillik, qarorlarni ijro ettirish.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Ma'muriy nizolar bo'yicha himoya",
                    description:
                        "Davlat organlari bilan munosabatlarda huquqlarni himoya qilish va sud vakiligi.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Jinoyat ishlari bo'yicha himoya",
                    description:
                        "Jinoyat ishlari bo'yicha barcha bosqichlarda professional himoya.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Fuqarolik ishlari bo'yicha maslahat",
                    description:
                        "Fuqarolik ishlarida maslahat, hujjatlar tayyorlash va sud vakiligi.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Meros masalalari bo'yicha yordam",
                    description:
                        "Meros masalalari bo'yicha konsultatsiya va nizolarni hal qilish.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Biznesni yuridik qo'llab-quvvatlash",
                    description:
                        "Biznes uchun kompleks yuridik xizmat ko'rsatish va huquqiy maslahatlar.",
                },
            },
        ],
    },
};

const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Bosh sahifa",
            item: "https://askarbekova-partner.uz",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Xizmatlar",
            item: "https://askarbekova-partner.uz/#services",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Aloqa",
            item: "https://askarbekova-partner.uz/#contact",
        },
    ],
};

const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://askarbekova-partner.uz/#org",
    name: "Askarbekova Partner",
    alternateName: ["Аскарбекова Партнер", "Askarbekova Partnyor"],
    url: "https://askarbekova-partner.uz",
    logo: "https://askarbekova-partner.uz/logo.png",
    image: "https://askarbekova-partner.uz/og-image.jpg",
    telephone: ["+998977789540", "+998909383836"],
    email: "info@askarbekova-partner.uz",
    foundingDate: "1991",
    numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 4,
        maxValue: 10,
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "Alisher Navoiy shoh ko'chasi, 5, 1-qavat",
        addressLocality: "Toshkent",
        addressRegion: "Toshkent shahri",
        postalCode: "100011",
        addressCountry: "UZ",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+998977789540",
            contactType: "customer service",
            availableLanguage: ["Uzbek", "Russian", "English"],
            areaServed: "UZ",
        },
        {
            "@type": "ContactPoint",
            telephone: "+998909383836",
            contactType: "customer service",
            availableLanguage: ["Uzbek", "Russian"],
        },
    ],
    sameAs: [],
};

const jsonLdReviews = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://askarbekova-partner.uz/#reviews",
    name: "Askarbekova Partner",
    review: [
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Alisher Karimov" },
            datePublished: "2025-09-15",
            reviewBody: "Ajoyib xizmat! Professional advokatlar jamoasi. Jinoyat ishi bo'yicha himoyani a'lo darajada amalga oshirdilar.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Наталья Иванова" },
            datePublished: "2025-07-22",
            reviewBody: "Обратилась по наследственному спору. Всё решили быстро и профессионально. Рекомендую эту фирму.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Odiljon Rahimov" },
            datePublished: "2025-11-03",
            reviewBody: "Iqtisodiy nizo bo'yicha yordam so'ragandim. Juda tez va samarali hal qilishdi. Rahmat!",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Дмитрий Петров" },
            datePublished: "2025-06-10",
            reviewBody: "Отличная юридическая фирма. Помогли с административным спором. Профессионально и чётко.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "4",
                bestRating: "5",
            },
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Malika Toshpulatova" },
            datePublished: "2025-12-01",
            reviewBody: "Biznesimiz uchun yuridik xizmat ko'rsatishdi. Barcha shartnomalarni professional tarzda tayyorlashdi.",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
        },
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
    },
};

const jsonLdServices = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Fuqarolik ishlari",
        name: "Fuqarolik ishlari bo'yicha yuridik xizmat",
        description: "Meros, shartnomalar, mol-mulk nizolari va boshqa fuqarolik masalalari bo'yicha konsultatsiya va sud vakiligi.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Jinoyat ishlari",
        name: "Jinoyat ishlari bo'yicha himoya",
        description: "Jinoyat ishlari bo'yicha barcha bosqichlarda professional himoya va sud vakiligi.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Iqtisodiy nizolar",
        name: "Iqtisodiy nizolar bo'yicha yuridik yordam",
        description: "Sudgacha va sudda hal qilish, iqtisodiy shartnomalar va qarorlarni ijro ettirish.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Ma'muriy nizolar",
        name: "Ma'muriy nizolar bo'yicha himoya",
        description: "Davlat organlari bilan munosabatlarda huquqlarni himoya qilish va sud vakiligi.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Meros masalalari",
        name: "Meros masalalari bo'yicha yordam",
        description: "Meros masalalari bo'yicha konsultatsiya, hujjatlar tayyorlash va nizolarni hal qilish.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Biznes yuridik yordam",
        name: "Biznesni yuridik qo'llab-quvvatlash",
        description: "Biznes uchun kompleks yuridik xizmat ko'rsatish va huquqiy maslahatlar.",
        provider: { "@id": "https://askarbekova-partner.uz/#organization" },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
    },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uz" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="canonical" href="https://askarbekova-partner.uz" />
                <meta name="geo.region" content="UZ-TAS" />
                <meta name="geo.placename" content="Tashkent" />
                <meta name="geo.position" content="41.311081;69.279737" />
                <meta name="ICBM" content="41.311081, 69.279737" />
                <meta name="language" content="uz, ru" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdLegalService),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdBreadcrumb),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdOrganization),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdReviews),
                    }}
                />
                {jsonLdServices.map((service, i) => (
                    <script
                        key={i}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(service),
                        }}
                    />
                ))}
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0a1628" />
                <link rel="apple-touch-icon" href="/logo.png" />
            </head>
            <body>
                {/* Google Ads Global Site Tag */}
                <Script
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17856716490"
                />
                <Script
                    id="google-ads-init"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-17856716490');
                        `,
                    }}
                />

                {/* Google Ads Conversion Tracking */}
                <Script
                    id="google-ads-conversion"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            function gtag_report_conversion(url) {
                                var callback = function () {
                                    if (typeof(url) != 'undefined') {
                                        window.location = url;
                                    }
                                };
                                gtag('event', 'conversion', {
                                    'send_to': 'AW-17856716490/d_FfCJj9g94bEMq938JC',
                                    'event_callback': callback
                                });
                                return false;
                            }
                        `,
                    }}
                />

                <LanguageProvider>
                    <DynamicLang />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
