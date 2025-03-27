"use client"

import { FilteredProductsProvider } from "@/context/FilteredProductsContext"
import BeautyCatalogLayout from "@/components/belleza/BeautyCatalogLayout"

export default function BellezaPage() {
  return (
    <FilteredProductsProvider>
      <div className="min-h-screen bg-white">
        <BeautyCatalogLayout />
      </div>
    </FilteredProductsProvider>
  )
}