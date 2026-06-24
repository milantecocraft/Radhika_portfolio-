"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { ArrowIcon } from "./ui/Icons";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-glow"
    >
      {/* Visual / cover — replace gradient with a real <Image> when assets exist */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.name} case study`}
        className="relative block aspect-[16/10] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-luxe-gradient opacity-40 mix-blend-soft-light" />
        {/* Floating mock label — stands in for a product screenshot. [REPLACE] */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-medium text-ink/70">
            {project.name}
          </span>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-canvas/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
          {project.year}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-wider2 text-gold">
            {project.category}
          </p>
          <span className="rounded-full bg-gold-soft/30 px-2.5 py-1 text-xs font-medium text-ink">
            {project.outcomeMetric}
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-medium text-ink">
          {project.name}
        </h3>

        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider2 text-muted/80">Problem</dt>
            <dd className="mt-0.5 text-muted">{project.problem}</dd>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <dt className="text-xs uppercase tracking-wider2 text-muted/80">Role</dt>
              <dd className="mt-0.5 text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider2 text-muted/80">Outcome</dt>
              <dd className="mt-0.5 text-ink">{project.outcome}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="link-underline mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink"
        >
          Read case study
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}
