"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { FiChevronDown } from "react-icons/fi";
import styles from "./LanguageSwitcher.module.css";

function FlagUZ() {
    return (
        <svg viewBox="0 0 640 480" className={styles.flagSvg}>
            <rect width="640" height="160" fill="#1EB53A" />
            <rect y="160" width="640" height="160" fill="#fff" />
            <rect y="320" width="640" height="160" fill="#0099B5" />
            <rect y="147" width="640" height="13" fill="#CE1126" />
            <rect y="320" width="640" height="13" fill="#CE1126" />
            <circle cx="180" cy="80" r="50" fill="#fff" />
            <circle cx="200" cy="80" r="45" fill="#0099B5" />
        </svg>
    );
}

function FlagRU() {
    return (
        <svg viewBox="0 0 640 480" className={styles.flagSvg}>
            <rect width="640" height="160" fill="#fff" />
            <rect y="160" width="640" height="160" fill="#0039A6" />
            <rect y="320" width="640" height="160" fill="#D52B1E" />
        </svg>
    );
}

function FlagEN() {
    return (
        <svg viewBox="0 0 640 480" className={styles.flagSvg}>
            <rect width="640" height="480" fill="#012169" />
            <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" fill="#fff" />
            <path d="M424 281l216 159v40L369 281zM241 243l-6 16L0 444v-36zM640 0v3L391 191l2-44zM0 0l239 176h-60z" fill="#C8102E" />
            <path d="M241 0v480h160V0zM0 160v160h640V160z" fill="#fff" />
            <path d="M0 193v96h640v-96zM273 0v480h96V0z" fill="#C8102E" />
        </svg>
    );
}

const languages: { code: Language; label: string; Flag: React.FC }[] = [
    { code: "uz", label: "UZ", Flag: FlagUZ },
    { code: "ru", label: "RU", Flag: FlagRU },
    { code: "en", label: "EN", Flag: FlagEN },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find((l) => l.code === language) || languages[1];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className={styles.switcher} ref={dropdownRef}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Select language"
            >
                <currentLang.Flag />
                <span className={styles.label}>{currentLang.label}</span>
                <FiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`${styles.option} ${language === lang.code ? styles.active : ""}`}
                        >
                            <lang.Flag />
                            <span className={styles.optionLabel}>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
