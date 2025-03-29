"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function IntroSection() {
  const textRef = useRef(null)
  const imagesRef = useRef(null)
  const isTextInView = useInView(textRef, { amount: 0.3, once: false })
  const areImagesInView = useInView(imagesRef, { amount: 0.3 })

  return (
<section className="w-full md:py-25 bg-gray-900 text-white overflow-hidden">
      <div className="mx-auto px-2 pb-10 w-full max-w-[90%] sm:max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-12 items-center">
          {/* Texto */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left self-start pt-15"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 text-transparent bg-clip-text">Sobre mí</h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed"
                style={{ textShadow: '0 0 9px rgba(255, 255, 255, .9)' }}>
              A través de mis creaciones, busco transmitir la importancia del auto cuidado y los pequeños placeres que
              hacen especial cada día, ya sea a través de un tratamiento de belleza o un delicioso postre artesanal.
            </p>
          </motion.div>

          {/* Imágenes */}
          <motion.div
            ref={imagesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={areImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex flex-row justify-center md:block gap-7 sm:gap-10 mt-12 md:mt-20"
          >
            {/* Imagen cosméticos con contorno rosa difuso */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={areImagesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[160px] h-[120px] md:w-[275px] md:h-[180px] relative ml-auto z-10 -translate-y-12"
              >
                {/* Difuminado de fondo con gradiente */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute -inset-10 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500" />
                </div>

                <div className="relative w-full h-full rounded-4xl md:rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/fondo belleza.jpg"
                    alt="Marca de cosméticos"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-content rounded-4xl md:rounded-full opacity-75 md:opacity-80"
                    priority
                  />
                </div>
              </motion.div>

            {/* Imagen repostería con contorno pastel */}
            <div className="w-[160px] h-[120px] md:w-[270px] md:h-[180px] relative mr-auto z-10 lg:translate-x-5">
              
              {/* Difuminado de fondo con gradiente pastel */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute -inset-10 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-amber-300 via-rose-200 to-yellow-100" />
              </div>

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/istockphoto-1339241159-612x612.jpg"
                  alt="Marca de repostería"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-content rounded-3xl opacity-75 md:opacity-80"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}