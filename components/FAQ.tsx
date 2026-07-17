"use client";

import { useState } from "react";
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
                <div className="section-header">
                    <span className="section-label">{t("faq.label")}</span>
                    <h2 id="faq-title" className="section-title">
                        {t("faq.title")}
                    </h2>
                    <div className="gold-divider" />
                </div>

                <div className={styles.list}>
                    {faqKeys.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div key={faq.id} className={styles.item}>
                                <button
                                    className={`${styles.question} ${isOpen ? styles.active : ""}`}
                                    onClick={() => toggleFAQ(faq.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={styles.questionText}>{t(faq.qKey)}</span>
                                    <span className={styles.icon}>
                                        {isOpen ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </button>

                                <div
                                    className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ""}`}
                                >
                                    <div className={styles.answerInner}>
                                        <div className={styles.answer}>{t(faq.aKey)}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
