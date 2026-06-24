"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Impact() {
  return (
    <section aria-label="Impact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-xl3 bg-ink px-6 py-14 text-canvas sm:px-12">
          {/* ambient gradient accents */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-lilac/20 blur-3xl" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mb-10 max-w-xl"
          >
            <span className="eyebrow !text-gold-soft">By the numbers</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-canvas sm:text-4xl">
              Design measured by outcomes, not opinions.
            </h2>
          </motion.div>

          <motion.dl
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
          >
            {impactStats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col">
                <dd className="font-display text-4xl font-medium text-gold-soft sm:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 text-sm leading-snug text-canvas/70">{s.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
