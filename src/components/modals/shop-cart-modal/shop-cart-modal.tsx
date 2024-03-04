import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { HeartIcon } from '~/components/svg'
import { ProductsInCart } from './products-in-cart'
import styles from './shop-cart-modal.module.css'

export const ShopCartModal = () => {
  return (
    <SideModal urlFragment='#shopping-cart'>
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

      <ProductsInCart />
    </SideModal>
  )
}
