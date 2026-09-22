import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Faq() {
  return (
    <section id="faq" className="section-pad faq-section">
      <Container><div className="faq-layout"><div><SectionHeader title={<>Antes de hablar,<br />lo esencial.</>} /><p className="mt-5 leading-relaxed text-muted">Sobre el proceso, la inversión y lo que puedes esperar del acompañamiento.</p><WhatsAppLink variant="text" message="Hola David, tengo una pregunta sobre el acompañamiento 1:1: ">Tengo otra pregunta</WhatsAppLink></div>
        <div className="faq-list">{site.faq.items.map((item, i) => <details key={item.q} name="preguntas-mentoria" open={i === 0}><summary>{item.q}<Plus size={19} aria-hidden /></summary><p>{item.a}</p></details>)}</div>
      </div></Container>
    </section>
  );
}
