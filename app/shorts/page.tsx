import type { Metadata } from "next";
import YouTubeShorts from "@/components/YouTubeShorts";

export const metadata: Metadata = {
    title: "YouTube Shorts videolar | Askarbekova Partner",
    description:
        "Askarbekova Partner advokatlik firmasi YouTube Shorts videolari: oilaviy, meros, mulk va fuqarolik huquqi bo'yicha qisqa huquqiy tushuntirishlar.",
};

export default function ShortsPage() {
    return <YouTubeShorts showAll />;
}
