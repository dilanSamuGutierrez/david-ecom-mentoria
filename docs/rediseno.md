# Rediseño (oct. 2026): ventas por WhatsApp

Basado en `David_Ecom_Textos_y_Plan_Web.md`. Todo el texto vive en `lib/site.ts`.

## Recorrido

1. **Portada** (`hero.tsx`): mismo concepto (David al centro sobre el círculo verde, anillo, cuadrícula, parallax). Se añadieron órbita de herramientas, parallax por puntero, entrada por máscaras, cifras con rodillo (+$1.000 millones vendidos en un año y +10.000 pedidos, confirmadas por David) y la tarjeta de oferta con $200.000 COP y 8 sesiones visible desde la primera pantalla.
2. **Experiencia** (`experiencia.tsx`): formato "sobre mí" de portafolio; el titular se ilumina palabra por palabra al leerlo, foto + historia, cifras y una franja recta.
3. **Sistema** (`sistema.tsx`): una línea recorre Anuncio → WhatsApp → Pedido y enciende cada paso; debajo, el video del despacho crece levemente al entrar. Sin fijar la pantalla.
4. **Método** (`metodo.tsx`): dudas → cómo se trabajan, y las cuatro etapas como línea de tiempo que se llena con el scroll.
5. **Servicios** (`servicios.tsx`): mentoría (principal) y gestión de campañas (rango $500.000–$2.000.000).
6. **Experiencias de alumnos** (`alumnos.tsx`).
7. **Para quién es** (`para-quien.tsx`).
8. **Preguntas** (`faq.tsx`) y **Contacto** (`contacto.tsx`).

Botón flotante único "Hablar con David" (`whatsapp-float.tsx`), visible desde el inicio; se aparta mientras se escribe en el formulario en el teléfono.

## Retirado

$84M, 327 pedidos, USD 100.000, "Agendar diagnóstico", escasez de cupos, bloques repetidos (Problema, Propuesta, Incluye, Historia/Sobre, Selector de etapa, Evidencia extensa), barra móvil y botón de volver arriba (duplicaban el flotante).

## Pendiente (apartado 6 del documento)

Soporte por WhatsApp entre clases, cancelaciones por parte de David, renovación y pago, planes de gestión, requisitos para menores, dominio, redes, política de privacidad y condiciones.

## Rendimiento y accesibilidad (31 oct. 2026)

- Imágenes pesadas convertidas a WebP (`*-1400.webp`, `*-500.webp`…): el avatar de la portada pasó de 1,5 MB a 171 KB. Los PNG/JPG originales se conservan como fuente.
- Sin `backdrop-filter`, `filter: blur()` ni `filter: brightness()` en capas que se mueven con el scroll; luces con degradados radiales. Se retiró la capa de grano a pantalla completa (`mix-blend-mode`), que obligaba a recomponer toda la página en cada fotograma.
- Sección Sistema: 4 imágenes (antes 8) y expansión con `transform: scale` en lugar de `clip-path`; fijado más corto (120 % de la pantalla).
- Las animaciones usan `opacity`, no `visibility`: textos y botones siguen disponibles para lectores de pantalla y teclado mientras se animan. Con movimiento reducido todo se muestra estático.

## Video de la sección Sistema

`public/media/sistema-pedidos.mp4` es un clip de stock de Mixkit (licencia gratuita, uso comercial permitido; "Hands of two people sealing a package with tape", 720p, 4,8 MB). Se descarga solo cuando la sección se acerca a la pantalla. Para usar un video de David, reemplaza el archivo o cambia `site.system.video` en `lib/site.ts` (ideal: horizontal, 720p, menos de 6 MB, sin audio).

## Ajustes de composición (10 nov. 2026)

- Celular: el hero ya no muestra la tarjeta de precio (el precio está en Servicios); el botón flotante "Hablar con David" queda permanente con icono y texto.
- Banda de llamado a la acción con David recortado (`cta-banda.tsx`), después de los casos de alumnos (patrón de relab-template).
- Dudas del método en acordeón; resultado de cada etapa en una línea; capturas de alumnos lado a lado; cifras antes de la historia en celular; espaciado más compacto. Página en celular: de 16.733 px a 14.996 px.
- Portada del video: `public/media/sistema-pedidos-poster.webp` (fotograma del clip), para que nunca se vea un bloque negro.
