"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { ease } from "@/lib/animations";
import { CloseIcon, ExternalIcon } from "./ui/Icons";
import CoverImage from "./ui/CoverImage";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc to close + focus management + scroll lock.
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-xl3 bg-canvas shadow-lift outline-none sm:rounded-xl3"
          >
            {/* Header visual */}
            <div className="relative h-44 w-full sm:h-56">
              <CoverImage
                src={project.cover}
                alt={`${project.name} — project cover`}
                accent={project.accent}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas/90 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/80 text-ink backdrop-blur transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-xs uppercase tracking-wider2 text-ink/70">
                  {project.category} · {project.year}
                </p>
                <h2
                  id="case-study-title"
                  className="font-display text-3xl font-medium text-ink"
                >
                  {project.name}
                </h2>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted">{project.overview}</p>

              <div className="grid grid-cols-2 gap-4 rounded-xl2 border border-line bg-surface p-5 sm:grid-cols-4">
                <Meta label="Role" value={project.role} />
                <Meta label="Year" value={project.year} />
                <Meta label="Outcome" value={project.outcomeMetric} />
                <Meta label="Tools" value={project.tools.join(", ")} />
              </div>

              <CaseBlock title="The challenge" items={project.challenges} tone="muted" />
              <CaseBlock title="My approach" items={project.approach} tone="muted" />
              <CaseBlock title="The results" items={project.results} tone="accent" />

              {(project.liveUrl || project.designUrl) && (
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group !px-5 !py-2.5"
                    >
                      Visit live site
                      <ExternalIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {project.designUrl && (
                    <a
                      href={project.designUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost group !px-5 !py-2.5"
                    >
                      View design
                      <ExternalIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              )}

              <p className="rounded-xl2 border border-dashed border-line p-4 text-xs text-muted">
                Placeholder case study — replace the summary, challenge, approach,
                and results in <code>lib/data.ts</code>, and add a cover image at{" "}
                <code>public{project.cover}</code>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider2 text-muted/80">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

function CaseBlock({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "muted" | "accent";
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                tone === "accent" ? "bg-gold" : "bg-line"
              }`}
            />
            <span className={tone === "accent" ? "text-ink" : ""}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
