'use client'

import { CartProduct } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import styles from './change-quantity.module.css'

interface Props {
  product: CartProduct
}

export const ChangeQuantity: React.FC<Props> = ({
  product,
}) => {
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity)

  const quantity = product.size.quantity

  const handleValueChange = (value: number) => {
    if (quantity + value < 1) return

    updateProductQuantity(product, quantity + value)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handleValueChange(-1)}
      >-</button>
      <span className={styles.quantity}>
        {quantity}
      </span>
      <button
        className={styles.button}
        onClick={() => handleValueChange(+1)}
      >+</button>
    </div>
  )
}
