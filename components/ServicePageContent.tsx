"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiHeart,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ServicePageData } from "@/lib/services-data";
import { servicesData } from "@/lib/services-data";
import styles from "./ServicePageContent.module.css";

const iconMap: Record<string, React.ReactNode> = {
  FiHome: <FiHome />,
  FiShield: <FiShield />,
  FiTrendingUp: <FiTrendingUp />,
  FiFileText: <FiFileText />,
  FiHeart: <FiHeart />,
  FiBriefcase: <FiBriefcase />,
};

const ctaText = {
  uz: {
    featuresTitle: "Xizmatlar doirasi",
    ctaTitle: "Konsultatsiya",
    ctaDesc: "Hoziroq qo'ng'iroq qiling!",
    ctaButton: "Qo'ng'iroq qilish",
    faqTitle: "Ko'p beriladigan savollar",
    faqSubtitle: "Ushbu xizmat bo'yicha eng ko'p beriladigan savollar va javoblar",
    relatedTitle: "Boshqa xizmatlarimiz",
    relatedArrow: "Batafsil",
    home: "Bosh sahifa",
    services: "Xizmatlar",
  },
  ru: {
    featuresTitle: "Спектр услуг",
    ctaTitle: "Kонсультация",
    ctaDesc: "Позвоните прямо сейчас!",
    ctaButton: "Позвонить",
    faqTitle: "Часто задаваемые вопросы",
    faqSubtitle: "Ответы на наиболее частые вопросы по данной услуге",
    relatedTitle: "Другие наши услуги",
    relatedArrow: "Подробнее",
    home: "Главная",
    services: "Услуги",
  },
  en: {
    featuresTitle: "Scope of Services",
    ctaTitle: "Consultation",
    ctaDesc: "Call us now!",
    ctaButton: "Call Now",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to the most common questions about this service",
    relatedTitle: "Our Other Services",
    relatedArrow: "Learn more",
    home: "Home",
    services: "Services",
  },
};

interface Props {
  service: ServicePageData;
}

export default function ServicePageContent({ service }: Props) {
  const { language } = useLanguage();
  const lang = language as "uz" | "ru" | "en";
  const content = service.content[lang];
  const ui = ctaText[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <section className={styles.serviceHero}>
        <div className="container">
          <div>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">{ui.home}</Link>
              <span className={styles.separator}>/</span>
              <Link href="/xizmatlar">{ui.services}</Link>
              <span className={styles.separator}>/</span>
              <span>{content.title}</span>
            </nav>
            <div className={styles.heroContent}>
              <div className={styles.serviceIcon}>{iconMap[service.icon]}</div>
              <h1 className={styles.heroTitle}>{content.title}</h1>
              <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              {content.sections.map((section, i) => (
                <article key={i} className={styles.textBlock}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.featuresCard}>
                <h3>{ui.featuresTitle}</h3>
                {content.features.map((feature, i) => (
                  <div key={i} className={styles.featureItem}>
                    <FiCheck className={styles.featureCheck} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.ctaCard}>
                <h3>{ui.ctaTitle}</h3>
                <p>{ui.ctaDesc}</p>
                <a
                  href="tel:+998977789540"
                  className={styles.ctaButton}
                  onClick={() =>
                    (window as Window & { gtag_report_conversion?: (url: string) => void }).gtag_report_conversion?.(
                      "tel:+998977789540"
                    )
                  }
                >
                  <FiPhone />
                  {ui.ctaButton}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {content.faq.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqHeader}>
              <h2>{ui.faqTitle}</h2>
              <p>{ui.faqSubtitle}</p>
            </div>

            <div className={styles.faqList}>
              {content.faq.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <FiChevronDown
                      className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div role="region">
                      <p className={styles.faqAnswer}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.relatedSection}>
        <div className="container">
          <div className={styles.relatedHeader}>
            <h2>{ui.relatedTitle}</h2>
          </div>

          <div className={styles.relatedGrid}>
            {relatedServices.map((s) => {
              const sContent = s.content[lang];
              return (
                <div key={s.slug}>
                  <Link href={`/xizmatlar/${s.slug}`} className={styles.relatedCard}>
                    <div className={styles.relatedIcon}>{iconMap[s.icon]}</div>
                    <span className={styles.relatedTitle}>{sContent.title}</span>
                    <span className={styles.relatedDesc}>
                      {sContent.heroSubtitle.substring(0, 100)}...
                    </span>
                    <span className={styles.relatedArrow}>
                      {ui.relatedArrow} <FiArrowRight />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
