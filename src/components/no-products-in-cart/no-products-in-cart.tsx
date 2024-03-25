import Link from 'next/link'
import { Button } from '~/components/ui/button'
import styles from './no-products-in-cart.module.css'

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
      <Button
        className={styles.exploreButton}
        asChild
      >
        <Link
          href='/'
          scroll={false}
        >
          Descrubir
        </Link>
      </Button>
    </div>
  )
}
