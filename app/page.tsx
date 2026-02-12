import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Team = dynamic(() => import("@/components/Team"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export const metadata: Metadata = {
  title: "Askarbekova Partner — Профессиональная адвокатская фирма в Ташкенте",
  description: "Профессиональная адвокатская фирма с 35-летним опытом в Ташкенте. Юридические услуги по гражданским и уголовным делам, экономическим и административным спорам.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qachon advokat kerak bo'ladi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Huquqlaringiz buzilganda, sud jarayonida, jinoyat ishi qo'zg'atilganda, mol-mulk nizolarida, meros masalalarida va boshqa yuridik vaziyatlarda advokat sizga kerak bo'ladi.",
                },
              },
              {
                "@type": "Question",
                name: "Suddan oldin maslahat olish mumkinmi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha, biz suddan oldingi bosqichda dastlabki konsultatsiya taqdim etamiz. Bu sizga vaziyatingizni tushunish va to'g'ri qaror qabul qilishga yordam beradi.",
                },
              },
              {
                "@type": "Question",
                name: "Sudda advokatning ishtiroki shartmi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Qonunga ko'ra ayrim hollarda advokat ishtiroki majburiy. Professional advokat sizning manfaatlaringizni samarali himoya qilish imkoniyatini sezilarli oshiradi.",
                },
              },
              {
                "@type": "Question",
                name: "Jismoniy shaxslar bilan ishlaydimi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha, biz barcha fuqarolik masalalari bo'yicha jismoniy va yuridik shaxslarga xizmat ko'rsatamiz.",
                },
              },
              {
                "@type": "Question",
                name: "Nizoni sudsiz hal qilish mumkinmi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha, ko'p hollarda nizoni muzokaralar, mediatsiya yoki sudgacha kelishuv orqali hal qilish mumkin. Bizning advokatlar sudsiz yechimlarga ham yordam beradi.",
                },
              },
              {
                "@type": "Question",
                name: "Ijobiy natija kafolati bormi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Shartnoma imzolangandan keyin firma ishingizga kafolatlangan yondashuvni taqdim etadi. Firma faqat ishni to'liq o'rganib chiqqandan keyingina kafolatli shartnoma taklif qiladi.",
                },
              },
              {
                "@type": "Question",
                name: "Sud jarayoni qancha davom etadi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bu ish turi va sud darajasiga bog'liq. Oddiy fuqarolik ishlari bir necha oy, murakkab jinoyat ishlari bir yildan ko'proq davom etishi mumkin.",
                },
              },
              {
                "@type": "Question",
                name: "Onlayn murojaat qilish mumkinmi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha, onlayn murojaat qilishingiz mumkin. Call-markazimizga qo'ng'iroq qiling va biz siz uchun advokat bilan videozavonniташkыламиз.",
                },
              },
              {
                "@type": "Question",
                name: "Maxfiylik saqlanadimi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha, advokatsir qat'iy saqlanadi. Mijozlarimizning barcha ma'lumotlari ishonchli himoyalangan.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
}
