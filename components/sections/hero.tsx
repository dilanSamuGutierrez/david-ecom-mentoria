"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

function Hero() {
  const parallaxImgRef = useRef<HTMLDivElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let currentY = 0;

    const updateParallax = () => {
      const targetY = window.scrollY;

      currentY += (targetY - currentY) * 0.08;

      if (parallaxImgRef.current) {
        let baseOffset = 35;

        if (window.innerWidth >= 640) {
          baseOffset = 15;
        }

        if (window.innerWidth >= 768) {
          baseOffset = 20;
        }

        if (window.innerWidth >= 1280) {
          baseOffset = 25;
        }

        if (window.innerWidth >= 1536) {
          baseOffset = 30;
        }

        parallaxImgRef.current.style.transform = `translate3d(0, ${
          currentY * 0.16 + baseOffset
        }px, 0)`;
      }

      if (bgParallaxRef.current) {
        bgParallaxRef.current.style.transform = `translate3d(0, ${
          currentY * 0.04
        }px, 0) scale(1.05)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <section
      id="top"
      className="
        relative
        flex
        min-h-svh
        w-full
        items-end
        overflow-hidden
        md:min-h-[110svh]
        xl:min-h-[115svh]
      "
      style={{
        backgroundColor: "#060a09",
        borderBottomLeftRadius: "5rem",
        borderBottomRightRadius: "5rem",
      }}
    >
      {/* Fondo */}
      <div
        ref={bgParallaxRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
          will-change-transform
        "
      >
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center, black 15%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 15%, transparent 85%)",
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-[10%]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            blur-[140px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(18,185,129,0.15) 0%, rgba(18,185,129,0.04) 45%, transparent 75%)",
          }}
        />

        <div
          className="
            absolute
            -bottom-60
            left-1/2
            h-[450px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            blur-[120px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(18,185,129,0.13), transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, rgba(6,10,9,0.85) 100%)",
          }}
        />
      </div>

      <div
        className="
          relative
          z-20
          w-full
          px-4
          pt-20
          sm:pt-24
          md:pt-28
          xl:pt-32
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Título */}
          <motion.div
            className="
              relative
              z-30
              flex
              flex-col
              items-center
              text-center
            "
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#12B981]/20
                bg-[#12B981]/5
                px-4
                py-2
                text-xs
                font-medium
                tracking-wide
                text-[#6EE7B7]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#12B981]" />
              Dropshipping + Meta Ads · Mentoría 1:1
            </div>

            <h1
              className="
                max-w-5xl
                text-4xl
                font-bold
                leading-[0.94]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                2xl:text-8xl
              "
            >
              Crea tu negocio
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-[#6EE7B7]
                  via-[#12B981]
                  to-[#34D399]
                  bg-clip-text
                  text-transparent
                "
              >
                con dropshipping.
              </span>
            </h1>
          </motion.div>

          {/* Visual principal */}
          <div
            className="
              relative
              mt-3
              min-h-[470px]
              sm:mt-5
              sm:min-h-[640px]
              md:mt-8
              md:min-h-[680px]
              xl:mt-2
              xl:min-h-[720px]
            "
          >

            {/* Información izquierda */}
            <motion.div
              className="
                absolute
                left-0
                top-[31%]
                z-30
                hidden
                w-[260px]
                xl:block
              "
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-sm leading-relaxed text-white/60">
                Acompañamiento 1:1 con un operador activo de dropshipping.
                Te guío desde la elección de tu producto hasta tu tienda y tus primeras campañas.
              </p>

              <div className="mt-8">
                <div className="text-4xl font-semibold tracking-tight text-white">
                  $84M+
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/30">
                  Ventas generadas
                </div>
              </div>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-[#12B981] to-transparent" />

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#6EE7B7]">
                  Operación real
                </p>

                <p className="mt-2 text-sm text-white/35">
                  Producto · Meta Ads · Conversión
                </p>
              </div>
            </motion.div>

            {/* Círculo verde */}
            <div
              className="
                absolute
                left-1/2
                top-[12%]
                h-[390px]
                w-[390px]
                -translate-x-1/2
                rounded-full
                border
                border-[#12B981]/10
                bg-[#12B981]/10
                sm:top-[14%]
                sm:h-[500px]
                sm:w-[500px]
                md:top-[16%]
                md:h-[590px]
                md:w-[590px]
                xl:h-[650px]
                xl:w-[650px]
              "
            />

            {/* Anillo exterior */}
            <div
              className="
                absolute
                left-1/2
                top-[9%]
                h-[460px]
                w-[460px]
                -translate-x-1/2
                rounded-full
                border
                border-white/[0.035]
                sm:top-[11%]
                sm:h-[590px]
                sm:w-[590px]
                md:top-[13%]
                md:h-[690px]
                md:w-[690px]
                xl:h-[750px]
                xl:w-[750px]
              "
            />

            {/* Luz inferior */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[260px]
                w-[380px]
                -translate-x-1/2
                rounded-full
                bg-[#12B981]/20
                blur-[100px]
                sm:w-[500px]
                md:w-[600px]
              "
            />

            {/* José */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                flex
                items-end
                justify-center
              "
            >
              <div
                ref={parallaxImgRef}
                className="
                  relative
                  flex
                  w-full
                  items-end
                  justify-center
                  will-change-transform
                "
              >

                {/* Mobile */}
                <div
                  className="
                    relative
                    aspect-[0.92]
                    w-[318vw]
                    max-w-[660px]
                    sm:hidden
                  "
                >
                  <Image
                    src="/media/JOSEXXO_2.png"
                    alt="David - Mentor de Dropshipping"
                    fill
                    priority
                    className="object-contain object-bottom -mt-20"
                    sizes="318vw"
                  />
                </div>

                {/* Tablet pequeño */}
                <div
                  className="
                    relative
                    hidden
                    h-[620px]
                    w-[560px]
                    sm:block
                    md:hidden
                  "
                >
                  <Image
                    src="/media/JOSEXXO_2.png"
                    alt="David - Mentor de Dropshipping"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="560px"
                  />
                </div>

                {/* Tablet */}
                <div
                  className="
                    relative
                    hidden
                    h-[680px]
                    w-[620px]
                    md:block
                    xl:hidden
                  "
                >
                  <Image
                    src="/media/JOSEXXO_2.png"
                    alt="David - Mentor de Dropshipping"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="620px"
                  />
                </div>

                {/* Desktop */}
                <div
                  className="
                    relative
                    hidden
                    h-[720px]
                    w-[680px]
                    xl:block
                    2xl:h-[800px]
                    2xl:w-[760px]
                  "
                >
                  <Image
                    src="/media/JOSEXXO_2.png"
                    alt="David - Mentor de Dropshipping"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="760px"
                  />
                </div>
              </div>
            </div>

            {/* CTA desktop encima de José */}
            {/* <motion.div
              className="
                absolute
                left-1/2
                top-[13%]
                z-40
                hidden
                -translate-x-1/2
                xl:block
              "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
            >
              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#12B981]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#03120d]
                  shadow-[0_12px_35px_rgba(18,185,129,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#34D399]
                  hover:shadow-[0_18px_45px_rgba(18,185,129,0.28)]
                  mt-115
                "
              >
                Quiero crear mi negocio

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>
 */}
            {/* Información derecha desktop */}
            <motion.div
              className="
                absolute
                right-0
                top-[30%]
                z-30
                hidden
                w-[250px]
                flex-col
                xl:flex
              "
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="text-4xl font-semibold tracking-tight text-white">
                327
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/30">
                Pedidos procesados
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/50">
                Aprende a elegir qué vender, preparar tu tienda
                y lanzar tus primeros anuncios en Meta Ads.
              </p>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white/70
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#12B981]/30
                  hover:bg-[#12B981]/5
                  hover:text-white
                "
              >
                <MessageCircle
                  size={16}
                  className="text-[#6EE7B7]"
                />

                Hablar por WhatsApp
              </a>
            </motion.div>

            {/* Tarjeta tablet */}
            <motion.div
              className="
                absolute
                right-5
                top-[38%]
                z-30
                hidden
                flex-col
                rounded-2xl
                border
                border-white/10
                bg-black/35
                px-5
                py-4
                backdrop-blur-xl
                md:flex
                xl:hidden
              "
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
            >
              <span className="text-xs text-[#6EE7B7]">
                Operación real
              </span>

              <span className="mt-1 text-sm text-white">
                Dropshipping
              </span>
            </motion.div>

            {/* CTA mobile */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-40
                flex
                w-full
                -translate-x-1/2
                flex-col
                items-center
                gap-3
                xl:hidden
              "
            >
              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#12B981]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#03120d]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#34D399]
                "
              >
                Quiero crear mi negocio

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                />
              </a>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-5
                  py-3
                  text-sm
                  text-white/70
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#12B981]/30
                  hover:text-white
                "
              >
                <MessageCircle
                  size={16}
                  className="text-[#6EE7B7]"
                />

                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Estadísticas */}
          <div
            className="
              relative
              z-40
              grid
              grid-cols-2
              gap-4
              pb-10
              xl:hidden
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-md
              "
            >
              <span className="text-2xl font-semibold text-white">
                $84M+
              </span>

              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/30">
                Ventas generadas
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-md
              "
            >
              <span className="text-2xl font-semibold text-white">
                327
              </span>

              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/30">
                Pedidos procesados
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
export { Hero };
