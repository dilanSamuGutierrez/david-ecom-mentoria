"use client";

import { useState } from "react";
import { ArrowUpRight, Compass, Store, ChartNoAxesCombined } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const stages = [
  { icon: Compass, title: "Quiero empezar desde cero", text: "Me interesa el dropshipping y necesito una ruta clara.", focus: "Entender el modelo y elegir qué vender", answer: "Revisamos cómo funciona el dropshipping, tus recursos y tus objetivos. A partir de ahí, evaluamos productos y proveedores para dar los primeros pasos.", message: "Hola David, quiero crear mi negocio con dropshipping desde cero. Me gustaría entender cómo empezar y conocer la mentoría 1:1." },
  { icon: Store, title: "Tengo una idea y quiero lanzarla", text: "Necesito convertir lo que tengo en mente en una tienda.", focus: "Del producto a tu primera tienda", answer: "Trabajamos tu producto, tu oferta y tus costes. Te acompaño a preparar la tienda y tus primeras campañas con un presupuesto definido.", message: "Hola David, tengo una idea para un negocio con dropshipping y quiero ponerla en marcha. Busco acompañamiento para preparar mi tienda y mis primeras campañas." },
  { icon: ChartNoAxesCombined, title: "Ya empecé y quiero avanzar", text: "Busco acompañamiento para mejorar lo que estoy construyendo.", focus: "Revisar lo que tienes y definir el siguiente paso", answer: "Miramos tu tienda, tus campañas y tus números para entender qué mejorar. Adaptamos el acompañamiento a lo que ya has avanzado.", message: "Hola David, ya empecé a construir mi negocio con dropshipping y quiero seguir avanzando con acompañamiento 1:1. Me gustaría contarte mi proyecto." },
];

export function StageFinder() {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];
  return (
    <section id="tu-punto-de-partida" className="section-pad stage-section">
      <Container>
        <div className="section-intro">
          <SectionHeader title={<>Tu negocio empieza<br className="desktop-break" /> desde donde estás.</>} />
          <p className="section-aside">No necesitas tener una tienda para empezar. Elige tu punto de partida y veamos cómo construir tu negocio con dropshipping.</p>
        </div>
        <div className="stage-options" role="group" aria-label="Tu punto de partida para crear un negocio">
          {stages.map((item, index) => {
            const Icon = item.icon;
            return (
              <button key={item.title} type="button" aria-pressed={selected === index} aria-controls="stage-response" onClick={() => setSelected(index)} className="stage-option">
                <span className="stage-option-top"><Icon size={25} strokeWidth={1.5} aria-hidden /><span>0{index + 1}</span></span>
                <span className="stage-option-title">{item.title}</span>
                <span className="stage-option-text">{item.text}</span>
                <span className="stage-option-action">{selected === index ? "Este es mi punto de partida" : "Me identifico"}<ArrowUpRight size={18} aria-hidden /></span>
              </button>
            );
          })}
        </div>
        <div id="stage-response" className="stage-response">
          <div aria-live="polite" aria-atomic="true"><span className="small-label">Por aquí empezaríamos</span><h3>{stage.focus}</h3><p>{stage.answer}</p></div>
          <WhatsAppLink message={stage.message}>Cuéntame tu caso</WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
