"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
import Hero2 from "@/components/home/hero2"
import Image from "next/image"
import ContactoPage from "./contacto/page"
// import FranjaTitulo from "@/components/home/franjaTitulo"

export default function HomePage() {
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const image4Ref = useRef(null)

  const inView1 = useInView(image1Ref, { once: false })
  const inView2 = useInView(image2Ref, { once: false })
  const inView3 = useInView(image3Ref, { once: false })
  const inView4 = useInView(image4Ref, { once: false })

  return (
    <main className="relative overflow-x-hidden">
      <div className="w-full bg-gray-100">
        <div className="block sm:hidden">
          {/* <FranjaTitulo /> */}
        </div>
        <Hero2 />

        {/* Imagen 1 decorativa derecha */}
        <motion.div
          ref={image1Ref}
          initial={{ opacity: 1, x: 100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="absolute right-[-55px] sm:right-[-85px] md:right-[-40px] lg:right-[-50px] top-[270px] 
                    sm:top-[170px] md:top-[230px] lg:top-[220px] w-[320px] sm:w-[420px] md:w-[450px] 
                    lg:w-[520px] z-30 pointer-events-none"
        >
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
        </motion.div>
      </div>

      {/* Imagen 2 izquierda */}
      <motion.div
        ref={image2Ref}
        initial={{ opacity: 1, x: -100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="absolute left-[-45px] sm:left-[-80px] md:left-[-65px] lg:left-[-45px] top-[210px] 
        sm:top-[200px] md:top-[220px] lg:top-[300px] w-[240px] sm:w-[340px] md:w-[440px] lg:w-[540px] 
        z-20 pointer-events-none"
      >
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
      </motion.div>

      <section className="w-8xl flex flex-col items-center gap-0 sm:gap-40 md:gap-60">
        <div className="w-full bg-gray-100 z-10 relative">
          <CindyBeautyShowcase />

          {/* Imagen 3 belleza derecha */}
          <motion.div
            ref={image3Ref}
            initial={{ opacity: 100, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: .8 }}
            className="absolute right-[-35px] sm:right-[-0px] md:right-10 lg:right-20 top-100 
                      sm:top-90 md:top-70 lg:top-65 w-[290px] sm:w-[370px] md:w-[380px] lg:w-[500px] 
                      h-full pointer-events-none">
            <Image
              src="/images/image-beauty-sinfonde.png"
              alt="Cosméticos decorativos"
              fill
              priority
              className="object-contain w-full h-full pointer-events-none scale-115"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Imagen 4 dulces derecha */}
        <div className="w-full bg-gray-100 z-0 relative">
          <CindyBakeryShowcase />
          <motion.div
            ref={image4Ref}
            initial={{ opacity: 100, x: 100 }}
            animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: .8 }}
            className="absolute right-[-60px] sm:right-[-40px] md:right-15 lg:right-50 top-100 sm:top-70 md:top-70 lg:top-60 
                      w-[290px] sm:w-[380px] md:w-[400px] lg:w-[400px] h-full pointer-events-none"
          >
            <Image
              src="/images/imagenpostre.png"
              alt="Imagen decorativa dulces"
              fill
              priority
              className="object-contain w-full h-full pointer-events-none scale-110"
            />
          </motion.div>
        </div>
      </section>
      <ContactoPage/>
    </main>
  )
}