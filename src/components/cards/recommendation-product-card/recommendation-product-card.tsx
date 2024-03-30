import Link from 'next/link'
import clsx from 'clsx'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { ProductPrice } from '~/components/product-price'
import { HoverImages } from './hover-images'
import styles from './recommendation-product-card.module.css'

interface Props {
  className?: string
  id: string,
  imageUrl: string
  hoverImageUrl: string
  name: string
  price: number
  discount: number | null
}

export const ProductRecommendationCard: React.FC<Props> = ({
  className,
  id,
  imageUrl,
  hoverImageUrl,
  name,
  price,
  discount,
}) => {
  return (
    <Link
      className={styles.linkWrapper}
      href={getProductPathName(id, name)}
    >
      <figure className={clsx(
        styles.card,
        className
      )}>
        <HoverImages
          src={imageUrl}
          hoverSrc={hoverImageUrl}
          alt={name}
        />
        <div className={styles.details}>
          <figcaption className={styles.name}>
            {name}
          </figcaption>
          <ProductPrice
            discount={discount}
            price={price}
          />
        </div>
      </figure >
    </Link>
  )
}
