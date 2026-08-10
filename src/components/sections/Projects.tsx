"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold tracking-tight md:text-5xl"
        >
          Projects
        </motion.h2>
        <p className="mt-3 max-w-lg text-muted">
          Source on GitHub — PrepLoop is live.
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
