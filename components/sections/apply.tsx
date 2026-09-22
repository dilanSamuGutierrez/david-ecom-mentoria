"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappConfigured, whatsappHref } from "@/lib/site";

export function Apply() {
  const [openedHref, setOpenedHref] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!whatsappConfigured) return;
    const values = new FormData(event.currentTarget);
    const message = [
      "Hola David, quiero crear mi negocio con dropshipping y conocer la mentoría 1:1.",
      "",
      "Mi punto de partida: " + values.get("stage"),
      "Mi tienda: " + (String(values.get("store") || "").trim() || "Aún no tengo tienda"),
      "Me gustaría lograr: " + String(values.get("challenge") || "").trim(),
    ].join("\n");
    const href = whatsappHref(message);
    setOpenedHref(href);
    window.location.assign(href);
  }
  return (
    <form id="aplicar" className="contact-form" onSubmit={submit}>
      <label htmlFor="contact-stage">¿Cuál es tu punto de partida?<select id="contact-stage" name="stage" required defaultValue=""><option value="" disabled>Selecciona tu situación</option><option>Quiero empezar desde cero</option><option>Tengo una idea y quiero ponerla en marcha</option><option>Estoy construyendo mi tienda</option><option>Ya tengo una tienda y quiero mejorarla</option></select></label>
      <label htmlFor="contact-store">Tu tienda, si ya tienes una (opcional)<input id="contact-store" name="store" type="text" inputMode="url" autoComplete="url" placeholder="tutienda.com" maxLength={250} /></label>
      <label htmlFor="contact-challenge">¿Qué te gustaría construir o aprender?<textarea id="contact-challenge" name="challenge" required rows={3} maxLength={1500} placeholder="Por ejemplo: quiero elegir qué vender y aprender a montar mi tienda…" /></label>
      <button type="submit" disabled={!whatsappConfigured}><MessageCircle size={18} aria-hidden />Hablar por WhatsApp<ArrowUpRight size={18} aria-hidden /></button>
      <p className="form-note">{whatsappConfigured ? "Se abrirá WhatsApp con tu mensaje. Tú decides cuándo enviarlo." : "El contacto por WhatsApp estará disponible pronto."}</p>
      {openedHref && <p role="status" className="form-status">Tu mensaje está preparado. Si WhatsApp no se abre, <a href={openedHref}>abre la conversación aquí</a>.</p>}
    </form>
  );
}
