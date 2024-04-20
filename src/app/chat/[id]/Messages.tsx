'use client'

import { useEffect, useState } from 'react'
import { pusherClient } from '~/lib/pusher'

export const Messages = ({ initialMessages, chatId }: { initialMessages?: string[]; chatId: string }) => {
  const [messages, setMessages] = useState(initialMessages ?? [])

  useEffect(() => {
    pusherClient.subscribe(`chat-${chatId}`)

    pusherClient.bind('message', (data: string) => {
      setMessages((prev) => [...prev, data])
    })

    return () => {
      pusherClient.unsubscribe(`chat-${chatId}`)
    }
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      {messages.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </div>
  )
}
