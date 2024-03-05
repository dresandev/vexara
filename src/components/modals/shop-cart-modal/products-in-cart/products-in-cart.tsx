'use client'

import { useCartStore } from '~/store/use-cart-store'
import { CartProductCard } from '~/components/cards/cart-product-card'
import { Summary } from '../summary'
import { NoProductsInCart } from '../no-products-in-cart'
import styles from './products-in-cart.module.css'

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
              key={`${id}-${stock.size}`}
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
