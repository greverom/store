import Hero from "@/components/home/hero"
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen -mt-[68px] overflow-x-hidden">
        <Hero />
        <CindyBeautyShowcase />
        <CindyBakeryShowcase />

      </main>
    </>
  )
}