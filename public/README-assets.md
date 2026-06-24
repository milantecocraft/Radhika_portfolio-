# Drop real assets here

Replace these placeholders to finish the site:

- `og-image.png` — 1200×630 social share image (referenced in `app/layout.tsx`).
- `radhika-resume.pdf` — downloadable CV (referenced in `lib/data.ts`).
- `favicon.ico` — place in the `app/` directory (Next.js App Router convention).
- Project cover images — the cards currently use gradient placeholders. To use
  real screenshots, swap the gradient `<div>` in `components/ProjectCard.tsx`
  for `next/image` with `loading="lazy"` (lazy loading is on by default).
