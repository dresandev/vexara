'use client'

import { useCartStore } from '~/store/use-cart-store'
import { CartProductCard } from '~/components/CartProductCard'
import { Summary } from '~/components/Summary'
import { NoProductsInCart } from '~/components/NoProductsInCart'
import styles from './ProductsInCart.module.css'

export const ProductsInCart = () => {
  const cart = useCartStore(state => state.cart)

  if (cart.length <= 0) return (
    <NoProductsInCart />
  )

  return (
    <>
      <div className={styles.container}>
        {
          cart.map(({
            id,
            image,
            price,
            discount,
            name,
            stock,
          }) => (
            <CartProductCard
              key={id}
              id={id}
              image={image}
              price={price}
              discount={discount}
              name={name}
              stock={stock}
            />
          ))
        }
      </div>
      <Summary />
    </>
  )
}
