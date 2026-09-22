import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";

export function About() {
  return (
    <section id="historia" className="section-pad about-section">
      <Container><div id="sobre" className="about-layout">
        <div className="mentor-photo"><Image src={site.media.mentorCutout} alt="David, operador de ecommerce y mentor" width={1137} height={1383} sizes="(max-width: 768px) 90vw, 480px" unoptimized={false} /><div className="mentor-name"><strong>David Ecom</strong><span>Operador · Mentor</span></div></div>
        <div className="about-copy"><SectionHeader title={<>Operador primero.<br /><span className="accent">Mentor después.</span></>} /><p>Empecé con una tienda, un producto y muchas pruebas. Aprendí a leer las métricas, a construir ofertas y a cuidar el margen tomando decisiones sobre mi propia operación.</p><p>Hoy uso esa experiencia para acompañarte a crear tu negocio con dropshipping. Desde elegir qué vender hasta preparar tu tienda y tus primeros anuncios, trabajamos con tu presupuesto y a partir de lo que necesitas aprender.</p><ul className="mentor-principles">{["Operación activa de dropshipping", "Experiencia en Meta y TikTok Ads", "Aprendizaje práctico y seguimiento directo"].map(item => <li key={item}><Check size={17} aria-hidden />{item}</li>)}</ul></div>
      </div></Container>
    </section>
  );
}
