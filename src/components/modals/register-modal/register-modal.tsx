import { SideModal } from '~/components/ui/side-modal'
import { RegisterForm } from '~/components/register-form'
import styles from './register-modal.module.css'

export const RegisterModal = () => {
  return (
    <SideModal fragment='#register'>
      <span className={styles.title}>
        Crear cuenta
      </span>
      <RegisterForm />
    </SideModal >
  )
}
