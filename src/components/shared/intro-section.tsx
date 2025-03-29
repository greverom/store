"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="-mt-[78px] pt-10 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Nuestra Historia
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            Somos una empresa dedicada a ofrecer productos de la más alta calidad. Nuestra pasión es brindar
            experiencias excepcionales a través de productos de belleza innovadores y dulces artesanales elaborados con
            ingredientes seleccionados.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 bg-gray-50 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3">Productos de Belleza</h3>
              <p className="text-gray-600">
                Formulados con ingredientes naturales y tecnología avanzada para realzar tu belleza natural.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3">Dulces Artesanales</h3>
              <p className="text-gray-600">
                Elaborados con recetas tradicionales y un toque de innovación para deleitar tu paladar.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}