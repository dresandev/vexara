import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from '~/components/login-form'
import { SocialAuthButtons } from '~/components/social-auth-buttons'
import { OrSeparator } from '~/components/or-separator'
import { Button } from '~/components/ui/button'
import styles from './checkout-auth-modal.module.css'

export const CheckoutAuthModal = () => {
  return (
    <SideModal urlFragment='#checkout-auth'>
      <h2 className={styles.title}>Accede o crea tu cuenta</h2>
      <LoginForm
        textFieldIdSuffix='checkout'
        authOptions={{ redirectTo: '/new-checkout' }}
      />
      <SocialAuthButtons options={{ redirectTo: '/new-checkout' }} />
      <OrSeparator />
      <p className={styles.noAccountText}>
        No tengo cuenta
      </p>
      <Button variant='outlined' asChild>
        <Link
          className={styles.noAccountLink}
          href='#register'
        >
          Crear una cuenta
        </Link>
      </Button>
      <Button variant='text' asChild>
        <Link
          className={styles.noAccountLink}
          href='/new-checkout'
        >
          Continuar como invitado
        </Link>
      </Button>
    </SideModal>
  )
}
