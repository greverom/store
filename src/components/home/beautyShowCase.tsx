"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
// import Image from "next/image"
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
      className="container mx-auto py-25 sm:py-15 md:py-35 lg:py-25  max-w-full relative flex flex-col items-center 
                 justify-center text-center md:text-left pt-20 md:pt-30 overflow-hidden"
    >
      {/* Imagen decorativa a la derecha
      <div className="absolute right-[-95px] md:right-10 lg:right-60 top-33 sm:top-30 md:top-70 w-[400px] 
                      sm:w-[380px] md:w-[420px] lg:w-[550px] h-full z-0 pointer-events-none">
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
      </div> */}

      {/* Contenido */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 flex flex-col justify-start md:items-start text-left w-[90%] 
                   sm:w-[90%] md:w-[88%] lg:w-[75%] mt-60 sm:mt-70 md:mt-15 lg:mt-10"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl mb-4 font-[Poppins] text-gray-700"
        >
          Belleza
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="w-xs sm:w-md md:w-2xl text-sm md:text-lg text-gray-600 mb-8 font-light"
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
            className="inline-block px-8 py-3 text-sm rounded-xl text-white bg-[#5a504f] 
                        border border-[#8e7dd1] transition-all duration-300 ease-in-out transform 
                        hover:scale-110 hover:bg-[#322e2e]"
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