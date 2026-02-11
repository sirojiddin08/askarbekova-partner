"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    ctaTitle: "Bepul konsultatsiya",
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
    ctaTitle: "Бесплатная консультация",
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
    ctaTitle: "Free Consultation",
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
      {/* Hero */}
      <section className={styles.serviceHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">{ui.home}</Link>
              <span className={styles.separator}>/</span>
              <Link href="/xizmatlar">{ui.services}</Link>
              <span className={styles.separator}>/</span>
              <span>{content.title}</span>
            </nav>
            <div className={styles.heroContent}>
              <div className={styles.serviceIcon}>
                {iconMap[service.icon]}
              </div>
              <h1 className={styles.heroTitle}>{content.title}</h1>
              <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            <motion.div
              className={styles.mainContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.sections.map((section, i) => (
                <article key={i} className={styles.textBlock}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </article>
              ))}
            </motion.div>

            <motion.aside
              className={styles.sidebar}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                  href="tel:+998712345678" 
                  className={styles.ctaButton}
                  onClick={() => (window as any).gtag_report_conversion?.('tel:+998712345678')}
                >
                  <FiPhone />
                  {ui.ctaButton}
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <motion.div
              className={styles.faqHeader}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>{ui.faqTitle}</h2>
              <p>{ui.faqSubtitle}</p>
            </motion.div>

            <div className={styles.faqList}>
              {content.faq.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.faqItem}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
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
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        role="region"
                      >
                        <p className={styles.faqAnswer}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className={styles.relatedSection}>
        <div className="container">
          <motion.div
            className={styles.relatedHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>{ui.relatedTitle}</h2>
          </motion.div>

          <div className={styles.relatedGrid}>
            {relatedServices.map((s, i) => {
              const sContent = s.content[lang];
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={`/xizmatlar/${s.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedIcon}>
                      {iconMap[s.icon]}
                    </div>
                    <span className={styles.relatedTitle}>{sContent.title}</span>
                    <span className={styles.relatedDesc}>
                      {sContent.heroSubtitle.substring(0, 100)}...
                    </span>
                    <span className={styles.relatedArrow}>
                      {ui.relatedArrow} <FiArrowRight />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
