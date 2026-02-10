"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiShield, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./About.module.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6 },
    }),
};

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
                <motion.div
                    className={styles.textSide}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.span className="section-label" variants={fadeUp} custom={0}>
                        {t("about.label")}
                    </motion.span>
                    <motion.h2 id="about-title" className="section-title" variants={fadeUp} custom={1}>
                        {t("about.title")}
                    </motion.h2>
                    <motion.p className={styles.desc} variants={fadeUp} custom={2}>
                        {t("about.text1")}
                    </motion.p>
                    <motion.p className={styles.desc} variants={fadeUp} custom={3}>
                        {t("about.text2")}
                    </motion.p>
                    <motion.a
                        href="#services"
                        className="btn btn-outline"
                        variants={fadeUp}
                        custom={4}
                        style={{ marginTop: "24px" }}
                    >
                        {t("nav.services")}
                    </motion.a>
                </motion.div>

                <motion.div
                    className={styles.featureGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className={`glass-card ${styles.featureCard}`}
                            variants={fadeUp}
                            custom={i}
                        >
                            <div className={styles.featureIcon}>{f.icon}</div>
                            <h3 className={styles.featureTitle}>{f.title}</h3>
                            <p className={styles.featureDesc}>{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
