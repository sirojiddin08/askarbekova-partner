import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllBlogSlugs } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://askarbekova-partner.uz";
    const lastModified = new Date("2026-02-10");

    const serviceSlugs = getAllServiceSlugs();
    const blogSlugs = getAllBlogSlugs();

    const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/xizmatlar/${slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/xizmatlar`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...servicePages,
        ...blogPages,
    ];
}
