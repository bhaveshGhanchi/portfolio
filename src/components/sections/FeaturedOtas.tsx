"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AgentGraph } from "@/components/graphics/AgentGraph";
import { Magnetic } from "@/components/Magnetic";
import { featuredProject } from "@/data/projects";

export function FeaturedOtas() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const p = featuredProject;

  return (
    <section
      id="work"
      ref={ref}
      className="scroll-mt-20 border-y border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold tracking-tight md:text-5xl"
            >
              {p.name}
            </motion.h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {p.summary}
            </p>
          </div>
          {p.metric ? (
            <motion.div style={{ y }} className="text-right">
              <p className="font-display text-4xl font-bold text-accent">
                {p.metric.value}
              </p>
              <p className="font-mono text-[11px] text-muted">{p.metric.label}</p>
            </motion.div>
          ) : null}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <AgentGraph />
          </motion.div>

          <div className="flex flex-col justify-between gap-8">
            <ul>
              {p.highlights?.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                  className="border-b border-line py-4 text-[15px] leading-relaxed text-ink"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <div>
              <p className="text-sm text-muted">{p.role}</p>
              <p className="mt-2 font-mono text-[11px] text-muted">
                {p.stack.join(" · ")}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {p.repoUrl ? (
                  <Magnetic strength={0.2}>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-ink px-5 py-2.5 font-mono text-xs text-white transition hover:bg-accent"
                    >
                      GitHub
                    </a>
                  </Magnetic>
                ) : null}
                {p.docsUrl ? (
                  <Magnetic strength={0.2}>
                    <a
                      href={p.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex border border-line px-5 py-2.5 font-mono text-xs transition hover:border-ink"
                    >
                      Docs
                    </a>
                  </Magnetic>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
