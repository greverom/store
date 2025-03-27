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
    <aside className="lg:w-1/5 self-start sticky top-35">
      <BeautyCategorySelector
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />

      <PriceSlider
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={onPriceChange}
      />
    </aside>
  )
}