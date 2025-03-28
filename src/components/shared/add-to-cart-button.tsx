"use client"

import { useCart } from "@/context/cart.context"
import { Product } from "@/models/products"
import { ShoppingCart } from "lucide-react"

type Props = {
  product: Product
  onClick?: (e: React.MouseEvent) => void
}

export default function AddToCartButton({ product, onClick }: Props) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation() 
    if (onClick) onClick(e)
    addItem(product)
  }

  return (
    <button
      onClick={handleAddToCart}
     className="px-5 py-2.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors duration-300 shadow-md flex items-center gap-2"
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Comprar</span>
    </button>
  )
}