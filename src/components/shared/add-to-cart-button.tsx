"use client"

import { useCart } from "@/context/cart.context"
import { Product } from "@/models/products"
import { ShoppingCart } from "lucide-react"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      ...product,
      cantidad: 1,
    })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 flex items-center gap-2"
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Comprar</span>
    </button>
  )
}