'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, type RegisterSchemaTypes } from '~/schemas'
import { register } from '~/actions/register'
import { login } from '~/actions/login'
import { TextField } from '~/components/ui/text-field'
import { PasswordTextField } from '~/components/ui/password-text-field'
import { Checkbox } from '~/components/ui/checkbox'
import { NotificationCard } from '~/components/ui/notification-card'
import { RingLoader } from '~/components/loaders/ring-loader'
import { Button } from '~/components/ui/button'
import styles from './register-form.module.css'

export const RegisterForm = () => {
  const searchParams = useSearchParams()
  const [responseError, setResponseError] = useState('')
  const [isPending, startTransition] = useTransition()
  const form = useForm<RegisterSchemaTypes>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      isPrivacyPolicyAccepted: false,
    }
  })

  const { control, handleSubmit, formState: { errors } } = form

  const onSubmit = async (values: RegisterSchemaTypes) => {
    startTransition(async () => {
      setResponseError('')
      const redirectTo = Boolean(Number(searchParams.get('checkout')))
        ? '/new-checkout'
        : undefined
      let data

      data = await register(values)

      if (data?.error) {
        return setResponseError(data.error)
      }

      data = await login(values, { redirectTo })

      if (data?.error) {
        setResponseError(data.error)
      }
    })
  }

  return (
    <>
      {responseError && (
        <NotificationCard
          variant='error'
          message={responseError}
        />
      )}
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              id='register-email'
              label='E-mail'
              error={errors.email?.message}
              autoComplete='off'
              spellCheck={false}
              disabled={isPending}
              {...field}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <PasswordTextField
              id='register-password'
              label='Contraseña'
              hint='Mínimo 8 caracteres incluyendo minúscula, mayúscula y un número. No repitas el mismo carácter más de 3 veces'
              error={errors.password?.message}
              autoComplete='off'
              spellCheck={false}
              disabled={isPending}
              {...field}
            />
          )}
        />

        <Checkbox label='Mantener sesión' />

        <div className={styles.formFooter}>
          <Checkbox
            label='Acepto recibir novedades, comunicaciones y promociones de VEXARA'
          />

          <div className={styles.legalSection}>
            <Controller
              name='isPrivacyPolicyAccepted'
              control={control}
              render={({ field }) => (
                <Checkbox
                  label='He leido y acepto la '
                  error={!!errors.isPrivacyPolicyAccepted}
                  disabled={isPending}
                  {...field}
                />
              )}
            />

            <Link
              className={styles.legalLink}
              href=''
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

        <Button
          disabled={isPending}
          className={styles.registerButton}
        >
          {isPending ? <RingLoader /> : 'Crear Cuenta'}
        </Button>
      </form>
    </>
  )
}
