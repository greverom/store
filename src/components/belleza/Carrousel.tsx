"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const phrases = [
    {
      title: "Descubre Tu Belleza Natural",
      subtitle: "Potencia tu resplandor único con nuestros productos premium",
    },
    {
      title: "Elegancia en Cada Detalle",
      subtitle: "Realza tu belleza con fórmulas exclusivas y delicadas",
    },
    {
      title: "Transforma Tu Rutina",
      subtitle: "Lujo y cuidado en cada aplicación, resultados extraordinarios",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phrases.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <section
      ref={ref}
      className={`w-full bg-gradient-to-r from-pink-50 via-rose-100 to-fuchsia-100 py-16 md:py-24 transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
          {phrases.map((phrase, index) => (
            <div
              key={index}
              className={`absolute w-full text-center transition-all duration-1000 ease-in-out ${
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h1 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                {phrase.title}
              </h1>
              <p className="mx-auto max-w-2xl text-sm md:text-xl text-rose-400 font-light italic">{phrase.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {phrases.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-pink-500" : "w-2 bg-pink-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}