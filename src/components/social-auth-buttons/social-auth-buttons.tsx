'use client'

import { useTransition } from 'react'
import Link from 'next/link'
import type { LiteralUnion } from 'next-auth/react'
import type { BuiltInProviderType } from 'next-auth/providers'
import { AuthOptions } from '~/types'
import { socialLogin } from '~/actions/login'
import { GitHubIcon } from '~/components/svg'
import { Button } from '~/components/ui/button'
import styles from './social-auth-buttons.module.css'

interface Props {
  options?: AuthOptions
}

export const SocialAuthButtons: React.FC<Props> = ({
  options
}) => {
  const [isPending, startTransition] = useTransition()

  const handleSignIn = (provider?: LiteralUnion<BuiltInProviderType>) => {
    startTransition(async () => {
      await socialLogin(provider, options)
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
          <span className={styles.text}>Continuar con GitHub</span>
        </Button>
      </div>
      <p className={styles.legalText}>
        Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la{' '}
        <Link
          className={styles.legalLink}
          href=''
          scroll={false}
        >
          Política de Privacidad
        </Link>
      </p>
    </>
  )
}
