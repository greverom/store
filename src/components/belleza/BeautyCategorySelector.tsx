"use client"

import { useBeautyCategories } from "@/hooks/useBeautyCategories"

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
    <section className="py-6 lg:py-0">
      <h2 className="text-xd lg:text-xl font-bold mb-4 lg:mb-6 lg:text-left text-center">
        Filtrar por Categoría
      </h2>

      {/* Grid en móviles, columna en escritorio */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 lg:flex lg:flex-col">
        <button
          onClick={() => onCategorySelect(null)}
          className={`border rounded-lg px-3 py-2 text-sm font-medium transition text-center lg:text-left ${
            selectedCategory === null
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-white border-gray-200 hover:bg-pink-400 hover:text-white"
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
                ? "bg-pink-400 text-white border-pink-500"
                : "bg-white border-gray-200 hover:bg-pink-300 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}