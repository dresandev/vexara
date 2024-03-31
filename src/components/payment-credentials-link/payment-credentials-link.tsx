import { CreditCardPayIcon } from '~/components/svg'
import styles from './payment-credentials-link.module.css'

export const PaymentCredentialsLink = () => {
  return (
    <a
      title='Ir a las credenciales de pago de prueba'
      className={styles.link}
      href='/payment-credentials'
      target='_blank'
    >
      <CreditCardPayIcon />
    </a>
  )
}
