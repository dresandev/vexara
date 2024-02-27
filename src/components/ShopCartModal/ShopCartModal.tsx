import Link from 'next/link'
import { products } from '~/data/products'
import { SideModal } from '~/components/SideModal'
import { HeartIcon } from '~/components/SVG'
import { ProductsInCart } from '~/components/ProductsInCart'
import { NoProductsInCart } from '~/components/NoProductsInCart'
import styles from './ShopCartModal.module.css'

export const ShopCartModal = () => {
  const productsInCart = products['jackets-and-coats']

  return (
    <SideModal
      className={styles.modal}
      fragment='#shopping-cart'
    >
      <div className={styles.header}>
        <span className={styles.title}>
          Cesta
        </span>
        <Link
          className={styles.favoritesLink}
          href='/favorites'
        >
          <HeartIcon
            width={15}
            height={15}
          />
          Favoritos
        </Link>
      </div>

      {
        productsInCart.length > 0 ? (
          <ProductsInCart products={productsInCart} />
        ) : (
          <NoProductsInCart />
        )
      }
    </SideModal>
  )
}
