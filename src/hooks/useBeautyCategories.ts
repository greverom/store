import { useEffect, useState } from "react"
import { getBeautyCategories } from "@/services/beautyCategoriesService"

export const useBeautyCategories = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBeautyCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error en hook de categorías:", err))
      .finally(() => setLoading(false))
  }, [])

  return { categories, loading }
}