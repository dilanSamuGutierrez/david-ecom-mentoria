# Rediseño (oct. 2026): ventas por WhatsApp

Basado en `David_Ecom_Textos_y_Plan_Web.md`. Todo el texto vive en `lib/site.ts`.

## Recorrido

1. **Portada** (`hero.tsx`): mismo concepto (David al centro sobre el círculo verde, anillo, cuadrícula, parallax). Se añadieron órbita de herramientas, parallax por puntero, entrada por máscaras, cifras con rodillo (+$1.000 millones vendidos en un año y +10.000 pedidos, confirmadas por David) y la tarjeta de oferta con $200.000 COP y 8 sesiones visible desde la primera pantalla.
2. **Experiencia** (`experiencia.tsx`): presentación de David, cifras y franjas cruzadas.
3. **Sistema** (`sistema.tsx`): cuadrícula fijada cuya pieza central se expande a pantalla completa (inspirada en la sección de video de alex-baena.webflow.io). Para usar un video, pon su ruta en `site.system.video`.
4. **Método** (`metodo.tsx`): dudas → cómo se trabajan, y cuatro etapas en cartas apiladas.
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
