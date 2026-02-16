import type { Metadata } from "next";
import ServicesListingContent from "@/components/ServicesListingContent";

const baseUrl = "https://askarbekova-partner.uz";

export const metadata: Metadata = {
    title: "Юридические услуги — Advokat Toshkent | Askarbekova Partner",
    description:
        "Полный перечень юридических услуг: гражданские, уголовные, экономические, административные дела, наследственные споры, юридическая поддержка бизнеса. 35 лет опыта. Бесплатная консультация. Toshkentda barcha turdagi yuridik xizmatlar.",
    keywords: [
        "юридические услуги Ташкент",
        "адвокат услуги",
        "yuridik xizmatlar Toshkent",
        "advokat xizmatlari",
        "legal services Tashkent",
        "гражданские дела",
        "уголовные дела",
        "экономические споры",
        "административные споры",
        "наследственные дела",
        "бизнес юрист",
        "Askarbekova Partner",
    ],
    alternates: {
        canonical: `${baseUrl}/xizmatlar`,
    },
    openGraph: {
        title: "Юридические услуги — Advokat Toshkent | Askarbekova Partner",
        description:
            "Полный перечень юридических услуг адвокатской фирмы Аскарбекова Партнер. 35 лет опыта в Ташкенте.",
        url: `${baseUrl}/xizmatlar`,
        siteName: "Askarbekova Partner",
        locale: "ru_RU",
        alternateLocale: ["uz_UZ", "en_US"],
        type: "website",
    },
};

export default function ServicesListingPage() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Главная",
                item: baseUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Услуги",
                item: `${baseUrl}/xizmatlar`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ServicesListingContent />
        </>
    );
}
