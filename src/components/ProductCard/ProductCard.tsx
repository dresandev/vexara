import Link from 'next/link'
import clsx from 'clsx'
import { formatPrice } from '~/helpers/format-price'
import { ProductImage } from './ProductImage'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  className?: string
  imagePath: string
  hoverImagePath: string
  name: string
  slug: string
  price: number
  discount: number | null
}

export const ProductCard = ({
  className,
  imagePath,
  hoverImagePath,
  name,
  slug,
  price,
  discount,
}: ProductCardProps) => {
  const formattedPriceWithDiscount = discount && (
    formatPrice(price - (price * discount / 100))
  )

  const formattedPrice = formatPrice(price)

  return (
    <Link className={styles.linkWrapper} href={`/product/${slug}`}>
      <figure className={clsx(styles.card, className)}>
        <ProductImage
          src={imagePath}
          hoverSrc={hoverImagePath}
          name={name}
        />
        <div className={styles.priceContainer}>
          <figcaption className={styles.name}>
            {name}
          </figcaption>
          {
            formattedPriceWithDiscount ? (
              <>
                <span className={styles.discountPrice}>
                  {formattedPriceWithDiscount}
                </span>
                <del className={styles.oldPrice}>
                  {formattedPrice}
                </del>
              </>
            ) : (
              <span className={styles.price}>
                {formattedPrice}
              </span>
            )
          }
        </div>
      </figure >
    </Link>
  )
}
