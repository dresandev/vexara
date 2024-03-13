import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import bcryptjs from 'bcryptjs'
import { LoginSchema } from '~/schemas'
import { getUserByEmail } from '~/data/user'

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (!validatedFields.success) return null

        const { email, password } = validatedFields.data
        const user = await getUserByEmail(email)

        if (!user || !user.password) return null

        const passwordsMatch = await bcryptjs.compare(password, user.password)

        if (!passwordsMatch) return null

        return user
      }
    })
  ],
} satisfies NextAuthConfig
