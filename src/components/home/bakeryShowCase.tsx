"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Heart, ChefHat, Leaf } from "lucide-react"

export default function CindyBakeryShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.02, once: false })

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 1 } },
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

  const benefits = [
    {
      title: "Ingredientes naturales",
      description: "Usamos solo ingredientes frescos y reales.",
      icon: <Leaf className="w-10 h-10 text-green-500" />, 
    },
    {
      title: "Hecho con amor",
      description: "Cada dulce lleva un toque de cariño.",
      icon: <Heart className="w-10 h-10 text-rose-500" />, 
    },
    {
      title: "Sabor casero",
      description: "El gusto de lo hecho en casa.",
      icon: <ChefHat className="w-10 h-10 text-amber-500" />, 
    },
  ]

  return (
    <section
      id="dulces"
      ref={sectionRef}
      className="container mx-auto min-h-[100vh] max-w-3xl lg:max-w-6xl relative z-10 flex flex-col items-center justify-center text-center md:text-left pt-30 md:pt-15 gap-5 md:gap-10"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:items-start text-left w-[90%] px-0 sm:px-4 md:px-0 md:w-[85%] lg:w-[90%] md:mb-15 md:ml-0"
      >
        <motion.h1
          variants={itemVariants}
          custom="left"
          className="text-5xl md:text-6xl mb-4 pl-3 sm:pl-4 md:pl-0 bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
        >
          Cindy Bakery
        </motion.h1>

        <motion.p
          variants={itemVariants}
          custom="left"
          className="w-full text-md md:text-md text-gray-700 mb-8 font-light mx-auto md:mx-0 pl-4 sm:pl-3 text-left"
        >
          Endulzamos tus días con postres artesanales elaborados con amor y los mejores ingredientes.
        </motion.p>

        <motion.div
          variants={itemVariants}
          custom="left"
          className="pl-4 sm:pl-6 md:pl-0 md:ml-10 w-full md:w-auto"
        >
          <Link
            href="/dulces"
            className="inline-block px-8 py-3 text-sm rounded-full border border-amber-400 text-amber-500 bg-transparent font-medium hover:text-white hover:bg-gradient-to-r hover:from-amber-400 hover:to-pink-400 hover:border-transparent transition-all duration-300 ease-in-out"
          >
            Descubrir Repostería
          </Link>
        </motion.div>
      </motion.div>

      {/* Beneficios */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-[75%] md:w-[100%] grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {benefits.map((benefit, index) => {
          const direction = index % 2 === 0 ? "left" : "right"

          return (
            <motion.div
              key={index}
              custom={direction}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-5"
            >
              <div className="w-7 h-7 flex items-center justify-center mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-md font-semibold mb-2 text-gray-800 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {benefit.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}