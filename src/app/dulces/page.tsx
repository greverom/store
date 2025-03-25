import Hero from "@/components/dulces/hero"
import ProductosDestacados from "@/components/dulces/productos-destacados"
import Beneficios from "@/components/dulces/beneficios"
import Testimonios from "@/components/dulces/testimonios"
import Contacto from "@/components/shared/contacto"

export default function DulcesPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductosDestacados />
      <Beneficios />
      <Testimonios />
      <Contacto />
    </main>
  )
}

