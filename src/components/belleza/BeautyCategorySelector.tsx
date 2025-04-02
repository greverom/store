"use client"

import { useBeautyCategories } from "@/hooks/useBeautyCategories"
import { beautyCategoryLabels } from "@/models/dataBeautyCategory"


type Props = {
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
}

export default function BeautyCategorySelector({
  selectedCategory,
  onCategorySelect,
}: Props) {
  const { categories, loading } = useBeautyCategories()

  if (loading) return <p className="text-center py-6">Cargando categorías...</p>
  if (!categories.length) return <p className="text-center py-6">No hay categorías disponibles.</p>

  return (
    <section className="max-w-full border border-gray-300 rounded-2xl px-2 md:px-5 py-3 md:py-5">
      <h2 className="text-xl lg:text-xl font-bold mb-7 lg:mb-6 lg:text-left text-left">
        Filtrar por Producto
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-1 lg:flex lg:flex-col">
        <button
          onClick={() => onCategorySelect(null)}
          className={` rounded-lg px-3 py-2 text-sm font-medium transition text-center lg:text-left ${
            selectedCategory === null
              ? "bg-gray-700 text-white"
              : "bg-white hover:bg-gray-400 hover:text-white"
          }`}
        >
          Ver todos
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition text-center lg:text-left ${
              selectedCategory === category
               ? "bg-gray-700 text-white"
              : "bg-white hover:bg-gray-400 hover:text-white"
            }`}
          >
            {beautyCategoryLabels[category] || category}
          </button>
        ))}
      </div>
    </section>
  )
}