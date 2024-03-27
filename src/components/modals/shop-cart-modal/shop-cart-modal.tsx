import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { ProductsQuantity } from '~/components/products-quantity'
import { HeartIcon } from '~/components/svg'
import { ProductsInCart } from './products-in-cart'
import { Summary } from './summary'
import styles from './shop-cart-modal.module.css'

export const ShopCartModal = async () => {
  return (
    <SideModal fragment='#shop-cart'>
      <div className={styles.header}>
        <span className={styles.title}>
          Cesta{' '}
          <ProductsQuantity
            className={styles.productsQuantity}
            inBrackets
          />
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

      <ProductsInCart />
      <Summary />
    </SideModal>
  )
}
