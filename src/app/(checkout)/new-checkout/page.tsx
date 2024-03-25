'use client'

import { useCartStore } from '~/store/use-cart-store'
import { NoProductsInCart } from '~/components/no-products-in-cart'
import { CheckoutForm } from './_components/checkout-form'
import { SummaryCard } from './_components/summary-card'
import styles from './page.module.css'

export default function NewCheckoutPage() {
  const cart = useCartStore(state => state.cart)

  if (!cart.length) return (
    <div className={styles.centerWrapper}>
      <NoProductsInCart />
    </div>
  )

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
