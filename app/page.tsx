import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Experiencia } from "@/components/sections/experiencia";
import { Sistema } from "@/components/sections/sistema";
import { Metodo } from "@/components/sections/metodo";
import { Servicios } from "@/components/sections/servicios";
import { Alumnos } from "@/components/sections/alumnos";
import { ParaQuien } from "@/components/sections/para-quien";
import { Faq } from "@/components/sections/faq";
import { Contacto } from "@/components/sections/contacto";
import { jsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Experiencia />
        <Sistema />
        <Metodo />
        <Servicios />
        <Alumnos />
        <ParaQuien />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
