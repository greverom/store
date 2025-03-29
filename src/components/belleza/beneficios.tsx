"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Clock } from "lucide-react"

type Bubble = {
  id: number
  width: number
  height: number
  left: number
  top: number
  duration: number
  delay: number
  colorClass: string
}

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const generatedBubbles: Bubble[] = []

    for (let i = 0; i < 40; i++) {
      const isPink = i < 15
      generatedBubbles.push({
        id: i,
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 5,
        colorClass: isPink
          ? "bg-pink-100/10"
          : "bg-purple-200/20",
      })
    }

    setBubbles(generatedBubbles)
  }, [])

  const benefits = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Recibe tus productos en un plazo de 24 a 48 horas en todo el país.",
    },
    {
      icon: Star,
      title: "Calidad Premium",
      description: "Garantizamos la más alta calidad en todos nuestros productos cosméticos.",
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Verás resultados visibles en tu piel en menos tiempo.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-[60vh] py-6 flex justify-center px-4 overflow-hidden">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full backdrop-blur-xl animate-float ${bubble.colorClass}`}
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-bold mb-20 mt-12 md:mt-0 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
        >
          Disfruta de
          <br className="block md:hidden" />
          Nuestros Beneficios
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className=""
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-4">
                  <benefit.icon className="w-8 h-8 text-pink-300" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-600">{benefit.title}</h3>
                <p className="max-w-xs md:max-w-2xl text-gray-500 text-sm md:text-md">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}