"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type RelatedLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "docs" | "section";
};

type Interest = {
  id: string;
  label: string;
  blurb: string;
  related: RelatedLink[];
};

const INTERESTS: Interest[] = [
  {
    id: "ai",
    label: "AI / LLMs",
    blurb:
      "Agent observability, RAG, and fine-tuning — OTAS and biomedical retrieval work.",
    related: [
      { label: "OTAS", href: "#work", kind: "section" },
      {
        label: "OTAS repo",
        href: "https://github.com/bhaveshGhanchi/otas",
        kind: "repo",
      },
      { label: "Biomedical RAG", href: "#projects", kind: "section" },
    ],
  },
  {
    id: "fullstack",
    label: "Full-stack",
    blurb:
      "Product UIs and APIs end-to-end — PrepLoop is live if you want to click around.",
    related: [
      {
        label: "PrepLoop live",
        href: "https://prep-loop-two.vercel.app",
        kind: "live",
      },
      {
        label: "PrepLoop repo",
        href: "https://github.com/bhaveshGhanchi/PrepLoop",
        kind: "repo",
      },
    ],
  },
  {
    id: "games",
    label: "Unity / C#",
    blurb:
      "Current internship — Robot Race vehicle simulation and 6-player multiplayer sync in C#.",
    related: [
      { label: "Experience", href: "#about", kind: "section" },
      { label: "Resume", href: "/BhaveshGhanchi_Resume.pdf", kind: "docs" },
    ],
  },
  {
    id: "gis",
    label: "GIS / Maps",
    blurb:
      "SAFE internship — geospatial ETL (497→1,248 segments) and an LLM route recommender.",
    related: [
      { label: "Experience", href: "#about", kind: "section" },
      { label: "Resume", href: "/BhaveshGhanchi_Resume.pdf", kind: "docs" },
    ],
  },
  {
    id: "python",
    label: "Python",
    blurb: "Backends, NLP pipelines, and ML systems — FastAPI and research code.",
    related: [
      {
        label: "OTAS",
        href: "https://github.com/bhaveshGhanchi/otas",
        kind: "repo",
      },
      { label: "Projects", href: "#projects", kind: "section" },
    ],
  },
  {
    id: "java",
    label: "Java",
    blurb:
      "LEAP — reliable transport over UDP with congestion control and integrity checks.",
    related: [
      {
        label: "LEAP repo",
        href: "https://github.com/bhaveshGhanchi/leap",
        kind: "repo",
      },
    ],
  },
];

type Particle = { id: number; x: number; y: number; r: number };

function hash01(n: number, salt: number) {
  const x = Math.sin(n * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: hash01(i, 1) * 100,
    y: hash01(i, 2) * 100,
    r: 0.35 + hash01(i, 3) * 1,
  }));
}

export function HeroOrbit() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("ai");
  const particles = useMemo(() => makeParticles(36), []);

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const sx = useSpring(px, { stiffness: 70, damping: 20 });
  const sy = useSpring(py, { stiffness: 70, damping: 20 });
  const glowLeft = useMotionTemplate`${sx}%`;
  const glowTop = useMotionTemplate`${sy}%`;

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      px.set(((e.clientX - rect.left) / rect.width) * 100);
      py.set(((e.clientY - rect.top) / rect.height) * 100);
    };
    const onLeave = () => {
      px.set(50);
      py.set(50);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py]);

  const selected = INTERESTS.find((i) => i.id === active) ?? INTERESTS[0];

  return (
    <div className="flex h-full min-h-[340px] w-full max-w-full flex-col overflow-hidden bg-panel text-white sm:min-h-[380px] lg:min-h-[420px]">
      {/* Visual field — no overlapping UI */}
      <div
        ref={canvasRef}
        className="relative min-h-[140px] flex-1 overflow-hidden"
        aria-hidden
      >
        <div className="crosshatch absolute inset-0" />
        <motion.div
          className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,75,31,0.2),transparent_65%)]"
          style={{ left: glowLeft, top: glowTop }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {particles.map((p) => (
            <ParticleDot key={p.id} particle={p} sx={sx} sy={sy} />
          ))}
          <motion.circle
            cx={50}
            cy={50}
            r={10}
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth={0.3}
            animate={{ r: [10, 15, 10], opacity: [0.45, 0.12, 0.45] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle
            cx={50}
            cy={50}
            r={8}
            fill="#161616"
            stroke="#ff4b1f"
            strokeWidth={0.45}
          />
          <text
            x={50}
            y={52}
            textAnchor="middle"
            fill="#fff"
            style={{
              fontSize: 4,
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
            }}
          >
            BG
          </text>
        </svg>
      </div>

      {/* Real clickable interest chips */}
      <div className="border-t border-white/10 px-3 pt-3 pb-2">
        <p className="mb-2 font-mono text-[10px] tracking-wide text-white/40">
          Interests — pick one
        </p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => {
            const on = interest.id === active;
            return (
              <motion.button
                key={interest.id}
                type="button"
                onClick={() => setActive(interest.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`border px-2.5 py-1.5 font-mono text-[11px] transition ${
                  on
                    ? "border-accent bg-accent text-white"
                    : "border-white/20 bg-white/5 text-white/75 hover:border-white/45 hover:text-white"
                }`}
              >
                {interest.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Useful detail + links */}
      <div className="border-t border-white/10 px-3 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-display text-base font-semibold">{selected.label}</p>
            <p className="mt-1 text-sm leading-snug text-white/70">
              {selected.blurb}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.related.map((link) => (
                <a
                  key={`${selected.id}-${link.label}`}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1 border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/85 transition hover:border-accent hover:text-accent"
                >
                  <span className="text-accent">
                    {link.kind === "live"
                      ? "●"
                      : link.kind === "repo"
                        ? "↗"
                        : "→"}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ParticleDot({
  particle,
  sx,
  sy,
}: {
  particle: Particle;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  const x = useSpring(particle.x, { stiffness: 55, damping: 18 });
  const y = useSpring(particle.y, { stiffness: 55, damping: 18 });

  useEffect(() => {
    const push = () => {
      const mx = sx.get();
      const my = sy.get();
      const dx = particle.x - mx;
      const dy = particle.y - my;
      const dist = Math.max(6, Math.hypot(dx, dy));
      const force = Math.min(10, 140 / (dist * dist));
      x.set(particle.x + (dx / dist) * force * 5);
      y.set(particle.y + (dy / dist) * force * 5);
    };
    const unsubX = sx.on("change", push);
    const unsubY = sy.on("change", push);
    return () => {
      unsubX();
      unsubY();
    };
  }, [particle.x, particle.y, sx, sy, x, y]);

  return (
    <motion.circle cx={x} cy={y} r={particle.r} fill="rgba(255,255,255,0.28)" />
  );
}
