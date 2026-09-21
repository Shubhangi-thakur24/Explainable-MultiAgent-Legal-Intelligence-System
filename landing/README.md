# KanoonDrishti AI — Landing Page

Premium marketing landing page for **KanoonDrishti AI**, the Explainable Bilingual
Multi-Agent Legal Intelligence Platform. Creative direction: **"Contemporary Digital
Courtroom"** — the authority and warmth of an Indian courtroom (ivory, parchment,
walnut, navy, muted brass) combined with the precision of a modern product, with
indigo reserved strictly for AI elements.

## Stack

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** — all design tokens (palette, type, radii, shadows, easing) centralized in `tailwind.config.ts`
- **Framer Motion** — scroll-triggered reveals, staggered entrances, hero parallax, evidence-highlight and citation-tracing animations, all `prefers-reduced-motion`-aware
- **Lucide React** — interface icons
- **React Router** — route shell, ready to grow into the full app

## Getting started

```bash
cd landing
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Structure

```
landing/
├── index.html                     # fonts (Cormorant Garamond, Manrope, Noto Serif Devanagari), meta
├── tailwind.config.ts             # design tokens
├── src/
│   ├── main.tsx / App.tsx         # entry + router
│   ├── index.css                  # base layer, shell container, evidence-sweep highlight
│   ├── lib/
│   │   ├── motion.ts              # shared easing, variants, viewport config
│   │   └── utils.ts               # cn() class joiner
│   ├── assets/                    # art-directed imagery
│   ├── pages/LandingPage.tsx      # section composition
│   └── components/
│       ├── Navbar.tsx             # sticky navbar → translucent paper on scroll, a11y mobile menu
│       ├── Footer.tsx
│       ├── ui/                    # Button, Eyebrow, SectionHeading, Reveal, CiteChip, Wordmark
│       └── sections/
│           ├── Hero.tsx           # asymmetric hero, evidence highlight → AI trace
│           ├── Journey.tsx        # Documents → … → Understanding scroll rail
│           ├── Capabilities.tsx   # six distinct editorial compositions
│           ├── EvidenceFirst.tsx  # document viewer + AI panel + citation tooltips
│           ├── Bilingual.tsx      # EN ⇄ हिन्दी product interaction
│           ├── Research.tsx       # semantic legal reference desk
│           ├── HowItWorks.tsx     # 01 Upload → 05 Explain, sticky morphing stage
│           ├── Courtroom.tsx      # educational simulation (walnut/navy/brass)
│           ├── Trust.tsx          # responsible AI, evidence trail
│           ├── Benefits.tsx       # editorial ledger
│           ├── Faq.tsx            # accessible accordion
│           └── FinalCta.tsx
```

## Notes

- All legal text on the page is **illustrative** — no real judgments, statistics,
  testimonials or outcome claims are fabricated.
- The page is mobile-first and fully responsive, with keyboard navigation, visible
  focus states, semantic sections and reduced-motion support throughout.
- API integration points (Sign In / Explore) are plain anchors, ready to wire to
  the FastAPI backend when the product app ships.
