"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function IntroSection() {
  const textRef = useRef(null)
  const imagesRef = useRef(null)
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 })
  const areImagesInView = useInView(imagesRef, { once: true, amount: 0.3 })

  return (
    <section className="w-full py-12 md:py-25 bg-white">
      <div className="mx-auto px-4 w-full max-w-[90%] sm:max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -20 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left self-start pt-20"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 text-gray-800">Sobre mí</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              A través de mis creaciones, busco transmitir la importancia del auto cuidado y los pequeños placeres que
              hacen especial cada día, ya sea a través de un tratamiento de belleza o un delicioso postre artesanal.
            </p>
          </motion.div>

          {/* Right Column - Brand Images */}
          <motion.div
            ref={imagesRef}
            initial={{ opacity: 0, x: 20 }}
            animate={areImagesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex flex-row justify-center md:block gap-3 sm:gap-10 mt-12 md:mt-0"
          >
            {/* Cosmetics brand image (top right) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={areImagesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[50%] h-[160px] md:w-[60%] md:h-[220px] relative rounded-4xl md:rounded-full overflow-hidden ml-auto shadow-lg -translate-x-0 md:-translate-x-4 lg:-translate-x-10"
            >
              <Image
                src="/images/fondo belleza.jpg"
                alt="Marca de cosméticos"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-content"
                priority
              />
            </motion.div>

            {/* Pastry brand image (bottom left) */}
            <div className="w-[50%] h-[160px] md:w-[60%] md:h-[220px] relative rounded-3xl overflow-hidden mr-auto shadow-lg -translate-x-0 md:-translate-x-2 lg:-translate-x-5 -translate-y-12">
              <Image
                src="/images/istockphoto-1339241159-612x612.jpg"
                alt="Marca de repostería"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-content"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

