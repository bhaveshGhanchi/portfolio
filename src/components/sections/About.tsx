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
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Experience
        </h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-2">
          <div>
            {site.experience.map((job, i) => {
              const isOpen = open === i;
              return (
                <div key={`${job.org}-${job.role}`} className="border-t border-white/12">
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <div>
                      <p className="font-display text-xl font-bold">{job.org}</p>
                      <p className="mt-1 font-mono text-[11px] text-white/50">
                        {job.role} · {job.period}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="mt-1 text-accent"
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
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 pb-6">
                          {job.points.map((point) => (
                            <li
                              key={point}
                              className="text-sm leading-relaxed text-white/70"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-white/12" />
          </div>

          <div className="space-y-10">
            <div>
              <p className="font-mono text-[11px] text-white/45">Education</p>
              <ul className="mt-4 space-y-6">
                {site.education.map((edu) => (
                  <li key={edu.school}>
                    <p className="font-display text-lg font-bold">{edu.school}</p>
                    <p className="mt-1 text-sm text-white/65">{edu.degree}</p>
                    <p className="mt-1 font-mono text-[11px] text-white/40">
                      {edu.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] text-white/45">
                Publications
              </p>
              <ul className="mt-4 space-y-5">
                {site.publications.map((pub) => (
                  <li key={pub.url}>
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base font-bold text-white transition hover:text-accent"
                    >
                      {pub.title}
                    </a>
                    <p className="mt-1 text-sm text-white/65">{pub.authors}</p>
                    <p className="mt-1 font-mono text-[11px] text-white/40">
                      {pub.venue}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {pub.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] text-white/45">Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.values(site.skills)
                  .flat()
                  .map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ backgroundColor: "#ff4b1f", color: "#fff" }}
                      className="border border-white/15 px-2.5 py-1 font-mono text-[11px] text-white/75"
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
