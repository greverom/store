import Link from "next/link"
import Image from "next/image"

export default function CategorySelector() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué estás buscando hoy?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/belleza" className="group">
            <div className="relative h-80 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/fondo belleza.jpg"
                alt="Productos de Belleza"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Productos de Belleza</h3>
                  <p className="text-white mb-4">Descubre nuestra línea de productos para el cuidado personal</p>
                  <span className="inline-block px-4 py-2 bg-white text-black rounded-md font-medium">
                    Explorar Belleza
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/dulces" className="group">
            <div className="relative h-80 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/istockphoto-1339241159-612x612.jpg"
                alt="Dulces Artesanales"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dulces Artesanales</h3>
                  <p className="text-white mb-4">Explora nuestras deliciosas creaciones hechas a mano</p>
                  <span className="inline-block px-4 py-2 bg-white text-black rounded-md font-medium">
                    Explorar Dulces
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}