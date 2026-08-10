"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";

export function About() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-line bg-panel py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Path so far
          </h2>
          <p className="font-mono text-xs text-white/45">03 / about</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {site.experience.map((job, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={`${job.org}-${job.role}`}
                  layout
                  className="border-t border-white/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <div>
                      <p className="font-display text-xl font-bold md:text-2xl">
                        {job.org}
                      </p>
                      <p className="mt-1 font-mono text-xs text-white/55">
                        {job.role} · {job.period}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="mt-1 font-mono text-accent"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          <p className="font-mono text-[11px] text-accent-2">
                            {job.stack}
                          </p>
                          <ul className="mt-3 space-y-2">
                            {job.points.map((point) => (
                              <li
                                key={point}
                                className="text-sm leading-relaxed text-white/75"
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            <div className="border-t border-white/15" />
          </div>

          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs text-white/45">Education</p>
              <ul className="mt-4 space-y-5">
                {site.education.map((edu) => (
                  <li key={edu.school} className="border border-white/15 p-4">
                    <p className="font-display text-lg font-bold">{edu.school}</p>
                    <p className="mt-1 text-sm text-white/70">{edu.degree}</p>
                    <p className="mt-1 font-mono text-[11px] text-white/45">
                      {edu.detail}
                    </p>
                    {edu.coursework ? (
                      <p className="mt-3 text-sm text-white/60">{edu.coursework}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-white/45">Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.values(site.skills)
                  .flat()
                  .map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i * 0.02, 0.4) }}
                      whileHover={{
                        backgroundColor: "#ff4b1f",
                        color: "#fff",
                        y: -2,
                      }}
                      className="cursor-default border border-white/20 px-3 py-1.5 font-mono text-[11px] text-white/80"
                    >
                      {skill}
                    </motion.span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
