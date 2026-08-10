"use client";

import { motion } from "framer-motion";
import { HeroOrbit } from "@/components/graphics/HeroOrbit";
import { Magnetic } from "@/components/Magnetic";
import { site } from "@/data/site";

const line = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="diag-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="noise" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-24">
        <div className="flex flex-col justify-end">
          <motion.p
            custom={0}
            variants={line}
            initial="hidden"
            animate="show"
            className="font-mono text-xs text-muted"
          >
            {site.title} / {site.location}
          </motion.p>

          <motion.h1
            custom={1}
            variants={line}
            initial="hidden"
            animate="show"
            className="font-display mt-4 text-[clamp(3.2rem,10vw,6.8rem)] leading-[0.9] font-extrabold tracking-tight"
          >
            {site.name.split(" ")[0]}
            <br />
            <span className="text-accent">{site.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-3"
          >
            <Magnetic>
              <a
                href="#work"
                className="inline-flex bg-ink px-5 py-3 font-mono text-xs tracking-wide text-white transition hover:bg-accent"
              >
                See OTAS
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex border border-ink/20 bg-surface px-5 py-3 font-mono text-xs tracking-wide text-ink transition hover:border-ink"
              >
                Live projects
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[340px]"
        >
          <HeroOrbit />
          <motion.div
            aria-hidden
            className="absolute -bottom-3 -left-3 h-16 w-16 border border-accent"
            animate={{ rotate: [0, 8, 0], x: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -top-3 -right-3 h-10 w-10 bg-accent-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
