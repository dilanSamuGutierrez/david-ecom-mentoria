import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Apply } from "./apply";

export function FinalCta() {
  return (
    <section id="contacto" className="section-pad final-section">
      <Container><div className="contact-panel"><div>
        <SectionHeader title={<>Hablemos del negocio que quieres crear.</>} />
        <p className="contact-lead">Cuéntame tu idea, lo que te gustaría aprender y desde dónde empiezas. No necesitas tener una tienda para dar el primer paso.</p>
        <div className="contact-person"><MessageCircle size={21} aria-hidden /><span>La conversación es directa con David.<br />El acompañamiento se define según tu caso.</span></div>
      </div><Apply /></div></Container>
    </section>
  );
}
