"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Heart, ChefHat, Leaf } from "lucide-react"

export default function CindyBakeryShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.05, once: false })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 1 } },
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
      className="container mx-auto min-h-[100vh] max-w-xl md:max-w-3xl lg:max-w-6xl px-4 md:px-6 py-30 relative z-10"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center text-center max-w-md md:max-w-6xl mx-auto mb-16 md:mb-24"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
        >
          Cindy Bakery
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-xl text-gray-700 mb-20 font-light"
        >
          Endulzamos tus días con postres artesanales elaborados con amor y los mejores ingredientes.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/dulces"
            className="inline-block px-8 py-3 rounded-full bg-amber-400 hover:bg-pink-400 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-28"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-2"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{benefit.title}</h3>
            <p className="text-gray-600 text-center text-md md:text-md">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}