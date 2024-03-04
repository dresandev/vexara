import Link from 'next/link'
import { ShoppingBagIcon, UserIcon, VexaraLogo } from '~/components/svg'
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
          aria-label='Ver cesta'
          href='#shopping-cart'
          scroll={false}
        >
          <ShoppingBagIcon />
        </Link>
      </header>
    </div>
  )
}
