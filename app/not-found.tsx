import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Sahifa topilmadi | Askarbekova Partner",
  description:
    "Kechirasiz, siz izlayotgan sahifa topilmadi. Bosh sahifaga qaytish uchun tugmani bosing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        color: "var(--text-primary)",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 800,
          color: "var(--gold-400)",
          lineHeight: 1,
          marginBottom: "0.5rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: 600,
          marginBottom: "1rem",
          color: "var(--text-primary)",
        }}
      >
        Sahifa topilmadi
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "480px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Kechirasiz, siz izlayotgan sahifa mavjud emas yoki ko&apos;chirilgan.
        Iltimos, bosh sahifaga qayting yoki boshqa sahifalarni ko&apos;rib
        chiqing.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 2rem",
            backgroundColor: "var(--gold-400)",
            color: "var(--navy-900)",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}
        >
          Bosh sahifa
        </Link>
        <Link
          href="/xizmatlar"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 2rem",
            border: "1px solid var(--gold-400)",
            color: "var(--gold-400)",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            backgroundColor: "transparent",
            transition: "background-color 0.2s",
          }}
        >
          Xizmatlar
        </Link>
      </div>
    </section>
  );
}
