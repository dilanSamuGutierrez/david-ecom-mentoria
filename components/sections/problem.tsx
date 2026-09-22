import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";

export function Problem() {
  return (
    <section className="section-pad problem-section">
      <Container>
        <div className="problem-layout">
          <SectionHeader title={<>Ganas de emprender.<br />Dudas para empezar.</>} lead="Sabes que quieres crear algo propio, pero entre productos, proveedores, tiendas y anuncios cuesta saber qué hacer primero. El acompañamiento empieza ahí." />
          <div className="pain-grid">
            {site.problem.pains.map(pain => <article className="pain-item" key={pain.title}><Icon name={pain.icon} className="size-6" /><h3>{pain.title}</h3><p>{pain.text}</p></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
