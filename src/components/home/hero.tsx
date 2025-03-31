"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "Belleza que",
    highlight: "Transforma",
    subtitle: "Descubre productos que realzan tu belleza natural",
    circles: [
      { position: "top-16 left-4 sm:left-10", color: "bg-purple-400/20" },
      { position: "bottom-14 right-4 sm:right-10", color: "bg-pink-400/20" },
    ],
    gradient: "from-purple-300 via-pink-300 to-rose-200",
  },
  {
    id: 2,
    title: "Dulzura",
    highlight: "Artesanal",
    subtitle: "Postres hechos con amor para momentos especiales",
    circles: [
      { position: "top-14 right-4 sm:right-10", color: "bg-amber-300/20" },
      { position: "bottom-16 left-4 sm:left-10", color: "bg-pink-300/20" },
    ],
    gradient: "from-amber-300 via-rose-300 to-pink-200",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })

  useEffect(() => {
    const duration = currentSlide === 0 ? 10000 : 8000

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, duration)

    return () => clearTimeout(timeout)
  }, [currentSlide])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-[100vh] w-full overflow-y-hidden bg-gradient-to-br from-gray-950 to-gray-900"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } max-w-full`}
        >
          {/* Círculos decorativos */}
          {slide.circles.map((circle, i) => (
            <div
              key={i}
              className={`absolute ${circle.position} w-40 h-40 md:w-92 md:h-102 rounded-full ${circle.color} blur-3xl`}
            ></div>
          ))}

          <div className="relative z-10 w-full max-w-full text-center px-4 overflow-hidden">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 break-words">
              {slide.title}
            </h1>
            <div className="mb-6">
              <h2
                className={`text-5xl sm:text-6xl md:text-7xl font-bold font-pacifico text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient} break-words`}
              >
                {slide.highlight}
              </h2>
            </div>
            <p className="text-gray-400 text-md sm:text-lg md:text-xl max-w-full mx-auto px-4 break-words">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
