"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";
import Marquee from "./Marquee";

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-y border-line/70 bg-surface/40 py-10">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-px mb-7 text-center text-xs uppercase tracking-wider2 text-muted/80"
      >
        Trusted by teams &amp; founders who care about craft
      </motion.p>
      <Marquee items={brands} speed={32} itemClassName="hover:text-ink" />
    </section>
  );
}
