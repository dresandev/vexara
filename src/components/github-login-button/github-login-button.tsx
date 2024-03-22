'use client'

import { useTransition } from 'react'
import { AuthOptions } from '~/types'
import { githubLogin } from '~/actions/login'
import { GitHubIcon } from '~/components/svg'
import { Button } from '~/components/ui/button'
import styles from './github-login-button.module.css'

interface Props {
  options?: AuthOptions | undefined
}

export const GitHubLoginButton: React.FC<Props> = ({
  options
}) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => await githubLogin(options))
  }

  return (
    <Button
      className={styles.button}
      disabled={isPending}
      onClick={handleClick}
    >
      <GitHubIcon className={styles.logo} />
      <span className={styles.text}>Continuar con GitHub</span>
    </Button>
  )
}
