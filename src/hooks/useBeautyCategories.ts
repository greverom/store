
import { useEffect, useState } from "react"
import { staticBeautyCategories } from "@/models/dataBeautyCategory"

export const useBeautyCategories = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCategories(staticBeautyCategories)
      setLoading(false)
    }, 300) 
  }, [])

  return {
    categories,
    loading,
    selectedCategory,
    setSelectedCategory,
  }
}