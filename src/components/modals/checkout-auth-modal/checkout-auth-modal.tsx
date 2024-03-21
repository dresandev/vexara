import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from '~/components/login-form'
import styles from './checkout-auth-modal.module.css'

export const CheckoutAuthModal = () => {
  return (
    <SideModal urlFragment='#checkout-auth'>
      <h2 className={styles.title}>Accede o crea tu cuenta</h2>
      <LoginForm authOptions={{ redirectTo: '/new-checkout' }} />
    </SideModal>
  )
}
