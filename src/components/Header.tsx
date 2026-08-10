"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(243,241,236,0)", "rgba(243,241,236,0.92)"],
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(207,200,188,0)", "rgba(207,200,188,1)"],
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed inset-x-0 top-0 z-40 border-b backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {site.shortName}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-wide text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-wide text-ink underline decoration-accent decoration-2 underline-offset-4"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}
