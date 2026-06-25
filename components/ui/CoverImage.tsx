"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** tailwind gradient classes shown while loading or if the image is missing */
  accent: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Project cover with a graceful gradient fallback. If the image at `src` is
 * missing (e.g. not added yet), the branded gradient + label stays visible —
 * so the layout never breaks. Drop real covers in /public/projects/.
 */
export default function CoverImage({
  src,
  alt,
  accent,
  label,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0">
      {/* Always-present branded fallback */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-luxe-gradient opacity-40 mix-blend-soft-light" />
      {label && !loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-medium text-ink/60 sm:text-4xl">
            {label}
          </span>
        </div>
      )}

      {!failed && src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`object-cover object-top transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
