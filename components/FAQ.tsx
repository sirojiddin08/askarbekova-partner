"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./FAQ.module.css";

const faqKeys = [
    { id: 1, qKey: "faq.q1", aKey: "faq.a1" },
    { id: 2, qKey: "faq.q2", aKey: "faq.a2" },
    { id: 3, qKey: "faq.q3", aKey: "faq.a3" },
    { id: 4, qKey: "faq.q4", aKey: "faq.a4" },
    { id: 5, qKey: "faq.q5", aKey: "faq.a5" },
    { id: 6, qKey: "faq.q6", aKey: "faq.a6" },
    { id: 7, qKey: "faq.q7", aKey: "faq.a7" },
    { id: 8, qKey: "faq.q8", aKey: "faq.a8" },
    { id: 9, qKey: "faq.q9", aKey: "faq.a9" },
];

export default function FAQ() {
    const { t } = useLanguage();
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className={`section ${styles.faq}`} aria-labelledby="faq-title" role="region">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-label">{t("faq.label")}</span>
                    <h2 id="faq-title" className="section-title">{t("faq.title")}</h2>
                    <div className="gold-divider" />
                </motion.div>

                <div className={styles.list}>
                    {faqKeys.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={styles.item}
                        >
                            <button
                                className={`${styles.question} ${
                                    openId === faq.id ? styles.active : ""
                                }`}
                                onClick={() => toggleFAQ(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                <span className={styles.questionText}>{t(faq.qKey)}</span>
                                <span className={styles.icon}>
                                    {openId === faq.id ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.answerWrapper}
                                    >
                                        <div className={styles.answer}>{t(faq.aKey)}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
