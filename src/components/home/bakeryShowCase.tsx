"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Cake, Heart, ChefHat, Leaf } from "lucide-react"

export default function CindyBakeryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
    {
      title: "Recetas artesanales",
      description: "Tradición en cada bocado.",
      icon: <Cake className="w-10 h-10 text-pink-500" />,
    },
  ]

  return (
    <div id="dulces" className="container mx-auto min-h-[100vh] max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-6xl relative z-10" ref={ref}>
      <div className="container mx-auto py-25 px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
          >
            Cindy Bakery
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 mb-8">
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

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-pink-50 rounded-full">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

