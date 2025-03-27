import { useEffect, useState } from "react"
import { BeautyProduct } from "@/models/product-belleza"

export const usePriceFilter = (products: BeautyProduct[]) => {
  const [minPrice, setMinPrice] = useState(4)
  const [maxPrice, setMaxPrice] = useState(100)
  const [selectedPrice, setSelectedPrice] = useState(100)

  useEffect(() => {
    if (!products.length) return

    const prices = products
      .map((p) => parseFloat(p.price))
      .filter((price) => !isNaN(price) && price > 0)

    const min = Math.floor(Math.min(...prices))
    const max = Math.ceil(Math.max(...prices))

    setMinPrice(min)
    setMaxPrice(max)
    setSelectedPrice(max)
  }, [products])

  return {
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice,
  }
}