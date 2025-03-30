"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import { Sparkles, Smile, Droplet } from "lucide-react"

export default function CindyBeautyShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.05, once: false })

  // Animation variants
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
      transition: { duration: 0.8, ease: [.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 1 } },
  }

  const benefitItems = [
    {
      icon: <Sparkles className="w-9 h-9 text-pink-400" />,
      title: "Ingredientes naturales",
      description: "Formulados con extractos botánicos puros para nutrir tu piel.",
    },
    {
      icon: <Smile className="w-9 h-9 text-purple-400" />,
      title: "Resultados visibles",
      description: "Transforma tu belleza con resultados notables en poco tiempo.",
    },
    {
      icon: <Droplet className="w-9 h-9 text-fuchsia-400" />,
      title: "Para todo tipo de piel",
      description: "Diseñado para adaptarse a las necesidades únicas de tu piel.",
    },
  ]

  return (
    <section
      id="belleza"
      className="relative overflow-hidden py-25 md:py-18 px-4 min-h-[90vh] flex flex-col justify-center items-center"
    >

      {/* Main content */}
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto max-w-md md:max-w-6xl relative z-10"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500"
            variants={itemVariants}
          >
            Cindy Beauty
          </motion.h2>

          <motion.p
            className="text-md md:text-xl lg:text-2xl max-w-6xl mx-auto mb-20 text-gray-700 font-light"
            variants={itemVariants}
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

        {/* Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-28"
          variants={containerVariants}
        >
          {benefitItems.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-2"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-md md:text-md">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}