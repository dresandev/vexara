'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useCartStore } from '~/store/use-cart-store'
import { formatPrice } from '~/helpers/format-price'
import { Button } from '~/components/ui/button'
import styles from './summary.module.css'

export const Summary = () => {
  const cart = useCartStore(state => state.cart)
  const getSummaryInfo = useCartStore(state => state.getSummaryInfo)
  const session = useSession()

  if (!cart.length) return

  const isAuthenticated = session.status === 'authenticated'
  const { total } = getSummaryInfo()

  return (
    <>
      <div className={styles.total}>
        <div>
          <span className={styles.totalText}>
            Total
          </span>
          <span className={styles.legalText}>
            (IVA Incluido)
          </span>
        </div>

        <span className={styles.totalPrice}>
          {formatPrice(total)}
        </span>
      </div>
      <Button
        className={styles.processOrderButton}
        variant='success'
        asChild
      >
        <Link
          href={
            isAuthenticated
              ? '/new-checkout'
              : '?checkout=1#checkout-auth'
          }
          scroll={isAuthenticated}
        >
          Tramitar pedido
        </Link>
      </Button>
    </>
  )
}
