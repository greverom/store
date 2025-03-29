'use client'

import { usePathname } from 'next/navigation'
import CartButton from '@/components/cart/cart-button'
import { cn } from '@/lib/utils' 

export default function MainHeader() {
  const pathname = usePathname()

  const isHome = pathname === '/'
  const getTitle = () => {
    if (pathname.startsWith('/belleza')) return 'Cindy Beauty'
    if (pathname.startsWith('/dulce')) return 'Cindy Bakery'
    return 
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-opacity duration-500 ease-in-out",
        isHome ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold">{getTitle()}</div>
        <CartButton />
      </div>
    </header>
  )
}