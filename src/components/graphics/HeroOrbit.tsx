"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const rotate = useTransform(sx, [-40, 40], [-4, 4]);
  const shiftX = useTransform(sx, [-40, 40], [-10, 10]);
  const shiftY = useTransform(sy, [-40, 40], [-8, 8]);

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
    <div
      ref={ref}
      className="relative h-full min-h-[260px] w-full max-w-full overflow-hidden bg-panel sm:min-h-[300px] lg:min-h-[340px]"
    >
      <div className="crosshatch absolute inset-0" />

      <motion.div
        style={{ x: shiftX, y: shiftY, rotate }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 360 360" className="h-[88%] w-[88%]">
          <motion.circle
            cx="180"
            cy="180"
            r="118"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
            strokeDasharray="3 9"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <motion.circle
            cx="180"
            cy="180"
            r="76"
            fill="none"
            stroke="#2f6bff"
            strokeWidth="1"
            strokeDasharray="2 12"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <motion.circle
            cx="180"
            cy="62"
            r="6"
            fill="#ff4b1f"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />
          <text
            x="180"
            y="186"
            textAnchor="middle"
            fill="white"
            style={{
              fontSize: 15,
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
            }}
          >
            BG
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
