import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from '~/components/login-form'
import { GitHubLoginButton } from '~/components/github-login-button'
import { OrSeparator } from '~/components/or-separator'
import { Button } from '~/components/ui/button'
import styles from './checkout-auth-modal.module.css'

export const CheckoutAuthModal = () => {
  return (
    <SideModal urlFragment='#checkout-auth'>
      <h2 className={styles.title}>Accede o crea tu cuenta</h2>
      <LoginForm authOptions={{ redirectTo: '/new-checkout' }} />
      <GitHubLoginButton options={{ redirectTo: '/new-checkout' }} />
      <p>
        Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la{' '}
        <Link href=''>
          Política de Privacidad
        </Link>
      </p>
      <OrSeparator />
      <p>No tengo cuenta</p>

      <Button variant='outlined' asChild>
        <Link href='#register'>
          Crear una cuenta
        </Link>
      </Button>

      <Button variant='text' asChild>
        <Link href='/new-checkout'>
          Continuar como invitado
        </Link>
      </Button>
    </SideModal>
  )
}
