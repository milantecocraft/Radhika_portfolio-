"use client";

import { motion } from "framer-motion";
import { about, site } from "@/lib/data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import CoverImage from "./ui/CoverImage";

export default function About() {
  const initials = site.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait + facts */}
        <div className="lg:col-span-5">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:sticky lg:top-28"
          >
            {/* Decorative rotating rings behind the card (CSS, GPU-driven) */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full border border-dashed border-gold/25 animate-rotate-cw motion-reduce:animate-none"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.5rem] border border-line animate-rotate-ccw motion-reduce:animate-none"
              />

              {/* 3D tilt portrait */}
              <TiltCard
                intensity={14}
                perspective={1000}
                className="[transform-style:preserve-3d]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl3 border border-line shadow-lift [transform-style:preserve-3d]">
                  {/* Portrait — save the provided photo to public/radhika.jpg.
                      Falls back to the monogram gradient until then. */}
                  <CoverImage
                    src={site.photo}
                    alt={`Portrait of ${site.name}, ${site.role}`}
                    accent="from-gold-soft via-blush to-lilac"
                    label={initials}
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />

                  {/* scrim for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/45 to-transparent" />

                  {/* name badge, lifted closest to the viewer */}
                  <span
                    style={{ transform: "translateZ(80px)" }}
                    className="absolute bottom-5 left-5 rounded-full bg-canvas/85 px-4 py-2 text-xs font-medium text-ink shadow-soft backdrop-blur"
                  >
                    {site.name} — {site.role}
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Quick facts */}
            <motion.dl
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line"
            >
              {about.facts.map((f) => (
                <motion.div
                  key={f.label}
                  variants={fadeUp}
                  className="group bg-surface p-4 transition-colors duration-500 hover:bg-canvas"
                >
                  <dt className="text-xs uppercase tracking-wider2 text-muted/80">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{f.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-col gap-5"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Values */}
          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {about.values.map((v) => (
              <motion.li
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-xl2 border border-line bg-surface p-5 transition-shadow duration-500 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-medium text-ink">{v.title}</h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-150" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 rounded-xl2 border-l-2 border-gold bg-gradient-to-r from-gold-soft/25 to-transparent p-6 font-display text-lg italic leading-snug text-ink"
          >
            &ldquo;The best interface is the one that disappears — leaving only the
            person and their intent.&rdquo;
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
