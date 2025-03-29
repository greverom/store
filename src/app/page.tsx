import Hero from "@/components/home/hero"
import CategorySelector from "@/components/home/category-selector"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-white -mt-[73px]">
        <Hero />
        <CategorySelector />
      </main>
    </>
  )
}

