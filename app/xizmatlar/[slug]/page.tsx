import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import ServicePageContent from "@/components/ServicePageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const { ru, uz, en } = service.content;
  const baseUrl = "https://askarbekova-partner.uz";

  return {
    title: ru.metaTitle,
    description: ru.metaDescription,
    keywords: [
      ...service.keywords.uz,
      ...service.keywords.ru,
      ...service.keywords.en,
      "Askarbekova Partner",
      "advokat Toshkent",
      "адвокат Ташкент",
    ],
    alternates: {
      canonical: `${baseUrl}/xizmatlar/${slug}`,
    },
    openGraph: {
      title: ru.metaTitle,
      description: ru.metaDescription,
      url: `${baseUrl}/xizmatlar/${slug}`,
      siteName: "Askarbekova Partner",
      locale: "ru_RU",
      alternateLocale: ["uz_UZ", "en_US"],
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: ru.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ru.metaTitle,
      description: ru.metaDescription,
    },
    other: {
      "geo.region": "UZ-TO",
      "geo.placename": "Tashkent",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const baseUrl = "https://askarbekova-partner.uz";

  // JSON-LD Service schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.content.ru.title,
    description: service.content.ru.metaDescription,
    provider: {
      "@type": "LegalService",
      name: "Askarbekova Partner",
      url: baseUrl,
      telephone: "+998712345678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Тошкент шаҳри",
        addressLocality: "Ташкент",
        addressRegion: "Ташкент",
        addressCountry: "UZ",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Ташкент",
    },
    url: `${baseUrl}/xizmatlar/${slug}`,
  };

  // BreadcrumbList schema
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
      {
        "@type": "ListItem",
        position: 3,
        name: service.content.ru.title,
        item: `${baseUrl}/xizmatlar/${slug}`,
      },
    ],
  };

  // FAQPage schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.content.ru.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicePageContent service={service} />
    </>
  );
}
