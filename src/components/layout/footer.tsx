'use client'

import clsx from 'clsx'
import { Layers2, UserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINKS } from '~/constants/links'
import { Connections } from './connections'
import { LikedYou } from './liked-you'
import styles from './styles.module.scss'

export const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className='text-[#717171]'>
      <nav>
        <ul className='flex justify-evenly'>
          <li>
            <Link
              href={LINKS.ENCOUNTERS}
              className={clsx('flex flex-col items-center text-sm font-semibold', {
                [styles.link_active]: pathname === LINKS.ENCOUNTERS
              })}>
              <Layers2 stroke='#717171' />
              Знакомства
            </Link>
          </li>
          <LikedYou />
          <Connections />
          <li>
            <Link
              href={LINKS.OWN_PROFILE}
              className={clsx('flex flex-col items-center text-sm font-semibold', {
                [styles.link_active]: pathname === LINKS.OWN_PROFILE
              })}>
              <UserRound stroke='#717171' />
              Профиль
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
