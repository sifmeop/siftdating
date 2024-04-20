import { Footer } from './footer'
import { Header } from './header'
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
