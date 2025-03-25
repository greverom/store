"use client"

import {
  createContext,
  useContext,
  type ReactNode
} from "react"
import { useCartState } from "@/hooks/useCartState"
import { CartItem } from "@/models/products"

export type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "cantidad"> & { cantidad?: number }) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, cantidad: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  } = useCartState()

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
