"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import { processIcons } from "./ui/Icons";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-canvas via-surface/60 to-canvas" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable path from question to confident answer."
          intro="Five steps, one principle: never design in the dark. Learn early, decide with evidence."
        />

        <motion.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Connecting timeline line (desktop) */}
          <span className="pointer-events-none absolute left-0 top-7 hidden h-px w-full bg-gold-line lg:block" />

          {processSteps.map((step) => {
            const Icon = processIcons[step.icon as keyof typeof processIcons];
            return (
              <motion.li
                key={step.no}
                variants={fadeUp}
                className="group relative rounded-xl2 border border-line bg-surface p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-canvas text-gold transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold-soft/20">
                    <span className="h-5 w-5">
                      <Icon />
                    </span>
                  </span>
                  <span className="font-display text-2xl text-line transition-colors duration-500 group-hover:text-gold/40">
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
