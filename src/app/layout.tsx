import type { Metadata } from "next"
import { CartProvider } from "@/context/cart.context"
import { Dancing_Script, Inter, Pacifico, Poppins } from "next/font/google"
import "./globals.css"
import HeaderWrapper from "@/components/header/headerWrapper"
import ParticleBackground from "@/components/shared/particleBackground"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-poppins",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Mi Tienda",
  description: "Productos de belleza y dulces artesanales",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className=
                  {`${inter.variable} 
                    ${pacifico.variable} 
                    ${dancing.variable}
                    ${poppins.variable}`}>
      <body className="antialiased bg-white">
      <ParticleBackground />
      <CartProvider>
        <div className="relative min-h-screen">
        <HeaderWrapper />
          <main>{children}</main>
        </div>
      </CartProvider>
      </body>
    </html>
  )
}