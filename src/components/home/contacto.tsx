"use client"

import { useState, useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import type React from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mensaje enviado. Gracias por contactarnos!")
    setFormData({ name: "", email: "", message: "" })
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="contacto" ref={ref} className="bg-gray-100 py-22 md:py-24 min-h-[100vh]">
      <div className="container mx-auto px-4">
        {/* Título y subtítulo */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-2">
            Contáctanos
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje.
          </motion.p>
        </motion.div>

        {/* Formulario + Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 w-[100%] md:w-[80%] lg:w-[90%] mx-auto"
        >
          {/* Formulario */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          {/* Información */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Información de contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-pink-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Dirección</h4>
                  <p className="text-gray-500">
                    Av. Cosmética 123
                    <br />
                    Colonia Belleza, CP 12345
                    <br />
                    Ciudad de México, México
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-pink-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                  <p className="text-gray-500">+52 (55) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-pink-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-500">contacto@cosmeticastore.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-pink-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Horarios de atención</h4>
                  <p className="text-gray-500">
                    Lunes - Viernes: 10:00 AM - 8:00 PM
                    <br />
                    Sábado: 10:00 AM - 6:00 PM
                    <br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h4 variants={itemVariants} className="font-medium text-gray-800 mb-3">
            Síguenos
          </motion.h4>
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <a href="#" className="text-pink-500 hover:text-pink-600 transition" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.3.4 2.5.1 1.3.1 
                1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.4 1-.9 1.5s-.9.7-1.5.9c-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 
                0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.3-.4-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-2 
                .4-2.5.2-.6.4-1 .9-1.5s.9-.7 1.5-.9c.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-1.2C8.8 1 8.4 1 7.2 1.1c-1.3.1-2.2.3-2.9.6-.8.3-1.4.7-2 
                1.3-.6.6-1 1.2-1.3 2-.3.7-.5 1.6-.6 2.9C1 8.4 1 8.8 1 12s0 3.6.1 4.9c.1 1.3.3 2.2.6 2.9.3.8.7 1.4 1.3 2 .6.6 1.2 1 2 1.3.7.3 1.6.5 2.9.6C8.4 
                23 8.8 23 12 23s3.6 0 4.9-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.4-.7 2-1.3.6-.6 1-1.2 1.3-2 
                .3-.7.5-1.6.6-2.9.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-1.4-1.3-2-.6-.6-1.2-1-2-1.3-.7-.3-1.6-.5-2.9-.6C15.6 1 
                15.2 1 12 1zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-pink-500 hover:text-pink-600 transition" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 
                1.49-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-pink-500 hover:text-pink-600 transition" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.25c7.55 0 11.67-6.25 11.67-11.67v-.53A8.35 8.35 0 0 0 22 5.92a8.19 8.19 0 0 1-2.36.65A4.1 4.1 0 0 0 21.45 4a8.23 
                8.23 0 0 1-2.6.99A4.1 4.1 0 0 0 16 3a4.11 4.11 0 0 0-4.1 4.1c0 .32.04.63.1.93A11.66 11.66 0 0 1 3.2 4.78a4.07 4.07 0 0 0-.55 2.07A4.1 
                4.1 0 0 0 4.1 10.8a4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.01 4.09 4.09 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 
                2 18.41a11.62 11.62 0 0 0 6.29 1.84" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}