"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** max tilt in degrees */
  intensity?: number;
  /** perspective distance in px — smaller = stronger 3D */
  perspective?: number;
  /** show the moving glare highlight */
  glare?: boolean;
};

/**
 * Cursor-driven 3D tilt container. Children placed with `style={{ transform:
 * "translateZ(Npx)" }}` (or the `data-depth` helper class) float at different
 * depths to create real parallax. Respects prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 12,
  perspective = 900,
  glare = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(rx, spring);
  const rotateY = useSpring(ry, spring);
  const glareX = useSpring(gx, spring);
  const glareY = useSpring(gy, spring);

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`;

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    rx.set((0.5 - py) * intensity * 2);
    ry.set((px - 0.5) * intensity * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  }

  return (
    <div style={{ perspective }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {children}
        {glare && !reduce && (
          <motion.div
            aria-hidden
            style={{ background: glareBg, transform: "translateZ(60px)" }}
            className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] mix-blend-soft-light"
          />
        )}
      </motion.div>
    </div>
  );
}
