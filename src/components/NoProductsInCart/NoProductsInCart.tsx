import Link from 'next/link'
import clsx from 'clsx'
import utilStyles from '~/styles/utils.module.css'
import styles from './NoProductsInCart.module.css'

export const NoProductsInCart = () => {
  return (
    <div className={styles.content}>
      <img
        src='/images/decoration/bag.webp'
        alt=''
        width={200}
        height={200}
      />

      <span className={styles.emptyText}>
        Cesta vacía
      </span>
      <p className={styles.descriptionText}>
        Aún no tienes ningún artículo en la cesta, descubre todo lo que tenemos para ti
      </p>

      <Link
        className={clsx(
          utilStyles.button,
          styles.exploreButton,
        )}
        href='/'
        scroll={false}
      >
        Descrubir
      </Link>
    </div>
  )
}
