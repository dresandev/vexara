'use client'

import { useTransition } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { LiteralUnion } from 'next-auth/react'
import type { BuiltInProviderType } from 'next-auth/providers'
import { socialLogin } from '~/actions/login'
import { GitHubIcon } from '~/components/svg'
import { Button } from '~/components/ui/button'
import styles from './social-auth-buttons.module.css'

export const SocialAuthButtons = () => {
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const handleSignIn = (provider?: LiteralUnion<BuiltInProviderType>) => {
    const redirectTo = Boolean(Number(searchParams.get('checkout')))
      ? '/new-checkout'
      : undefined

    startTransition(async () => {
      await socialLogin(provider, { redirectTo })
    })
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Button
          disabled={isPending}
          onClick={() => handleSignIn('github')}
        >
          <GitHubIcon className={styles.logo} />
          <span className={styles.text}>
            Continuar con GitHub
          </span>
        </Button>
      </div>
      <p className={styles.legalText}>
        Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la{' '}
        <Link
          className={styles.legalLink}
          href='?'
          scroll={false}
        >
          Política de Privacidad
        </Link>
      </p>
    </>
  )
}
