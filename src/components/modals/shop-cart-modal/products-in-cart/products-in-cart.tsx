'use client'

import { useEffect } from 'react'
import { CartProduct } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { CartProductCard } from '~/components/cards/cart-product-card'
import { NoProductsInCart } from '~/components/no-products-in-cart'
import styles from './products-in-cart.module.css'

interface Props {
  initialCart: CartProduct[]
}

export const ProductsInCart: React.FC<Props> = ({
  initialCart
}) => {
  const cart = useCartStore(state => state.cart)
  const setCart = useCartStore(state => state.setCart)

  useEffect(() => {
    setCart(initialCart)
  }, [initialCart, setCart])

  if (!cart.length) return (
    <NoProductsInCart />
  )

  return (
    <div className={styles.container}>
      {cart.map(({
        id,
        image,
        price,
        discount,
        name,
        size,
      }) => (
        <CartProductCard
          key={`${id}-${size.name}`}
          id={id}
          image={image}
          price={price}
          discount={discount}
          name={name}
          size={size}
        />
      ))}
    </div>
  )
}
