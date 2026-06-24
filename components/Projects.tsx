"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import ProjectFeature from "./ProjectFeature";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Case studies, not just <span className="italic text-gold">pretty screens.</span>
              </>
            }
            intro="A few problems I've helped untangle — each grounded in research and measured by outcomes."
          />
          <p className="shrink-0 text-sm text-muted md:text-right">
            {projects.length} featured projects
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-24 sm:gap-28">
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
