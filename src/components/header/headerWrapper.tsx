'use client'

import { usePathname } from 'next/navigation'
import MainHeader from '@/components/header/headerMain'
import GeneralHeader from '@/components/header/generalHeader'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const isBeautyOrBakery = pathname.startsWith('/belleza') || pathname.startsWith('/dulce')

  return isBeautyOrBakery ? <MainHeader /> : <GeneralHeader />
}