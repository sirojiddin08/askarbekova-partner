"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiHome,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiHeart,
  FiBriefcase,
  FiCheck,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesData } from "@/lib/services-data";
import styles from "./ServicesListingContent.module.css";

const iconMap: Record<string, React.ReactNode> = {
  FiHome: <FiHome />,
  FiShield: <FiShield />,
  FiTrendingUp: <FiTrendingUp />,
  FiFileText: <FiFileText />,
  FiHeart: <FiHeart />,
  FiBriefcase: <FiBriefcase />,
};

const uiText = {
  uz: {
    home: "Bosh sahifa",
    services: "Xizmatlar",
    title: "Yuridik xizmatlarimiz",
    subtitle: "35 yildan ortiq tajriba bilan barcha turdagi yuridik masalalar bo'yicha professional yordam ko'rsatamiz",
    arrow: "Batafsil",
    ctaTitle: "Bepul konsultatsiya oling",
    ctaDesc: "Professional advokatlarimiz sizning masalangizni tahlil qiladi va eng to'g'ri yechimni topadi",
    ctaButton: "Qo'ng'iroq qilish",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    title: "Наши юридические услуги",
    subtitle: "Профессиональная помощь по всем видам юридических вопросов с опытом более 35 лет",
    arrow: "Подробнее",
    ctaTitle: "Получите бесплатную консультацию",
    ctaDesc: "Наши профессиональные адвокаты проанализируют вашу ситуацию и найдут оптимальное решение",
    ctaButton: "Позвонить",
  },
  en: {
    home: "Home",
    services: "Services",
    title: "Our Legal Services",
    subtitle: "Professional assistance in all types of legal matters with over 35 years of experience",
    arrow: "Learn more",
    ctaTitle: "Get a Free Consultation",
    ctaDesc: "Our professional lawyers will analyze your situation and find the best solution",
    ctaButton: "Call Now",
  },
};

export default function ServicesListingContent() {
  const { language } = useLanguage();
  const lang = language as "uz" | "ru" | "en";
  const ui = uiText[lang];

  return (
    <main>
      {/* Hero */}
      <section className={styles.listingHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">{ui.home}</Link>
              <span className={styles.separator}>/</span>
              <span>{ui.services}</span>
            </nav>
            <h1 className={styles.heroTitle}>{ui.title}</h1>
            <p className={styles.heroSubtitle}>{ui.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {servicesData.map((s, i) => {
              const sContent = s.content[lang];
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={`/xizmatlar/${s.slug}`}
                    className={styles.card}
                  >
                    <div className={styles.cardIcon}>
                      {iconMap[s.icon]}
                    </div>
                    <h2 className={styles.cardTitle}>{sContent.title}</h2>
                    <p className={styles.cardDesc}>{sContent.heroSubtitle}</p>

                    <div className={styles.cardFeatures}>
                      {sContent.features.slice(0, 3).map((f, j) => (
                        <span key={j} className={styles.featureTag}>
                          <FiCheck className={styles.featureTagCheck} />
                          {f}
                        </span>
                      ))}
                    </div>

                    <span className={styles.cardArrow}>
                      {ui.arrow} <FiArrowRight />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>{ui.ctaTitle}</h2>
            <p className={styles.ctaDesc}>{ui.ctaDesc}</p>
            <a href="tel:+998712345678" className={styles.ctaButton}>
              <FiPhone />
              {ui.ctaButton}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
