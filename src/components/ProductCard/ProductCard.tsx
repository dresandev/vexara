import Link from 'next/link'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { Price } from '~/components/Price'
import { AddToFavoritesButton } from '~/components/AddToFavoritesButton'
import { ImageCarousel } from './ImageCarousel'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  id: string,
  images: string[]
  name: string
  price: number
  discount: number | null
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  images,
  name,
  price,
  discount,
}) => {
  return (
    <figure className={styles.card}>
      <ImageCarousel
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
        <Price
          discount={discount}
          price={price}
          displayDiscount
        />
        <AddToFavoritesButton
          className={styles.addToFavorites}
        />
      </div>
    </figure>
  )
}
