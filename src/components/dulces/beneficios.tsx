import { Benefit } from "@/models/benefit"
import { Utensils, Award, Leaf, Gift } from "lucide-react"

const beneficios: Benefit[] = [
  {
    id: 1,
    titulo: "Ingredientes Seleccionados",
    descripcion: "Utilizamos solo ingredientes de la más alta calidad",
    icono: Leaf,
  },
  {
    id: 2,
    titulo: "Elaboración Artesanal",
    descripcion: "Cada dulce es elaborado a mano con dedicación",
    icono: Utensils,
  },
  {
    id: 3,
    titulo: "Sabor Auténtico",
    descripcion: "Recetas tradicionales con un toque de innovación",
    icono: Award,
  },
  {
    id: 4,
    titulo: "Packaging Elegante",
    descripcion: "Presentaciones perfectas para regalo o consumo personal",
    icono: Gift,
  },
]

export default function Beneficios() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Compromisos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio) => {
            const IconComponent = beneficio.icono

            return (
              <div key={beneficio.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

