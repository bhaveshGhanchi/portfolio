"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 md:py-28">
      <div className="diag-lines pointer-events-none absolute inset-0" />
      <div className="noise" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-xs text-muted">04 / contact</p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Got a role, a product, or a weird systems problem?
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { label: "Email", value: site.email, href: `mailto:${site.email}` },
            { label: "GitHub", value: "bhaveshGhanchi", href: site.github },
            { label: "LinkedIn", value: "bhaveshghanchi", href: site.linkedin },
          ].map((item, i) => (
            <Magnetic key={item.label} strength={0.2}>
              <motion.a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ borderColor: "#ff4b1f" }}
                className="block border border-line bg-surface p-5 transition"
              >
                <p className="font-mono text-[11px] text-muted">{item.label}</p>
                <p className="font-display mt-2 text-xl font-bold">{item.value}</p>
              </motion.a>
            </Magnetic>
          ))}
        </div>

        <Magnetic className="mt-8 inline-block">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent px-6 py-3 font-mono text-xs tracking-wide text-white transition hover:bg-ink"
          >
            Download resume PDF
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
