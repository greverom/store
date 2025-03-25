"use client"

import { CartItem } from "@/models/products"
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from "react"

type CartContextType = {
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
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    setMounted(true)
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (e) {
        console.error("Error parsing cart data", e)
      }
    }
  }, [])

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = (newItem: Omit<CartItem, "cantidad"> & { cantidad?: number }) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex].cantidad += newItem.cantidad || 1
        return updatedItems
      } else {
        return [...currentItems, { ...newItem, cantidad: newItem.cantidad || 1 }]
      }
    })
  }

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeItem(id)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.cantidad, 0)
  const subtotal = items.reduce((total, item) => total + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal
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