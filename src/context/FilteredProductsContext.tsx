"use client"

import { createContext, useContext } from "react"
import { useFilteredProducts } from "@/hooks/useFilteredProducts"

const FilteredProductsContext = createContext<ReturnType<typeof useFilteredProducts> | null>(null)

export const FilteredProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useFilteredProducts()
  return (
    <FilteredProductsContext.Provider value={value}>
      {children}
    </FilteredProductsContext.Provider>
  )
}

export const useFilteredProductsContext = () => {
  const context = useContext(FilteredProductsContext)
  if (!context) throw new Error("useFilteredProductsContext must be used within FilteredProductsProvider")
  return context
}