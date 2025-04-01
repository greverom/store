"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((dimensions.width * dimensions.height) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const speedX = (Math.random() - 0.5) * 0.5
      const speedY = (Math.random() - 0.5) * 0.5

      particlesArray.push({ x, y, size, speedX, speedY })
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Optional background fill (remove if you want it transparent)
      ctx.fillStyle = "#f8f9fa"
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      particlesArray.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(219, 112, 147, 0.8)" 
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > dimensions.width || particle.x < 0) particle.speedX *= -1
        if (particle.y > dimensions.height || particle.y < 0) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions])

  return (
    <div className="fixed inset-0 -z-10 w-full h-screen">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}