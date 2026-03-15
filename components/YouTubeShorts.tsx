"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiExternalLink, FiPlayCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    channelShortsUrl,
    youtubeShorts,
    type ShortCategory,
} from "@/lib/youtube-shorts";
import { youtubeShortDescriptions } from "@/lib/youtube-shorts-descriptions";
import styles from "./YouTubeShorts.module.css";

type SectionCopy = {
    title: string;
    subtitle: string;
    allLabel: string;
    allSubtitle: string;
    categories: Record<"all" | ShortCategory, string>;
    watchOnPlatform: string;
    noVideos: string;
    embedHint: string;
    fullDescriptionTitle: string;
    openAll: string;
    openChannel: string;
};

const copyByLanguage: Record<"uz" | "ru" | "en", SectionCopy> = {
    uz: {
        title: "Video materiallar",
        subtitle:
            "Mijozlarda eng ko'p uchraydigan savollar bo'yicha qisqa, amaliy va tushunarli huquqiy sharhlar.",
        allLabel: "Videoteka",
        allSubtitle:
            "Barcha videolar mavzular bo'yicha tartiblangan. Kerakli yo'nalishni tanlab, mos videoni tez toping.",
        categories: {
            all: "Barchasi",
            family: "Oilaviy nizolar",
            property: "Mulk va ko'chmas mulk",
            inheritance: "Meros",
            migration: "Chet el / migratsiya",
            fraud: "Firibgarlikdan himoya",
            civil: "Fuqarolik da'volari",
        },
        watchOnPlatform: "YouTube'da ko'rish",
        noVideos: "Tanlangan bo'lim bo'yicha video topilmadi.",
        embedHint: "Video sayt ichida ochiladi. Agar qurilmada cheklov bo'lsa, YouTube'da to'g'ridan-to'g'ri oching.",
        fullDescriptionTitle: "YouTube description (to'liq)",
        openAll: "Barcha videolarni ko'rish",
        openChannel: "YouTube Shorts kanalini ochish",
    },
    ru: {
        title: "Видео материалы",
        subtitle:
            "Короткие и практичные разъяснения по самым частым юридическим вопросам клиентов.",
        allLabel: "Видеотека",
        allSubtitle:
            "Все ролики отсортированы по темам. Выберите нужное направление и найдите релевантное видео быстрее.",
        categories: {
            all: "Все",
            family: "Семейные споры",
            property: "Имущество и недвижимость",
            inheritance: "Наследство",
            migration: "Выезд / миграция",
            fraud: "Защита от мошенничества",
            civil: "Гражданские иски",
        },
        watchOnPlatform: "Смотреть на YouTube",
        noVideos: "По выбранной категории видео не найдено.",
        embedHint: "Видео воспроизводится на сайте. При ограничениях откройте ролик напрямую на YouTube.",
        fullDescriptionTitle: "YouTube description (полный)",
        openAll: "Смотреть все видео",
        openChannel: "Открыть канал YouTube Shorts",
    },
    en: {
        title: "Video Materials",
        subtitle:
            "Short and practical legal explainers covering the questions clients ask most often.",
        allLabel: "Video Library",
        allSubtitle:
            "All videos are grouped by topics. Pick a category and quickly find what is relevant to your case.",
        categories: {
            all: "All",
            family: "Family Disputes",
            property: "Property & Real Estate",
            inheritance: "Inheritance",
            migration: "Migration / Travel",
            fraud: "Fraud Prevention",
            civil: "Civil Claims",
        },
        watchOnPlatform: "Watch On YouTube",
        noVideos: "No videos found for this category.",
        embedHint: "Video should play in-site. If restricted by device/browser, open directly on YouTube.",
        fullDescriptionTitle: "YouTube description (full)",
        openAll: "View All Videos",
        openChannel: "Open YouTube Shorts Channel",
    },
};

type YouTubeShortsProps = {
    showAll?: boolean;
};

function toEmbedUrl(id: string): string {
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

function toWatchUrl(id: string): string {
    return `https://www.youtube.com/shorts/${id}`;
}

export default function YouTubeShorts({ showAll = false }: YouTubeShortsProps) {
    const { language } = useLanguage();
    const content = copyByLanguage[language];

    const [activeCategory, setActiveCategory] = useState<"all" | ShortCategory>("all");

    const baseVideos = useMemo(
        () => (showAll ? youtubeShorts : youtubeShorts.filter((video) => video.featured)),
        [showAll]
    );

    const videos = useMemo(
        () =>
            activeCategory === "all"
                ? baseVideos
                : baseVideos.filter((video) => video.category === activeCategory),
        [activeCategory, baseVideos]
    );

    const initialActiveId = videos[0]?.id ?? null;
    const [activeVideoId, setActiveVideoId] = useState<string | null>(initialActiveId);

    const activeVideo = useMemo(
        () => videos.find((item) => item.id === activeVideoId) || videos[0] || null,
        [activeVideoId, videos]
    );

    const fullDescription = activeVideo
        ? youtubeShortDescriptions[activeVideo.id] || ""
        : "";

    const categoryOrder: ShortCategory[] = [
        "family",
        "property",
        "inheritance",
        "migration",
        "fraud",
        "civil",
    ];

    const categoryKeys: Array<"all" | ShortCategory> = useMemo(() => {
        const available = new Set(baseVideos.map((video) => video.category));
        const filtered = categoryOrder.filter((category) => available.has(category));
        return ["all", ...filtered];
    }, [baseVideos]);

    const sectionSubtitle = showAll ? content.allSubtitle : content.subtitle;

    return (
        <section id="shorts-video" className={`section ${styles.shorts}`} aria-labelledby="shorts-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="shorts-title" className="section-title">{content.title}</h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">{sectionSubtitle}</p>
                </div>

                <div className={styles.filterBar}>
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            type="button"
                            className={`${styles.filterBtn} ${activeCategory === key ? styles.filterBtnActive : ""}`}
                            onClick={() => {
                                setActiveCategory(key);
                                setActiveVideoId(null);
                            }}
                        >
                            {content.categories[key]}
                        </button>
                    ))}
                </div>

                <div className={styles.layout}>
                    <div className={styles.leftPane}>
                        {activeVideo ? (
                            <>
                                <div className={styles.playerShell}>
                                    <iframe
                                        key={activeVideo.id}
                                        title="YouTube Shorts video"
                                        className={styles.player}
                                        src={toEmbedUrl(activeVideo.id)}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                                <div className={styles.activeMeta}>
                                    <h3 className={styles.activeTitle}>{activeVideo.content[language].title}</h3>
                                    <p className={styles.activeSummary}>{activeVideo.content[language].summary}</p>
                                    <p className={styles.embedHint}>{content.embedHint}</p>
                                    <a
                                        href={toWatchUrl(activeVideo.id)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.watchBtn}
                                        aria-label={content.watchOnPlatform}
                                    >
                                        <FiPlayCircle />
                                        {content.watchOnPlatform}
                                    </a>
                                </div>

                                <div className={styles.descriptionCard}>
                                    <h4 className={styles.descriptionTitle}>{content.fullDescriptionTitle}</h4>
                                    <pre className={styles.descriptionText}>
                                        {fullDescription || activeVideo.content[language].summary}
                                    </pre>
                                </div>
                            </>
                        ) : (
                            <div className={styles.emptyState}>{content.noVideos}</div>
                        )}
                    </div>

                    <div className={styles.rightPane}>
                        <div className={styles.videoList}>
                            {videos.map((video) => {
                                const isActive = activeVideo?.id === video.id;
                                return (
                                    <button
                                        key={video.id}
                                        type="button"
                                        className={`${styles.videoItem} ${isActive ? styles.videoItemActive : ""}`}
                                        onClick={() => setActiveVideoId(video.id)}
                                    >
                                        <span className={styles.videoCategory}>{content.categories[video.category]}</span>
                                        <strong className={styles.videoTitle}>{video.content[language].title}</strong>
                                        <span className={styles.videoSummary}>{video.content[language].summary}</span>
                                        <span className={styles.videoLinkHint}>
                                            <FiExternalLink />
                                            {content.watchOnPlatform}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.sectionActions}>
                    {!showAll ? (
                        <Link href="/shorts" className={styles.moreBtn}>
                            {content.openAll}
                        </Link>
                    ) : (
                        <a href={channelShortsUrl} target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
                            {content.openChannel}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
