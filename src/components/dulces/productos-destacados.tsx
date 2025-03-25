import Image from "next/image"
import AddToCartButton from "@/components/shared/add-to-cart-button"
import { Product } from "@/models/products"

const productos: Product[] = [
  {
    id: 101,
    nombre: "Bombones Surtidos",
    descripcion: "Selección de bombones con rellenos variados",
    precio: 19.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "dulces",
  },
  {
    id: 102,
    nombre: "Macarons Franceses",
    descripcion: "Delicados macarons en diversos sabores",
    precio: 24.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "dulces",
  },
  {
    id: 103,
    nombre: "Trufas de Chocolate",
    descripcion: "Trufas elaboradas con chocolate belga",
    precio: 22.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "dulces",
  },
  {
    id: 104,
    nombre: "Galletas Decoradas",
    descripcion: "Galletas artesanales con decoración personalizada",
    precio: 18.99,
    imagen: "/placeholder.svg?height=400&width=400",
    categoria: "dulces",
  },
]

export default function ProductosDestacados() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dulces Destacados</h2>
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

