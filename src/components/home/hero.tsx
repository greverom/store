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
      { position: "top-14 left-4 sm:left-10", color: "bg-purple-200/10" },
      { position: "bottom-5 right-4 sm:right-10", color: "bg-pink-300/10" },
    ],
    gradient: "from-purple-300 via-pink-300 to-rose-200",
  },
  {
    id: 2,
    title: "Dulzura",
    highlight: "Artesanal",
    subtitle: "Postres hechos con amor para momentos especiales",
    circles: [
      { position: "top-15 right-4 sm:right-10", color: "bg-amber-200/10" },
      { position: "bottom-4 left-4 sm:left-10", color: "bg-pink-300/10" },
    ],
    gradient: "from-amber-300 via-rose-300 to-pink-200",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once: true })

  useEffect(() => {
    const duration = 10000;

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
      className="relative backdrop-blur-3xl bg-gray-300/10  min-h-[100vh] w-full rounded-none"
    >
      {slides.map((slide, index) => (
        <div
        key={slide.id}
        className={`absolute inset-0 flex flex-col items-center justify-center px-2 md:px-8 transition-opacity duration-1800 ease-in-out ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        } max-w-full`}
      >
        {/* Círculos decorativos */}
        {slide.circles.map((circle, i) => (
          <div
            key={i}
            className={`absolute ${circle.position} w-60 h-70 md:w-202 md:h-252 rounded-full ${circle.color} blur-3xl`}
          ></div>
        ))}
      
        <div className="relative z-10 w-full max-w-full text-center px-4 overflow-hidden -translate-y-30 md:-translate-y-5 transition-all duration-1800 ease-in-out">
          <h2 className="text-gray-600 font-[dancing] text-center text-2xl md:text-4xl tracking-tight mb-2 break-words">
            {slide.title}
          </h2>
          <div className="mb-2">
            <h1
              className={`text-5xl md:text-8xl font-[poppins] text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient} break-words text-center`}
            >
              {slide.highlight}
            </h1>
          </div>
          <p className="text-gray-500 text-sm md:text-xl max-w-full mx-auto px-2 break-words text-center">
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
            index === currentSlide ? "bg-rose-500 w-4" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
        ))}
      </div>
    </motion.section>
  )
}
