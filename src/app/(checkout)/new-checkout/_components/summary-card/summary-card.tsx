'use client'

import clsx from 'clsx'
import { useCartStore } from '~/store/use-cart-store'
import { formatPrice } from '~/helpers/format-price'
import { ProductsQuantity } from '~/components/products-quantity'
import { SummaryProductCard } from '~/components/cards/summary-product-card'
import styles from './summary-card.module.css'

interface Props {
  className?: string
}

export const SummaryCard: React.FC<Props> = ({
  className
}) => {
  const cart = useCartStore(state => state.cart)
  const getSummaryInfo = useCartStore(state => state.getSummaryInfo)

  if (!cart.length) return

  const { total } = getSummaryInfo()

  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>
        Resumen de la compra{' '}
        <ProductsQuantity
          className={styles.productsQuantity}
          inBrackets
        />
      </h2>
      <div className={styles.productsContainer}>
        {cart.map((product) => (
          <SummaryProductCard
            key={`${product.id}-${product.size.name}`}
            product={product}
          />
        ))}
      </div>

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
    </div>
  )
}
