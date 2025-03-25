import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import CartButton from "@/components/cart/cart-button"
import { CartProvider } from "@/context/cart.context"

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
      <body className="antialiased">
        <CartProvider>
          <div className="relative min-h-screen">
            <header className="sticky top-0 z-50 bg-white shadow-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Cindy Store</div>
                <CartButton />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}