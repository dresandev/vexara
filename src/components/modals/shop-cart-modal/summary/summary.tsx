'use client'

import { useCartStore } from '~/store/use-cart-store'
import { formatPrice } from '~/helpers/format-price'
import { Button } from '~/components/ui/button'
import styles from './summary.module.css'

export const Summary = () => {
  const getSummaryInformation = useCartStore(state => state.getSummaryInformation)

  const { total } = getSummaryInformation()

  return (
    <div className={styles.summary}>
      <div className={styles.total}>
        <div>
          <span className={styles.totalText}>
            Total
          </span>
          <span className={styles.legalText}>
            (IVA Incluido)
          </span>
        </div>

        <span className={styles.price}>
          {formatPrice(total)}
        </span>
      </div>

      <Button
        className={styles.processOrderButton}
        variant='success'
      >
        Tramitar pedido
      </Button>
    </div>
  )
}
