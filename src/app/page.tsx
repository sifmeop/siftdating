import { redirect } from 'next/navigation'
import { auth } from '~/auth'
import { Home } from '~/components/pages/home'
import { LINKS } from '~/constants/links'

export default async function HomePage() {
  const session = await auth()

  if (session?.user) {
    redirect(LINKS.ENCOUNTERS)
  }

  return <Home />
}
