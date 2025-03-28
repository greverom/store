import { useEffect, useState } from "react"
import { BeautyProduct } from "@/models/product-belleza"
import { getBeautyProductById } from "@/services/beautyProductService"

export function useBeautyProduct(id: string) {
  const [product, setProduct] = useState<BeautyProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      setIsLoading(true)
      try {
        const data = await getBeautyProductById(id)
        if (!data) throw new Error("Producto no encontrado")
        setProduct(data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError("No se pudo cargar el producto")
        setProduct(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, isLoading, error }
}