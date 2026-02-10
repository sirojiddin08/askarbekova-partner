"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import styles from "./BlogListing.module.css";

export default function BlogListing() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("uz");

  const categories = [
    "Hammasi",
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("Hammasi");

  const filteredPosts =
    selectedCategory === "Hammasi"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  const text = {
    uz: {
      title: "Blog — Yuridik maslahatlar",
      subtitle:
        "Professional advokat maqolalari, yuridik qo'llanmalar va foydali maslahatlar",
      readMore: "Batafsil o'qish",
      readTime: "daqiqa",
      allCategories: "Hammasi",
    },
    ru: {
      title: "Блог — Юридические консультации",
      subtitle:
        "Профессиональные статьи адвоката, юридические руководства и полезные советы",
      readMore: "Читать подробнее",
      readTime: "мин",
      allCategories: "Все",
    },
    en: {
      title: "Blog — Legal Advice",
      subtitle:
        "Professional lawyer articles, legal guides and useful tips",
      readMore: "Read more",
      readTime: "min",
      allCategories: "All",
    },
  };

  return (
    <section className={styles.blogListing}>
      <div className={styles.container}>
        {/* Language Switcher */}
        <div className={styles.languageSwitcher}>
          <button
            className={language === "uz" ? styles.active : ""}
            onClick={() => setLanguage("uz")}
          >
            UZ
          </button>
          <button
            className={language === "ru" ? styles.active : ""}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>
          <button
            className={language === "en" ? styles.active : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h1>{text[language].title}</h1>
          <p>{text[language].subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? styles.active : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {filteredPosts.map((post) => (
            <article key={post.slug} className={styles.blogCard}>
              <div className={styles.cardImage}>
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.author}>{post.author}</span>
                  <span className={styles.date}>
                    {new Date(post.publishDate).toLocaleDateString("uz-UZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className={styles.readTime}>
                    {post.readTime} {text[language].readTime}
                  </span>
                </div>
                <h2>{post.content[language].title}</h2>
                <p className={styles.excerpt}>{post.content[language].excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {post.content[language].tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    {text[language].readMore} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>
            {language === "uz"
              ? "Yuridik maslahat kerakmi?"
              : language === "ru"
              ? "Нужна юридическая консультация?"
              : "Need legal consultation?"}
          </h2>
          <p>
            {language === "uz"
              ? "Dastlabki konsultatsiya bepul. Bizga qo'ng'iroq qiling va professional advokat maslahatini oling."
              : language === "ru"
              ? "Первичная консультация бесплатная. Позвоните нам и получите консультацию профессионального адвоката."
              : "Initial consultation is free. Call us and get professional lawyer consultation."}
          </p>
          <a
            href="tel:+998977789540"
            className={styles.ctaButton}
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                (window as any).gtag_report_conversion("tel:+998977789540");
              }
            }}
          >
            +998 97 778 95 40
          </a>
        </div>
      </div>
    </section>
  );
}
