"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import { QuoteIcon } from "./ui/Icons";

export default function Testimonials() {
  const hasData = testimonials.length > 0;

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Kind words"
          title="Trusted by teams who care about craft."
          align="center"
          className="mx-auto"
        />

        {hasData ? (
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                variants={fadeUp}
                className="flex h-full flex-col rounded-xl2 border border-line bg-surface p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <QuoteIcon className="h-7 w-7 text-gold/40" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.title}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        ) : (
          // Graceful empty state
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto mt-12 max-w-xl rounded-xl2 border border-dashed border-line bg-surface/60 p-10 text-center"
          >
            <QuoteIcon className="mx-auto h-8 w-8 text-gold/40" />
            <p className="mt-4 font-display text-xl text-ink">
              Testimonials coming soon.
            </p>
            <p className="mt-2 text-sm text-muted">
              Recently worked with me? I&apos;d love a few words.{" "}
              <a href="#contact" className="link-underline text-ink">
                Share your experience
              </a>
              .
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
