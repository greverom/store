import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Imagen de fondo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Bienvenido a Nuestra Tienda</h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Descubre nuestra selección de productos de belleza y dulces artesanales
        </p>
      </div>
    </section>
  )
}

