import { BeautyProduct } from "@/models/product-belleza"

export const getBeautyProducts = async (
  page: number = 1,
  limit: number = 44
): Promise<BeautyProduct[]> => {
  try {
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")

    if (!res.ok) throw new Error("No se pudieron obtener los productos")

    const data: BeautyProduct[] = await res.json()

    const filtered = data.filter(
      (product) =>
        product.image_link &&
        parseFloat(product.price) > 0 &&
        (
          product.image_link.startsWith("https://cdn.shopify.com") ||
          product.image_link.startsWith("https://www.nyxcosmetics.com") ||
          product.image_link.startsWith("https://s3.amazonaws.com")
        )
    )

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return filtered.slice(startIndex, endIndex)
  } catch (error) {
    console.error("Error al obtener productos:", error)
    return []
  }
}


export const getAllBeautyProducts = async (): Promise<BeautyProduct[]> => {
  try {
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")

    if (!res.ok) throw new Error("No se pudieron obtener los productos")

    const data: BeautyProduct[] = await res.json()

    const filtered = data.filter(
      (product) =>
        product.image_link &&
        parseFloat(product.price) > 0 &&
        (
          product.image_link.startsWith("https://cdn.shopify.com") ||
          product.image_link.startsWith("https://www.nyxcosmetics.com") ||
          product.image_link.startsWith("https://s3.amazonaws.com")
        )
    )

    return filtered
  } catch (error) {
    console.error("Error al obtener productos:", error)
    return []
  }
}

export async function getBeautyProductById(id: string) {
  try {
    const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error("Error fetching product by ID", error)
    return null
  }
}