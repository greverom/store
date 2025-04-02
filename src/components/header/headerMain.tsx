'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CartButton from '@/components/cart/cart-button'
import { cn } from '@/lib/utils'

export default function MainHeader() {
  const pathname = usePathname()

  const isHome = pathname === '/'

  const getTitle = () => {
    if (pathname.startsWith('/belleza')) return 'Catálogo'
    if (pathname.startsWith('/dulces')) return 'Postres'
    return null
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50  bg-white",
        isHome ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="container mx-auto max-w-7xl md:max-w-full px-7 md:px-10 py-3 md:py-4 flex justify-between items-center">
        {getTitle() ? (
          <Link
            href="/"
            className="text-xl font-bold"
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