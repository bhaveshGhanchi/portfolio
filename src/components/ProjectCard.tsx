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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
      whileHover="hover"
      className="group relative border border-line bg-surface p-6 transition-colors hover:border-ink/30 md:p-7"
    >
      <motion.div
        variants={{ hover: { scaleY: 1 } }}
        initial={{ scaleY: 0 }}
        className="absolute inset-y-0 left-0 w-[2px] origin-bottom bg-accent"
      />

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold tracking-tight group-hover:text-accent md:text-2xl">
          {project.name}
        </h3>
        {project.metric ? (
          <p className="shrink-0 font-mono text-[11px] text-muted">
            {project.metric.value}
          </p>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-muted">
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
            : project.externalUrl
              ? "Paper →"
              : "Source →"}
        </a>
        {secondary ? (
          <a
            href={secondary}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition hover:text-ink"
          >
            repo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
