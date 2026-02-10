"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => setMobileOpen(false);

    const navLinks = [
        { label: t("nav.home"), href: "#hero" },
        { label: t("nav.about"), href: "#about" },
        { label: t("nav.services"), href: "#services" },
        { label: t("nav.whyUs"), href: "#why-us" },
        { label: t("nav.team"), href: "#team" },
        { label: t("nav.faq"), href: "#faq" },
        { label: t("nav.contact"), href: "#contact" },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                <a href="#hero" className={styles.logo}>
                    <Image
                        src="/logo.svg"
                        alt="Askarbekova Partner logo"
                        width={36}
                        height={36}
                        className={styles.logoIcon}
                        priority
                    />
                    <span className={styles.logoText}>
                        <span className={styles.logoName}>Askarbekova</span>
                        <span className={styles.logoAccent}>Partner</span>
                    </span>
                </a>

                <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className={styles.mobileActions}>
                        <LanguageSwitcher />
                        <a href="tel:+998977789540" className={`btn btn-primary ${styles.navCta}`}>
                            {t("nav.call")}
                        </a>
                    </div>
                </nav>

                <div className={styles.headerActions}>
                    <a href="tel:+998977789540" className={`btn btn-primary ${styles.ctaDesktop}`}>
                        {t("nav.call")}
                    </a>
                    <div className={styles.langSwitcherDesktop}>
                        <LanguageSwitcher />
                    </div>
                    <button
                        className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menyu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}
