'use client'

import clsx from 'clsx'
import { useCartStore } from '~/store/use-cart-store'
import { formatPrice } from '~/helpers/format-price'
import componentStyles from '~/styles/components.module.css'
import styles from './Summary.module.css'

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
      <button className={clsx(
        componentStyles.button,
        styles.processOrderButton
      )}>
        Tramitar pedido
      </button>
    </div>
  )
}
