"use client"

import BeautyCategorySelector from "./BeautyCategorySelector"
import PriceSlider from "./PriceSlider"

type Props = {
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
  minPrice: number
  maxPrice: number
  selectedPrice: number
  onPriceChange: (price: number) => void
}

export default function BeautySidebar({
  selectedCategory,
  onCategorySelect,
  minPrice,
  maxPrice,
  selectedPrice,
  onPriceChange
}: Props) {
  return (
    <aside className="w-full md:w-1/1 lg:w-1/5 self-start lg:sticky top-35">
      <div className="flex flex-col gap-3 bg-gray-50 p-1 rounded-md shadow-sm">
        <BeautyCategorySelector
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />

        <div className="w-full max-w-md mx-auto">
          <PriceSlider
            min={minPrice}
            max={maxPrice}
            value={selectedPrice}
            onChange={onPriceChange}
          />
        </div>
      </div>
    </aside>
  )
}