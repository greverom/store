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
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Filtrar por Categoría</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

          <button
            onClick={() => onCategorySelect(null)}
            className={`border rounded-lg px-4 py-2 text-sm font-medium transition ${
              selectedCategory === null
                ? "bg-primary text-white border-primary"
                : "bg-white border-gray-300 hover:bg-primary hover:text-white"
            }`}
          >
            Ver todos
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`border rounded-lg px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-white border-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}