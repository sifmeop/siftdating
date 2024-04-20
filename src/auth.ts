import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { db } from '~/lib/prisma'

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        }
      }
    }
  },
  adapter: PrismaAdapter(db),
 providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
})
