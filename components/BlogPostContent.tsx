"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPost } from "@/lib/blog-data";
import styles from "./BlogPostContent.module.css";

interface Props {
  post: BlogPost;
}

export default function BlogPostContent({ post }: Props) {
  const { language } = useLanguage();

  const content = post.content[language];

  const text = {
    uz: {
      backToBlog: "← Blogga qaytish",
      author: "Muallif",
      published: "Nashr etilgan",
      readTime: "O'qish vaqti",
      minutes: "daqiqa",
      tags: "Teglar",
      needHelp: "Yuridik yordam kerakmi?",
      helpText:
        "Agar sizda shunga o'xshash muammo bo'lsa yoki professional advokat maslahati kerak bo'lsa, bizga qo'ng'iroq qiling. Dastlabki konsultatsiya bepul.",
      callNow: "Hoziroq qo'ng'iroq qiling",
    },
    ru: {
      backToBlog: "← Вернуться в блог",
      author: "Автор",
      published: "Опубликовано",
      readTime: "Время чтения",
      minutes: "мин",
      tags: "Теги",
      needHelp: "Нужна юридическая помощь?",
      helpText:
        "Если у вас похожая проблема или нужна консультация профессионального адвоката, позвоните нам. Первичная консультация бесплатная.",
      callNow: "Позвонить сейчас",
    },
    en: {
      backToBlog: "← Back to blog",
      author: "Author",
      published: "Published",
      readTime: "Reading time",
      minutes: "min",
      tags: "Tags",
      needHelp: "Need legal help?",
      helpText:
        "If you have a similar problem or need professional lawyer consultation, call us. Initial consultation is free.",
      callNow: "Call now",
    },
  };

  return (
    <article className={styles.blogPost}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">
            {language === "uz"
              ? "Bosh sahifa"
              : language === "ru"
              ? "Главная"
              : "Home"}
          </Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span>{content.title}</span>
        </nav>

        {/* Header */}
        <header className={styles.postHeader}>
          <div className={styles.heroImage}>
            <Image
              src={post.image}
              alt={content.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className={styles.heroOverlay} />
            <div className={styles.categoryBadge}>{post.category}</div>
          </div>
          <h1>{content.title}</h1>
          <div className={styles.postMeta}>
            <div className={styles.metaItem}>
              <strong>{text[language].author}:</strong> {post.author}
            </div>
            <div className={styles.metaItem}>
              <strong>{text[language].published}:</strong>{" "}
              {new Date(post.publishDate).toLocaleDateString(
                language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </div>
            <div className={styles.metaItem}>
              <strong>{text[language].readTime}:</strong> {post.readTime}{" "}
              {text[language].minutes}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className={styles.postContent}>
          <p className={styles.excerpt}>{content.excerpt}</p>

          {content.sections.map((section, idx) => (
            <section key={idx} className={styles.contentSection}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </section>
          ))}

          {/* Tags */}
          <div className={styles.tagsSection}>
            <strong>{text[language].tags}:</strong>
            <div className={styles.tags}>
              {content.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>{text[language].needHelp}</h2>
          <p>{text[language].helpText}</p>
          <a
            href="tel:+998977789540"
            className={styles.ctaButton}
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                (window as any).gtag_report_conversion
              ) {
                (window as any).gtag_report_conversion("tel:+998977789540");
              }
            }}
          >
            {text[language].callNow}: +998 97 778 95 40
          </a>
        </div>

        {/* Back to Blog */}
        <div className={styles.backLink}>
          <Link href="/blog">{text[language].backToBlog}</Link>
        </div>
      </div>
    </article>
  );
}
