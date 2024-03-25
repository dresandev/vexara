import Link from 'next/link'
import { auth } from '~/auth'
import { ProductsQuantity } from '~/components/products-quantity'
import { ShoppingBagIcon, UserIcon, VexaraLogo } from '~/components/svg'
import styles from './header.module.css'

export const Header = async () => {
  const session = await auth()
  const isLoggedIn = !!session

  return (
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
        href={isLoggedIn ? '/user-orders' : '#login'}
        scroll={isLoggedIn}
      >
        <UserIcon />
      </Link>
      <Link
        className={styles.shopCartLink}
        aria-label='Ver cesta'
        href='#shop-cart'
        scroll={false}
      >
        <ShoppingBagIcon className={styles.bagIcon} />
        <ProductsQuantity
          className={styles.productsQuantity}
          collapse
        />
      </Link>
    </header>
  )
}
