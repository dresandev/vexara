'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { LoginSchema, type LoginSchemaTypes } from '~/schemas'
import { useToastStore } from '~/store/use-toast-store'
import { login } from '~/actions/login'
import { TextField } from '~/components/ui/text-field'
import { Checkbox } from '~/components/ui/checkbox'
import { RingLoader } from '~/components/loaders/ring-loader'
import { NotificationCard } from '~/components/ui/notification-card'
import { CircleCheckIcon } from '~/components/svg'
import componentStyles from '~/styles/components.module.css'
import styles from './login-form.module.css'

export const LoginForm = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [responseError, setResponseError] = useState('')
  const [isPending, startTransition] = useTransition()
  const form = useForm<LoginSchemaTypes>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const notifyToast = useToastStore(state => state.notifyToast)

  const { control, handleSubmit, formState: { errors } } = form

  const onSubmit = async (values: LoginSchemaTypes) => {
    setResponseError('')

    startTransition(async () => {
      const data = await login(values)

      if (data.error) {
        return setResponseError(data.error)
      }

      router.replace(pathname)
      notifyToast({
        leadingIcon: (
          <CircleCheckIcon
            color='var(--success-color)'
          />
        ),
        title: '¡Hola! Te damos la bienvenida'
      })
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
              id='login-email'
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
            <TextField
              id='login-password'
              label='Contraseña'
              error={errors.password?.message}
              type='password'
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
            href='#'
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </div>

        <button
          disabled={isPending}
          className={clsx(
            componentStyles.button,
            styles.loginButton,
          )}
        >
          {isPending ? <RingLoader /> : 'Iniciar Sesión'}
        </button>
      </form>
    </>
  )
}
