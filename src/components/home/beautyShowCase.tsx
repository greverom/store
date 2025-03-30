"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import { Sparkles, Smile, Droplet } from "lucide-react"

export default function CindyBeautyShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Bubble animation setup
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; x: number; y: number; duration: number }>>(
    [],
  )

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
    }))
    setBubbles(newBubbles)
  }, [])

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
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
     
    <section id="belleza" className="relative overflow-hidden py-25 md:py-18 px-4  min-h-[90vh] flex flex-col justify-center items-center">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/30 to-fuchsia-50/20">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-pink-100/20 to-purple-100/20 backdrop-blur-sm"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-6xl relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500"
          >
            Cindy Beauty
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
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

        {/* Benefits section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {benefitItems.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-pink-100/50"
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

