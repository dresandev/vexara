'use client'

import { useFormStatus } from 'react-dom'
import { GitHubIcon } from '~/components/svg'
import { Button } from '~/components/ui/button'
import styles from './github-login-button.module.css'

export const GitHubLoginButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      className={styles.button}
      disabled={pending}
    >
      <GitHubIcon className={styles.logo} />
      <span className={styles.text}>Continuar con GitHub</span>
    </Button>
  )
}
