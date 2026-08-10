"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="projects" ref={ref} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden">
          <motion.p
            style={{ x }}
            className="font-display whitespace-nowrap text-[clamp(3rem,12vw,7rem)] leading-none font-extrabold tracking-tight text-ink/10"
          >
            SELECTED WORK — LIVE + SOURCE —
          </motion.p>
        </div>

        <div className="mt-2 flex items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight md:text-5xl">
            Projects you can open, clone, or both.
          </h2>
          <p className="hidden font-mono text-xs text-muted md:block">
            02 / projects
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
