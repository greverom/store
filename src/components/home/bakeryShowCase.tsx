"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
// import Image from "next/image"
// import DulcesDestacados from "../dulces/productos-destacados"

export default function CindyBakeryShowcase() {
  const textRef = useRef(null)
  // const cardsRef = useRef(null)
  const textInView = useInView(textRef, { amount: 0.2, once: false })

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
      x: direction === "left" ? -100 : 100,
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
      id="dulces"
      className="container mx-auto py-12 sm:py-25 mg:py-5 lg:py-20 max-w-full relative z-10 flex flex-col items-center 
                 justify-center text-center md:text-left pt-20 md:pt-30 md:gap-18 overflow-hidden"
    >
      {/* Imagen decorativa al fondo derecha
      <div className="absolute right-[-40px] md:right-10 lg:right-65 top-30 sm:top-30 md:top-45 w-[340px] 
                      sm:w-[380px] md:w-[420px] lg:w-[520px] h-full z-0 pointer-events-none">
        <Image
          src="/images/imagen-dulce-no-fondo.png"
          alt="Imagen decorativa dulces"
          fill
          priority
          className="object-contain w-full h-full pointer-events-none scale-100"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, white 60%, white 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, white 60%, white 90%, transparent 100%)",
          }}
        />
      </div> */}

      {/* Texto y botón */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 flex flex-col justify-start md:items-start text-left w-[90%] 
                    md:w-[88%] lg:w-[75%] mt-80 sm:mt-50 md:mt-20 lg:mt-20"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-5xl sm:text-6xl md:text-7xl mb-4 font-[Poppins] text-gray-700"
        >
          Dulce Canela
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="w-xs sm:w-md md:w-2xl text-sm md:text-xl text-gray-600 mb-8 font-light"
        >
          Endulzamos tus días con postres elaborados con los mejores ingredientes.
        </motion.p>

        <motion.div
          variants={itemVariants}
          custom="left"
          className="w-full md:w-auto"
        >
          <Link
            href="/dulces"
            className="inline-block px-8 py-3 text-sm rounded-xl text-white
                       bg-[#D87C63] border border-[#d2745b] transition-all 
                       duration-300 ease-in-out transform hover:scale-110 hover:bg-[#c7644f]"
          >
            Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Productos destacados
      <div ref={cardsRef} className="w-full md:w-3xl lg:w-5xl relative z-10">
        <DulcesDestacados />
      </div> */}
    </section>
  )
}