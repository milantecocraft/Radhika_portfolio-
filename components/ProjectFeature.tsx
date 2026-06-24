"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { ease, viewportOnce } from "@/lib/animations";
import { ArrowIcon, ExternalIcon } from "./ui/Icons";
import CoverImage from "./ui/CoverImage";

type Props = {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
};

/**
 * Large editorial work row — alternating image/content sides with a cover image
 * (or branded fallback). Opens the full case-study modal.
 */
export default function ProjectFeature({ project, index, onOpen }: Props) {
  const flip = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease }}
      className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* Visual */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.name} case study`}
        className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-xl3 border border-line shadow-soft transition-all duration-500 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <CoverImage
            src={project.cover}
            alt={`${project.name} — project cover`}
            accent={project.accent}
            label={project.name}
          />
        </div>
        <span className="absolute right-5 top-5 rounded-full bg-canvas/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
          {project.outcomeMetric}
        </span>
        <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-canvas opacity-0 transition-all duration-500 group-hover:opacity-100">
          View case study
          <ArrowIcon className="h-3.5 w-3.5" />
        </span>
      </button>

      {/* Content */}
      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl text-line">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-wider2 text-gold">
            {project.category} · {project.year}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          {project.problem}
        </p>

        <dl className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6">
          <div>
            <dt className="text-xs uppercase tracking-wider2 text-muted/80">Role</dt>
            <dd className="mt-1 text-sm text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider2 text-muted/80">Outcome</dt>
            <dd className="mt-1 text-sm text-ink">{project.outcome}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs uppercase tracking-wider2 text-muted/80">Tools</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="link-underline group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink"
          >
            Read full case study
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-soft"
            >
              Live site
              <ExternalIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.designUrl && (
            <a
              href={project.designUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-soft"
            >
              View design
              <ExternalIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
