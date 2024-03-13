'use server'

import { AuthError } from 'next-auth'
import { signIn } from '~/auth'
import { LoginSchema, type LoginSchemaTypes } from '~/schemas'

export const login = async (values: LoginSchemaTypes) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn(
      'credentials',
      { email, password }
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

export const githubLogin = async () => {
  await signIn('github')
}
