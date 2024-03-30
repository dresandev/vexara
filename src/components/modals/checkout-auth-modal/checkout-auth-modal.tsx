import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from '~/components/login-form'
import { SocialAuthButtons } from '~/components/social-auth-buttons'
import { OrSeparator } from '~/components/or-separator'
import { Button } from '~/components/ui/button'
import styles from './checkout-auth-modal.module.css'

export const CheckoutAuthModal = () => {
  return (
    <SideModal fragment='#checkout-auth'>
      <h2 className={styles.title}>Accede o crea tu cuenta</h2>
      <LoginForm textFieldIdSuffix='checkout' />
      <SocialAuthButtons />
      <OrSeparator />
      <p className={styles.noAccountText}>
        No tengo cuenta
      </p>
      <Button variant='outlined' asChild>
        <Link
          className={styles.noAccountLink}
          href='#register'
          scroll={false}
        >
          Crear una cuenta
        </Link>
      </Button>
    </SideModal>
  )
}
