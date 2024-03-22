import { CheckoutForm } from './_components/checkout-form'
import { SummaryCard } from './_components/summary-card'
import styles from './page.module.css'

export default function NewCheckoutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>
          Envío estándar a domicilio
        </h1>
        <CheckoutForm />
      </div>
      <SummaryCard className={styles.summaryCard} />
    </div>
  )
}
