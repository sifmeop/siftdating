'use client'

import { useRef } from 'react'

export const Form = ({ chatId }: { chatId: string }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async () => {
    if (!inputRef.current?.value.trim().length) {
      return
    }

    await fetch('/api/pusher', {
      method: 'POST',
      body: JSON.stringify({
        message: inputRef.current.value,
        chatId
      })
    })

    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <>
      <input
        ref={inputRef}
        type='text'
        className='border border-black'
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>отправить</button>
    </>
  )
}
