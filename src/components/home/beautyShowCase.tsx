"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import ProductosDestacados from "@/components/belleza/productosDestacados"

export default function CindyBeautyShowcase() {
  const textRef = useRef(null)
  const cardsRef = useRef(null)
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
      className="container bg-gray-100 mx-auto min-h-[90vh] max-w-full relative z-10 flex 
                flex-col items-center justify-center text-center md:text-left pt-20 md:pt-30 gap-5 md:gap-0"
    >
      {/* Texto y botón */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:items-start text-left w-[90%] px-0 sm:px-4 md:px-0 md:w-[85%] lg:w-[90%] md:mb-0 md:ml-0"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-4xl md:text-7xl mb-4 pl-3 sm:pl-4 md:pl-[6%] bg-gradient-to-r tracking-tighter 
                    font-[Poppins] from-pink-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Cindy Beauty
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="w-[100%] md:w-34xl text-sm md:text-xl text-gray-700 mb-8 font-light mx-auto md:mx-0 
                    pl-4 sm:pl-3 md:pl-[7%] text-left"
        >
          Cosméticos creados para potenciar tu brillo natural. Siente la elegancia en cada detalle.
        </motion.p>

        <motion.div
          variants={itemVariants}
          custom="left"
          className="pl-4 sm:pl-6 md:pl-[6%] md:ml-10 w-full md:w-auto"
        >
          <Link
            href="/belleza/catalogo"
            className="inline-block px-8 py-3 text-sm rounded-full border border-pink-400 hover:text-white 
                      hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:border-transparent 
                      transition-all duration-300 ease-in-out"
          >
            Tienda
          </Link>
        </motion.div>
      </motion.div>

      <div ref={cardsRef} className="w-full">
        <ProductosDestacados />
      </div>
    </section>
  )
}