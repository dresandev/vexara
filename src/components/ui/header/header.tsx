import Link from 'next/link'
import { ShoppingBagIcon } from '~/components/svg'
import { ProductsQuantity } from '~/components/products-quantity'
import { UserIcon, VexaraLogo } from '~/components/svg'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav>
          <Link
            className={styles.link}
            href='/'
          >
            Hombre
          </Link>
        </nav>

        <Link
          aria-label='Volver a la página de inicio'
          className={styles.homeLink}
          href='/'
        >
          <VexaraLogo />
        </Link>

        <Link
          aria-label='Acceder a tu cuenta'
          href='#login'
          scroll={false}
        >
          <UserIcon />
        </Link>
        <Link
          className={styles.shopCartLink}
          aria-label='Ver cesta'
          href='#shop-cart'
          scroll={false}
        >
          <ShoppingBagIcon />
          <ProductsQuantity
            className={styles.productsQuantity}
          />
        </Link>
      </header>
    </div>
  )
}
