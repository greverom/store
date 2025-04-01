"use client"

import { useEffect, useRef, useState } from "react"

export default function ExperienciaFranja() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: 100 }) // Altura de franja
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }[] = []

    const numParticles = Math.min(50, Math.floor(dimensions.width / 30))

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 2 + 1
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const speedX = (Math.random() - 0.5) * 0.3
      const speedY = (Math.random() - 0.5) * 0.3

      particles.push({ x, y, size, speedX, speedY })
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(219, 112, 147, 0.6)" // rose soft
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > dimensions.width) p.speedX *= -1
        if (p.y < 0 || p.y > dimensions.height) p.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions])

  return (
    <div className="relative w-full h-[100px] overflow-hidden flex items-center justify-center">
      {/* Canvas de fondo animado */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Círculos decorativos opcionales */}
      <div className="absolute top-[-20px] right-20 w-32 h-32 rounded-full bg-blue-400/20 blur-2xl"></div>
      <div className="absolute bottom-[-20px] left-20 w-32 h-32 rounded-full bg-pink-400/20 blur-2xl"></div>

      {/* Texto en primer plano */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="mr-2">Experiencia</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300 font-[var(--font-pacifico)]">
            Cindy
          </span>
        </h1>
      </div>
    </div>
  )
}