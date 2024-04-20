'use client'

import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '~/constants/links'

export const Header = () => {
  const pathname = usePathname()

  const title = (NAV_LINKS.find((link) => link.href === pathname) ?? NAV_LINKS[0]).name

  return (
    <header>
      <h1 className='text-2xl font-bold'>{title}</h1>
    </header>
  )
}
