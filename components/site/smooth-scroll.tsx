"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reducido } from "@/lib/gsap";

/** Lenis sincronizado con el reloj de GSAP para que ScrollTrigger no se desfase. */
export function SmoothScroll() {
  useEffect(() => {
    if (reducido()) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -72 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
