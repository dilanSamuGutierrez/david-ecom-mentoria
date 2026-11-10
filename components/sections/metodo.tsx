"use client";

import { useRef } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { site } from "@/lib/site";
import { gsap, ScrollTrigger, useGSAP, reducido } from "@/lib/gsap";
import { Lineas } from "@/components/ui/motion";

const { method } = site;

/**
 * 4. Método. Dudas → cómo se trabajan, y las cuatro etapas como línea de
 * tiempo: la línea se llena con el scroll y cada etapa se marca al
 * alcanzarla, para que se lea como un orden y no como tarjetas sueltas.
 */
export function Metodo() {
  const linea = useRef<HTMLOListElement>(null);

  useGSAP(() => {
    if (reducido() || !linea.current) return;
    gsap.fromTo(linea.current.querySelector(".tl-relleno"), { scaleY: 0 }, {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: linea.current, start: "top 65%", end: "bottom 65%", scrub: 0.4 },
    });
    linea.current.querySelectorAll<HTMLElement>(".etapa").forEach((etapa) => {
      ScrollTrigger.create({ trigger: etapa, start: "top 65%", toggleClass: { targets: etapa, className: "activo" } });
    });
  }, { scope: linea });

  return (
    <section id="metodo" className="relative py-[clamp(3.75rem,11vw,9rem)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div className="flex items-center gap-3 lg:block">
            <span className="kicker">{method.kicker}</span>
            <span className="font-mono text-xs text-faint lg:mt-3 lg:block">(03)</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
            <Lineas className="text-[clamp(2rem,4.8vw,3.9rem)] font-semibold leading-[1] tracking-[-0.045em]">
              Antes de invertir más, <span className="text-mint">entiende el siguiente paso.</span>
            </Lineas>
            <p className="max-w-md leading-relaxed text-muted">{method.lead}</p>
          </div>
        </div>

        {/* Dudas → cómo lo trabajamos (acordeón accesible: menos scroll en celular) */}
        <div className="mt-[clamp(2.5rem,6vw,5rem)] lg:pl-[15rem]">
          <p className="pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Lo que puede preocuparte · toca para ver cómo lo trabajamos</p>
          <div className="border-t border-border">
            {method.doubts.map((d) => (
              <details key={d.q} className="faq-item group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[1.0625rem] font-medium leading-snug [&::-webkit-details-marker]:hidden">
                  {d.q}
                  <Plus size={18} aria-hidden className="shrink-0 text-mint transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="faq-respuesta max-w-2xl pb-5 pr-10 leading-relaxed text-muted">{d.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Etapas en línea de tiempo */}
        <div className="mt-[clamp(3.5rem,10vw,8rem)] grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="kicker">Del producto al pedido</span>
            <Lineas as="h3" className="mt-5 text-[clamp(1.8rem,3.4vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
              Cuatro etapas. <span className="text-mint">Que cada decisión tenga un porqué.</span>
            </Lineas>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Herramientas">
              {method.tools.map((t) => <li key={t} className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-foreground">{t}</li>)}
            </ul>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-faint">{method.toolsNote}</p>
          </div>

          <ol ref={linea} className="relative grid gap-9 pl-16 md:gap-12">
            <span aria-hidden className="absolute bottom-2 left-[1.35rem] top-2 w-px bg-white/10" />
            <span aria-hidden className="tl-relleno absolute bottom-2 left-[1.35rem] top-2 w-px origin-top bg-primary" />
            {method.stages.map((s) => (
              <li key={s.n} className="etapa relative">
                <span className="etapa-punto absolute -left-16 top-0 grid size-11 place-items-center rounded-full border border-white/15 bg-background font-mono text-sm text-white/60">{s.n}</span>
                <h4 className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-tight tracking-[-0.03em]">{s.title}</h4>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{s.work}</p>
                <p className="mt-3 flex max-w-xl gap-2 text-[0.95rem] leading-snug text-foreground">
                  <ArrowRight size={17} aria-hidden className="mt-0.5 shrink-0 text-mint" />
                  <span><span className="sr-only">Resultado del trabajo: </span>{s.result}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
