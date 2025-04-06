"use client"

import { useEffect, useState } from "react"

export default function PromoCarousel() {
  const phrases = [
    "¡2x1 en todos nuestros rollos de canela solo por hoy!",
    "Aprovecha nuestras promociones en Dulce Canela 🍰",
    "Envíos gratis a partir de $12 🛵",
  ]

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute bg-red-100 top-0 left-0 w-full h-full flex items-center overflow-hidden">
      <style jsx global>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-190%);
          }
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-[scrollMarquee_18s_linear_infinite]"
          style={{ minWidth: "150%" }}
        >
          {[...phrases, ...phrases].map((text, idx) => (
            <span
              key={idx}
              className="mx-8 text-sm sm:text-base md:text-lg font-medium blur-[0.2px]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}