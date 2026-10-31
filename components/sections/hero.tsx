"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { gsap, useGSAP, reducido } from "@/lib/gsap";
import { Rodillo } from "@/components/ui/motion";

const { hero } = site;
const orbita = ["Meta Ads", "WhatsApp", "Logística", "Shopify", "Dropi", "Producto"];

/**
 * Portada: David al centro sobre el círculo verde (concepto original),
 * con órbita de herramientas, parallax por scroll y por puntero, y la
 * oferta con precio visible desde la primera pantalla.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (reducido()) return;
    const q = gsap.utils.selector(ref);

    // Entrada
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(q(".h-linea > span"), { yPercent: 110, duration: 1.1, stagger: 0.08 })
      .from(q(".h-circulo"), { scale: 0.6, opacity: 0, duration: 1.4, ease: "expo.out" }, 0.1)
      .from(q(".h-anillo"), { scale: 0.85, opacity: 0, duration: 1.6, ease: "expo.out" }, 0.2)
      .from(q(".h-avatar"), { yPercent: 18, opacity: 0, duration: 1.4, ease: "expo.out" }, 0.25)
      .from(q(".h-lado"), { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, 0.55)
      .from(q(".h-oferta"), { y: 40, opacity: 0, duration: 1 }, 0.75);

    // Scroll: el avatar baja más lento que la página, el círculo crece, el texto se desenfoca
    const st = { trigger: ref.current, start: "top top", end: "bottom top", scrub: true };
    gsap.to(q(".h-avatar-scroll"), { yPercent: 14, ease: "none", scrollTrigger: st });
    gsap.to(q(".h-fondo"), { yPercent: 8, scale: 1.08, ease: "none", scrollTrigger: st });
    gsap.to(q(".h-circulos"), { scale: 1.12, ease: "none", scrollTrigger: st });
    // Solo transform y opacidad (sin blur ni visibility): fluido y el texto sigue disponible para lectores de pantalla
    gsap.to(q(".h-titulo"), { yPercent: -30, opacity: 0, ease: "none", scrollTrigger: { ...st, end: "55% top" } });

    // Puntero: capas a distinta profundidad (solo con ratón)
    if (!matchMedia("(pointer: fine)").matches) return;
    const capas = [
      { el: q(".h-circulos"), f: 14 },
      { el: q(".h-avatar"), f: -10 },
      { el: q(".h-orbita"), f: 22 },
    ].map(({ el, f }) => ({ x: gsap.quickTo(el, "x", { duration: 1, ease: "power3" }), y: gsap.quickTo(el, "y", { duration: 1, ease: "power3" }), f }));
    const mover = (e: PointerEvent) => {
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;
      capas.forEach((c) => { c.x(nx * c.f); c.y(ny * c.f); });
    };
    ref.current?.addEventListener("pointermove", mover);
    return () => ref.current?.removeEventListener("pointermove", mover);
  }, { scope: ref });

  return (
    <section ref={ref} id="top" className="hero relative isolate flex min-h-svh w-full flex-col overflow-hidden rounded-b-[2.5rem] bg-[#060a09] md:min-h-[108svh] md:rounded-b-[5rem]">
      {/* Fondo: cuadrícula + luces */}
      <div className="h-fondo pointer-events-none absolute inset-0 -z-10 will-change-transform">
        <div className="hero-cuadricula absolute inset-0 opacity-[0.12]" />
        {/* Luces con degradados radiales (sin filtro blur: no se recalculan al hacer scroll) */}
        <div className="absolute left-1/2 top-[-10%] size-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(18,185,129,0.14),rgba(18,185,129,0.04)_55%,transparent)]" />
        <div className="absolute -bottom-[420px] left-1/2 h-[800px] w-[1300px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(18,185,129,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(6,10,9,0.85)_100%)]" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl flex-1 px-4 pt-24 sm:pt-28 xl:pt-32">
        {/* Título */}
        <div className="h-titulo relative z-30 flex flex-col items-center text-center">
          <span className="h-linea mb-5 inline-flex overflow-hidden">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-medium tracking-wide text-mint">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              {hero.badge}
            </span>
          </span>
          <h1 className="max-w-5xl font-bold tracking-[-0.045em] text-white">
            <span className="h-linea block overflow-hidden pb-1 text-[clamp(1rem,2.2vw,1.5rem)] font-medium tracking-[-0.01em] text-white/60">
              <span className="block">{hero.lead}</span>
            </span>
            <span className="h-linea block overflow-hidden text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95]">
              <span className="block">{hero.titleTop}</span>
            </span>
            <span className="h-linea block overflow-hidden pb-[0.08em] text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95]">
              <span className="block bg-gradient-to-r from-[#6EE7B7] via-[#12B981] to-[#34D399] bg-clip-text text-transparent">{hero.titleAccent}</span>
            </span>
          </h1>
        </div>

        {/* Escenario central */}
        <div className="relative mt-2 min-h-[440px] sm:min-h-[600px] md:min-h-[660px] xl:min-h-[700px]">
          <div className="h-circulos pointer-events-none absolute inset-0 will-change-transform">
            <div className="h-circulo absolute left-1/2 top-[12%] size-[340px] -translate-x-1/2 rounded-full border border-primary/10 bg-primary/10 sm:top-[12%] sm:size-[480px] md:size-[570px] xl:size-[630px]" />
            <div className="h-anillo absolute left-1/2 top-[7%] size-[410px] -translate-x-1/2 rounded-full border border-white/[0.05] sm:top-[8%] sm:size-[570px] md:size-[670px] xl:size-[740px]" />
          </div>

          {/* Órbita de herramientas */}
          <div className="h-orbita pointer-events-none absolute left-1/2 top-[7%] hidden size-[570px] -translate-x-1/2 sm:block md:size-[670px] xl:size-[740px]" aria-hidden>
            <div className="orbita-giro absolute inset-0">
              {orbita.map((t, i) => (
                <span key={t} className="orbita-punto absolute left-1/2 top-1/2" style={{ ["--a" as string]: `${(360 / orbita.length) * i}deg` }}>
                  <span className="orbita-chip">{t}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-[120px] left-1/2 h-[480px] w-[640px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(18,185,129,0.22),transparent)] sm:w-[900px]" />

          {/* David */}
          <div className="h-avatar-scroll pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center will-change-transform">
            <div className="h-avatar relative aspect-[1289/1221] w-[min(150vw,640px)] translate-y-[6%] sm:w-[600px] sm:translate-y-[3%] md:w-[660px] xl:w-[720px] 2xl:w-[790px]">
              <Image src="/media/JOSEXXO_2-1400.webp" alt="David Hernández sosteniendo los iconos de Meta, TikTok Ads, Shopify y Dropi" fill priority className="object-contain object-bottom" sizes="(max-width: 640px) 150vw, 790px" fetchPriority="high" />
            </div>
          </div>

          {/* Izquierda (escritorio) */}
          <div className="h-lado absolute left-0 top-[26%] z-30 hidden w-[270px] xl:block">
            <p className="text-sm leading-relaxed text-white/65">{hero.text}</p>
            <Cifra {...hero.stats[0]} className="mt-8" />
            <div className="mt-8 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mint">Anuncios → WhatsApp → Pedidos</p>
          </div>

          {/* Derecha (escritorio) */}
          <div className="h-lado absolute right-0 top-[26%] z-30 hidden w-[260px] flex-col xl:flex">
            <Cifra {...hero.stats[1]} />
            <p className="mt-8 text-sm leading-relaxed text-white/60">Revisamos productos, costos y decisiones para que entiendas en qué inviertes en cada etapa.</p>
            <a href={whatsappHref(site.contact.mentoriaMessage)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white">
              <MessageCircle size={16} className="text-mint" aria-hidden />
              Hablar con David
            </a>
          </div>
        </div>
      </div>

      {/* Oferta: precio y sesiones visibles desde la primera pantalla */}
      <div className="h-oferta relative z-40 mx-auto -mt-28 w-[calc(100%-2rem)] max-w-5xl pb-8 sm:-mt-24 md:pb-14">
        <div className="hero-oferta grid items-center gap-4 rounded-[1.75rem] p-4 sm:p-5 md:grid-cols-[auto_1fr_auto] md:gap-8 md:p-6">
          <div className="flex items-baseline gap-2">
            <strong className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{hero.price}</strong>
            <span className="text-sm text-white/60">{hero.priceUnit}</span>
          </div>
          <div className="grid gap-1.5 text-sm text-white/75 md:border-l md:border-white/10 md:pl-8">
            <p className="flex flex-wrap gap-x-3 gap-y-1 font-medium text-white">
              {hero.offer.map((o, i) => <span key={o}>{i > 0 && <span className="mr-3 text-primary">·</span>}{o}</span>)}
            </p>
            <p className="text-[13px] leading-snug text-white/55">{hero.priceNote}</p>
          </div>
          <div className="grid gap-2 sm:flex sm:items-center sm:gap-4 md:grid md:justify-items-end md:gap-2">
            <a href="#servicios" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-soft">
              {hero.primary}
              <ArrowUpRight size={17} strokeWidth={2.5} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="#gestion" className="link-underline justify-self-center text-sm text-white/70 hover:text-white">{hero.secondary}</a>
          </div>
        </div>

        {/* Cifras en móvil y tablet */}
        <div className="mt-3 grid grid-cols-2 gap-3 xl:hidden">
          {hero.stats.map((s) => (
            <Cifra key={s.sr} {...s} chica className="rounded-2xl border border-white/10 bg-[#0a1411]/90 p-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Cifra con la redacción exacta: "+1.000 millones / vendidos en un año". */
function Cifra({ value, prefix, unit, label, sr, chica = false, className }: (typeof hero.stats)[number] & { chica?: boolean; className?: string }) {
  return (
    <p className={className}>
      <span className={`flex flex-wrap items-baseline gap-x-2 font-semibold tracking-[-0.04em] text-white ${chica ? "text-[1.7rem] sm:text-3xl" : "text-5xl"}`}>
        <Rodillo valor={value} prefijo={prefix} sr={sr} />
        {unit && <span aria-hidden className={`font-medium tracking-[-0.02em] text-white/80 ${chica ? "text-base" : "text-2xl"}`}>{unit}</span>}
      </span>
      <span aria-hidden className={`mt-1.5 block uppercase tracking-[0.15em] text-white/55 ${chica ? "text-[11px]" : "text-xs"}`}>{label}</span>
    </p>
  );
}

export default Hero;
