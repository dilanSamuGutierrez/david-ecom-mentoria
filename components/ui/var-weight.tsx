"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Anima el peso tipográfico según el progreso de scroll (requiere fuente
 * variable — usamos Sora Variable). Ideal para cifras/titulares que "engordan"
 * al entrar en pantalla.
 */
export function VarWeight({
  children,
  from = 300,
  to = 800,
  className,
  style,
}: {
  children: ReactNode;
  from?: number;
  to?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const weight = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ ...style, fontWeight: reduced ? to : weight }}
    >
      {children}
    </motion.span>
  );
}
