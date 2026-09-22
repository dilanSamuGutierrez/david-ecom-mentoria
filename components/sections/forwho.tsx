import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";

const yes = ["Quieres crear un negocio con dropshipping, aunque empieces desde cero.", "Cuentas con presupuesto para montar tu tienda y probar campañas.", "Puedes dedicar tiempo a aprender, ejecutar y revisar avances.", "Buscas la guía de alguien que también opera su propio negocio."];
const no = ["Buscas ingresos rápidos o resultados garantizados.", "Necesitas que alguien ejecute todo por ti.", "Aún no cuentas con tiempo o recursos para operar.", "Prefieres consumir contenido sin llevarlo a la práctica."];

export function ForWho() {
  return (
    <section id="para-quien" className="section-pad fit-section">
      <Container><div className="fit-panel">
        <SectionHeader title="Que tenga sentido para los dos." />
        <div className="fit-grid"><article><h3>Puede ser para ti si…</h3><ul>{yes.map(text => <li key={text}><Check size={18} aria-hidden />{text}</li>)}</ul></article><article><h3>Quizá no sea el momento si…</h3><ul>{no.map(text => <li key={text}><Minus size={18} aria-hidden />{text}</li>)}</ul></article></div>
      </div></Container>
    </section>
  );
}
