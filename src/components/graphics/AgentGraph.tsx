"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "agent", label: "Agent", x: 18, y: 52 },
  { id: "uasam", label: "UASAM", x: 42, y: 28 },
  { id: "brain", label: "Brain", x: 68, y: 52 },
  { id: "dash", label: "Dash", x: 88, y: 30 },
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
      <div className="crosshatch absolute inset-0 opacity-60" />

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
              stroke={lit ? "#ff4b1f" : "rgba(255,255,255,0.2)"}
              strokeWidth={lit ? 0.6 : 0.3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 * i }}
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
                r={lit ? 3.8 : 2.8}
                fill={lit ? "#ff4b1f" : "#2f6bff"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15 + i * 0.06 }}
                onMouseEnter={() => setActive(node.id)}
                style={{ cursor: "pointer" }}
              />
              <text
                x={node.x}
                y={node.y - 5.5}
                textAnchor="middle"
                fill={lit ? "#fff" : "rgba(255,255,255,0.55)"}
                style={{ fontSize: 3.2, fontFamily: "IBM Plex Mono, monospace" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="absolute right-4 bottom-4 font-mono text-[11px] text-accent">
        {active?.toUpperCase()}
      </p>
    </div>
  );
}
