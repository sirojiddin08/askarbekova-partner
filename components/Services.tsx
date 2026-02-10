"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
};

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
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">{t("services.label")}</span>
                    <h2 id="services-title" className="section-title">{t("services.title")}</h2>
                    <p className="section-subtitle">
                        {t("services.subtitle")}
                    </p>
                    <div className="gold-divider" />
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {services.map((s, i) => (
                        <motion.article
                            key={i}
                            className={`glass-card ${styles.card}`}
                            variants={cardVariants}
                            custom={i}
                        >
                            <Link href={`/xizmatlar/${s.slug}`} className={styles.cardLink}>
                                <div className={styles.iconWrap}>{s.icon}</div>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <span className={styles.cardArrow}>
                                    {t("services.learnMore")} <FiArrowRight />
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
