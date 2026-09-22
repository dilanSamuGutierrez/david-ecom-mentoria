"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Marquee infinito por requestAnimationFrame (sin dependencias). Se pausa al
 * pasar el cursor y se detiene con prefers-reduced-motion.
 */
export function Marquee({
  children,
  speed = 0.4,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const paused = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const el = track.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      if (!paused.current) {
        x -= speed * (dt / 16);
        const half = el.scrollWidth / 2;
        if (half > 0 && -x >= half) x += half;
        el.style.transform = `translate3d(${x}px,0,0)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced, speed]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div ref={track} className="flex w-max will-change-transform">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
