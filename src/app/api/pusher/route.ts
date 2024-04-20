import { db } from '~/lib/prisma'
import { pusherServer } from '~/lib/pusher'

export async function POST(req: Request) {
  const { message, chatId } = await req.json()

  pusherServer.trigger(`chat-${chatId}`, 'message', message)

  const currentChat = await db.chat.findFirst({
    where: {
      id: chatId
    }
  })

  if (currentChat) {
    await db.chat.update({
      where: {
        id: chatId
      },
      data: {
        messages: {
          push: message
        }
      }
    })
  } else {
    await db.chat.create({
      data: {
        id: chatId,
        messages: {
          set: [message]
        }
      }
    })
  }

  return new Response('ok')
}
