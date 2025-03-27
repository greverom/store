"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product/productCard"
import BeautyCategorySelector from "@/components/belleza/BeautyCategorySelector"
import PriceSlider from "@/components/belleza/PriceSlider"
import { BeautyProduct } from "@/models/product-belleza"
import { getAllBeautyProducts } from "@/services/beautyProductService"
import { usePriceFilter } from "@/hooks/usePriceFilter"

export default function BellezaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [allProducts, setAllProducts] = useState<BeautyProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<BeautyProduct[]>([])
  const [page, setPage] = useState(1)
  const [categoryPage, setCategoryPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const {
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice
  } = usePriceFilter(allProducts)

  const itemsPerPage = 20
  const categoryItemsPerPage = 8

  // Cargar todos los productos
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

  // Filtrado por categoría y precio
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
    allProducts.filter(p => parseFloat(p.price) <= selectedPrice).length / itemsPerPage
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
        .filter(p => parseFloat(p.price) <= selectedPrice)
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/5">
            <BeautyCategorySelector
              selectedCategory={selectedCategory}
              onCategorySelect={(cat) => {
                setSelectedCategory(cat)
                setPage(1)
              }}
            />

            {/* Slider de precio */}
            <PriceSlider
              min={minPrice}
              max={maxPrice}
              value={selectedPrice}
              onChange={setSelectedPrice}
            />
          </aside>

          {/* Productos */}
          <div className="lg:w-3/3 px-0 md:px-5 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Productos de Belleza</h2>

            {isLoading ? (
              <p className="text-center py-10">Cargando productos...</p>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {productsToRender.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Paginación general */}
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

                {/* Paginación por categoría */}
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
        </div>
      </div>
    </section>
  )
}