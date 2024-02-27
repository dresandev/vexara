import Link from 'next/link'
import { SideModal } from '~/components/SideModal'
import { HeartIcon } from '~/components/SVG/HeartIcon'
import { CloseIcon } from '~/components/SVG'
import styles from './ShopCartModal.module.css'

export const ShopCartModal = () => {
  return (
    <SideModal
      className={styles.modal}
      fragment='#shopping-cart'
    >
      <Link
        aria-label='Cerrar'
        className={styles.closeModalLink}
        href=''
        scroll={false}
      >
        <CloseIcon />
      </Link>

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
          className='button'
          href='/'
          scroll={false}
        >
          Descrubir
        </Link>
      </div>
    </SideModal>
  )
}
