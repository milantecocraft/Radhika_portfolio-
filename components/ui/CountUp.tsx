"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/animations";

type Props = {
  /** e.g. "6+", "40+", "4.9", "2.4M+" — animates the numeric part, keeps prefix/suffix */
  value: string;
  duration?: number;
  className?: string;
};

const parse = (value: string) => {
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
};

export default function CountUp({ value, duration = 1.8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const { prefix, target, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(reduce ? value : `${prefix}${(0).toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, target, prefix, suffix, decimals, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
