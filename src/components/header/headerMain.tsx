'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CartButton from '@/components/cart/cart-button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function MainHeader() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const isHome = pathname === '/'
  const getTitle = () => {
    if (pathname.startsWith('/belleza')) return 'Cindy Glow'
    if (pathname.startsWith('/dulce')) return 'Bakery'
    return null
  }

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()

    const handleScroll = () => setScrollY(window.scrollY)

    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
    }

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  const maxScroll = typeof window !== "undefined" ? window.innerHeight * 5.25 : 200
  const scrollProgress = Math.min(scrollY / maxScroll, 1)
  const backgroundOpacity = isMobile ? Math.min(scrollProgress * 10, 1) : 1
  const blurLevel = isMobile ? scrollProgress * 10 : 0

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full left-0 right-0 transition-all duration-300 ease-in-out",
        isHome ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{
        backgroundColor: isMobile
          ? `rgba(31, 41, 55, ${backgroundOpacity})`
          : `rgba(255, 255, 255, 0.95)`,
        backdropFilter: isMobile && scrollProgress > 0.05 ? `blur(${blurLevel}px)` : "none",
        WebkitBackdropFilter: isMobile && scrollProgress > 0.05 ? `blur(${blurLevel}px)` : "none",
      }}
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
          <span className="text-xl font-bold text-white">Cindy</span>
        )}
        <CartButton scrollProgress={scrollProgress} />
      </div>
    </header>
  )
}