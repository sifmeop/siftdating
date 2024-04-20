'use client'

import { signIn } from 'next-auth/react'

export const Home = () => {
  return (
    <div className='grid h-dvh max-w-[640px] gap-4 mx-auto bg-white'>
      <button onClick={() => signIn('google')}>click</button>
    </div>
  )
}
