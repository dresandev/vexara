'use server'

import bcrypt from 'bcryptjs'
import { db } from '~/lib/db'
import { getUserByEmail } from '~/data/user'
import { RegisterSchema, type RegisterSchemaTypes } from '~/schemas'

export const register = async (values: RegisterSchemaTypes) => {
  const validatedField = RegisterSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, password } = validatedField.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: `El nombre de usuario especificado(${email}) está siendo utilizado por otro usuario.Por favor, introduzca uno distinto.` }
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    }
  })

  return { success: true }
}
