"use client";

import styles from "./Footer.module.css";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

const currentYear = new Date().getFullYear();

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <a href="#hero" className={styles.logo}>
                            <img
                                src="/logo.svg"
                                alt="Askarbekova Partner logo"
                                width={32}
                                height={32}
                                className={styles.logoIcon}
                            />
                            <span className={styles.logoText}>
                                Askarbekova<span className={styles.logoAccent}> Partner</span>
                            </span>
                        </a>
                        <p className={styles.brandDesc}>{t("footer.description")}</p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>{t("footer.pages")}</h4>
                        <nav className={styles.links}>
                            <a href="#hero">{t("nav.home")}</a>
                            <a href="#about">{t("nav.about")}</a>
                            <a href="#services">{t("nav.services")}</a>
                            <a href="#why-us">{t("nav.whyUs")}</a>
                            <a href="#contact">{t("nav.contact")}</a>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>{t("nav.services")}</h4>
                        <nav className={styles.links}>
                            <a href="#services">{t("services.economic")}</a>
                            <a href="#services">{t("services.administrative")}</a>
                            <a href="#services">{t("services.criminal")}</a>
                            <a href="#services">{t("services.civil")}</a>
                            <a href="#services">{t("services.inheritance")}</a>
                            <a href="#services">{t("services.business")}</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>{t("contact.label")}</h4>
                        <div className={styles.contactList}>
                            <a href="tel:+998977789540" className={styles.contactItem}>
                                <FiPhone />
                                +998 97 778 95 40
                            </a>
                            <a
                                href="mailto:info@askarbekova-partner.uz"
                                className={styles.contactItem}
                            >
                                <FiMail />
                                info@askarbekova-partner.uz
                            </a>
                            <span className={styles.contactItem}>
                                <FiMapPin />
                                {t("footer.addressShort")}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        © {currentYear} Askarbekova Partner. {t("footer.rights")}
                    </p>
                    <p className={styles.legal}>{t("footer.legal")}</p>
                </div>
            </div>
        </footer>
    );
}
