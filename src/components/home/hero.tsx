"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "Belleza que transforma",
    subtitle: "Descubre productos que realzan tu belleza natural",
    bgClass: "bg-gradient-to-r from-pink-100 to-purple-100",
  },
  {
    id: 2,
    title: "Dulzura artesanal",
    subtitle: "Postres hechos con amor para momentos especiales",
    bgClass: "bg-gradient-to-r from-amber-50 to-rose-100",
  },
  {
    id: 3,
    title: "Experiencia Cindy",
    subtitle: "Donde la belleza y el sabor se encuentran",
    bgClass: "bg-gradient-to-r from-purple-50 to-pink-50",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[100vh] w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${slide.bgClass}`}
        >
          <div
            className={`transform transition-transform duration-1000 ${
              index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-4 text-center font-serif text-5xl font-light tracking-wide text-gray-800 md:text-6xl">
              {slide.title}
            </h1>
            <p className="text-center font-light text-gray-600 md:text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-gray-800 w-4" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}