import Hero from "@/components/home/hero"
import IntroSection from "@/components/home/intro-section"
import CategorySelector from "@/components/home/category-selector"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <CategorySelector />
    </main>
  )
}

