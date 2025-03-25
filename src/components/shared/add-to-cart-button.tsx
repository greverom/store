"use client"

import { useCart } from "@/context/cart.context"
import { Product } from "@/models/products"
import { ShoppingCart } from "lucide-react"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    console.log("Agregando al carrito...")
    addItem(product) 
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