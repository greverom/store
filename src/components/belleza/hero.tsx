'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

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
  const [isVisible, setIsVisible] = useState(false)
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    setIsVisible(true)

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
          ? "bg-pink-100/20"
          : "bg-purple-300/30",
      })
    }

    setBubbles(generatedBubbles)
  }, [])

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center">
      {/* Animated bubbles background */}
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

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Discover Your Natural Beauty
        </h1>
        <p
          className={`text-lg md:text-xl text-purple-800/80 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          At Cindy Store, we believe in enhancing your natural beauty with premium cosmetics that are kind to your skin
          and the planet.
        </p>
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/belleza/catalogo"
            className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}