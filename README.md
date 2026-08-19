# David Ecom — Landing de mentoría 1:1

Landing premium de autoridad + conversión para la mentoría 1:1 de ecommerce /
dropshipping de **David Ecom**. Parte de **DILNIC STUDIO**.

Stack: **Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · Lenis ·
TypeScript** (misma línea de convenciones que `dilnic-web`). Fuentes
auto-hospedadas con `@fontsource` (no depende de Google Fonts en tiempo de build).

## Arrancar

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción
pnpm start      # servir el build
```

## Editar contenido (un solo archivo)

Casi todo el texto, los datos de contacto y las métricas viven en:

```
lib/site.ts
```

Busca los comentarios `TODO` para reemplazar los datos reales **antes de
publicar**:

- `contact.whatsapp` — número de WhatsApp (formato internacional, sin `+`).
- `contact.bookingUrl` — enlace real de agenda (Cal.com / Calendly / TidyCal).
- `contact.social` — Instagram / TikTok.
- `url` — dominio real (para SEO y Open Graph).
- `stats` — las cifras son **placeholders**; reemplázalas por datos verificables
  o elimínalas. No publiques números que no puedas demostrar.
- `story`, `about`, `cases` — historia real, credenciales y testimonios reales.

## Imágenes (placeholders)

Los espacios de imagen están diseñados como marcos elegantes con la etiqueta
`[ IMAGEN ]`. Para reemplazarlos por capturas reales:

1. Coloca las imágenes en `public/` (por ejemplo `public/evidencia/facturacion.png`).
2. Sustituye el componente `<MediaPlaceholder />` por `<Image />` de Next
   (`next/image`) en la sección correspondiente (`components/sections/`):
   - `hero.tsx` y `about.tsx` → foto del mentor.
   - `evidence.tsx` → capturas de Shopify, Meta Ads, TikTok, facturación, redes.
   - `story.tsx` → foto lifestyle / operando.

## Estructura

```
app/            layout, page, globals.css, robots, sitemap, icon
components/
  site/         nav, footer, logo, whatsapp flotante, smooth-scroll (Lenis)
  sections/     hero, authority, problem, story, evidence, proposal, includes,
                how, methodology, cta-band, compare, forwho, cases, about, faq,
                final-cta
  ui/           primitivas: reveal, section, cta, stat, media-placeholder, icon,
                container
lib/            site.ts (config), utils.ts, jsonld.ts (SEO)
```

## Conversión

El objetivo NO es comprar en la página. Los dos CTA principales son
**Agendar diagnóstico** (llamada) y **WhatsApp**, planteados como una
conversación de diagnóstico. El precio se cierra en la llamada.
