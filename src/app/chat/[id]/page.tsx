import { db } from '~/lib/prisma'
import { Form } from './Form'
import { Messages } from './Messages'

export default async function ChatById({ params: { id } }: { params: { id: string } }) {
  const data = await db.chat.findFirst({
    where: {
      id
    }
  })

  return (
    <>
      <Messages chatId={id} initialMessages={data?.messages} />
      <Form chatId={id} />
    </>
  )
}
