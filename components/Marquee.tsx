"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  items: string[];
  /** seconds for one full loop */
  speed?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
};

/**
 * Seamless infinite marquee. Renders the set twice and translates -50%,
 * so the loop is invisible. Pauses on hover; static if reduced-motion.
 */
export default function Marquee({
  items,
  speed = 28,
  reverse = false,
  className = "",
  itemClassName = "",
}: Props) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div
        className="flex shrink-0 items-center gap-12 pr-12"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`whitespace-nowrap font-display text-2xl text-muted/70 transition-colors duration-300 sm:text-3xl ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
