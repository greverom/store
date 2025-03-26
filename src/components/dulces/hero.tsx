import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/depositphotos_215231172-stock-photo-beautiful-festive-cake-biscuit-with.jpg"
          alt="Dulces artesanales"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dulces Artesanales</h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Descubre el sabor de lo auténtico con nuestras creaciones hechas a mano
        </p>
      </div>
    </section>
  )
}

