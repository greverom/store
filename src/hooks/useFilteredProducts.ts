import { useEffect, useState } from "react"
import { BeautyProduct } from "@/models/product-belleza"
import { getAllBeautyProducts } from "@/services/beautyProductService"
import { usePriceFilter } from "@/hooks/usePriceFilter"

export const useFilteredProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [allProducts, setAllProducts] = useState<BeautyProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<BeautyProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [categoryPage, setCategoryPage] = useState(1)

  const itemsPerPage = 20
  const categoryItemsPerPage = 8

  const {
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice
  } = usePriceFilter(allProducts)

  // Cargar todos los productos al inicio
  useEffect(() => {
    setIsLoading(true)
    getAllBeautyProducts()
      .then((data) => {
        setAllProducts(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err)
        setIsLoading(false)
      })
  }, [])

  // Aplicar filtros por categoría y precio
  useEffect(() => {
    let filtered = allProducts

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    filtered = filtered.filter((p) => parseFloat(p.price) <= selectedPrice)

    setFilteredProducts(filtered)
    setPage(1)
    setCategoryPage(1)
  }, [selectedCategory, allProducts, selectedPrice])

  const totalPages = Math.ceil(
    allProducts.filter((p) => parseFloat(p.price) <= selectedPrice).length / itemsPerPage
  )

  const totalCategoryPages = Math.ceil(
    filteredProducts.length / categoryItemsPerPage
  )

  const productsToRender = selectedCategory
    ? filteredProducts.slice(
        (categoryPage - 1) * categoryItemsPerPage,
        categoryPage * categoryItemsPerPage
      )
    : allProducts
        .filter((p) => parseFloat(p.price) <= selectedPrice)
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return {
    selectedCategory,
    setSelectedCategory,
    isLoading,
    productsToRender,
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice,
    page,
    setPage,
    totalPages,
    categoryPage,
    setCategoryPage,
    totalCategoryPages
  }
}
