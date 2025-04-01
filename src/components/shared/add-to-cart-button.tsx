"use client"

import { useCart } from "@/context/cart.context"
import { Product } from "@/models/products"
import { ShoppingCart } from "lucide-react"

type Props = {
  product: Product
  onClick?: (e: React.MouseEvent) => void
  size?: "normal" | "small"
}

export default function AddToCartButton({ product, onClick, size = "normal" }: Props) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClick?.(e)
    addItem(product)
  }

  const baseStyles = "rounded-full transition-colors duration-500 flex items-center gap-2"

  const sizeStyles =
    size === "small"
      ? "px-2 py-1 text-xs bg-white text-rose-400 hover:bg-rose-400 hover:text-white"
      : "px-3 py-2 text-sm bg-white text-rose-400 hover:bg-rose-400 hover:text-white"

  return (
    <button onClick={handleAddToCart} className={`${baseStyles} ${sizeStyles}`}>
      <ShoppingCart className={size === "small" ? "w-3 h-3" : "w-4 h-4"} />
      <span>{size === "small" ? "Agregar" : "Comprar"}</span>
    </button>
  )
}