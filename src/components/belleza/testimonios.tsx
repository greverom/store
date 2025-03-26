import Image from "next/image"

const testimonios = [
  {
    id: 1,
    nombre: "María García",
    texto:
      "Los productos de belleza han transformado mi rutina de cuidado facial. Mi piel nunca había lucido tan radiante.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    nombre: "Laura Rodríguez",
    texto:
      "Increíble calidad en todos los productos que he probado. El sérum es mi favorito, resultados visibles en pocas semanas.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    nombre: "Carmen Martínez",
    texto:
      "Excelente servicio al cliente y productos que cumplen lo que prometen. Definitivamente seguiré comprando aquí.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonios() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={"/images/fondo belleza.jpg"}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">{testimonio.nombre}</h3>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonio.texto}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

