'use client'

import clsx from 'clsx'
import { useCartStore } from '~/store/use-cart-store'
import styles from './products-quantity.module.css'

interface Props {
  className?: string
  inBrackets?: boolean
}

export const ProductsQuantity: React.FC<Props> = ({
  className,
  inBrackets = false
}) => {
  const totalProducts = useCartStore(state => state.cart.length)

  if (!totalProducts) return

  return (
    <span className={clsx(
      { [styles.inBrackets]: inBrackets },
      className
    )}>
      {totalProducts}
    </span>
  )
}
