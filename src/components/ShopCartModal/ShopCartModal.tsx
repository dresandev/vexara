import Link from 'next/link'
import { SideModal } from '~/components/SideModal'
import { CloseModalButton } from '~/components/CloseModalButton'
import { HeartIcon } from '~/components/SVG/HeartIcon'
import { CloseIcon } from '~/components/SVG'
import styles from './ShopCartModal.module.css'

export const ShopCartModal = () => {
  return (
    <SideModal className={styles.modal}>
      <CloseModalButton className={styles.closeModalButton}>
        <CloseIcon />
      </CloseModalButton>

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
        />

        <span className={styles.emptyText}>
          Cesta vacía
        </span>
        <p className={styles.descriptionText}>
          Aún no tienes ningún artículo en la cesta, descubre todo lo que tenemos para ti
        </p>

        <CloseModalButton className={styles.starShoppingButton}>
          Comenzar a comprar
        </CloseModalButton>
      </div>
    </SideModal>
  )
}
