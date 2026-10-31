"use client";

import Image from "next/image";
import { useRef } from "react";
import { site } from "@/lib/site";
import { gsap, useGSAP, reducido } from "@/lib/gsap";
import { Franja, Lineas, Rodillo, Subir } from "@/components/ui/motion";

const { about } = site;

/** 2. Presentación y experiencia: foto, historia breve, cifras y franja de áreas. */
export function Experiencia() {
  const foto = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (reducido() || !foto.current) return;
    gsap.fromTo(foto.current.querySelector("img"), { yPercent: -8 }, {
      yPercent: 8, ease: "none",
      scrollTrigger: { trigger: foto.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(foto.current, {
      clipPath: "inset(18% 12% 18% 12% round 2rem)", duration: 1.4, ease: "expo.out",
      scrollTrigger: { trigger: foto.current, start: "top 80%", once: true },
    });
  });

  return (
    <section id="experiencia" className="relative pt-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div ref={foto} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:sticky lg:top-24 lg:self-start">
          <Image src="/media/mentor-900.webp" alt="Retrato de David Hernández con camiseta blanca y brazos cruzados" fill className="scale-[1.18] object-cover object-top" sizes="(max-width: 1024px) 90vw, 520px" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint">David Hernández</p>
            <p className="mt-1 text-sm text-white/85">Ecommerce · Meta Ads · Ventas por WhatsApp</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="kicker">{about.kicker}</span>
          <Lineas className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]">
            Soy David Hernández. <span className="text-mint">Enseño desde mi propia operación.</span>
          </Lineas>
          <Subir grupo className="mt-8 grid max-w-xl gap-5 text-[1.0625rem] leading-relaxed text-muted">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Subir>
          <Subir className="mt-10 max-w-xl border-l-2 border-primary pl-5 text-lg leading-snug text-foreground">
            <p>{about.promise}</p>
          </Subir>
        </div>
      </div>

      {/* Cifras */}
      <div className="mx-auto mt-[clamp(4rem,9vw,8rem)] max-w-7xl px-5 sm:px-8">
        <Subir grupo className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
          {about.stats.map((s, i) => (
            <p key={s.sr} className={`flex flex-col gap-3 py-8 pr-4 lg:py-10 ${i % 2 ? "border-l border-border pl-5" : ""} ${i > 1 ? "border-t border-border lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-5" : ""}`}>
              <span className="flex flex-wrap items-baseline gap-x-2 text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-none tracking-[-0.05em] text-foreground">
                <Rodillo valor={s.value} prefijo={s.prefix} sr={s.sr} />
                {s.unit && <span aria-hidden className="text-[0.4em] font-medium tracking-[-0.02em] text-foreground/80">{s.unit}</span>}
              </span>
              <span aria-hidden className="text-sm leading-snug text-muted">{s.label}</span>
            </p>
          ))}
        </Subir>
        <p className="mt-2 text-xs text-faint">Cifras de la operación propia de David.</p>
      </div>

      {/* Franjas paralelas inclinadas: no se cruzan, así ningún texto queda tapado */}
      <div className="my-[clamp(4rem,9vw,8rem)] overflow-hidden py-10" aria-hidden>
        <div className="-mx-[10%] -rotate-2">
          <Franja segundos={42} className="bg-primary py-3.5 text-primary-foreground">
            {about.strip.map((t) => <span key={t} className="franja-item">{t}<span className="franja-estrella">✦</span></span>)}
          </Franja>
          <Franja reversa segundos={48} className="border-b border-white/10 bg-surface py-3.5 text-foreground">
            {["Meta Ads", "WhatsApp", "Shopify", "Dropi", "Pedidos", "Despachos"].map((t) => <span key={t} className="franja-item">{t}<span className="franja-estrella text-primary">✦</span></span>)}
          </Franja>
        </div>
      </div>
    </section>
  );
}
