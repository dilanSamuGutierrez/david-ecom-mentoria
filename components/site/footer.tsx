import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Acompañamiento 1:1 de ecommerce para operadores que quieren escalar
              con criterio, no con corazonadas.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-faint">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-faint">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.cta.primary}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hairline" />

        <div className="mt-6 flex flex-col gap-4 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">{site.footerNote}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {site.brand} · Hecho por DILNIC STUDIO
          </p>
        </div>
      </Container>
    </footer>
  );
}
