'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, type LoginSchemaTypes } from '~/schemas'
import { login } from '~/actions/login'
import { TextField } from '~/components/ui/text-field'
import { PasswordTextField } from '~/components/ui/password-text-field'
import { Checkbox } from '~/components/ui/checkbox'
import { RingLoader } from '~/components/loaders/ring-loader'
import { NotificationCard } from '~/components/ui/notification-card'
import { Button } from '~/components/ui/button'
import styles from './login-form.module.css'

interface Props {
  textFieldIdSuffix?: string
}

export const LoginForm = ({ textFieldIdSuffix }: Props) => {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState(() => (
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? '¡El correo electrónico ya está en uso con un proveedor diferente!'
      : ''
  ))
  const [isPending, startTransition] = useTransition()
  const form = useForm<LoginSchemaTypes>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const { control, handleSubmit, formState: { errors } } = form

  const onSubmit = (values: LoginSchemaTypes) => {
    startTransition(async () => {
      setErrorMessage('')
      const redirectTo = Boolean(Number(searchParams.get('checkout')))
        ? '/new-checkout'
        : undefined

      const data = await login(values, { redirectTo })

      if (data?.error) {
        setErrorMessage(data.error)
      }
    })
  }

  return (
    <>
      {errorMessage && <NotificationCard
        variant='error'
        message={errorMessage}
      />}
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              id={`login-email-${textFieldIdSuffix}`}
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
              id={`login-password-${textFieldIdSuffix}`}
              label='Contraseña'
              error={errors.password?.message}
              autoComplete='off'
              spellCheck={false}
              disabled={isPending}
              {...field}
            />
          )}
        />

        <div className={styles.options}>
          <Checkbox label='Mantener sesión' />

          <Link
            className={styles.forgotPasswordLink}
            href=''
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </div>

        <Button
          className={styles.loginButton}
          disabled={isPending}
        >
          {isPending ? <RingLoader /> : 'Iniciar Sesión'}
        </Button>
      </form>
    </>
  )
}
