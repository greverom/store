"use client"

import  ProductCard from "@/components/product/productCard"
import{ useFilteredProducts } from "@/hooks/useFilteredProducts"
import  Pagination from "../ui/pagination"
import  BeautySidebar from "./BeautySidebar"

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
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Sidebar */}
          <BeautySidebar
            selectedCategory={selectedCategory}
            onCategorySelect={(cat) => {
              setSelectedCategory(cat)
              setPage(1)
            }}
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedPrice={selectedPrice}
            onPriceChange={setSelectedPrice}
          />

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

                {selectedCategory === null && totalPages > 1 && (
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                  />
                )}

                {/* Paginación por categoría */}
                {selectedCategory && totalCategoryPages > 1 && (
                  <Pagination
                    currentPage={categoryPage}
                    totalPages={totalCategoryPages}
                    onPageChange={setCategoryPage}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}