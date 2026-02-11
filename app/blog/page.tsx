import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blog — Yuridik maslahatlar va maqolalar | Askarbekova Partner",
  description:
    "Professional advokat maqolalari: jinoyat huquqi, fuqarolik ishlari, meros masalalari, shartnomalar. Yuridik maslahatlar va qo'llanmalar.",
  keywords: [
    "yuridik blog",
    "advokat maqolalari",
    "huquqiy maslahat",
    "jinoyat advokati blog",
    "fuqarolik huquq maqolalari",
    "meros huquqi",
    "shartnoma maslahatlari",
    "advokat Toshkent blog",
    "yuridik yangiliklar",
    "yuridik maslahat",
  ],
  alternates: {
    canonical: "https://askarbekova-partner.uz/blog",
  },
  openGraph: {
    title: "Blog — Yuridik maslahatlar va maqolalar | Askarbekova Partner",
    description:
      "Professional advokat maqolalari: jinoyat huquqi, fuqarolik ishlari, meros masalalari, shartnomalar. Yuridik maslahatlar va qo'llanmalar.",
    url: "https://askarbekova-partner.uz/blog",
    siteName: "Askarbekova Partner",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
