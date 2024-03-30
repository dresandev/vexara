'use client'

import { useCartStore } from '~/store/use-cart-store'
import { CartProductCard } from '~/components/cards/cart-product-card'
import { NoProductsInCart } from '~/components/no-products-in-cart'
import styles from './products-in-cart.module.css'

export const ProductsInCart = () => {
  const cart = useCartStore(state => state.cart)

  if (!cart.length) return (
    <NoProductsInCart />
  )

  return (
    <div className={styles.container}>
      {cart.map((product) => (
        <CartProductCard
          key={`${product.id}-${product.size.name}`}
          product={product}
        />
      ))}
    </div>
  )
}
