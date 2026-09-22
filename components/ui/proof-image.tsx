"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import { Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProofImage({ src, alt, caption, aspect = "4/3", fit = "contain", className, priority = false, sizes = "(max-width: 768px) 90vw, 45vw", wide = false }: {
  src: string; alt: string; caption?: string; index?: string; aspect?: string; fit?: "cover" | "contain";
  className?: string; priority?: boolean; sizes?: string; wide?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  return (
    <figure className={cn("proof-image", className)}>
      <button type="button" className="proof-trigger" style={{ aspectRatio: aspect }} onClick={() => dialog.current?.showModal()} aria-label={"Ampliar: " + alt} aria-haspopup="dialog">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} unoptimized={false} className={fit === "cover" ? "object-cover" : "object-contain"} />
        <span className="proof-zoom" aria-hidden><Maximize2 size={13} />Ampliar</span>
      </button>
      {caption && <figcaption className="proof-caption">{caption}</figcaption>}
      <dialog ref={dialog} className="proof-dialog" aria-labelledby={titleId} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="proof-dialog-header"><p id={titleId}>{alt}{wide && <span className="block mt-1 text-xs text-muted">Desliza horizontalmente para leer todas las columnas.</span>}</p><button type="button" aria-label="Cerrar captura" onClick={() => dialog.current?.close()}><X size={20} aria-hidden /></button></div>
        <div className="proof-dialog-scroll" data-lenis-prevent>
          {/* Original resolution is intentional in the evidence viewer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" className={cn("proof-dialog-image", wide ? "wide" : "portrait")} />
        </div>
      </dialog>
    </figure>
  );
}
