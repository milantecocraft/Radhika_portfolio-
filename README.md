# Radhika — UI/UX Designer Portfolio

A premium, animated, responsive portfolio built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**. Soft-luxury aesthetic, editorial typography, scroll-triggered motion, and accessible, SEO-ready markup.

> ⚠️ **Placeholder content** is marked with `[REPLACE]` throughout `lib/data.ts` and a few config files. Search the repo for `[REPLACE]` to find everything that needs Radhika's real details.

---

## 1. Getting started

This machine doesn't have Node.js yet. Install **Node 18.17+** (LTS recommended) from <https://nodejs.org>, then:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

---

## 2. Project structure

```
radhikaportfolio/
├── app/
│   ├── layout.tsx          # Root layout: fonts, SEO metadata, skip-link, grain
│   ├── page.tsx            # Assembles all sections + JSON-LD structured data
│   ├── globals.css         # Tailwind layers, design tokens, component classes
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap.xml
├── components/
│   ├── Navbar.tsx          # Sticky, blur-on-scroll, animated mobile menu
│   ├── Hero.tsx            # Staggered reveal + parallax + cursor-follow
│   ├── About.tsx           # Summary + value cards + pull-quote
│   ├── Projects.tsx        # Grid + modal state
│   ├── ProjectCard.tsx     # Reusable interactive case-study card
│   ├── ProjectModal.tsx    # Accessible case-study modal (Esc, focus, scroll-lock)
│   ├── Process.tsx         # 5-step timeline with icons
│   ├── Skills.tsx          # Skill groups + tool chips
│   ├── Testimonials.tsx    # Cards with graceful empty state
│   ├── Contact.tsx         # Accessible form + socials + CTA
│   ├── Footer.tsx          # Minimal footer
│   ├── ScrollProgress.tsx  # Top reading-progress bar
│   └── ui/
│       ├── Reveal.tsx         # Scroll-reveal wrapper
│       ├── SectionHeading.tsx # Eyebrow + heading + intro
│       └── Icons.tsx          # Inline SVG icon set (no icon dependency)
├── lib/
│   ├── data.ts             # ALL copy & content (single source of truth)
│   └── animations.ts       # Framer Motion variants + shared easing
├── public/                 # og-image, resume, favicons (see README-assets.md)
├── tailwind.config.ts      # Palette, shadows, gradients, keyframes
├── next.config.js · tsconfig.json · postcss.config.js
```

---

## 3. Page layout (top → bottom)

1. **Scroll progress bar** + **sticky navbar** (transparent → frosted on scroll).
2. **Hero** — name, role, positioning statement, two CTAs, stat row, scroll cue.
3. **About** — 3-paragraph summary + 3 value cards + design pull-quote.
4. **Selected work** — 4 case-study cards → click opens a detailed modal.
5. **Process** — Research · Wireframe · Design · Prototype · Test timeline.
6. **Skills & tools** — three skill groups + tool chips.
7. **Testimonials** — three cards (auto-swaps to empty state if data is removed).
8. **Contact** — CTA, email, socials (LinkedIn/Behance/Dribbble/Email) + form.
9. **Footer** — brand, nav, socials, closing line.

---

## 4. Color palette & type pairing

**Palette — "Soft Luxury"**

| Token       | Hex       | Use                         |
|-------------|-----------|-----------------------------|
| `canvas`    | `#FBF8F4` | Warm porcelain background   |
| `ink`       | `#211C18` | Primary warm near-black text|
| `muted`     | `#6B625A` | Secondary taupe text        |
| `line`      | `#ECE6DE` | Hairline borders            |
| `gold`      | `#B07D56` | Bronze accent               |
| `gold.soft` | `#E8C9A8` | Champagne gradient stop     |
| `blush`     | `#E7C6D6` | Gradient stop               |
| `lilac`     | `#CBBCE6` | Gradient stop               |
| `sage`      | `#BFD0BE` | Gradient stop               |

Accents appear as **multi-stop gradients** (gold → blush → lilac) on card visuals and ambient hero blobs — never as flat corporate fills. Contrast: `ink` on `canvas` ≈ 13:1 (AAA); `muted` on `canvas` ≈ 5.4:1 (AA).

**Type pairing**

- **Display:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — a high-contrast editorial serif (optical sizing on) for headings and pull-quotes.
- **Body / UI:** [Inter](https://fonts.google.com/specimen/Inter) — clean, neutral, highly legible.

Both load via `next/font/google` (self-hosted, zero layout shift, `display: swap`).

---

## 5. Animation plan (implementation notes)

All motion uses one easing curve — `[0.22, 1, 0.36, 1]` (`ease` in `lib/animations.ts`) — for a consistent, expensive-feeling deceleration. Everything respects `prefers-reduced-motion` (CSS guard in `globals.css` + `useReducedMotion()` in the hero).

| Effect | Where | How |
|--------|-------|-----|
| Page-load entrance | Navbar, Hero | `initial`/`animate` on mount, staggered children |
| Staggered text reveal | Hero headline | Lines clipped in `overflow-hidden`, each rises via `lineReveal` variant |
| Scroll-triggered reveals | All sections | `whileInView` + `viewportOnce` (fires once at ~25% visible) |
| Card lift + glow | Project/Process/Skill cards | Tailwind `hover:-translate-y` + `hover:shadow-glow` transitions |
| Animated underline | Nav links, headings, links | `.link-underline` scales an `::after` bar from left |
| Button/input microinteractions | Buttons, fields | translate-y on hover, gold focus ring on inputs |
| Parallax + cursor-follow | Hero background blobs | `useScroll` transforms + `useSpring` on mouse position |
| Reading progress | Top bar | `useScroll` → `useSpring` scaleX |
| Modal | Case study | `AnimatePresence` fade/scale; Esc, focus, scroll-lock |

Performance: animations stick to `transform`/`opacity` (GPU-friendly), reveals fire once, blobs are CSS-blurred divs (no images), icons are inline SVG (no icon library), fonts self-hosted.

---

## 6. Responsive component breakdown (mobile-first)

| Component | Mobile (`< 768px`) | Tablet (`md`) | Desktop (`lg+`) |
|-----------|--------------------|---------------|-----------------|
| Navbar | Hamburger → animated sheet | inline links appear | links + "Let's talk" CTA |
| Hero | Stacked, `text-[2.6rem]`, no scroll cue | larger type | `text-7xl`, scroll cue, full parallax |
| About | Single column | single column | 7/5 two-column grid |
| Projects | 1 column | 2 columns | 2 columns |
| Process | 1 column | 2 columns | 5 columns + timeline line |
| Skills | Stacked groups | — | 3 columns |
| Testimonials | 1 column | 3 columns | 3 columns |
| Contact | Stacked (info → form) | — | 5/7 split with divider |
| Footer | Stacked | row | row |

Layout primitives: `.container-px` (max-w-6xl + responsive padding), CSS grid, fluid type, `min-h-[100svh]` hero (mobile-safe viewport unit).

---

## 7. Sample code

The full Hero and Projects implementations live in
[`components/Hero.tsx`](components/Hero.tsx),
[`components/Projects.tsx`](components/Projects.tsx),
[`components/ProjectCard.tsx`](components/ProjectCard.tsx), and
[`components/ProjectModal.tsx`](components/ProjectModal.tsx) — they are the
real, running source, not abbreviated snippets.

---

## Editing content

Everything human-readable is in **`lib/data.ts`**: name, role, tagline, stats,
about copy, projects (incl. full case-study fields), process steps, skills,
tools, testimonials, and contact copy. Remove all items from `testimonials` to
trigger the graceful empty state. Wire the contact form to a real endpoint
(Formspree / Resend / a route handler) where marked `[REPLACE]` in
`components/Contact.tsx` — until then it opens a pre-filled email draft.

## Accessibility & SEO

Semantic landmarks (`header`/`main`/`section`/`footer`), skip-to-content link,
keyboard-operable nav and modal, visible focus rings, AA+ contrast,
`prefers-reduced-motion` support, per-page metadata, Open Graph + Twitter cards,
JSON-LD `Person` schema, `robots.ts`, and `sitemap.ts`.
