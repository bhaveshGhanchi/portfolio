"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Stage = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

const STAGES: Stage[] = [
  {
    id: "agent",
    label: "Agent",
    detail: "Your AI agent authenticates with an AgentKey and starts a session.",
    x: 10,
    y: 50,
  },
  {
    id: "uasam",
    label: "UASAM",
    detail: "Users, projects, agents, and keys — management plane on port 8000.",
    x: 32,
    y: 28,
  },
  {
    id: "events",
    label: "Events",
    detail: "Every call becomes a structured BackendEvent: path, latency, status, body.",
    x: 32,
    y: 72,
  },
  {
    id: "brain",
    label: "Brain",
    detail: "Ingests telemetry, stores sessions, exposes analytics APIs on port 8002.",
    x: 58,
    y: 50,
  },
  {
    id: "dash",
    label: "Dashboard",
    detail: "React UI for sessions, latency charts, errors, and workflow visibility.",
    x: 86,
    y: 50,
  },
];

const EDGES: [string, string][] = [
  ["agent", "uasam"],
  ["agent", "events"],
  ["uasam", "brain"],
  ["events", "brain"],
  ["brain", "dash"],
];

const EVENT_SAMPLES = [
  { method: "POST", path: "/session", status: 201, ms: 42 },
  { method: "POST", path: "/tool/search", status: 200, ms: 186 },
  { method: "GET", path: "/memory", status: 200, ms: 31 },
  { method: "POST", path: "/llm/complete", status: 200, ms: 812 },
  { method: "POST", path: "/tool/http", status: 502, ms: 1204 },
  { method: "POST", path: "/session/end", status: 204, ms: 18 },
];

export function AgentGraph() {
  const [active, setActive] = useState("brain");
  const [playing, setPlaying] = useState(true);
  const [packet, setPacket] = useState(0);
  const [feed, setFeed] = useState(EVENT_SAMPLES.slice(0, 3));
  const [tick, setTick] = useState(0);

  const byId = useMemo(
    () => Object.fromEntries(STAGES.map((s) => [s.id, s])),
    [],
  );
  const stage = byId[active];

  const pathPoints = useMemo(() => {
    const order = ["agent", "events", "brain", "dash"] as const;
    return order.map((id) => byId[id]);
  }, [byId]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setPacket((p) => (p + 1) % pathPoints.length);
      setTick((t) => t + 1);
      setFeed((prev) => {
        const next = EVENT_SAMPLES[Math.floor(Math.random() * EVENT_SAMPLES.length)];
        return [next, ...prev].slice(0, 4);
      });
      const hotspot = pathPoints[Math.floor(Math.random() * pathPoints.length)];
      if (hotspot && Math.random() > 0.45) setActive(hotspot.id);
    }, 1400);
    return () => window.clearInterval(id);
  }, [playing, pathPoints]);

  const packetPos = pathPoints[packet] ?? pathPoints[0];

  return (
    <div className="relative overflow-hidden bg-panel text-white">
      <div className="crosshatch absolute inset-0 opacity-50" />

      <div className="relative grid gap-0 lg:grid-rows-[1fr_auto]">
        <div className="relative aspect-[5/3] w-full sm:aspect-[16/10]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {EDGES.map(([a, b], i) => {
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
                  stroke={lit ? "#ff4b1f" : "rgba(255,255,255,0.18)"}
                  strokeWidth={lit ? 0.7 : 0.35}
                  strokeDasharray={lit ? "0" : "1.2 1.2"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.08 * i }}
                />
              );
            })}

            <motion.circle
              key={`pkt-${packet}-${tick}`}
              r={1.6}
              fill="#ff4b1f"
              initial={{
                cx: pathPoints[Math.max(0, packet - 1)]?.x ?? packetPos.x,
                cy: pathPoints[Math.max(0, packet - 1)]?.y ?? packetPos.y,
                opacity: 0,
              }}
              animate={{
                cx: packetPos.x,
                cy: packetPos.y,
                opacity: [0, 1, 1, 0.4],
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {STAGES.map((node, i) => {
              const lit = active === node.id;
              return (
                <g key={node.id}>
                  {lit ? (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={7}
                      fill="none"
                      stroke="#ff4b1f"
                      strokeWidth={0.3}
                      initial={{ opacity: 0.6, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  ) : null}
                  <motion.rect
                    x={node.x - 7}
                    y={node.y - 4.2}
                    width={14}
                    height={8.4}
                    rx={1.2}
                    fill={lit ? "#ff4b1f" : "#1f1f1f"}
                    stroke={lit ? "#ff4b1f" : "#2f6bff"}
                    strokeWidth={0.35}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={() => {
                      setActive(node.id);
                      setPlaying(false);
                    }}
                    style={{ cursor: "pointer" }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <text
                    x={node.x}
                    y={node.y + 1}
                    textAnchor="middle"
                    fill="#fff"
                    style={{
                      fontSize: 2.6,
                      fontFamily: "IBM Plex Mono, monospace",
                      pointerEvents: "none",
                    }}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] tracking-wide text-white/45">
              OTAS flow · click a stage
            </p>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/80 transition hover:border-accent hover:text-accent"
            >
              {playing ? "Pause sim" : "Play sim"}
            </button>
          </div>
        </div>

        <div className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
          <div className="border-b border-white/10 p-4 sm:border-r sm:border-b-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <p className="font-mono text-[10px] text-accent uppercase">
                  {stage.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {stage.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="p-4">
            <p className="font-mono text-[10px] text-white/45">Live events</p>
            <ul className="mt-2 space-y-1.5">
              <AnimatePresence initial={false}>
                {feed.map((ev, i) => (
                  <motion.li
                    key={`${ev.path}-${ev.ms}-${tick}-${i}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1 - i * 0.15, x: 0 }}
                    className="flex items-center justify-between gap-2 font-mono text-[10px] text-white/70"
                  >
                    <span>
                      <span
                        className={
                          ev.status >= 400 ? "text-accent" : "text-accent-2"
                        }
                      >
                        {ev.method}
                      </span>{" "}
                      {ev.path}
                    </span>
                    <span className="text-white/40">
                      {ev.status} · {ev.ms}ms
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
