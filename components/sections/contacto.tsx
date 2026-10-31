"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site, whatsappConfigured, whatsappHref } from "@/lib/site";
import { Lineas } from "@/components/ui/motion";

const { contactSection } = site;
const servicios = ["Mentoría 1:1", "Gestión publicitaria"];
const puntos = ["Desde cero", "Tengo una idea", "Ya estoy vendiendo"];

/** 8. Contacto: prepara un mensaje de WhatsApp con el servicio y el punto de partida. */
export function Contacto() {
  const [enlace, setEnlace] = useState("");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const mensaje = [
      `Hola David, soy ${String(d.get("nombre")).trim()}. Vengo de tu página.`,
      "",
      `Servicio de interés: ${d.get("servicio")}`,
      `Punto de partida: ${d.get("punto")}`,
      `Me gustaría construir o mejorar: ${String(d.get("objetivo")).trim()}`,
    ].join("\n");
    const href = whatsappHref(mensaje);
    setEnlace(href);
    window.location.assign(href);
  }

  return (
    <section id="contacto" className="relative overflow-hidden rounded-t-[2.5rem] bg-surface py-[clamp(5rem,11vw,10rem)] md:rounded-t-[4rem]">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(18,185,129,0.14),transparent)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <span className="kicker">{contactSection.kicker}</span>
          <Lineas className="mt-6 text-[clamp(2.4rem,5.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Cuéntame qué te frena. <span className="text-mint">Revisemos por dónde empezar.</span>
          </Lineas>
          <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-muted">{contactSection.lead}</p>
        </div>

        <form onSubmit={enviar} className="contacto-form grid gap-5 rounded-[1.75rem] border border-white/10 bg-background/80 p-[clamp(1.25rem,3vw,2.25rem)]">
          <label className="campo">
            Nombre
            <input name="nombre" type="text" autoComplete="given-name" required maxLength={80} placeholder="Tu nombre" />
          </label>

          <fieldset className="campo">
            <legend>Servicio de interés</legend>
            <div className="opciones">
              {servicios.map((s, i) => (
                <label key={s}><input type="radio" name="servicio" value={s} defaultChecked={i === 0} required /><span>{s}</span></label>
              ))}
            </div>
          </fieldset>

          <fieldset className="campo">
            <legend>Punto de partida</legend>
            <div className="opciones">
              {puntos.map((p) => (
                <label key={p}><input type="radio" name="punto" value={p} required /><span>{p}</span></label>
              ))}
            </div>
          </fieldset>

          <label className="campo">
            ¿Qué te gustaría construir o mejorar?
            <textarea name="objetivo" required rows={3} maxLength={1200} placeholder="Por ejemplo: quiero aprender a vender por WhatsApp con anuncios en Meta" />
          </label>

          <button type="submit" disabled={!whatsappConfigured} className="wa-link group w-full">
            <MessageCircle size={18} aria-hidden />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight size={18} aria-hidden />
          </button>
          <p className="text-sm leading-relaxed text-faint">Se abrirá WhatsApp con tu consulta para que la revises y la envíes. Tus respuestas no se guardan en este sitio.</p>
          {enlace && <p role="status" className="text-sm text-mint">Tu mensaje está listo. Si WhatsApp no se abrió, <a href={enlace} className="underline">ábrelo aquí</a>.</p>}
        </form>
      </div>
    </section>
  );
}
