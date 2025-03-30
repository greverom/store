import Hero from "@/components/home/hero"
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
import IntroSection from "@/components/home/intro-section"
import ContactSection from "@/components/home/contacto"


export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-white -mt-[73px]">
        <Hero />
        <CindyBeautyShowcase/>
        <CindyBakeryShowcase/>
        <IntroSection/>
        <ContactSection/>
      </main>
    </>
  )
}

