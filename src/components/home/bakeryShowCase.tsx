"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import DulcesDestacados from "../dulces/productos-destacados"


export default function CindyBakeryShowcase() {
  const textRef = useRef(null)
  const cardsRef = useRef(null)

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
      className="container bg-white-100 mx-auto min-h-[90vh] max-w-full relative z-10 flex 
                flex-col items-center justify-center text-center md:text-left md:pt-30 gap-12 md:gap-18 
                overflow-hidden overflow-y-auto"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 -translate-y-30 md:-translate-y-50">
        <Image
          src="/images/image-bakery.png"
          alt="Fondo Dulce Canela"
          fill
          priority
          className="object-cover w-full h-full pointer-events-none opacity-70"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, white 85%, white 28%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 35%, white 65%, transparent 100%)",
          }}
        />
      </div>

      {/* Texto y botón */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:items-start text-left w-[90%] px-0 sm:px-4 md:px-0 md:w-[85%] lg:w-[90%] 
                    md:mb-15 md:ml-0 z-10"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-4xl md:text-7xl mb-4 pl-0 sm:pl-4 md:pl-[6%] tracking-tighter
                    font-[Poppins] bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
        >
          Dulce Canela
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="w-full text-sm md:text-xl text-gray-700 mb-8 font-light mx-auto md:mx-0 pl-1 sm:pl-3 
                    md:pl-[6%] text-left"
        >
          Endulzamos tus días con postres elaborados con los mejores ingredientes.
        </motion.p>

        <motion.div
          variants={itemVariants}
          custom="left"
          className="pl-4 sm:pl-6 md:pl-[6%] md:ml-10 w-full md:w-auto"
        >
          <Link
            href="/dulces"
            className="inline-block px-8 py-3 text-sm rounded-full text-white 
                      bg-gradient-to-r from-amber-400 to-pink-400 font-medium 
                      transition-all duration-300 ease-in-out transform hover:scale-[1.1]"
          >
            Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Productos destacados */}
      <div ref={cardsRef} className="w-full z-10">
        <DulcesDestacados />
      </div>
    </section>
  )
}