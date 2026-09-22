import Image from "next/image";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";

export function Proposal() {
  return (
    <section id="propuesta" className="section-pad proposal-section">
      <Container>
        <div className="proposal-panel">
          <div className="proposal-copy">
            <SectionHeader title={<>Tu negocio sobre la mesa.<br /><span className="accent">Las decisiones, contigo.</span></>} />
            <p>Empezamos con lo que tienes: una idea, ganas de emprender o una tienda en construcción. Te acompaño a elegir tu producto, montar tu tienda y preparar tus primeras campañas para dar forma a tu negocio con dropshipping.</p>
            <div className="proposal-signature"><span>1:1</span><span><strong>Acceso directo a David</strong><small>Tu contexto en cada conversación.</small></span></div>
          </div>
          <div className="proposal-visual" aria-hidden={!site.media.proposalImage || undefined}>
            {site.media.proposalImage && <Image src={site.media.proposalImage} alt={site.media.proposalImageAlt} fill sizes="(max-width: 767px) 90vw, 480px" />}
          </div>
        </div>
      </Container>
    </section>
  );
}
