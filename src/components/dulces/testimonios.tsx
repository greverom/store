import Image from "next/image"

const testimonios = [
  {
    id: 1,
    nombre: "Carlos Sánchez",
    texto:
      "Los macarons son simplemente deliciosos, el mejor regalo que he podido hacer a mi pareja. Volveré a comprar sin duda.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    nombre: "Ana López",
    texto:
      "Las trufas de chocolate son increíbles, se nota la calidad de los ingredientes y el cuidado en la elaboración.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    nombre: "Javier Moreno",
    texto:
      "Pedí una caja de bombones surtidos para un evento y todos quedaron encantados. El sabor y la presentación son excelentes.",
    imagen: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonios() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Opiniones de Nuestros Clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonio.imagen || "/placeholder.svg"}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">{testimonio.nombre}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonio.texto}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

