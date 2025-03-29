import Link from "next/link"

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-12 text-center font-serif text-3xl font-light text-gray-800 md:text-4xl">
        Nuestras Colecciones
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <Link href="/belleza" className="group">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-12">
            <div className="transform transition-transform duration-500 group-hover:scale-105">
              <h3 className="mb-4 font-['Playfair_Display'] text-3xl font-light text-gray-800 md:text-4xl">
                Cindy Beauty
              </h3>
              <p className="mb-6 font-light text-gray-600">
                Productos de belleza y cuidado personal para realzar tu belleza natural
              </p>
              <span className="inline-block text-sm font-medium text-pink-500 transition-all duration-300 group-hover:translate-x-2">
                Descubrir colección →
              </span>
            </div>
          </div>
        </Link>

        <Link href="/dulces" className="group">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 p-8 shadow-sm transition-all duration-300 hover:shadow-md md:p-12">
            <div className="transform transition-transform duration-500 group-hover:scale-105">
              <h3 className="mb-4 font-['Playfair_Display'] text-3xl font-light text-gray-800 md:text-4xl">
                Cindy Bakery
              </h3>
              <p className="mb-6 font-light text-gray-600">
                Postres artesanales elaborados con ingredientes de primera calidad
              </p>
              <span className="inline-block text-sm font-medium text-amber-500 transition-all duration-300 group-hover:translate-x-2">
                Descubrir colección →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

