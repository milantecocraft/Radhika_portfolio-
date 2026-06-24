"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { site, heroStats } from "@/lib/data";
import { ease, wordReveal, staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import Magnetic from "./ui/Magnetic";
import CountUp from "./ui/CountUp";
import { ArrowIcon } from "./ui/Icons";
import Hero3D from "./Hero3D";

const headline = ["Designing", "interfaces with", "clarity & calm."];

// Decorative twinkling particles (fixed positions → no hydration mismatch).
const particles = [
  { left: "10%", top: "26%", size: 6, delay: "0s" },
  { left: "26%", top: "72%", size: 4, delay: "1.2s" },
  { left: "48%", top: "16%", size: 3, delay: "0.4s" },
  { left: "70%", top: "78%", size: 5, delay: "1.7s" },
  { left: "86%", top: "30%", size: 5, delay: "0.7s" },
  { left: "93%", top: "62%", size: 7, delay: "2.1s" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  // Cursor-follow parallax for ambient layers + the 3D scene.
  // (No scroll-linked motion in the hero — it stays put as you scroll.)
  const mx = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sxNeg = useTransform(sx, (v) => -v);
  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 32);
  };

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] overflow-hidden pb-16 pt-28 sm:pt-32 lg:flex lg:items-center"
    >
      {/* ---- Ambient background ---- */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-luxe-gradient" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[85vh] w-[85vh] -translate-y-1/2 translate-x-1/4"
      >
        <div className="aurora-mesh h-full w-full rounded-full animate-aurora opacity-55 motion-reduce:animate-none" />
      </motion.div>
      <motion.div
        style={{ x: sx }}
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-gold-soft/45 blur-3xl animate-breathe motion-reduce:animate-none"
      />
      <motion.div
        style={{ x: sxNeg }}
        className="pointer-events-none absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-lilac/35 blur-3xl animate-breathe motion-reduce:animate-none"
      />
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
          className="pointer-events-none absolute -z-10 rounded-full bg-gold/70 blur-[1px] animate-twinkle motion-reduce:animate-none"
        />
      ))}

      {/* ---- Content ---- */}
      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left — copy */}
        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
            {site.availability && (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-ink shadow-soft backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
                </span>
                {site.availabilityNote}
              </span>
            )}
            <span className="eyebrow">{site.role}</span>
          </motion.div>

          <motion.h1
            variants={staggerContainer(0.06)}
            className="font-display text-[2.7rem] font-medium leading-[1.04] tracking-tightish text-ink sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            {headline.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordReveal}
                    className={`mr-[0.22em] inline-block ${
                      li === 2 ? "text-flow italic motion-reduce:[animation:none]" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-balance"
          >
            {site.tagline} I&apos;m {site.name.split(" ")[0]}, a {site.role.toLowerCase()} blending
            research, systems thinking, and tasteful motion.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.5}>
              <a href="#work" className="btn-primary group">
                View selected work
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-xs uppercase tracking-wider2 text-muted">{s.label}</dt>
                <dd className="order-1 font-display text-3xl font-medium text-ink">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — 3D scene */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          style={{ x: sxNeg }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="w-[78%] max-w-sm sm:w-[60%] lg:w-full">
            <Hero3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted xl:flex"
      >
        <span className="text-[0.7rem] uppercase tracking-wider2">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </span>
      </motion.a>
    </section>
  );
}
