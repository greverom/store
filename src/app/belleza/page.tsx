import Hero from "@/components/belleza/hero"
import Carrousel from "@/components/belleza/Carrousel"
import Beneficios from "@/components/belleza/beneficios"

export default function BellezaPage() {
  return (
    <main className="min-h-screen">
      <Carrousel/>
      <Hero />
      <Beneficios />
    </main>
  )
}

