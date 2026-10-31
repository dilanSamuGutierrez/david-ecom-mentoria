"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { site } from "@/lib/site";
import { gsap, useGSAP, reducido } from "@/lib/gsap";

const { system } = site;

// Cuatro piezas alrededor de la central (solo escritorio)
const piezas: { src: string; pos: string; lado: "izq" | "der"; fit?: "contain" }[] = [
  { src: "/media/meta-ads-tabla-700.webp", pos: "left-[4%] top-[12%] w-[23%] aspect-[4/3]", lado: "izq" },
  { src: "/media/testimonio-jose-500.webp", pos: "left-[9%] bottom-[8%] w-[14%] aspect-[3/4]", lado: "izq" },
  { src: "/media/JOSEXXO-600.webp", pos: "right-[5%] top-[10%] w-[19%] aspect-square", lado: "der", fit: "contain" },
  { src: "/media/shopify-pedidos-500.webp", pos: "right-[10%] bottom-[8%] w-[14%] aspect-[3/4]", lado: "der" },
];

/**
 * Sección de video (inspirada en el bloque Watch Video de la referencia):
 * el video empieza como una pieza pequeña en el centro y crece con el scroll
 * hasta ocupar toda la pantalla; ahí se queda fijo un momento con el mensaje.
 * Rendimiento: se animan transform y opacity; el video solo se descarga y
 * reproduce cuando la sección está cerca de la pantalla.
 * Accesibilidad: botón para pausar, textos siempre en el DOM y, con
 * movimiento reducido, la sección se muestra estática sin reproducción automática.
 */
export function Sistema() {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [pausado, setPausado] = useState(true);
  const pausaManual = useRef(false);

  useGSAP(() => {
    if (reducido()) return;
    const q = gsap.utils.selector(ref);
    const inicio = innerWidth < 768 ? 0.6 : 0.36;
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ref.current, start: "top top", end: "+=200%", scrub: 0.5, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
    });
    tl.fromTo(q(".s-central"), { scale: inicio, borderRadius: 40 }, { scale: 1, duration: 1 }, 0)
      .to(q(".s-central"), { borderRadius: 0, duration: 0.15 }, 0.85)
      .to(q(".s-pieza"), { x: (_: number, el: HTMLElement) => (el.dataset.lado === "izq" ? -1 : 1) * innerWidth * 0.2, opacity: 0, duration: 0.7 }, 0)
      .to(q(".s-intro, .s-pasos"), { opacity: 0, y: -30, duration: 0.3 }, 0)
      .fromTo(q(".s-final > *"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25, stagger: 0.06 }, 0.85)
      // Pausa con el video a pantalla completa antes de soltar la sección
      .to({}, { duration: 0.6 });
  }, { scope: ref });

  // Carga y reproduce el video solo cerca de la pantalla
  useEffect(() => {
    const v = video.current;
    if (!v || !ref.current) return;
    if (reducido()) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (v.preload !== "auto") { v.preload = "auto"; v.load(); }
        if (!pausaManual.current) v.play().then(() => setPausado(false)).catch(() => setPausado(true));
      } else v.pause();
    }, { rootMargin: "300px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const alternar = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) { pausaManual.current = false; v.play().then(() => setPausado(false)).catch(() => {}); }
    else { pausaManual.current = true; v.pause(); setPausado(true); }
  };

  return (
    <section ref={ref} id="sistema" aria-labelledby="sistema-titulo" className="sistema relative h-svh min-h-[560px] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {piezas.map((p) => (
          <div key={p.src} data-lado={p.lado} className={`s-pieza absolute overflow-hidden rounded-2xl border border-white/10 will-change-transform ${p.fit ? "bg-primary/10" : "bg-surface"} ${p.pos}`}>
            <Image src={p.src} alt="" fill className={p.fit ? "object-contain object-bottom" : "object-cover object-top"} sizes="23vw" />
          </div>
        ))}
      </div>

      <p className="s-intro pointer-events-none absolute inset-x-0 top-[13%] z-30 text-center md:top-[16%]" aria-hidden>
        <span className="kicker">{system.kicker}</span>
      </p>

      {/* Pieza central: ocupa toda la pantalla y empieza reducida con scale */}
      <div className="s-central absolute inset-0 z-20 origin-center overflow-hidden bg-[#071510] will-change-transform" style={{ transform: "scale(0.36)", borderRadius: 40 }}>
        {system.video ? (
          <video
            ref={video}
            className="absolute inset-0 size-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Video: preparación y despacho de un pedido"
          >
            <source src={system.video} type="video/mp4" />
          </video>
        ) : (
          <Image src="/media/JOSEXXO_3-1400.webp" alt="David acompañando a un alumno frente al portátil" fill className="object-cover" sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

        <div className="s-final absolute inset-x-0 bottom-0 mx-auto grid max-w-7xl gap-5 px-5 pb-[clamp(5.5rem,8vw,5rem)] sm:px-8 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-12 md:pb-16">
          <h2 id="sistema-titulo" className="text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">{system.title}</h2>
          <div>
            <span className="kicker">{system.kicker}</span>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{system.text}</p>
            {system.video && (
              <button type="button" onClick={alternar} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 text-sm font-medium text-white transition hover:border-primary hover:text-mint">
                {pausado ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
                {pausado ? "Reproducir video" : "Pausar video"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pasos bajo la pieza central (fuera de ella para no escalarse) */}
      <ol className="s-pasos absolute left-1/2 top-[84%] z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-white sm:text-xs md:top-[72%]" aria-hidden>
        {["Anuncios", "WhatsApp", "Pedidos"].map((t, i) => (
          <li key={t} className="flex items-center gap-2">{i > 0 && <span className="text-primary">→</span>}<span className="rounded-full border border-white/15 bg-[#0b1512] px-3 py-1.5">{t}</span></li>
        ))}
      </ol>
    </section>
  );
}
