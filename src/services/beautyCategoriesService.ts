import { BeautyProduct } from "@/models/product-belleza"

export const getBeautyCategories = async (): Promise<string[]> => {
  try {
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")

    if (!res.ok) throw new Error("No se pudieron obtener los productos")

    const data: BeautyProduct[] = await res.json()

    const categories = data
      .map((product) => product.category)
      .filter((type): type is string => !!type)

    const uniqueCategories = [...new Set(categories)]

    return uniqueCategories
  } catch (error) {
    console.error("Error al obtener categorías:", error)
    return []
  }
}