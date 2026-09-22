"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Flecha flotante para volver al inicio. Aparece al bajar por la página. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Volver arriba"
      className={`back-to-top${show ? " is-visible" : ""}`}
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
}
