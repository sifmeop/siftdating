import clsx from 'clsx'
import { MessageSquareMore } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINKS } from '~/constants/links'
import styles from './styles.module.scss'

export const Connections = () => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={LINKS.CONNECTIONS}
        className={clsx('flex flex-col items-center text-sm font-semibold', {
          [styles.link_active]: pathname === LINKS.CONNECTIONS
        })}>
        <MessageSquareMore stroke='#717171' />
        Чаты
      </Link>
    </li>
  )
}
