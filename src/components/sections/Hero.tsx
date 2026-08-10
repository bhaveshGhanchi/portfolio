"use client";

import { motion } from "framer-motion";
import { HeroOrbit } from "@/components/graphics/HeroOrbit";
import { Magnetic } from "@/components/Magnetic";
import { site } from "@/data/site";

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.1 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section id="top" className="pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:px-8 lg:pb-28">
        <div className="relative z-10 min-w-0">
          <motion.p
            custom={0}
            variants={line}
            initial="hidden"
            animate="show"
            className="font-mono text-xs text-muted"
          >
            {site.title} · {site.location}
          </motion.p>

          <motion.h1
            custom={1}
            variants={line}
            initial="hidden"
            animate="show"
            className="font-display mt-5 text-[clamp(2.6rem,7vw,4.75rem)] leading-[0.95] font-extrabold tracking-tight break-words"
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
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={line}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-3"
          >
            <Magnetic strength={0.25}>
              <a
                href="#work"
                className="inline-flex bg-ink px-5 py-3 font-mono text-xs text-white transition hover:bg-accent"
              >
                See OTAS
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#projects"
                className="inline-flex border border-line px-5 py-3 font-mono text-xs text-ink transition hover:border-ink"
              >
                Projects
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 min-w-0 w-full"
          aria-hidden
        >
          <HeroOrbit />
        </motion.div>
      </div>
    </section>
  );
}
