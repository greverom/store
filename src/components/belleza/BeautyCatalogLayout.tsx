"use client"

import BeautySidebar from "@/components/belleza/BeautySidebar"
import BeautyProductView from "@/components/belleza/BeautyProductCatalogoView"
import { useFilteredProductsContext } from "@/context/FilteredProductsContext"

export default function BeautyCatalogLayout() {
  const {
    selectedCategory,
    setSelectedCategory,
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice
  } = useFilteredProductsContext()

  return (
    <div className="max-w-8xl mx-auto px-5 lg:px-8 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <BeautySidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
        />

        {/* Catálogo */}
        <div className="mt-7 lg:mt-0">
          <BeautyProductView />
        </div>
      </div>
    </div>
  )
}