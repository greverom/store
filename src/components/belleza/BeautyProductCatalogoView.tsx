"use client"

import ProductCard from "@/components/product/productCard"
import Pagination from "../ui/pagination"
import { useFilteredProductsContext } from "@/context/FilteredProductsContext"
import { beautyCategoryLabels } from "@/models/dataBeautyCategory"

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
    <div className="lg:w-4/5 md:px-5 lg:px-2 pb-7 md:py-10">
      <h2 className="px-4 text-2xl md:text-3xl font-bold text-left mb-6 md:mb-12">
        {selectedCategory
          ? beautyCategoryLabels[selectedCategory] || selectedCategory
          : "Todos los Productos"}
      </h2>

      {isLoading ? (
        <p className="text-center py-10">Cargando productos...</p>
      ) : productsToRender.length === 0 ? (
        <p className="text-center py-10 text-gray-500 italic">
          No se encontraron productos con los filtros seleccionados.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
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