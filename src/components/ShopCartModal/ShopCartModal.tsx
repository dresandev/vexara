import Link from 'next/link'
import { SideModal } from '~/components/SideModal'
import { HeartIcon } from '~/components/SVG'
import { ProductsInCart } from '~/components/ProductsInCart'
import styles from './ShopCartModal.module.css'

export const ShopCartModal = () => {
  return (
    <SideModal fragment='#shopping-cart'>
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
