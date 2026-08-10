"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  return (
    <motion.div
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * strength);
        y.set(dy * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
