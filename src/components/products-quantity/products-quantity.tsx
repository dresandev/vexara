'use client'

import { useCartStore } from '~/store/use-cart-store'
import { useHasMounted } from '~/hooks/use-has-mounted'

interface ProductsQuantityProps {
  className?: string
}

export const ProductsQuantity: React.FC<ProductsQuantityProps> = ({
  className
}) => {
  const totalProducts = useCartStore(state => state.getTotalProducts())
  const hasMounted = useHasMounted()

  if (!hasMounted || !totalProducts) return

  return (
    <span className={className}>
      {totalProducts}
    </span>
  )
}
