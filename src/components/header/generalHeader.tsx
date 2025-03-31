"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function GeneralHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }
  
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 py-6 bg-gradient-to-r from-rose-200 via-white to-pink-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-4 text-gray-600 hover:text-gray-900"
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Inicio</Link>
          <button onClick={() => scrollToSection("belleza")} className="text-md text-gray-600 hover:text-gray-900">
            Belleza
          </button>

          <button onClick={() => scrollToSection("dulces")} className="text-md text-gray-600 hover:text-gray-900">
            Bakery
          </button>

          {/* <button onClick={() => scrollToSection("nosotros")} className="text-sm text-gray-600 hover:text-gray-900">
            Nosotros
          </button>

          <button onClick={() => scrollToSection("contacto")} className="text-sm text-gray-600 hover:text-gray-900">
            Contacto
          </button> */}
        </nav>
        

        <div className="flex space-x-4">
          <button aria-label="Buscar" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button aria-label="Carrito" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>

       {/* Menú móvil desplegable */}
       <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      key="mobile-menu"
      ref={menuRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute left-0 top-full w-full bg-white shadow-md px-4 pt-4 pb-6 z-40"
    >
      <div className="flex flex-col space-y-4">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm text-gray-700 hover:text-gray-900 text-left"
        >
          Inicio
        </Link>

        <button
          onClick={() => scrollToSection("belleza")}
          className="text-sm text-gray-600 hover:text-gray-900 text-left"
        >
          Belleza
        </button>

        <button
          onClick={() => scrollToSection("dulces")}
          className="text-sm text-gray-600 hover:text-gray-900 text-left"
        >
          Bakery
        </button>

        {/* <button
          onClick={() => scrollToSection("nosotros")}
          className="text-sm text-gray-600 hover:text-gray-900 text-left"
        >
          Nosotros
        </button>

        <button
          onClick={() => scrollToSection("contacto")}
          className="text-sm text-gray-600 hover:text-gray-900 text-left"
        >
          Contacto
        </button> */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  )
}