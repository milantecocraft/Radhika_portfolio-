"use client";

import { motion } from "framer-motion";
import { skillGroups, tools } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import Marquee from "./Marquee";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills & tools"
          title="A full-stack designer's toolkit."
          intro="From the first research question to the last design token — and the tools that make it real."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="rounded-xl2 border border-line bg-surface p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-xl font-medium text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Tools — full-bleed scrolling marquee for energy */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 border-y border-line/70 py-7"
      >
        <Marquee
          items={tools}
          speed={26}
          reverse
          itemClassName="hover:text-gold"
        />
      </motion.div>
    </section>
  );
}
