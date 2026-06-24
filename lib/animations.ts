import type { Variants } from "framer-motion";

/** Premium easing curve used across the site. */
export const ease = [0.22, 1, 0.36, 1] as const;

/** Container that staggers its children. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Fade + rise — the default reveal for text and blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

/** Word/line reveal for the hero headline. */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease },
  },
};

/** Cinematic per-word reveal: rises and de-blurs into place. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.75em", filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

/** Shared viewport config so reveals fire once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };
