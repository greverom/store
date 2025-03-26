import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imagen fondo cindy.jpeg"
          alt="Imagen de fondo"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 h-42 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-74">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
          Bienvenido a Nuestra Tienda
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Descubre nuestra selección de productos de belleza y dulces artesanales
        </p>
      </div>
    </section>
  )
}