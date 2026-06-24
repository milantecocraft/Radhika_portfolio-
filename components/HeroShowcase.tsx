"use client";

import TiltCard from "./ui/TiltCard";

/**
 * The floating "portfolio piece" — a stylized UI/UX project mockup that signals
 * Radhika designs real interfaces. Swap for a next/image screenshot anytime.
 */
export default function HeroShowcase() {
  return (
    <TiltCard intensity={10} perspective={1100} className="w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl3 border border-line bg-surface shadow-lift [transform-style:preserve-3d]">
        {/* gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-soft/70 via-blush/40 to-lilac/55" />
        <div className="absolute inset-0 bg-luxe-gradient opacity-40 mix-blend-soft-light" />

        {/* the "app screen", lifted forward in 3D */}
        <div
          style={{ transform: "translateZ(55px)" }}
          className="absolute inset-4 flex flex-col gap-3 rounded-2xl border border-line/60 bg-canvas p-4 shadow-soft"
        >
          {/* window chrome */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-blush" />
            <span className="h-2.5 w-2.5 rounded-full bg-lilac" />
            <span className="ml-auto text-[0.6rem] uppercase tracking-wider2 text-muted">
              Lumen · Dashboard
            </span>
          </div>

          {/* hero metric block */}
          <div className="relative h-20 overflow-hidden rounded-xl bg-gradient-to-r from-ink to-ink/80 p-3 text-canvas">
            <span className="text-[0.55rem] uppercase tracking-wider2 text-canvas/60">
              Activation
            </span>
            <p className="font-display text-2xl font-medium text-gold-soft">+38%</p>
            <div className="absolute bottom-2 right-3 flex items-end gap-0.5">
              {[5, 9, 6, 12, 8, 14].map((h, i) => (
                <span
                  key={i}
                  style={{ height: h * 2 }}
                  className="w-1.5 rounded-sm bg-gold-soft/70"
                />
              ))}
            </div>
          </div>

          {/* stat tiles */}
          <div className="grid grid-cols-3 gap-2">
            {["2.4k", "4.9", "60+"].map((v, i) => (
              <div key={i} className="rounded-lg border border-line bg-surface px-2 py-2">
                <p className="font-display text-sm font-medium text-ink">{v}</p>
                <span className="block h-1 w-2/3 rounded bg-line" />
              </div>
            ))}
          </div>

          {/* skeleton rows */}
          <div className="space-y-1.5">
            <span className="block h-2 w-full rounded bg-line" />
            <span className="block h-2 w-5/6 rounded bg-line" />
            <span className="block h-2 w-3/4 rounded bg-line" />
          </div>

          {/* actions */}
          <div className="mt-auto flex gap-2">
            <span className="rounded-full bg-ink px-3 py-1.5 text-[0.6rem] font-medium text-canvas">
              Invest now
            </span>
            <span className="rounded-full border border-line px-3 py-1.5 text-[0.6rem] font-medium text-ink">
              Learn more
            </span>
          </div>
        </div>

        {/* caption chip, closest plane */}
        <span
          style={{ transform: "translateZ(80px)" }}
          className="absolute -bottom-3 left-5 rounded-full border border-line bg-canvas px-4 py-2 text-xs font-medium text-ink shadow-soft"
        >
          ✦ Featured case study
        </span>
      </div>
    </TiltCard>
  );
}
