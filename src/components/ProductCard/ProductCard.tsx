import Link from 'next/link'
import clsx from 'clsx'
import { simpleSlugify } from '~/utils/simple-slugify'
import { Price } from '~/components/Price'
import { ProductImage } from './ProductImage'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  className?: string
  id: string,
  imagePath: string
  hoverImagePath: string
  name: string
  price: number
  discount: number | null
}

export const ProductCard: React.FC<ProductCardProps> = ({
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
      href={`/product/${simpleSlugify(name)}CT${id}`}
    >
      <figure className={clsx(
        styles.card,
        className
      )}>
        <ProductImage
          src={imagePath}
          hoverSrc={hoverImagePath}
          name={name}
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
