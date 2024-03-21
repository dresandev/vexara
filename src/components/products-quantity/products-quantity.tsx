'use client'

import { useCartStore } from '~/store/use-cart-store'

interface Props {
  className?: string
}

export const ProductsQuantity: React.FC<Props> = ({
  className
}) => {
  const totalProducts = useCartStore(state => state.cart.length)

  if (!totalProducts) return

  return (
    <span className={className}>
      {totalProducts}
    </span>
  )
}
