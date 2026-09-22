/** Capa de grano sutil a pantalla completa (mejora la sensación premium). */
export function Grain() {
  return (
    <div
      aria-hidden
      className="noise pointer-events-none fixed inset-0 z-[40] opacity-[0.04] mix-blend-soft-light"
    />
  );
}
