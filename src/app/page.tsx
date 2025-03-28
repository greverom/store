import Hero from "@/components/home/hero"
import IntroSection from "@/components/home/intro-section"
import CategorySelector from "@/components/home/category-selector"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white -mt-[68px]">
      <Hero />
      <div className="-mt-[350px] z-10 relative">
        <CategorySelector />
        <IntroSection />
      </div>
    </main>
  )
}

