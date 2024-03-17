import Link from 'next/link'
import type { Image } from '@prisma/client'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { ProductPrice } from '~/components/product-price'
import { AddToFavoritesButton } from '~/components/add-to-favorites-button'
import { CarouselImage } from './carousel-image'
import styles from './product-card.module.css'

interface Props {
  id: string,
  images: Image[]
  name: string
  price: number
  discount: number | null
}

export const ProductCard: React.FC<Props> = ({
  id,
  images,
  name,
  price,
  discount,
}) => {
  return (
    <figure className={styles.card}>
      <CarouselImage
        images={images}
        alt={name}
      />
      <Link
        className={styles.linkWrapper}
        href={getProductPathName(id, name)}
      >
        {name}
      </Link>
      <div className={styles.details}>
        <figcaption className={styles.name}>
          {name}
        </figcaption>
        <AddToFavoritesButton
          className={styles.addToFavorites}
        />
        <ProductPrice
          discount={discount}
          price={price}
          showDiscount
        />
      </div>
    </figure>
  )
}
