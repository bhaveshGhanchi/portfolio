"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "agent", label: "Agent", x: 18, y: 52 },
  { id: "uasam", label: "UASAM", x: 42, y: 28 },
  { id: "brain", label: "Brain", x: 68, y: 52 },
  { id: "dash", label: "Dashboard", x: 88, y: 30 },
  { id: "events", label: "Events", x: 48, y: 78 },
];

const links = [
  ["agent", "uasam"],
  ["uasam", "brain"],
  ["brain", "dash"],
  ["agent", "events"],
  ["events", "brain"],
] as const;

export function AgentGraph() {
  const [active, setActive] = useState<string | null>("brain");

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel text-white">
      <div className="crosshatch absolute inset-0 opacity-70" />
      <div className="noise" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {links.map(([a, b], i) => {
          const n1 = byId[a];
          const n2 = byId[b];
          const lit = active === a || active === b;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke={lit ? "#ff4b1f" : "rgba(255,255,255,0.22)"}
              strokeWidth={lit ? 0.7 : 0.35}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: "easeOut" }}
            />
          );
        })}

        {nodes.map((node, i) => {
          const lit = active === node.id;
          return (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={lit ? 4.2 : 3.2}
                fill={lit ? "#ff4b1f" : "#2f6bff"}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2 + i * 0.08 }}
                onMouseEnter={() => setActive(node.id)}
                style={{ cursor: "pointer" }}
              />
              <motion.text
                x={node.x}
                y={node.y - 6}
                textAnchor="middle"
                fill={lit ? "#fff" : "rgba(255,255,255,0.7)"}
                style={{ fontSize: 3.4, fontFamily: "IBM Plex Mono, monospace" }}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}

        <motion.circle
          cx={48}
          cy={78}
          r={8}
          fill="none"
          stroke="#ff4b1f"
          strokeWidth={0.25}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <p className="font-mono text-[11px] tracking-wide text-white/55">
          hover nodes · agent → uasam → brain → dash
        </p>
        <motion.span
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs text-accent"
        >
          {active?.toUpperCase()}
        </motion.span>
      </div>
    </div>
  );
}
