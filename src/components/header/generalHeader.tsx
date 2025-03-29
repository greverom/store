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
  
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 py-6 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="text-2xl font-light tracking-wider text-gray-800">CINDY</div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900"
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Inicio</Link>
          <Link href="/belleza" className="text-sm text-gray-600 hover:text-gray-900">Belleza</Link>
          <Link href="/dulces" className="text-sm text-gray-600 hover:text-gray-900">Bakery</Link>
          <Link href="/nosotros" className="text-sm text-gray-600 hover:text-gray-900">Nosotros</Link>
          <Link href="/contacto" className="text-sm text-gray-600 hover:text-gray-900">Contacto</Link>
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
            <div className="space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-700 hover:text-gray-900">Inicio</Link>
              <Link href="/belleza" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-700 hover:text-gray-900">Belleza</Link>
              <Link href="/dulces" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-700 hover:text-gray-900">Bakery</Link>
              <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-700 hover:text-gray-900">Nosotros</Link>
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-700 hover:text-gray-900">Contacto</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}