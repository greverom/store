"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"


// function ElegantShape({
//   className,
//   delay = 0,
//   width = 400,
//   height = 100,
//   rotate = 0,
//   gradient = "from-white/[0.08]",
// }: {
//   className?: string
//   delay?: number
//   width?: number
//   height?: number
//   rotate?: number
//   gradient?: string
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
//       animate={{ opacity: 1, y: 0, rotate }}
//       transition={{
//         duration: 2.4,
//         delay,
//         ease: [0.23, 0.86, 0.39, 0.96],
//         opacity: { duration: 1.2 },
//       }}
//       className={cn("absolute", className)}
//     >
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         style={{ width, height }}
//         className="relative"
//       >
//         <div
//           className={cn(
//             "absolute inset-0 rounded-full",
//             "bg-gradient-to-r to-transparent",
//             gradient,
//             "backdrop-blur-[2px] border-2 border-white/[0.1]",
//             "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
//             "after:absolute after:inset-0 after:rounded-full",
//             "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"
//           )}
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

export default function HeroGeometric({
  title1 = "Belleza y Dulzura",
  title2 = "Experiencia Cindy",
}: {
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const phrases = [
    {
      title: "Descubre Tu Belleza Natural",
      subtitle: "Potencia tu resplandor único con nuestros productos premium",
    },
    {
      title: (
        <>
          Elegancia en <br className="md:hidden" />
          Cada Detalle
        </>
      ),
      subtitle: "Realza tu belleza con fórmulas exclusivas y delicadas",
    },
    {
      title: (
        <>
          Transforma <br className="md:hidden" />
          Tu Rutina
        </>
      ),
      subtitle: "Lujo y cuidado en cada aplicación, resultados extraordinarios",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phrases.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <div className="relative w-full min-h-[calc(60vh-70px)] md:min-h-[calc(80vh-70px)] flex items-center justify-center overflow-hidden bg-white-100">

      {/* Formas flotantes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.5} width={300} height={90} rotate={12} gradient="from-purple-600/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={300} height={80} rotate={-15} gradient="from-rose-600/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={240} height={70} rotate={-8} gradient="from-fuchsia-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={190} height={50} rotate={20} gradient="from-pink-600/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={160} height={40} rotate={-25} gradient="from-violet-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div> */}

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-8xl mx-auto text-center">
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 md:mb-10 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-400">{title1}</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 font-[pacifico]" ,

                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Frase rotativa con altura fija */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <p className="text-sm sm:text-lg md:text-md text-white/600 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4 text-center h-[60px] flex items-center justify-center">
              {phrases[currentSlide].subtitle}
            </p>
          </motion.div>
        </div>
      </div>


    </div>
  )
}