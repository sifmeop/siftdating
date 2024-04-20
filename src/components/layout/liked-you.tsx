import clsx from 'clsx'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINKS } from '~/constants/links'
import styles from './styles.module.scss'

export const LikedYou = () => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={LINKS.LIKED_YOU}
        className={clsx('flex flex-col items-center text-sm font-semibold', {
          [styles.link_active]: pathname === LINKS.LIKED_YOU
        })}>
        <Heart stroke='#717171' />
        Лайки
      </Link>
    </li>
  )
}
