"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart.context"
import CartModal from "./cart-modal"

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-gray-800 hover:text-pink-400 transition-colors duration-300"
        aria-label="Abrir carrito"
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