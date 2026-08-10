"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primary =
    project.liveUrl ?? project.repoUrl ?? project.externalUrl ?? "#";
  const secondary =
    project.liveUrl && project.repoUrl ? project.repoUrl : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28) }}
      whileHover="hover"
      className="group relative overflow-hidden border border-line bg-surface"
    >
      <motion.div
        variants={{ hover: { scaleY: 1 } }}
        initial={{ scaleY: 0 }}
        className="absolute inset-y-0 left-0 w-1 origin-bottom bg-accent"
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] text-muted">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
              {project.name}
            </h3>
          </div>
          {project.metric ? (
            <motion.div
              variants={{ hover: { scale: 1.06, rotate: -2 } }}
              className="border border-line bg-bg px-3 py-2 text-right"
            >
              <p className="font-display text-lg font-bold leading-none">
                {project.metric.value}
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted">
                {project.metric.label}
              </p>
            </motion.div>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[11px] text-ink/70">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent transition hover:underline"
          >
            {project.liveUrl
              ? "Open live →"
              : project.repoUrl
                ? "Source →"
                : "Explore →"}
          </a>
          {secondary ? (
            <a
              href={secondary}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition hover:text-ink hover:underline"
            >
              repo
            </a>
          ) : null}
        </div>
      </div>

      <motion.div
        aria-hidden
        variants={{ hover: { x: "0%" } }}
        initial={{ x: "-110%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,75,31,0.08)_50%,transparent_70%)]"
      />
    </motion.article>
  );
}
