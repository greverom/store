'use client'

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart.context"
import CartModal from "./cart-modal"

type Props = {
  scrollProgress?: number
}

export default function CartButton({ scrollProgress = 0 }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  const interpolateColor = (progress: number) => {
    const clamped = Math.min(Math.max(progress, 0), 1)
    const value = Math.round(2200 * clamped)
    return `rgb(${value}, ${value}, ${value})` 
  }

  const iconColor = isMobile ? interpolateColor(scrollProgress) : "rgb(31, 41, 55)" 

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 transition-colors duration-300"
        aria-label="Abrir carrito"
        style={{ color: iconColor }}
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}