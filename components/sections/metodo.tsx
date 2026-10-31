"use client";

import { useRef } from "react";
import { site } from "@/lib/site";
import { gsap, useGSAP, reducido } from "@/lib/gsap";
import { Lineas, Subir } from "@/components/ui/motion";

const { method } = site;
// Cartas claras que se apilan con colores distintos (no negras sobre negro)
const colores = ["bg-paper text-ink", "bg-primary text-primary-foreground", "bg-[#d4f2e3] text-ink", "bg-[#f7f5ef] text-ink"];

/** 3. Método: dudas reales conectadas con el trabajo, y las cuatro etapas apiladas. */
export function Metodo() {
  const pila = useRef<HTMLOListElement>(null);

  useGSAP(() => {
    if (reducido() || !pila.current) return;
    const cartas = gsap.utils.toArray<HTMLElement>(".etapa-carta", pila.current);
    cartas.forEach((carta, i) => {
      if (i === cartas.length - 1) return;
      // La carta se reduce un poco solo cuando la siguiente ya la está tapando (solo transform)
      gsap.to(carta, {
        scale: 0.94 + i * 0.015, ease: "none",
        scrollTrigger: { trigger: cartas[i + 1], start: "top 60%", end: "top 20%", scrub: true },
      });
    });
  }, { scope: pila });

  return (
    <section id="metodo" className="relative rounded-t-[2.5rem] bg-surface py-[clamp(5rem,11vw,10rem)] md:rounded-t-[4rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span className="kicker">{method.kicker}</span>
            <Lineas className="mt-6 text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Antes de invertir más, <span className="text-mint">entiende el siguiente paso.</span>
            </Lineas>
          </div>
          <Subir as="p" className="max-w-md text-[1.0625rem] leading-relaxed text-muted">{method.lead}</Subir>
        </div>

        {/* Dudas → cómo lo trabajamos */}
        <Subir as="ul" grupo className="mt-[clamp(3rem,7vw,6rem)] border-t border-border">
          {method.doubts.map((d, i) => (
            <li key={d.q} className="duda group grid gap-3 border-b border-border py-6 md:grid-cols-[3rem_1.1fr_1fr] md:items-baseline md:gap-8 md:py-8">
              <span className="font-mono text-xs text-faint">0{i + 1}</span>
              <p className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-mint">{d.q}</p>
              <p className="leading-relaxed text-muted">{d.a}</p>
            </li>
          ))}
        </Subir>

        {/* Etapas apiladas */}
        <div className="mt-[clamp(5rem,10vw,9rem)] grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="kicker">Del producto al pedido</span>
            <Lineas as="h3" className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Cuatro etapas. <span className="text-mint">Que cada decisión tenga un porqué.</span>
            </Lineas>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Herramientas">
              {method.tools.map((t) => <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-foreground">{t}</li>)}
            </ul>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-faint">{method.toolsNote}</p>
          </div>

          <ol ref={pila} className="grid gap-5">
            {method.stages.map((s, i) => (
              <li key={s.n} className="etapa sticky" style={{ top: `calc(6.5rem + ${i * 1.25}rem)` }}>
                <article className={`etapa-carta relative origin-top overflow-hidden rounded-[1.75rem] p-[clamp(1.5rem,3.5vw,2.75rem)] shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.7)] will-change-transform ${colores[i % colores.length]}`}>
                  <div className="flex items-start justify-between gap-6">
                    <h4 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">{s.title}</h4>
                    <span className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.04em] opacity-35">{s.n}</span>
                  </div>
                  <p className="mt-5 max-w-lg leading-relaxed opacity-80">{s.work}</p>
                  <div className="mt-8 flex flex-col gap-1 rounded-2xl border border-current/15 bg-black/[0.06] px-5 py-4">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">Resultado del trabajo</span>
                    <span className="font-medium">{s.result}</span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
