import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const scope = [
  { icon: "store", title: "Producto y tienda", text: "Te acompaño a evaluar productos y proveedores, construir tu oferta y preparar una tienda donde tus clientes puedan comprar." },
  { icon: "target", title: "Tus primeras campañas", text: "Aprendes a preparar anuncios en Meta Ads y a definir pruebas según tu producto, tu mercado y el presupuesto que tienes." },
  { icon: "line-chart", title: "Los números de tu negocio", text: "Entiende cuánto te cuesta vender, qué margen te queda y cómo usar los resultados para decidir qué mejorar." },
  { icon: "message-circle", title: "Seguimiento directo", text: "Feedback sobre lo que ejecutas y acceso por WhatsApp para resolver dudas puntuales entre sesiones." },
];

export function Includes() {
  return (
    <section id="mentoria" className="section-pad">
      <Container>
        <div className="section-intro"><SectionHeader title={<>De la idea a tu tienda.<br />Con acompañamiento 1:1.</>} /><p className="section-aside">Una ruta para crear tu negocio con dropshipping, aprender mientras ejecutas y resolver tus dudas en cada etapa.</p></div>
        <div className="service-layout">
          <article className="service-card"><span className="kicker">Personalizado · 1:1</span><h3>Acompañamiento<br />con David</h3><p>Construye tu negocio con alguien que también opera el suyo. Trabajamos paso a paso según tu experiencia, tus recursos y lo que quieres lograr.</p><ul>{["Una ruta para empezar, aunque no tengas tienda", "Plan adaptado a tu tiempo y presupuesto", "Revisión de avances y siguientes pasos"].map(text => <li key={text}><Check size={17} aria-hidden />{text}</li>)}</ul><WhatsAppLink message="Hola David, quiero crear mi negocio con dropshipping y conocer cómo funciona tu acompañamiento 1:1.">Hablemos de la mentoría</WhatsAppLink></article>
          <div className="service-scope">{scope.map(item => <article key={item.title}><Icon name={item.icon} className="size-6" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
        <p className="service-footnote">El primer paso es entender tu situación. En la llamada de diagnóstico definimos si el acompañamiento encaja, el alcance y la inversión.</p>
      </Container>
    </section>
  );
}
