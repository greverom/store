import { Shield, Heart, Star, Clock } from "lucide-react"

const beneficios = [
  {
    id: 1,
    titulo: "Productos Naturales",
    descripcion: "Formulados con ingredientes de origen natural",
    icono: Heart,
  },
  {
    id: 2,
    titulo: "Calidad Premium",
    descripcion: "Rigurosos controles de calidad en cada producto",
    icono: Star,
  },
  {
    id: 3,
    titulo: "Envío Rápido",
    descripcion: "Recibe tus productos en 24-48 horas",
    icono: Clock,
  },
  {
    id: 4,
    titulo: "Garantía de Satisfacción",
    descripcion: "30 días de garantía en todos nuestros productos",
    icono: Shield,
  },
]

export default function Beneficios() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por Qué Elegirnos</h2>
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

