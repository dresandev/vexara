'use client'

import { CartProduct } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { TrashIcon } from '~/components/svg'
import styles from './remove-product-button.module.css'

interface Props {
  product: CartProduct
}

export const RemoveProductButton: React.FC<Props> = ({
  product
}) => {
  const removeProduct = useCartStore(state => state.removeProduct)

  return (
    <button
      aria-label='Remover producto de la cesta'
      className={styles.button}
      onClick={() => removeProduct(product)}
    >
      <TrashIcon
        width={20}
        height={20}
      />
    </button>
  )
}
