"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"

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

export default function CosmeticsHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const generatedBubbles: Bubble[] = []
    for (let i = 0; i < 25; i++) {
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

  return (
    <div
      ref={ref}
      className="relative min-h-[75vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-r from-pink-50/50 via-rose-50/40 to-fuchsia-50/30 flex items-center justify-center"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full backdrop-blur-sm animate-float ${bubble.colorClass}`}
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
      <div className="relative z-10 md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 mb-6 transition-all duration-1000 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Descubre tu <br className="block md:hidden" />
          Belleza Natural
        </h1>
        <p
          className={`text-sm md:text-xl text-gray-600 max-w-xs md:max-w-2xl mx-auto mb-20 transition-all duration-1000 delay-300 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          En Cindy Store, creemos en resaltar tu belleza natural con cosméticos de alta calidad que cuidan tu piel y el planeta.
        </p>
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/belleza/catalogo"
            className="inline-block bg-gray-800 text-white font-medium rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Comprar ahora
          </Link>
        </div>
      </div>
    </div>
  )
}