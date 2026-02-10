"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiMail } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Contact.module.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6 },
    }),
};

export default function Contact() {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: <FiPhone />,
            title: t("contact.phone"),
            value: "+998 97 778 95 40",
            href: "tel:+998977789540",
            action: t("contact.callUs"),
        },
        {
            icon: <FiMapPin />,
            title: t("contact.address"),
            value: t("contact.addressValue"),
            href: "https://www.google.com/maps/place/Askarbekova+partner/@41.311081,69.279737,17z/data=!4m2!3m1!1s0x0:0xdad24c8c507e83e2",
            action: t("contact.viewMap"),
        },
        {
            icon: <FiClock />,
            title: t("contact.workHours"),
            value: t("contact.workHoursValue"),
            href: undefined,
            action: undefined,
        },
        {
            icon: <FiMail />,
            title: t("contact.email"),
            value: "info@askarbekova-partner.uz",
            href: "mailto:info@askarbekova-partner.uz",
            action: t("contact.writeUs"),
        },
    ];

    return (
        <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">{t("contact.label")}</span>
                    <h2 id="contact-title" className="section-title">{t("contact.title")}</h2>
                    <p className="section-subtitle">{t("contact.subtitle")}</p>
                    <div className="gold-divider" />
                </motion.div>

                <div className={styles.layout}>
                    <motion.div
                        className={styles.infoGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {contactInfo.map((c, i) => (
                            <motion.div
                                key={i}
                                className={`glass-card ${styles.infoCard}`}
                                variants={fadeUp}
                                custom={i}
                            >
                                <div className={styles.infoIcon}>{c.icon}</div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>{c.title}</span>
                                    <span className={styles.infoValue}>{c.value}</span>
                                    {c.href && c.action && (
                                        <a href={c.href} className={styles.infoAction}>
                                            {c.action} →
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className={styles.mapWrap}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <iframe
                            title="Askarbekova Partner — Joylashuv"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8679875946824!2d69.27771537649398!3d41.311081071314374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36c1c6e277%3A0xdad24c8c507e83e2!2sAskarbekova%20partner!5e0!3m2!1sen!2s!4v1707600000000!5m2!1sen!2s"
                            className={styles.map}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                        <div className={styles.mapOverlay}>
                            <span className={styles.mapAddress}>
                                📍 {t("contact.district")}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Banner */}
                <motion.div
                    className={styles.ctaBanner}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>{t("contact.ctaTitle")}</h3>
                        <p className={styles.ctaDesc}>{t("contact.ctaDesc")}</p>
                    </div>
                    <a href="tel:+998977789540" className="btn btn-primary">
                        <FiPhone />
                        +998 97 778 95 40
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
