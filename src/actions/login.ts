'use server'

import { AuthError } from 'next-auth'
import type { BuiltInProviderType } from 'next-auth/providers'
import type { LiteralUnion } from 'next-auth/react'
import { signIn } from '~/auth'
import { LoginSchema, type LoginSchemaTypes } from '~/schemas'

interface AuthOptions {
  redirectTo?: string
  redirect?: true
}

export const login = async (
  values: LoginSchemaTypes,
  options?: AuthOptions,
) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn(
      'credentials',
      { email, password, ...options }
    )
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'La combinación de usuario y contraseña no es correcta.' }
        default:
          return { error: 'Algo salió mal' }
      }
    }

    throw error
  }
}

export const socialLogin = async (
  provider?: LiteralUnion<BuiltInProviderType>,
  options?: AuthOptions,
) => {
  await signIn(provider, options)
}
