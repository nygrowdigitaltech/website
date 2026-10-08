# Nygrow Digital — Website

Production-ready website for **Nygrow Digital Pvt Ltd** — light + dark mode, mega-menu navigation, all 2025 doc content built in.

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict mode, zero errors)
- **Tailwind CSS** with custom theme tokens
- **Framer Motion** animations
- **Lucide React** icons

## What's New (v2)

### Theme
- **Light mode default** (matches design screenshot — clean white + rainbow Digital wordmark)
- **Dark mode** toggle (sun/moon button in navbar) — persists in localStorage, respects `prefers-color-scheme`
- Theme-aware CSS variables in `app/globals.css` — every component adapts automatically

### Navigation
- **Mega-menu navbar** (LateShipment-style) with 5 dropdowns:
  - **Services** — all 8 service tiles in a 3-column grid
  - **Solutions** — by Industry + by Use Case
  - **Resources** — Blog, Case Studies, Brochure, FAQ
  - **Partners** — Zoho, Odoo, Become a Partner
  - **Company** — About, Process, Careers, Contact
- Mobile drawer with sectioned navigation

### Content
- All content from "Nygrow final content - 2025" doc, including:
  - Vision & Mission (broken Vision line cleaned up)
  - The Nygrow Difference (8 points)
  - Core Values (7)
  - Stats: 950+ projects, 701+ customers, 96% satisfaction, etc.
  - Full sub-services for every service
  - Industries served per service
  - Technology stack per service
- **New service pages:** Zoho Authorised Partner, Odoo Partner
- All "pending" sections filled with doc content

### Stats moved up
- Hero shows 3 prominent stat cards (500+ Projects / 3 Cities / 24/7 Support)
- About page shows full 6-stat row

## Project Structure

```
nygrow-website/
├── app/
│   ├── layout.tsx              # Root + ThemeProvider + anti-flicker script
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind + CSS variables (light/dark)
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts              # auto-includes Zoho + Odoo
│   ├── robots.ts
│   ├── about/page.tsx          # Vision / Mission / Difference / Values
│   ├── contact/page.tsx
│   └── services/[slug]/page.tsx  # Renders all 8 services dynamically
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Mega-menu navbar
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx            # Matches screenshot
│   │   ├── Services.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Logo.tsx
│       ├── SectionHeading.tsx
│       ├── Reveal.tsx
│       ├── AmbientGlow.tsx
│       ├── ThemeProvider.tsx   # NEW
│       └── ThemeToggle.tsx     # NEW
├── lib/
│   ├── constants.ts            # All site content (444 lines)
│   └── utils.ts
└── public/                     # Place logo.png, og-image.png here
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Customization

- **Content** — edit `lib/constants.ts`
- **Theme colors** — edit `app/globals.css` (`:root` for light, `.dark` for dark) and `tailwind.config.ts` (`brand` + `logo` palettes)
- **Add a new service** — append to `SERVICES` in `constants.ts`; the route + nav menu + footer auto-update
- **Wire up contact form** — replace simulated submit in `components/sections/ContactForm.tsx` with a real API route or Resend/Formspree call

## Color Tokens (theme-aware)

Use these Tailwind classes everywhere — they swap automatically with the theme:

- `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary`
- `text-fg-primary`, `text-fg-secondary`, `text-fg-tertiary`, `text-fg-muted`
- `border-border`, `border-border-subtle`
- `text-brand-500`, `bg-brand-600`, etc. — solid brand greens
- `text-rainbow` — the multi-color gradient (used on "Digital", numbers, etc.)

## Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com/new — Next.js auto-detected
3. Point `nygrow.co.in` DNS to Vercel

## License

© 2025 Nygrow Digital Pvt Ltd. All rights reserved.
