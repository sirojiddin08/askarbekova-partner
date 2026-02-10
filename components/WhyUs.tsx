"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiLock, FiFileText, FiAward, FiUsers, FiTarget } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./WhyUs.module.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6 },
    }),
};

export default function WhyUs() {
    const { t } = useLanguage();

    const pillars = [
        {
            icon: <FiLock />,
            title: t("whyUs.reason1"),
            desc: t("whyUs.reason1Desc"),
            color: "#d4af37",
        },
        {
            icon: <FiCheckCircle />,
            title: t("whyUs.reason2"),
            desc: t("whyUs.reason2Desc"),
            color: "#6ee7b7",
        },
        {
            icon: <FiFileText />,
            title: t("whyUs.reason3"),
            desc: t("whyUs.reason3Desc"),
            color: "#4db8ff",
        },
        {
            icon: <FiAward />,
            title: t("whyUs.reason4"),
            desc: t("whyUs.reason4Desc"),
            color: "#f59e0b",
        },
        {
            icon: <FiUsers />,
            title: t("whyUs.reason5"),
            desc: t("whyUs.reason5Desc"),
            color: "#a78bfa",
        },
        {
            icon: <FiTarget />,
            title: t("whyUs.reason6"),
            desc: t("whyUs.reason6Desc"),
            color: "#f472b6",
        },
    ];

    return (
        <section id="why-us" className={`section ${styles.whyUs}`} aria-labelledby="whyus-title">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">{t("whyUs.label")}</span>
                    <h2 id="whyus-title" className="section-title">{t("whyUs.title")}</h2>
                    <div className="gold-divider" />
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            className={`glass-card ${styles.pillar}`}
                            variants={fadeUp}
                            custom={i}
                        >
                            <div
                                className={styles.pillarIcon}
                                style={{
                                    background: `${p.color}15`,
                                    borderColor: `${p.color}25`,
                                    color: p.color,
                                }}
                            >
                                {p.icon}
                            </div>
                            <h3 className={styles.pillarTitle}>{p.title}</h3>
                            <p className={styles.pillarDesc}>{p.desc}</p>
                            <div
                                className={styles.pillarLine}
                                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
