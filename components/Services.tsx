"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              From first question to <span className="italic text-gold">final pixel.</span>
            </>
          }
          intro="A full-spectrum design partner — research, interface, systems, and motion under one roof."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2"
        >
          {services.map((s) => (
            <motion.article
              key={s.no}
              variants={fadeUp}
              className="group relative bg-surface p-7 transition-colors duration-500 hover:bg-canvas sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-gold">{s.no}</span>
                <span className="h-2 w-2 rounded-full bg-line transition-all duration-500 group-hover:scale-150 group-hover:bg-gold" />
              </div>

              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {s.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-gold/30"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
