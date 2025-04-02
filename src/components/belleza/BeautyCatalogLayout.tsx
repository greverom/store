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
    <div className="max-w-8xl mx-auto pt-5 md:pt-10 px-1 md:px-8 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
        
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
          <BeautyProductView />
      </div>
    </div>
  )
}