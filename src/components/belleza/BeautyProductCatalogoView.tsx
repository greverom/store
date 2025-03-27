"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product/productCard"
import BeautyCategorySelector from "@/components/belleza/BeautyCategorySelector"
import { BeautyProduct } from "@/models/product-belleza"
import { getAllBeautyProducts } from "@/services/beautyProductService"

export default function BellezaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [allProducts, setAllProducts] = useState<BeautyProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<BeautyProduct[]>([])
  const [page, setPage] = useState(1)
  const [categoryPage, setCategoryPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const itemsPerPage = 40
  const categoryItemsPerPage = 10

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

  useEffect(() => {
    if (selectedCategory) {
      const filtered = allProducts.filter((p) => p.category === selectedCategory)
      setFilteredProducts(filtered)
      setCategoryPage(1) 
    }
  }, [selectedCategory, allProducts])

  const totalPages = Math.ceil(allProducts.length / itemsPerPage)
  const totalCategoryPages = Math.ceil(filteredProducts.length / categoryItemsPerPage)

  const productsToRender = selectedCategory
    ? filteredProducts.slice(
        (categoryPage - 1) * categoryItemsPerPage,
        categoryPage * categoryItemsPerPage
      )
    : allProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Productos de Belleza</h2>

        <BeautyCategorySelector
          selectedCategory={selectedCategory}
          onCategorySelect={(cat) => {
            setSelectedCategory(cat)
            setPage(1)
          }}
        />

        {isLoading ? (
          <p className="text-center py-10">Cargando productos...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productsToRender.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>


            {!selectedCategory && totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page <= 1}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-sm font-medium px-2">
                  Página {page} de {totalPages}
                </span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page >= totalPages}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            )}


            {selectedCategory && totalCategoryPages > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() => setCategoryPage(categoryPage - 1)}
                  disabled={categoryPage <= 1}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-sm font-medium px-2">
                  Página {categoryPage} de {totalCategoryPages}
                </span>
                <button
                  onClick={() => setCategoryPage(categoryPage + 1)}
                  disabled={categoryPage >= totalCategoryPages}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}