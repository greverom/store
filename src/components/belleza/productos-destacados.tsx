import Image from "next/image"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { Product } from "@/models/products"

const productos: Product[] = [
  {
    id: 1,
    nombre: "Crema Facial Hidratante",
    descripcion: "Hidratación profunda para todo tipo de piel",
    precio: 29.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 2,
    nombre: "Sérum Antiarrugas",
    descripcion: "Fórmula avanzada con ácido hialurónico",
    precio: 39.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 3,
    nombre: "Mascarilla Facial",
    descripcion: "Purifica y revitaliza tu piel en minutos",
    precio: 19.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
  {
    id: 4,
    nombre: "Aceite Esencial",
    descripcion: "Mezcla de aceites naturales para relajación",
    precio: 24.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "belleza",
  },
]

export default function ProductosDestacados() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${producto.precio}</span>
                  <AddToCartButton product={producto} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

