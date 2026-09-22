import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Authority() {
  return (
    <section className="trust-section" aria-label="Cifras de la operación">
      <Container>
        <div className="trust-top"><p className="kicker">La experiencia, en números</p><a href="#evidencia">Ver las capturas de la operación <ArrowUpRight size={15} aria-hidden /></a></div>
        <dl className="trust-metrics">
          {site.stats.map(stat => <div key={stat.label} className="trust-metric"><dt className="sr-only">{stat.label}</dt><dd><span className="trust-value">{stat.prefix}{stat.value.toLocaleString("es-CO")}{stat.suffix}</span><p aria-hidden>{stat.label}</p></dd></div>)}
        </dl>
        <div className="tools-line"><span>Herramientas de trabajo</span>{site.tools.map(tool => <span key={tool} className="tool-name">{tool}</span>)}</div>
      </Container>
    </section>
  );
}
