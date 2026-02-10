import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data";
import BlogPostContent from "@/components/BlogPostContent";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Maqola topilmadi",
    };
  }

  return {
    title: post.content.uz.metaTitle,
    description: post.content.uz.metaDescription,
    keywords: post.content.uz.tags,
    alternates: {
      canonical: `https://askarbekova-partner.uz/blog/${params.slug}`,
    },
    openGraph: {
      title: post.content.uz.metaTitle,
      description: post.content.uz.metaDescription,
      url: `https://askarbekova-partner.uz/blog/${params.slug}`,
      siteName: "Askarbekova Partner",
      locale: "uz_UZ",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.content.uz.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // JSON-LD schema for blog article
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.content.uz.title,
    description: post.content.uz.metaDescription,
    image: post.image,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Advokat",
      worksFor: {
        "@type": "LegalService",
        name: "Askarbekova Partner",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Askarbekova Partner",
      logo: {
        "@type": "ImageObject",
        url: "https://askarbekova-partner.uz/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://askarbekova-partner.uz/blog/${params.slug}`,
    },
  };

  // Breadcrumb schema
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bosh sahifa",
        item: "https://askarbekova-partner.uz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://askarbekova-partner.uz/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.content.uz.title,
        item: `https://askarbekova-partner.uz/blog/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
