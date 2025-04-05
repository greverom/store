"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function HeroGeometric({
  title1 = "Belleza y Dulzura",
  title2 = "Cindy's Store",
}: {
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const phrases = [
    {
      title: "Descubre Tu Belleza Natural",
      subtitle: "Potencia tu resplandor único con nuestros productos premium",
    },
    {
      title: (
        <>
          Elegancia en <br className="md:hidden" />
          Cada Detalle
        </>
      ),
      subtitle: "Realza tu belleza con fórmulas exclusivas y delicadas",
    },
    {
      title: (
        <>
          Transforma <br className="md:hidden" />
          Tu Rutina
        </>
      ),
      subtitle: "Lujo y cuidado en cada aplicación, resultados extraordinarios",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phrases.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center 
                    justify-center overflow-hidden">
      
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 -mt-90">
        <div className="max-w-8xl mx-auto text-center">
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 md:mb-5 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-400">{title1}</span>
              <br />
              <span className={cn("bg-clip-text text-5xl sm:text-6xl md:text-8xl lg:text-8xl text-[#d7752f]")}>
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Frase rotativa */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <p className=" text-md sm:text-lg md:text-md text-gray-500 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4 text-center h-[60px] flex items-center justify-center">
              {phrases[currentSlide].subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}