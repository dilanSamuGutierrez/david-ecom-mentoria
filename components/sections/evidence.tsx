import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { ProofImage } from "@/components/ui/proof-image";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function Evidence() {
  return (
    <section id="evidencia" className="section-pad evidence-section">
      <Container>
        <div className="section-intro"><SectionHeader title={<>Los números importan.<br />Poder verlos, también.</>} /><p className="section-aside">Capturas de la operación compartidas por David. Abre cada imagen para revisar el detalle.</p></div>
        <article className="evidence-feature">
          <div className="evidence-feature-top"><div><span className="small-label">01 / Adquisición · Meta Ads</span><h3>De la inversión a la conversación.</h3></div><p>Gasto, alcance y coste por resultado en una misma vista. La base para revisar qué mantener, ajustar o detener.</p></div>
          <ProofImage src={site.evidence.feature.src} alt="Tabla de Meta Ads: gasto total de $10.686.735 y 3.873 conversaciones registradas" aspect="1438/592" sizes="(max-width: 768px) 90vw, 1150px" wide />
          <div className="evidence-source-row"><div><span className="small-label">Inversión registrada · COP</span><strong>$10.686.735</strong></div><div><span className="small-label">Conversaciones</span><strong>3.873</strong></div><p>Las conversaciones son la métrica que muestra esta captura. No equivalen a compras ni a rentabilidad.</p></div>
        </article>
        <div className="evidence-secondary">
          <article className="evidence-record"><div><span className="small-label">02 / Ventas registradas · COP</span><strong>$84.109.254</strong><p>Valor de ventas visible en el panel de rendimiento. No representa beneficio neto.</p></div><ProofImage src="/media/rendimiento-vendido.jpg" alt="Panel de rendimiento con $84.109.254,00 vendido" aspect="305/138" sizes="(max-width: 768px) 160px, 240px" /></article>
          <article className="evidence-record"><div><span className="small-label">03 / Pedidos generados</span><strong>327 pedidos</strong><p>Registro de pedidos de la operación. Cada captura conserva su contexto original.</p></div><ProofImage src="/media/pedidos-generados.jpg" alt="Panel con 327 pedidos generados" aspect="182/110" sizes="(max-width: 768px) 160px, 240px" /></article>
        </div>
        <details className="evidence-extra"><summary>Ver también los pedidos en Shopify y los abonos</summary><div className="evidence-extra-images"><ProofImage src="/media/shopify-pedidos.jpg" alt="Notificaciones de pedidos de Shopify compartidas por David" aspect="739/1600" caption="Pedidos en Shopify" /><ProofImage src="/media/banco-abonos.jpg" alt="Comprobantes de abonos de la operación" aspect="1170/1587" caption="Abonos registrados" /></div></details>
        <div className="context-cta"><div><h3>La experiencia de mi negocio, al servicio del tuyo.</h3><p>Cuéntame qué te gustaría construir y veamos por dónde empezar.</p></div><WhatsAppLink message="Hola David, vi las capturas de tu operación y quiero aprender a crear mi negocio con dropshipping. Me gustaría conocer la mentoría.">Quiero empezar</WhatsAppLink></div>
      </Container>
    </section>
  );
}
