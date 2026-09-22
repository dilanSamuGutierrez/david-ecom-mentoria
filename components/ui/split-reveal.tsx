"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Revela un titular línea por línea con máscara (overflow-hidden + y),
 * emulando un SplitText sin dependencias. Pasa las líneas como array.
 */
export function SplitReveal({
  lines,
  className,
  delay = 0,
  as = "span",
}: {
  lines: React.ReactNode[];
  className?: string;
  delay?: number;
  as?: "span" | "h1" | "h2";
}) {
  const reduced = useReducedMotion();
  const Tag = as;
  return (
    <Tag className={cn("block", className)}>
      {lines.map((ln, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.09,
            }}
          >
            {ln}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
