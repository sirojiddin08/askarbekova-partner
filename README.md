# Askarbekova Partner — Advokatlik Firmasi

Professional law firm website built with Next.js for [askarbekova-partner.uz](https://askarbekova-partner.uz).

## About

**Askarbekova Partner** is a professional law firm based in Tashkent, Uzbekistan with 35+ years of experience. This website provides information about the firm's legal services, team, and contact details.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19, Framer Motion, CSS Modules
- **Fonts:** Inter (body), Outfit (headings) via Google Fonts
- **i18n:** Custom LanguageContext (Uzbek, Russian, English) with localStorage
- **Images:** `next/image` optimization

## Features

- **Multi-language Support** — Full 3-language support (UZ / RU / EN), Russian default
- **SEO Optimized** — JSON-LD schemas (LegalService, Organization, FAQPage, BreadcrumbList, Reviews, Services), Open Graph, Twitter Cards, hreflang, geo meta tags, sitemap, robots.txt
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Sections:** Hero, About, Services (6), Why Us (6), Team, FAQ (9 questions), Contact with Google Maps
- **Performance:** next/image, font preloading, static generation
- **Accessibility:** ARIA labels, semantic HTML landmarks, keyboard navigation
- **PWA Ready:** manifest.json, theme-color, apple-touch-icon

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx        # Root layout with metadata & structured data
  page.tsx          # Home page
  globals.css       # Global styles & design tokens
  sitemap.ts        # Dynamic sitemap generation
  robots.ts         # Robots.txt configuration
components/
  Header.tsx        # Navigation with language switcher & CTA
  Hero.tsx          # Two-column hero with lawyer photo
  About.tsx         # About section with 4 feature cards
  Services.tsx      # 6 legal service cards
  WhyUs.tsx         # 6 advantages/pillars
  Team.tsx          # Team members grid
  FAQ.tsx           # Accordion FAQ (9 questions)
  Contact.tsx       # Contact info & Google Maps embed
  Footer.tsx        # Site footer
  LanguageSwitcher.tsx  # Dropdown language selector with SVG flags
  DynamicLang.tsx   # Dynamic html lang attribute updater
contexts/
  LanguageContext.tsx   # i18n provider with translations
public/
  logo.svg          # Law firm logo (scales of justice)
  favicon.png       # Browser tab icon
  lawyer-hero.webp  # Hero section lawyer photo
  manifest.json     # PWA manifest
  team/             # Team member photos
```

## Deployment

Build and deploy to any Node.js hosting or static hosting:

```bash
npm run build
npm start
```

Compatible with Vercel, Netlify, and any Node.js server.

## License

All rights reserved © Askarbekova Partner
