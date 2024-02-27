import Link from 'next/link'
import clsx from 'clsx'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { Price } from '~/components/Price'
import { Images } from './Images'
import styles from './RecommendationProductCard.module.css'

interface RecommendationProductCardProps {
  className?: string
  id: string,
  imagePath: string
  hoverImagePath: string
  name: string
  price: number
  discount: number | null
}

export const RecommendationProductCard: React.FC<RecommendationProductCardProps> = ({
  className,
  id,
  imagePath,
  hoverImagePath,
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
        <Images
          src={imagePath}
          hoverSrc={hoverImagePath}
          alt={name}
        />
        <div className={styles.details}>
          <figcaption className={styles.name}>
            {name}
          </figcaption>
          <Price
            discount={discount}
            price={price}
          />
        </div>
      </figure >
    </Link>
  )
}
