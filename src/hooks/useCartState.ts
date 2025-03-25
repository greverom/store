"use client"

import { useState } from "react"
import { Product, CartItem } from "@/models/products"

export function useCartState() {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id)

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, cantidad: 1 }]
      }
    })
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeItem(id)
    } else {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, cantidad } : item
        )
      )
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0)
  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  }
}