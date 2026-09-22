import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Authority } from "@/components/sections/authority";
import { StageFinder } from "@/components/sections/stage-finder";
import { Problem } from "@/components/sections/problem";
import { Proposal } from "@/components/sections/proposal";
import { Evidence } from "@/components/sections/evidence";
import { Includes } from "@/components/sections/includes";
import { Methodology } from "@/components/sections/methodology";
import { Cases } from "@/components/sections/cases";
import { ForWho } from "@/components/sections/forwho";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { jsonLd } from "@/lib/jsonld";
import "./post-hero.css";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero />
        <div className="post-hero">
          <Authority />
          <StageFinder />
          <Problem />
          <Proposal />
          <Evidence />
          <Includes />
          <Methodology />
          <Cases />
          <ForWho />
          <About />
          <Faq />
          <FinalCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
