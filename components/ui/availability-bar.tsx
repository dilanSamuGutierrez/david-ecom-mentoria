"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Barra de disponibilidad de cupos que "se vacía" al entrar en pantalla.
 * El relleno representa los cupos que quedan (honesto y editable en site.ts).
 */
export function AvailabilityBar({
  taken,
  total,
  className,
}: {
  taken: number;
  total: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const remaining = Math.max(0, total - taken);
  const ratio = total > 0 ? remaining / total : 0;

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end justify-between">
        <span className="font-mono text-[0.7rem] uppercase tracking-widest text-primary-soft">
          Cupos disponibles
        </span>
        <span className="font-mono text-sm text-foreground">
          <span className="text-primary-soft">{remaining}</span>
          <span className="text-faint"> / {total}</span>
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-soft"
          style={{ transformOrigin: "left" }}
          initial={reduced ? { scaleX: ratio } : { scaleX: 1 }}
          whileInView={{ scaleX: ratio }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
