"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, reducido } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/** Titular que entra por líneas o palabras desde una máscara. */
export function Lineas({ as = "h2", tipo = "lines", alCargar = false, retraso = 0, className, children }: {
  as?: ElementType; tipo?: "lines" | "words"; alCargar?: boolean; retraso?: number; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;
  useGSAP(() => {
    if (reducido() || !ref.current) return;
    SplitText.create(ref.current, {
      type: tipo, mask: tipo, autoSplit: true,
      onSplit: (s) => gsap.from(tipo === "lines" ? s.lines : s.words, {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: tipo === "lines" ? 0.09 : 0.045,
        delay: retraso,
        scrollTrigger: alCargar ? undefined : { trigger: ref.current, start: "top 88%", once: true },
      }),
    });
  }, { scope: ref });
  return <Tag ref={ref} className={className}>{children}</Tag>;
}

/** Aparece subiendo; con `grupo` anima a los hijos en cascada. */
export function Subir({ grupo = false, as = "div", className, children }: { grupo?: boolean; as?: ElementType; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;
  useGSAP(() => {
    if (reducido() || !ref.current) return;
    // opacity (no autoAlpha): el contenido sigue enfocable con teclado antes de aparecer
    gsap.from(grupo ? ref.current.children : ref.current, {
      y: 36, opacity: 0, duration: 1, ease: "power3.out", stagger: grupo ? 0.08 : 0,
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
    });
  }, { scope: ref });
  return <Tag ref={ref} className={className}>{children}</Tag>;
}

/**
 * Número con dígitos que ruedan (como un contador mecánico).
 * El HTML ya trae el valor final (sin JS se ve completo) y `sr` da la
 * lectura completa a lectores de pantalla ("Más de 10.000 pedidos").
 */
export function Rodillo({ valor, prefijo = "", sr, className }: { valor: number; prefijo?: string; sr?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const texto = valor.toLocaleString("es-CO");
  useGSAP(() => {
    if (reducido() || !ref.current) return;
    ref.current.querySelectorAll<HTMLElement>("[data-col]").forEach((col, i) => {
      const d = Number(col.dataset.col);
      // La posición final sin JS va en la propiedad `translate`; se quita para que GSAP no la sume
      col.style.translate = "none";
      gsap.fromTo(col, { yPercent: 0 }, {
        yPercent: -(10 + d) * 5, duration: 1.6 + i * 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
      });
    });
  }, { scope: ref });
  return (
    <span ref={ref} className={cn("inline-flex items-baseline tabular-nums", className)}>
      <span className="sr-only">{sr ?? prefijo + texto}</span>
      <span aria-hidden className="text-primary-soft">{prefijo}</span>
      {texto.split("").map((c, i) =>
        /\d/.test(c) ? (
          // Ventana de 1.15em para que ningún dígito se corte por arriba o por abajo
          <span key={i} aria-hidden className="relative inline-block h-[1.15em] overflow-hidden align-bottom leading-[1.15]">
            <span data-col={c} className="flex flex-col will-change-transform" style={{ translate: `0 -${(10 + Number(c)) * 5}%` }}>
              {Array.from({ length: 20 }, (_, n) => <span key={n} className="block h-[1.15em]">{n % 10}</span>)}
            </span>
          </span>
        ) : <span key={i} aria-hidden>{c}</span>,
      )}
    </span>
  );
}

/** Franja infinita por CSS. Duplica el contenido y se detiene con movimiento reducido. */
export function Franja({ reversa = false, segundos = 36, className, children }: { reversa?: boolean; segundos?: number; className?: string; children: ReactNode }) {
  return (
    <div className={cn("franja", className)}>
      <div className={cn("franja-pista", reversa && "franja-reversa")} style={{ animationDuration: `${segundos}s` }}>
        {/* Cada copia repite el contenido 3 veces: siempre más ancha que la pantalla, sin huecos */}
        <div className="franja-copia">{children}{children}{children}</div>
        <div className="franja-copia" aria-hidden>{children}{children}{children}</div>
      </div>
    </div>
  );
}
