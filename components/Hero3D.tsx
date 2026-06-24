"use client";

import TiltCard from "./ui/TiltCard";

/**
 * Clean 3D object scene for the hero — a rotating glass cube, floating gradient
 * spheres, and an orbiting ring. Pure CSS 3D transforms (GPU-driven, fast,
 * reduced-motion safe). Wrapped in TiltCard so the whole scene reacts to cursor.
 */
function CubeFace({ className }: { className: string }) {
  return (
    <div
      className={`absolute inset-0 rounded-2xl border border-white/50 bg-gradient-to-br from-gold-soft/80 via-blush/60 to-lilac/70 shadow-[inset_0_1px_12px_rgba(255,255,255,0.4)] ${className}`}
    />
  );
}

export default function Hero3D() {
  return (
    <TiltCard intensity={12} perspective={1100} glare={false} className="w-full">
      <div
        className="relative mx-auto aspect-square w-full max-w-md [transform-style:preserve-3d]"
        aria-hidden
      >
        {/* Orbiting ring (behind) */}
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          <div
            className="h-64 w-64 rounded-full border-[6px] border-gold/30 [transform:rotateX(72deg)] animate-spin-y motion-reduce:animate-none sm:h-72 sm:w-72"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>

        {/* Soft glow core */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/40 blur-3xl animate-breathe motion-reduce:animate-none" />

        {/* Rotating glass cube */}
        <div className="absolute inset-0 flex items-center justify-center [perspective:900px]">
          <div
            className="relative h-32 w-32 animate-spin-3d motion-reduce:animate-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <CubeFace className="[transform:rotateY(0deg)_translateZ(64px)]" />
            <CubeFace className="[transform:rotateY(180deg)_translateZ(64px)]" />
            <CubeFace className="[transform:rotateY(90deg)_translateZ(64px)]" />
            <CubeFace className="[transform:rotateY(-90deg)_translateZ(64px)]" />
            <CubeFace className="[transform:rotateX(90deg)_translateZ(64px)]" />
            <CubeFace className="[transform:rotateX(-90deg)_translateZ(64px)]" />
          </div>
        </div>

        {/* Floating gradient spheres at varied depth */}
        <span
          style={{ transform: "translateZ(120px)" }}
          className="absolute left-[6%] top-[14%] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_28%,#ffffff,#E8C9A8_42%,#B07D56)] shadow-lift animate-float-slow motion-reduce:animate-none"
        />
        <span
          style={{ transform: "translateZ(80px)" }}
          className="absolute right-[8%] top-[22%] h-10 w-10 rounded-full bg-[radial-gradient(circle_at_32%_30%,#ffffff,#CBBCE6_45%,#8A7CA8)] shadow-lift animate-float-b motion-reduce:animate-none"
        />
        <span
          style={{ transform: "translateZ(140px)" }}
          className="absolute bottom-[12%] right-[18%] h-14 w-14 rounded-full bg-[radial-gradient(circle_at_30%_28%,#ffffff,#E7C6D6_45%,#C2785B)] shadow-lift animate-float-slow motion-reduce:animate-none"
        />
        <span
          style={{ transform: "translateZ(60px)" }}
          className="absolute bottom-[22%] left-[14%] h-7 w-7 rounded-full bg-[radial-gradient(circle_at_32%_30%,#ffffff,#BFD0BE_50%,#7E9B7C)] shadow-soft animate-float-b motion-reduce:animate-none"
        />

        {/* Floating glass UI tile — ties the geometry back to her craft */}
        <div
          style={{ transform: "translateZ(100px)" }}
          className="absolute -bottom-2 left-1/2 w-44 -translate-x-1/2 rounded-2xl border border-white/50 bg-canvas/80 p-3 shadow-lift backdrop-blur animate-float-slow motion-reduce:animate-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold/70" />
            <span className="h-2 w-2 rounded-full bg-blush" />
            <span className="h-2 w-2 rounded-full bg-lilac" />
          </div>
          <div className="mt-2 h-2 w-3/4 rounded bg-line" />
          <div className="mt-1.5 h-2 w-1/2 rounded bg-line" />
          <div className="mt-2.5 flex gap-1.5">
            <span className="h-5 w-12 rounded-full bg-ink" />
            <span className="h-5 w-12 rounded-full border border-line" />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
