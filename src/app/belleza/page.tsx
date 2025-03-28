import Hero from "@/components/belleza/hero"
// import ProductosDestacados from "@/components/belleza/productos-destacados"
import Beneficios from "@/components/belleza/beneficios"
import Contacto from "@/components/shared/contacto"

export default function BellezaPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <ProductosDestacados /> */}
      <Beneficios />
      <Contacto />
    </main>
  )
}

