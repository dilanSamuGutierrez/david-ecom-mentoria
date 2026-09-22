import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { ProofImage } from "@/components/ui/proof-image";

const cases = [
  { src: "/media/testimonio-jose.jpg", quote: "Ya está funcionando.", title: "Una primera venta confirmada", text: "Un alumno comparte su venta y agradece el acompañamiento en la conversación.", alt: "Conversación de un alumno que confirma su primera venta y agradece la ayuda" },
  { src: "/media/testimonio-primera-campana.jpg", quote: "Primera campaña.", title: "De la campaña al primer pedido", text: "La captura reúne la notificación del pedido y el seguimiento por WhatsApp.", alt: "Conversación sobre una primera campaña con una notificación de pedido" },
];

export function Cases() {
  return (
    <section id="casos" className="section-pad cases-section">
      <Container>
        <div className="section-intro"><SectionHeader title={<>Las primeras ventas<br />también se comparten.</>} /><p className="section-aside">Conversaciones reales. El trabajo y los avances, vistos desde dentro.</p></div>
        <div className="cases-grid">{cases.map(item => <article className="case-card" key={item.src}><div className="case-copy"><Quote size={30} strokeWidth={1.4} aria-hidden /><blockquote>“{item.quote}”</blockquote><h3>{item.title}</h3><p>{item.text}</p></div><ProofImage src={item.src} alt={item.alt} aspect="739/1600" sizes="(max-width: 359px) 210px, (max-width: 768px) 45vw, 280px" /></article>)}</div>
        <p className="case-note">Cada negocio tiene un punto de partida distinto. Estas experiencias individuales no garantizan los mismos resultados.</p>
      </Container>
    </section>
  );
}
