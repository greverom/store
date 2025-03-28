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
     className="px-3 py-2 rounded-full bg-white text-rose-400 hover:border-current hover:bg-rose-400 hover:text-white transition-colors duration-500 flex items-center gap-2"
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Comprar</span>
    </button>
  )
}