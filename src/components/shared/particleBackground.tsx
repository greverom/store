"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

interface ParticleBackgroundProps {
  height?: number
}

export default function ParticleBackground({ height = 60 }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth)
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

    canvas.width = width
    canvas.height = height

    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((width * height) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1
      const x = Math.random() * width
      const y = Math.random() * height
      const speedX = (Math.random() - 0.5) * 0.5
      const speedY = (Math.random() - 0.5) * 0.5
      particlesArray.push({ x, y, size, speedX, speedY })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = "#dee2e6"
      ctx.fillRect(0, 0, width, height)

      particlesArray.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(219, 112, 147, 0.1)"
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > width || particle.x < 0) particle.speedX *= -1
        if (particle.y > height || particle.y < 0) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [width, height])

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden -z-10" style={{ height }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}