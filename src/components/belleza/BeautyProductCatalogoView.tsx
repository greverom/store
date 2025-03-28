"use client"

import ProductCard from "@/components/product/productCard"
import Pagination from "../ui/pagination"
import { useFilteredProductsContext } from "@/context/FilteredProductsContext"

export default function BeautyProductCatalogoView() {
  const {
    productsToRender,
    isLoading,
    selectedCategory,
    page,
    setPage,
    categoryPage,
    setCategoryPage,
    totalPages,
    totalCategoryPages,
  } = useFilteredProductsContext()

  return (
    <div className="lg:w-4/5 md:px-5 lg:px-8">
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
  )
}