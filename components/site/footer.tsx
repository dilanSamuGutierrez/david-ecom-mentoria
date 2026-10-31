import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.mentor} · {site.brand}. Mentoría personalizada y gestión publicitaria para negocios que venden por WhatsApp.
            </p>
          </div>
          <nav aria-label="Navegación del pie" className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm">
            {site.nav.map((n) => <a key={n.href} href={n.href} className="flex min-h-11 items-center text-muted hover:text-foreground">{n.label}</a>)}
            <a href="#contacto" className="flex min-h-11 items-center text-muted hover:text-foreground">Contacto</a>
            <a href="#top" className="flex min-h-11 items-center text-muted hover:text-foreground">Volver arriba ↑</a>
          </nav>
        </div>
        {/* TODO: enlazar política de privacidad y condiciones de contratación reales */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs leading-relaxed text-faint md:flex-row">
          <p className="max-w-2xl">{site.footerNote}</p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.brand} · Hecho por DILNIC STUDIO</p>
        </div>
      </div>
      <p className="pie-marca select-none text-center font-display font-bold leading-[0.8] tracking-[-0.06em]" aria-hidden>David Ecom</p>
    </footer>
  );
}
