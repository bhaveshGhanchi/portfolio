"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotate = useTransform(sx, [-40, 40], [-6, 6]);
  const shiftX = useTransform(sx, [-40, 40], [-18, 18]);
  const shiftY = useTransform(sy, [-40, 40], [-12, 12]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 80);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 80);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="relative h-full min-h-[320px] w-full overflow-hidden bg-panel">
      <div className="crosshatch absolute inset-0" />
      <div className="noise" />

      <motion.div
        style={{ x: shiftX, y: shiftY, rotate }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 360 360" className="h-[92%] w-[92%]">
          <motion.circle
            cx="180"
            cy="180"
            r="120"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <motion.circle
            cx="180"
            cy="180"
            r="78"
            fill="none"
            stroke="#2f6bff"
            strokeWidth="1.2"
            strokeDasharray="2 10"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <motion.circle
            cx="180"
            cy="60"
            r="8"
            fill="#ff4b1f"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <motion.rect
            x="156"
            y="156"
            width="48"
            height="48"
            fill="none"
            stroke="#ff4b1f"
            strokeWidth="1.5"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <text
            x="180"
            y="186"
            textAnchor="middle"
            fill="white"
            style={{ fontSize: 14, fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            BG
          </text>
        </svg>
      </motion.div>

      <div className="absolute top-4 left-4 font-mono text-[11px] text-white/50">
        pointer-linked · systems layer
      </div>
      <div className="absolute right-4 bottom-4 font-mono text-[11px] text-accent">
        LA · USC · SWE
      </div>
    </div>
  );
}
