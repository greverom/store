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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isHome = pathname === '/'
  const isAnimatedRoute = (pathname === '/belleza' || pathname === '/dulces') && isMobile

  useEffect(() => {
    if (!isAnimatedRoute) return
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isAnimatedRoute])

  const maxScroll = typeof window !== "undefined" ? window.innerHeight * 4 : 200
  const scrollProgress = isAnimatedRoute ? Math.min(scrollY / maxScroll, 1) : 0
  const backgroundOpacity = Math.min(scrollProgress * 10, .9)
  const blurLevel = scrollProgress > 0.05 ? scrollProgress * 10 : 0

  const getTitle = () => {
    if (pathname.startsWith('/belleza')) return 'Cindy Glow'
    if (pathname.startsWith('/dulces')) return 'Bakery'
    return null
  }

  const dynamicBackground = isAnimatedRoute
  ? scrollProgress < 0.01
    ? "linear-gradient(to right, rgba(252, 231, 243, 0.4), rgba(253, 242, 248, 0.4), rgba(237, 233, 254, 0.4))"
    : `rgba(31, 41, 55, ${backgroundOpacity})`
  : "rgba(255, 255, 255, 0.95)"

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-in-out",
        isHome ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{
        background: dynamicBackground,
        backdropFilter: isAnimatedRoute && scrollProgress > 0.05 ? `blur(${blurLevel}px)` : "none",
        WebkitBackdropFilter: isAnimatedRoute && scrollProgress > 0.05 ? `blur(${blurLevel}px)` : "none",
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
          <span className="text-xl font-bold text-gray-900">Cindy</span>
        )}

        <CartButton scrollProgress={scrollProgress} />
      </div>
    </header>
  )
}