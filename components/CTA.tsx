"use client";

import { motion } from "framer-motion";
import { ctaBand, site } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { ArrowIcon } from "./ui/Icons";

export default function CTA() {
  return (
    <section aria-label="Call to action" className="relative py-12 sm:py-16">
      <div className="container-px">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-xl3 border border-line bg-gradient-to-br from-gold-soft/50 via-blush/30 to-lilac/50 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-luxe-gradient opacity-50" />

          <motion.span variants={fadeUp} className="eyebrow relative justify-center">
            {ctaBand.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-tightish text-ink sm:text-5xl text-balance"
          >
            {ctaBand.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            {ctaBand.body}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#contact" className="btn-primary group">
              Start a project
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost !bg-canvas/70">
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
