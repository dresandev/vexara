'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { RegisterSchema, type RegisterSchemaTypes } from '~/schemas'
import { useToastStore } from '~/store/use-toast-store'
import { register } from '~/actions/register'
import { TextField } from '~/components/ui/text-field'
import { Checkbox } from '~/components/ui/checkbox'
import { NotificationCard } from '~/components/ui/notification-card'
import { RingLoader } from '~/components/loaders/ring-loader'
import { CircleCheckIcon } from '~/components/svg'
import componentStyles from '~/styles/components.module.css'
import styles from './register-form.module.css'

export const RegisterForm = () => {
  const router = useRouter()
  const pathname = usePathname()
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
  const notifyToast = useToastStore(state => state.notifyToast)

  const { control, handleSubmit, formState: { errors } } = form

  const onSubmit = async (values: RegisterSchemaTypes) => {
    setResponseError('')

    startTransition(async () => {
      const data = await register(values)

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
            <TextField
              id='register-password'
              label='Contraseña'
              hint='Mínimo 8 caracteres incluyendo minúscula, mayúscula y un número. No repitas el mismo carácter más de 3 veces'
              error={errors.password?.message}
              type='password'
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
              href='/'
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

        <button
          disabled={isPending}
          className={clsx(
            componentStyles.button,
            styles.registerButton,
          )}
        >
          {isPending ? <RingLoader /> : 'Crear Cuenta'}
        </button>
      </form>
    </>
  )
}
