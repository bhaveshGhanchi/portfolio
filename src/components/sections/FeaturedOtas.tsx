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
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const p = featuredProject;

  return (
    <section
      id="work"
      ref={ref}
      className="relative scroll-mt-20 border-y border-line bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-accent"
            >
              01 / featured
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-display mt-2 text-4xl font-bold tracking-tight md:text-6xl"
            >
              {p.name}
            </motion.h2>
          </div>
          {p.metric ? (
            <motion.div
              style={{ y }}
              className="border border-line bg-bg px-5 py-3 text-right"
            >
              <p className="font-display text-3xl font-bold text-accent">
                {p.metric.value}
              </p>
              <p className="font-mono text-[11px] text-muted">{p.metric.label}</p>
            </motion.div>
          ) : null}
        </div>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {p.summary}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <AgentGraph />
          </motion.div>

          <div className="flex flex-col justify-between gap-8">
            <ul className="space-y-0">
              {p.highlights?.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.45 }}
                  whileHover={{ x: 6, backgroundColor: "rgba(255,75,31,0.06)" }}
                  className="border-b border-line py-4 text-[15px] leading-relaxed text-ink"
                >
                  <span className="mr-3 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div>
              <p className="font-mono text-xs text-muted">{p.role}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                {p.stack.join(" · ")}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {p.repoUrl ? (
                  <Magnetic>
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
                  <Magnetic>
                    <a
                      href={p.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex border border-ink/25 px-5 py-2.5 font-mono text-xs transition hover:border-ink"
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
