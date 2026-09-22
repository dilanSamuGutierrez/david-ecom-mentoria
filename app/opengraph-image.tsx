import { ImageResponse } from "next/og";

export const alt = "David Ecom · Mentoría 1:1 de dropshipping y Meta Ads";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#060a08", color: "#ecf2ee", display: "flex", flexDirection: "column", padding: "64px 76px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28 }}><span style={{ color: "#43dd9b", fontWeight: 700 }}>DE.</span><span>DAVID ECOM</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 72, letterSpacing: -3, lineHeight: 1.1, fontWeight: 700 }}><span>Crea tu negocio.</span><span style={{ color: "#7ce8b8" }}>Con dropshipping.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #315240", paddingTop: 28, fontSize: 24, color: "#b0c5b8" }}><span>Acompañamiento 1:1 con David</span><span>Producto · Meta Ads · Métricas</span></div>
    </div>,
    size,
  );
}
