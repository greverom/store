"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
// import ProductosDestacados from "@/components/belleza/productosDestacados"

export default function CindyBeautyShowcase() {
  const textRef = useRef(null)
  // const cardsRef = useRef(null)
  const textInView = useInView(textRef, { amount: 0.15, once: false })

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants: Variants = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="belleza"
      className="container mx-auto min-h-[100vh] max-w-full relative flex flex-col items-center 
                 justify-center text-center md:text-left pt-20 md:pt-30 gap-12 md:gap-18 overflow-hidden"
    >
      {/* Imagen decorativa a la derecha */}
      <div className="absolute right-6 md:right-10 lg:right-60 top-30 sm:top-30 md:top-40 w-[300px] 
                      sm:w-[380px] md:w-[420px] lg:w-[600px] h-full z-0 pointer-events-none">
        <Image
          src="/images/image-beauty-sinfonde.png"
          alt="Cosméticos decorativos"
          fill
          priority
          className="object-contain w-full h-full pointer-events-none opacity-90 scale-85"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
          }}
        />
      </div>

      {/* Contenido */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 flex flex-col justify-start md:items-start text-left w-[90%] 
                    md:w-[88%] lg:w-[75%] mt-[-400px] md:mt-[-300px] lg-[-300px]"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-4xl md:text-8xl mb-4 font-[Poppins] text-gray-700"
        >
          Belleza
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="md:w-2xl text-sm md:text-xl text-gray-500 mb-8 font-light"
        >
          Cosméticos creados para potenciar tu brillo natural. Siente la elegancia en cada detalle.
        </motion.p>

        <motion.div
          variants={itemVariants}
          custom="left"
          className="w-full md:w-auto"
        >
          <Link
            href="/belleza/catalogo"
            className="inline-block px-8 py-3 text-sm rounded-xl text-white bg-[#A89EC9] 
                        border border-[#998fc0] transition-all duration-300 ease-in-out transform 
                        hover:scale-110 hover:bg-[#998fc0]"
          >
            Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Productos
      <div ref={cardsRef} className="w-full md:w-3xl lg:w-5xl relative z-10">
        <ProductosDestacados />
      </div> */}
    </section>
  )
}