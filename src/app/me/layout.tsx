import { redirect } from 'next/navigation'
import { auth } from '~/auth'
import { Layout } from '~/components/layout'
import { LINKS } from '~/constants/links'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const session = await auth()

  if (!session?.user) {
    redirect(LINKS.HOME)
  }

  return <Layout>{children}</Layout>
}
