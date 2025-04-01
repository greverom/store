
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
import Hero2 from "@/components/home/hero2"

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero2 />
        <CindyBeautyShowcase />
        <CindyBakeryShowcase />

      </main>
    </>
  )
}