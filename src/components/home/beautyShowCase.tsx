"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import { Sparkles, Smile, Droplet } from "lucide-react"

export default function CindyBeautyShowcase() {
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

  const benefitItems = [
    {
      icon: <Sparkles className="w-10 h-10 text-pink-400" />,
      title: "Ingredientes naturales",
      description: "Formulados con extractos botánicos puros para nutrir tu piel.",
    },
    {
      icon: <Smile className="w-10 h-10 text-purple-400" />,
      title: "Resultados visibles",
      description: "Transforma tu belleza con resultados notables en poco tiempo.",
    },
    {
      icon: <Droplet className="w-10 h-10 text-fuchsia-400" />,
      title: "Para todo tipo de piel",
      description: "Diseñado para adaptarse a las necesidades únicas de tu piel.",
    },
  ]

  return (
    <section
      id="belleza"
      ref={sectionRef}
      className="container mx-auto min-h-[100vh] max-w-3xl lg:max-w-6xl relative z-10 flex flex-col items-center justify-center text-center md:text-left pt-30 md:pt-15 gap-0"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col md:items-start text-center md:text-left max-w-xl lg:max-w-full mx-auto mb-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Cindy Beauty
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="w-[80%] md:w-full text-md md:text-xl text-gray-700 mb-15 md:mb-20 font-light mx-auto md:mx-0"
        >
          Cosméticos creados para potenciar tu brillo natural. Siente la elegancia en cada detalle.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/belleza"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Beneficios */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className=" w-[75%] md:w-[95%] grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {benefitItems.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{benefit.title}</h3>
            <p className="text-gray-600 text-center text-md">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
