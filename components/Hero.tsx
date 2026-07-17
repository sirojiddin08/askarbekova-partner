"use client";

import Image from "next/image";
import { FiCalendar, FiArrowDown } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className={styles.hero} aria-label="Hero">
            <div className={styles.bgOverlay} />
            <div className={styles.bgGrid} />

            <svg className={styles.decorArc1} viewBox="0 0 600 600" fill="none" aria-hidden="true">
                <circle cx="300" cy="300" r="280" stroke="rgba(201,169,110,0.12)" strokeWidth="1" />
                <circle cx="300" cy="300" r="200" stroke="rgba(201,169,110,0.08)" strokeWidth="1" />
                <circle cx="300" cy="300" r="120" stroke="rgba(201,169,110,0.05)" strokeWidth="1" />
            </svg>

            <div className={`container ${styles.content}`}>
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>
                        {t("hero.title")}{" "}
                        <span className={styles.highlight}>{t("hero.titleHighlight")}</span>{" "}
                        {t("hero.titleEnd")}
                    </h1>

                    <p className={styles.subtitle}>{t("hero.subtitle")}</p>

                    <div className={styles.ctas}>
                        <a href="#contact" className={styles.ctaBtn}>
                            <FiCalendar className={styles.ctaIcon} />
                            {t("hero.cta")}
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>35+</span>
                            <span className={styles.statLabel}>{t("hero.stat1")}</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10 000+</span>
                            <span className={styles.statLabel}>{t("hero.stat2")}</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>95%</span>
                            <span className={styles.statLabel}>{t("hero.stat3")}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageBlock}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imagePlaceholder}>
                            <Image
                                src="/lawyer-hero.webp"
                                alt={`${t("hero.lawyerName")} — Askarbekova Partner advokat Toshkent`}
                                className={styles.lawyerImage}
                                width={600}
                                height={750}
                                priority
                                fetchPriority="high"
                                quality={70}
                                sizes="(max-width: 768px) 100vw, 520px"
                            />
                        </div>
                        <div className={styles.imageOverlay} />
                        <div className={styles.lawyerInfo}>
                            <span className={styles.lawyerName}>{t("hero.lawyerName")}</span>
                            <span className={styles.lawyerTagline}>{t("hero.lawyerTagline")}</span>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#about" className={styles.scrollDown} aria-label="Scroll down">
                <FiArrowDown />
            </a>
        </section>
    );
}
