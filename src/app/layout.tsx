import type { Metadata } from "next"
import { CartProvider } from "@/context/cart.context"
import { Inter } from "next/font/google"
import "./globals.css"
import HeaderWrapper from "@/components/header/headerWrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-white">
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