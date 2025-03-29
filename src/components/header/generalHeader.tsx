"use client"

import Link from "next/link"

export default function GeneralHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 py-6 bg-white">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
      <div className="text-2xl font-light tracking-wider text-gray-800">CINDY</div>
      <nav className="hidden space-x-8 md:flex">
        <Link href="/" className="text-md text-gray-600 hover:text-gray-900">Inicio</Link>
        <Link href="/belleza" className="text-md text-gray-600 hover:text-gray-900">Belleza</Link>
        <Link href="/dulces" className="text-md text-gray-600 hover:text-gray-900">Bakery</Link>
        <Link href="/nosotros" className="text-md text-gray-600 hover:text-gray-900">Nosotros</Link>
        <Link href="/contacto" className="text-md text-gray-600 hover:text-gray-900">Contacto</Link>
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
    </header>
  )
}