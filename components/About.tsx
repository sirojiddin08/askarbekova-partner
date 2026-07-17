"use client";

import { FiAward, FiUsers, FiShield, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./About.module.css";

export default function About() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <FiAward />,
            title: t("about.feature1Title"),
            desc: t("about.feature1Text"),
        },
        {
            icon: <FiShield />,
            title: t("about.feature2Title"),
            desc: t("about.feature2Text"),
        },
        {
            icon: <FiCheckCircle />,
            title: t("about.feature3Title"),
            desc: t("about.feature3Text"),
        },
        {
            icon: <FiUsers />,
            title: t("about.feature4Title"),
            desc: t("about.feature4Text"),
        },
    ];

    return (
        <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
            <div className={styles.bgAccent} />
            <div className={`container ${styles.grid}`}>
                <div className={styles.textSide}>
                    <span className="section-label">{t("about.label")}</span>
                    <h2 id="about-title" className="section-title">
                        {t("about.title")}
                    </h2>
                    <p className={styles.desc}>{t("about.text1")}</p>
                    <p className={styles.desc}>{t("about.text2")}</p>
                    <a href="#services" className="btn btn-outline" style={{ marginTop: "24px" }}>
                        {t("nav.services")}
                    </a>
                </div>

                <div className={styles.featureGrid}>
                    {features.map((f, i) => (
                        <div key={i} className={`glass-card ${styles.featureCard}`}>
                            <div className={styles.featureIcon}>{f.icon}</div>
                            <h3 className={styles.featureTitle}>{f.title}</h3>
                            <p className={styles.featureDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
