import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";

const outcomes = ["Una ruta realista", "Una oferta definida", "Una tienda lista para probar", "Aprender de las primeras pruebas", "Crecer con criterio"];

export function Methodology() {
  return (
    <section id="metodologia" className="section-pad method-section">
      <Container><div className="method-panel">
        <SectionHeader title="Así construimos tu negocio, paso a paso." />
        <ol className="method-steps">{site.methodology.stages.map((stage, i) => <li className="method-step" key={stage.n}><span className="step-number" aria-hidden>{stage.n}</span><h3>{stage.title}</h3><p>{stage.text}</p><p className="step-outcome">Objetivo: {outcomes[i].toLowerCase()}.</p></li>)}</ol>
        <p className="method-intro">No necesitas llegar con todo resuelto. Empezamos por tu idea y tus recursos; si ya tienes avances, partimos de ahí. Tú construyes tu negocio con mi guía y seguimiento en cada etapa.</p>
      </div></Container>
    </section>
  );
}
