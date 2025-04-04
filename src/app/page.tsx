import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
import Hero2 from "@/components/home/hero2"
import Image from "next/image"
import FranjaTitulo from "@/components/home/franjaTitulo"

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="w-full bg-gray-100">
      <div className="block sm:hidden">
        <FranjaTitulo />
      </div>
        <Hero2 />
        
        <div className="absolute right-[-55px] sm:right-[-85px] md:right-[-40px] lg:right-[-50px] top-[300px] 
                sm:top-[330px] md:top-[310px] lg:top-[280px] w-[350px] sm:w-[400px] md:w-[450px] lg:w-[590px] 
                z-30 pointer-events-none">
          <Image
            src="/images/image-hero-nofondo.png"
            alt="Decoración regalos"
            width={550}
            height={550}
            className="object-contain w-full h-full pointer-events-none opacity-99 scale-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div className="absolute left-[-45px] sm:left-[-80px] md:left-[-65px] lg:left-[-45px] top-[240px] 
                sm:top-[280px] md:top-[260px] lg:top-[250px] w-[260px] sm:w-[370px] md:w-[440px] lg:w-[550px] 
                z-20 pointer-events-none">
          <Image
            src="/images/image6.png"
            alt="Decoración regalos"
            width={550}
            height={550}
            className="object-contain w-full h-full pointer-events-none scale-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 10%, white 90%, transparent 100%)",
            }}
          />
        </div>


      <section className="w-8xl flex flex-col items-center">
        <div className="w-full bg-red-50 z-0">
          <CindyBeautyShowcase />
        </div>

        <div className="w-full bg-gray-50">
          <CindyBakeryShowcase />
        </div>
      </section>
    </main>
  )
}