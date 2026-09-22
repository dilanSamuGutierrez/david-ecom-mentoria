# David Ecom — Mentoría 1:1 de ecommerce

Landing de David Ecom, parte de DILNIC STUDIO. Next.js 16, React 19, Tailwind CSS 4 y TypeScript; fuentes locales Sora, Inter y JetBrains Mono.

## Desarrollo

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm start
```

En PowerShell, usa `pnpm.cmd` si la política de scripts bloquea `pnpm.ps1`.

## Configuración

- `lib/site.ts`: identidad, contacto, métricas, etapas, FAQ y metadata.
- `components/sections/`: copy y composición de cada sección.
- `app/post-hero.css`: estilos posteriores al hero, aislados con `.post-hero`.
- `public/media/`: fotografía y capturas originales.

**Diseño del hero:** conservar su composición, fotografía y estilos globales al ajustar las secciones posteriores. Su texto y enlaces se actualizaron para el enfoque de crear un negocio con dropshipping.

## WhatsApp

La conversión principal es iniciar una conversación por WhatsApp. El selector, evidencia, mentoría y FAQ preparan mensajes distintos; el formulario añade punto de partida, tienda opcional y objetivo. No se guardan respuestas ni se envía un mensaje automáticamente.

`site.contact.whatsapp = "573013965167"` centraliza el número que ya utilizaba el hero. Todos los enlaces comparten esa configuración. El formulario valida los campos obligatorios y redirige a WhatsApp en la misma pestaña, con el mensaje codificado, sin depender de ventanas emergentes.

Confirmar igualmente `site.url` antes de publicar. Agenda y perfiles sociales provisionales ya no se utilizan en el contenido nuevo ni se incluyen como perfiles verificados en JSON-LD.

## Imagen en «Tu negocio sobre la mesa»

El fondo verde se conserva. La columna derecha reserva un espacio sin marco, fondo adicional ni texto visible, también en móvil. Para colocar tu imagen:

1. Guarda un PNG o WebP con transparencia en `public/media/negocio-mentoria.png`.
2. En `lib/site.ts`, asigna `media.proposalImage: "/media/negocio-mentoria.png"` y ajusta `media.proposalImageAlt` para describirla.

Sugerencia: una foto de David trabajando con su portátil, en tres cuartos y mirando hacia el texto, con el fondo recortado. Exporta a unos 1200 px de ancho; el encuadre se adapta sin recortar el contenido. Mientras `proposalImage` esté vacío, queda únicamente el espacio reservado.

## Resultados y contenido

Las cifras visibles proceden de las capturas suministradas. Las 3.873 corresponden a conversaciones en Meta, no a compras. No atribuir a las capturas un periodo común, beneficio neto o resultado garantizado.

Los componentes antiguos que ya no se montan se conservaron para evitar descartar trabajo previo. No volver a publicar sus placeholders, afirmaciones o disponibilidad sin verificarlos.

## Verificación visual

`scripts/visual-audit.cjs` usa una instalación existente de Playwright (local, caché npm de Windows o indicada en `PLAYWRIGHT_MODULE`) y el Sharp incluido con Next. No añade dependencias al producto.

```bash
node scripts/visual-audit.cjs --baseline
node scripts/visual-audit.cjs
node scripts/visual-audit.cjs --interactions
```

El servidor debe estar en localhost:3000. Guardar la baseline antes de realizar cambios; no sobrescribirla durante una comparación. Las capturas y reportes quedan en `.visual-audit/`, ignorado por Git.

La comparación estricta del hero corresponde al rediseño anterior. El texto actual del hero cambia por solicitud del usuario; para este ajuste, `--interactions` verifica los destinos de WhatsApp, validación y redirección del formulario en escritorio y móvil, caracteres especiales y el espacio de imagen entre 320 y 1440 px. Intercepta WhatsApp sin enviar mensajes ni contactar el servicio.

Consulta [el informe del rediseño](docs/rediseno.md) para ver los cambios, pruebas y pendientes.
