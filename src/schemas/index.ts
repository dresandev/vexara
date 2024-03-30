import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Campo obligatorio' })
    .email({ message: 'El formato de e-mail no es válido' }),
  password: z
    .string()
    .min(1, { message: 'Campo obligatorio' })
})

export type LoginSchemaTypes = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Campo obligatorio' })
    .email({ message: 'El formato de e-mail no es válido' }),
  password: z
    .string()
    .regex(
      /^(?!.*(.)\1\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      { message: 'La contraseña debe tener al menos 8 caracteres, incluyendo minúsculas, mayúsculas y un número. No repitas el mismo carácter más de 3 veces.' }
    ),
  isPrivacyPolicyAccepted: z.literal<boolean>(true)
})

export type RegisterSchemaTypes = z.infer<typeof RegisterSchema>

export const CartItemSchema = z.object({
  quantity: z.number(),
  productId: z.string(),
  imageId: z.string(),
  sizeId: z.string(),
})
