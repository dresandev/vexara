import Link from 'next/link'
import { ShoppingBagIcon, UserIcon, VexaraLogo } from '~/components/SVG'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link
          className={styles.link}
          href='/'
        >
          Hombre
        </Link>
        <Link
          className={styles.homeLink}
          aria-label='Volver a la página de inicio'
          href='/'
        >
          <VexaraLogo />
        </Link>
        <button
          aria-label='Acceder o crear cuenta'
          type='button'
        >
          <UserIcon />
        </button>
        <button
          aria-label='Ver cesta'
          type='button'
        >
          <ShoppingBagIcon />
        </button>
      </header>
    </div>
  )
}
