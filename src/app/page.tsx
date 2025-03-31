import Hero from "@/components/home/hero"
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
// import IntroSection from "@/components/shared/intro-section"
// import ContactSection from "@/components/shared/contacto"


export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-white -mt-[74px] overflow-x-hidden">
        <Hero />
        <CindyBeautyShowcase/>
        <CindyBakeryShowcase/>
        {/* <IntroSection/>
        <ContactSection/> */}
      </main>
    </>
  )
}

