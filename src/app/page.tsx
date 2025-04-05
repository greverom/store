"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CindyBeautyShowcase from "@/components/home/beautyShowCase"
import CindyBakeryShowcase from "@/components/home/bakeryShowCase"
import Hero2 from "@/components/home/hero2"
import Image from "next/image"
import FranjaTitulo from "@/components/home/franjaTitulo"

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
      <div className="w-full bg-gray-50">
        <div className="block sm:hidden">
          <FranjaTitulo />
        </div>
        <Hero2 />

        {/* Imagen 1 decorativa derecha */}
        <motion.div
          ref={image1Ref}
          initial={{ opacity: 1, x: 100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="absolute right-[-55px] sm:right-[-85px] md:right-[-40px] lg:right-[-50px] top-[220px] 
                    sm:top-[170px] md:top-[230px] lg:top-[220px] w-[350px] sm:w-[420px] md:w-[450px] 
                    lg:w-[600px] z-30 pointer-events-none"
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
        className="absolute left-[-45px] sm:left-[-80px] md:left-[-65px] lg:left-[-45px] top-[240px] 
        sm:top-[200px] md:top-[220px] lg:top-[250px] w-[260px] sm:w-[340px] md:w-[440px] lg:w-[550px] 
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

      <section className="w-8xl flex flex-col items-center">
        <div className="w-full bg-red-50 z-10 relative ">
          <CindyBeautyShowcase />

          {/* Imagen 3 belleza derecha */}
          <motion.div
            ref={image3Ref}
            initial={{ opacity: 100, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
            transition={{ duration: .8 }}
            className="absolute right-[-95px] sm:right-[-40px] md:right-[-100px] lg:right-30 top-60 
                      sm:top-90 md:top-95 lg:top-125 w-[400px] sm:w-[420px] md:w-[600px] lg:w-[650px]
                       h-full pointer-events-none"
          >
            <Image
              src="/images/image-beauty-sinfonde.png"
              alt="Cosméticos decorativos"
              fill
              priority
              className="object-contain w-full h-full pointer-events-none opacity-90 scale-85"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 0%, white 90%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Imagen 4 dulces derecha */}
        <div className="w-full bg-gray-50 z-0 relative">
          <CindyBakeryShowcase />
          <motion.div
            ref={image4Ref}
            initial={{ opacity: 100, x: 100 }}
            animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
            transition={{ duration: .8 }}
            className="absolute right-[-40px] md:right-[-55px] lg:right-55 top-60 sm:top-70 md:top-80 lg:top-120 
                      w-[390px] sm:w-[380px] md:w-[500px] lg:w-[550px] h-full pointer-events-none"
          >
            <Image
              src="/images/imagen-dulce-no-fondo.png"
              alt="Imagen decorativa dulces"
              fill
              priority
              className="object-contain w-full h-full pointer-events-none scale-100"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}