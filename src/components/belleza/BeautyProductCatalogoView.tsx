"use client"

import ProductCard from "@/components/product/productCard"
import BeautyCategorySelector from "@/components/belleza/BeautyCategorySelector"
import PriceSlider from "@/components/belleza/PriceSlider"
import { useFilteredProducts } from "@/hooks/useFilteredProducts"

export default function BellezaPage() {
  const {
    productsToRender,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    maxPrice,
    selectedPrice,
    setSelectedPrice,
    page,
    setPage,
    categoryPage,
    setCategoryPage,
    totalPages,
    totalCategoryPages,
  } = useFilteredProducts()

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

                {/* Paginación */}
                {selectedCategory === null && totalPages > 1 && (
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
        </div>
      </div>
    </section>
  )
}