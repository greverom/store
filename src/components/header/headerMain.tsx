'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CartButton from '@/components/cart/cart-button'
import { cn } from '@/lib/utils'

export default function MainHeader() {
  const pathname = usePathname()

  const isHome = pathname === '/'

  const getTitle = () => {
    if (pathname.startsWith('/belleza')) return 'Cindy Glow'
    if (pathname.startsWith('/dulces')) return 'Bakery'
    return null
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white shadow-md transition-opacity duration-300 ease-in-out",
        isHome ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {getTitle() ? (
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text hover:opacity-90 transition-opacity duration-300"
          >
            {getTitle()}
          </Link>
        ) : (
          <span className="text-xl font-bold text-gray-900">Cindy</span>
        )}

        <CartButton />
      </div>
    </header>
  )
}