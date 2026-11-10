"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone, MessageCircle, Package, Pause, Play } from "lucide-react";
import { site } from "@/lib/site";
import { gsap, useGSAP, reducido } from "@/lib/gsap";
import { Lineas } from "@/components/ui/motion";

const { system } = site;
const iconos = [Megaphone, MessageCircle, Package];

/**
 * 3. El sistema. La animación explica el recorrido de una venta:
 * una línea avanza de Anuncio a WhatsApp a Pedido y enciende cada paso
 * al llegar. Después, el video del último paso (el despacho).
 * Sin fijar la pantalla: el scroll nunca se detiene.
 */
export function Sistema() {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [pausado, setPausado] = useState(true);
  const pausaManual = useRef(false);

  useGSAP(() => {
    if (reducido()) return;
    const q = gsap.utils.selector(ref);
    const flujo = q(".flujo")[0];
    // Línea de progreso (vertical en móvil, horizontal en escritorio).
    // Cada paso se enciende cuando la línea llega a él: 0 %, 50 % y 100 %.
    const eje = innerWidth >= 768 ? "scaleX" : "scaleY";
    const pasos = q(".flujo-paso") as HTMLElement[];
    gsap.fromTo(q(".flujo-linea"), { [eje]: 0 }, {
      [eje]: 1, ease: "none",
      scrollTrigger: {
        trigger: flujo, start: "top 70%", end: "bottom 60%", scrub: 0.4, invalidateOnRefresh: true,
        onUpdate: ({ progress }) => pasos.forEach((paso, i) => paso.classList.toggle("activo", progress >= i / (pasos.length - 1) - 0.02)),
      },
    });
    // El video crece un poco al entrar (de tarjeta a pantalla ancha), sin fijar la página
    gsap.fromTo(q(".s-video"), { scale: 0.9 }, {
      scale: 1, ease: "none",
      scrollTrigger: { trigger: q(".s-video")[0], start: "top bottom", end: "top 30%", scrub: true },
    });
  }, { scope: ref });

  // El video solo se descarga y reproduce cerca de la pantalla
  useEffect(() => {
    const v = video.current;
    if (!v || reducido()) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (v.preload !== "auto") { v.preload = "auto"; v.load(); }
        if (!pausaManual.current) v.play().then(() => setPausado(false)).catch(() => setPausado(true));
      } else v.pause();
    }, { rootMargin: "200px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const alternar = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) { pausaManual.current = false; v.play().then(() => setPausado(false)).catch(() => {}); }
    else { pausaManual.current = true; v.pause(); setPausado(true); }
  };

  return (
    <section ref={ref} id="sistema" className="relative rounded-t-[2.5rem] bg-surface py-[clamp(3.75rem,11vw,9rem)] md:rounded-t-[4rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <div className="flex items-center gap-3 lg:block">
            <span className="kicker">{system.kicker}</span>
            <span className="font-mono text-xs text-faint lg:mt-3 lg:block">(02)</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
            <Lineas className="text-[clamp(2rem,4.8vw,3.9rem)] font-semibold leading-[1] tracking-[-0.045em]">
              Del anuncio a la conversación. <span className="text-mint">De la conversación al pedido.</span>
            </Lineas>
            <p className="max-w-md leading-relaxed text-muted">{system.text}</p>
          </div>
        </div>

        {/* Flujo: la línea avanza y enciende cada paso */}
        <ol className="flujo relative mt-[clamp(3.5rem,7vw,6rem)] grid gap-10 pl-14 md:grid-cols-3 md:gap-8 md:pl-0 md:pt-16">
          <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-white/10 md:bottom-auto md:left-[16.6%] md:right-[16.6%] md:top-[1.35rem] md:h-px md:w-auto" />
          <span aria-hidden className="flujo-linea absolute bottom-6 left-[1.35rem] top-6 w-px origin-top bg-primary md:bottom-auto md:left-[16.6%] md:right-[16.6%] md:top-[1.35rem] md:h-px md:w-auto md:origin-left" />
          {system.steps.map((p, i) => {
            const Icono = iconos[i];
            return (
              <li key={p.title} className="flujo-paso relative md:text-center">
                <span className="flujo-punto absolute -left-14 top-0 grid size-11 place-items-center rounded-full border border-white/15 bg-surface text-white/50 md:left-1/2 md:-top-16 md:-translate-x-1/2">
                  <Icono size={18} aria-hidden />
                </span>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted md:mx-auto md:max-w-[30ch]">{p.text}</p>
              </li>
            );
          })}
        </ol>

        {/* Video del último paso */}
        {system.video && (
          <figure className="s-video relative mt-[clamp(3rem,8vw,7rem)] aspect-[4/3] origin-top overflow-hidden rounded-[2rem] bg-[#071510] will-change-transform sm:aspect-video">
            <video ref={video} className="absolute inset-0 size-full object-cover" muted loop playsInline preload="none" poster="/media/sistema-pedidos-poster.webp" aria-label="Video: preparación y despacho de un pedido">
              <source src={system.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
              <span className="max-w-md text-lg font-medium leading-snug text-white sm:text-2xl">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-mint">Paso 03 · Pedido</span>
                {system.videoCaption}
              </span>
              <button type="button" onClick={alternar} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/55 px-4 text-sm font-medium text-white transition hover:border-primary hover:text-mint">
                {pausado ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
                {pausado ? "Reproducir video" : "Pausar video"}
              </button>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
