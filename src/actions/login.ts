'use server'

import { LoginSchema, type LoginSchemaTypes } from '~/schemas'

export const login = async (values: LoginSchemaTypes) => {
  const validatedField = LoginSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Campos inválidos' }
  }

  return { success: true }
}
