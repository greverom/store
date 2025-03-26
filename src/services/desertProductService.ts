import { DessertProduct } from "@/models/product-dulces"

export const getDessertProducts = async (): Promise<DessertProduct[]> => {
  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")

    if (!res.ok) throw new Error("No se pudieron obtener los productos de postres")

    const data = await res.json()
    return data.meals as DessertProduct[]
  } catch (error) {
    console.error("Error al obtener productos de postres:", error)
    return []
  }
}