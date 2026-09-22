# Rediseño posterior al hero

## Alcance y protección

Se conserva el proyecto Next.js 16, React 19 y Tailwind 4, sus fuentes locales, la identidad negro/verde y sus assets. No se instalaron dependencias.

El repositorio ya contenía cambios sin commit al iniciar. Se trabajó sobre ese estado; no se restauraron archivos a HEAD.

Archivos protegidos, sin cambios respecto al inicio de esta tarea:

- `components/sections/hero.tsx`: SHA-256 `03F7E1D53ADD64BCC1B6F11F9A111E0AA22ED20B0656E31B6959EEEB8855252A`.
- `app/globals.css`: SHA-256 `7E294A8E5A7531672EE8C98D69793D3677A181683F2480B76D5F95677051439F`.
- `public/media/JOSEXXO.png`: SHA-256 `125730BE47E0F740EA8C855B048D97EF00F9714DF94DD54864C6EB4C395192D4`.

Todos los estilos de contenido nuevo están bajo `.post-hero` en `app/post-hero.css`. Los únicos estilos externos son los controles de contacto, el enlace para saltar al contenido y el footer.

## Recorrido y contenido

1. Hero original.
2. Métricas y herramientas, sin carrusel permanente.
3. Selector de tres situaciones, con recomendación y mensaje contextual.
4. Problemas que frenan el crecimiento.
5. Propuesta de acompañamiento individual.
6. Capturas de la operación con contexto y ampliación.
7. Un único servicio real: mentoría 1:1, con sus cuatro grupos de trabajo.
8. Las cinco etapas originales.
9. Dos testimonios respaldados por las capturas existentes.
10. Precalificación.
11. Historia y presentación personal, con la fotografía existente.
12. FAQ accesibles.
13. Contacto con formulario que prepara un mensaje de WhatsApp.

Se condensaron `Story` y `About`; `How` y `Methodology`; las listas de `Proposal`, `Includes`, `Compare` y `Gap`. Los componentes antiguos que dejaron de montarse se conservaron en disco. Se retiraron de la página los placeholders vacíos y las bandas de escasez cuya disponibilidad no estaba verificada.

Las métricas se leen de las imágenes suministradas: ventas registradas de $84.109.254, 327 pedidos, inversión en Meta de $10.686.735 y 3.873 conversaciones. Se corrigió “conversiones” a “conversaciones”. No se atribuyen rentabilidad, un periodo común ni mejoras porcentuales que las capturas no demuestran. Se retiró la afirmación de USD 100.000 del contenido visible posterior al hero y de la descripción SEO por falta de una captura que la respalde.

## Componentes

Nuevos:

- `StageFinder`: selección accesible de situación y contexto.
- `WhatsAppLink`: CTA reutilizable con mensaje contextual.
- `useContactVisibility`: oculta el CTA sobre hero, contacto, footer, menú, campos activos y otros CTA visibles.

Reutilizados y adaptados: `Container`, `SectionHeader`, `Icon`, `Logo`, `ProofImage`, secciones existentes, `Apply`, navegación, footer y controles móviles. `Reveal` mantiene su API y muestra el contenido desde el render inicial; las secciones ya no dependen de animaciones para ser visibles.

## WhatsApp

CTA por situación, evidencia, mentoría, FAQ, footer y controles de contacto. Los mensajes se codifican con `encodeURIComponent`. El formulario aporta punto de partida, tienda opcional y objetivo, sin almacenar respuestas ni enviarlas automáticamente.

**Actualizado:** `lib/site.ts → contact.whatsapp` utiliza `573013965167`, el número que ya figuraba en el hero. Todos los CTA comparten ese destino y el formulario está habilitado. El envío redirige en la misma pestaña para evitar bloqueos de ventanas emergentes; el visitante decide cuándo enviar el mensaje en WhatsApp.

## Ajuste de enfoque: crear un negocio con dropshipping

Por solicitud del usuario, el texto del hero y las secciones activas ahora acompañan a quien empieza desde cero: producto, proveedores, tienda, primeras campañas y seguimiento. Se conserva «Operador primero. Mentor después.» y la identidad visual. El espacio de imagen en «Tu negocio sobre la mesa» mantiene el verde original y no añade marco ni fondo; se configura en `site.media.proposalImage` (ver README).

## Responsive, accesibilidad y rendimiento

- Selector móvil en filas compactas; proceso como timeline vertical; grids y título del servicio ajustados a 320 px.
- CTA móvil con safe area y espacio inferior suficiente en el footer.
- Botones con estados de foco, selección mediante `aria-pressed`, feedback anunciado y etiquetas de formulario.
- FAQ con `details/summary`; visor nativo `dialog`, Escape y recuperación del foco.
- Menú con Escape, `aria-controls` y cierre al seleccionar contacto.
- Un único H1, enlaces internos existentes resueltos y destino `#contacto` para el CTA original del hero.
- Microinteracciones que respetan movimiento reducido. Se conserva el comportamiento original del hero.
- Capturas y fotografía secundaria con optimización de Next Image, tamaños declarados y carga diferida. Los originales permanecen disponibles en el visor para poder leer la evidencia.
- Sin nueva librería, stock ni imágenes de resultados generadas.

## SEO

Canonical, descripción actualizada, imagen social propia en `app/opengraph-image.tsx`, Open Graph y Twitter. Se mantienen robots, sitemap y JSON-LD de persona/servicio/FAQ; se excluyen perfiles sociales vacíos que antes apuntaban a las portadas de Instagram y TikTok.

**Por confirmar antes de publicar:** el dominio `https://davidecom.co` continúa marcado como provisional en la configuración original. No se inventaron URLs sociales ni enlaces legales.

## Archivos intervenidos

- `app/page.tsx`, `app/layout.tsx`, `app/post-hero.css`, `app/opengraph-image.tsx`.
- `components/sections/{authority,problem,proposal,evidence,includes,methodology,cases,forwho,about,faq,apply,final-cta,stage-finder}.tsx`.
- `components/site/{nav,footer,mobile-cta,whatsapp-float}.tsx`, `components/site/use-contact-visibility.ts`.
- `components/ui/{proof-image,reveal,whatsapp-link}.tsx`.
- `lib/site.ts`, `lib/jsonld.ts`, `eslint.config.mjs`, `.gitignore`.
- `scripts/visual-audit.cjs`, `README.md`, este informe.

## Verificación

- Build de producción completada, con TypeScript y generación de las siete páginas estáticas.
- ESLint sin errores ni avisos. Se corrigió una configuración anterior que dependía de `@eslint/eslintrc`, usando los exports nativos ya instalados.
- Comparación del hero a 390 y 1440 px: misma geometría y estilos; archivos protegidos idénticos. El primer pase produjo capturas idénticas byte a byte; el último presentó variaciones de rasterizado/grano de hasta 2 niveles RGB, sin cambios de composición.
- Revisión de 320, 360, 390, 430, 768, 1024, 1440 y 1920 px, con comprobación de overflow, imágenes, H1, IDs y anchors.
- Pruebas con Chromium: selector con ratón y teclado, visor, Escape/foco, FAQ, menú móvil, validación del formulario, estado pendiente del contacto, CTA sticky y metadata.
- La codificación del mensaje de WhatsApp conserva signos y acentos.
- No existía suite de tests. La auditoría reproducible usa una instalación disponible de Playwright o la indicada en `PLAYWRIGHT_MODULE`, sin añadir dependencias al producto.

Artefactos locales en `.visual-audit/` (ignorados por Git). Comandos: `node scripts/visual-audit.cjs` y `node scripts/visual-audit.cjs --interactions`. No se ejecutó una auditoría Lighthouse ni se declara cumplimiento WCAG.
