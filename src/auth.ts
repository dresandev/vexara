import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import authConfig from '~/auth.config'
import { db } from '~/lib/db'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  pages: {
    error: '/auth/error',
    signIn: '/auth/login',
  },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        data: { emailVerified: new Date() },
        where: { id: user.id },
      })
    },
  },
  callbacks: {
    session: async ({ token, session }) => {
      if (token.sub) {
        session.user.id = token.sub
      }

      return session
    },
  },
  ...authConfig
})
