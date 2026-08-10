"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display max-w-2xl text-4xl font-bold tracking-tight md:text-5xl"
        >
          Let&apos;s talk.
        </motion.h2>
        <p className="mt-4 max-w-md text-muted">
          Open to roles and collaborations in full-stack and AI systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Magnetic strength={0.2}>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex bg-accent px-5 py-3 font-mono text-xs text-white transition hover:bg-ink"
            >
              {site.email}
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-line px-5 py-3 font-mono text-xs transition hover:border-ink"
            >
              GitHub
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-line px-5 py-3 font-mono text-xs transition hover:border-ink"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-line px-5 py-3 font-mono text-xs transition hover:border-ink"
            >
              Resume
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
