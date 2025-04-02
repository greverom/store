import { BeautyProduct } from "@/models/product-belleza"
import { getCache, setCache } from "@/utils/cache"

// export const getBeautyProducts = async (
//   page: number = 1,
//   limit: number = 44
// ): Promise<BeautyProduct[]> => {
//   const cacheKey = `beauty-products-page-${page}-limit-${limit}`
//   const cached = getCache<BeautyProduct[]>(cacheKey)
//   if (cached) return cached

//   try {
//     const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
//     if (!res.ok) throw new Error("No se pudieron obtener los productos")
//     const data: BeautyProduct[] = await res.json()

//     const filtered = data.filter(
//       (product) =>
//         product.image_link &&
//         parseFloat(product.price) > 0 &&
//         (
//           product.image_link.startsWith("https://cdn.shopify.com") ||
//           product.image_link.startsWith("https://www.nyxcosmetics.com") ||
//           product.image_link.startsWith("https://s3.amazonaws.com")
//         )
//     )

//     const startIndex = (page - 1) * limit
//     const endIndex = startIndex + limit
//     const result = filtered.slice(startIndex, endIndex)

//     setCache(cacheKey, result, 1000 * 60 * 10) 

//     return result
//   } catch (error) {
//     console.error("Error al obtener productos:", error)
//     return []
//   }
// }


export const getAllBeautyProducts = async (): Promise<BeautyProduct[]> => {
  const cacheKey = "all-beauty-products"
  const cached = getCache<BeautyProduct[]>(cacheKey)
  if (cached) return cached

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

    setCache(cacheKey, filtered, 1000 * 60 * 10) 
    return filtered
  } catch (error) {
    console.error("Error al obtener productos:", error)
    return []
  }
}

export async function getBeautyProductById(id: string): Promise<BeautyProduct | null> {
  const cacheKey = `beauty-product-${id}`
  const cached = getCache<BeautyProduct>(cacheKey)
  if (cached) return cached

  try {
    const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    if (!res.ok) return null

    const data = await res.json()
    setCache(cacheKey, data, 1000 * 60 * 10) 

    return data
  } catch (error) {
    console.error("Error fetching product by ID", error)
    return null
  }
}


let cachedHighlights: BeautyProduct[] | null = null

export const getCachedBeautyHighlights = async (): Promise<BeautyProduct[]> => {
  if (cachedHighlights) return cachedHighlights

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

    cachedHighlights = filtered.slice(10, 18)
    return cachedHighlights
  } catch (error) {
    console.error("Error al obtener productos destacados:", error)
    return []
  }
}