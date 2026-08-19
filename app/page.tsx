import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Authority } from "@/components/sections/authority";
import { Problem } from "@/components/sections/problem";
import { Story } from "@/components/sections/story";
import { Evidence } from "@/components/sections/evidence";
import { Proposal } from "@/components/sections/proposal";
import { Includes } from "@/components/sections/includes";
import { How } from "@/components/sections/how";
import { Methodology } from "@/components/sections/methodology";
import { CtaBand } from "@/components/sections/cta-band";
import { Compare } from "@/components/sections/compare";
import { ForWho } from "@/components/sections/forwho";
import { Cases } from "@/components/sections/cases";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { jsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <Nav />
      <main>
        <Hero />
        <Authority />
        <Problem />
        <Story />
        <Evidence />
        <Proposal />
        <Includes />
        <How />
        <Methodology />
        <CtaBand
          title="¿Listo para dejar de operar a ciegas?"
          lead="Agenda una llamada de diagnóstico. Revisamos tu negocio y vemos, con honestidad, si puedo ayudarte a escalar."
        />
        <Compare />
        <ForWho />
        <Cases />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
