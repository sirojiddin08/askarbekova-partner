"use client";

import Link from "next/link";
import {
    FiTrendingUp,
    FiFileText,
    FiShield,
    FiHome,
    FiHeart,
    FiBriefcase,
    FiArrowRight,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Services.module.css";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            icon: <FiHome />,
            title: t("services.civil"),
            desc: t("services.civilDesc"),
            slug: "fuqarolik-ishlari",
        },
        {
            icon: <FiShield />,
            title: t("services.criminal"),
            desc: t("services.criminalDesc"),
            slug: "jinoyat-ishlari",
        },
        {
            icon: <FiTrendingUp />,
            title: t("services.economic"),
            desc: t("services.economicDesc"),
            slug: "iqtisodiy-nizolar",
        },
        {
            icon: <FiFileText />,
            title: t("services.administrative"),
            desc: t("services.administrativeDesc"),
            slug: "mamuriy-nizolar",
        },
        {
            icon: <FiHeart />,
            title: t("services.inheritance"),
            desc: t("services.inheritanceDesc"),
            slug: "meros-masalalari",
        },
        {
            icon: <FiBriefcase />,
            title: t("services.business"),
            desc: t("services.businessDesc"),
            slug: "biznes-yuridik-yordam",
        },
    ];

    return (
        <section id="services" className={`section ${styles.services}`} aria-labelledby="services-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t("services.label")}</span>
                    <h2 id="services-title" className="section-title">
                        {t("services.title")}
                    </h2>
                    <p className="section-subtitle">{t("services.subtitle")}</p>
                    <div className="gold-divider" />
                </div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <article key={i} className={`glass-card ${styles.card}`}>
                            <Link href={`/xizmatlar/${s.slug}`} className={styles.cardLink}>
                                <div className={styles.iconWrap}>{s.icon}</div>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <span className={styles.cardArrow}>
                                    {t("services.learnMore")} <FiArrowRight />
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
