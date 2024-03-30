import Link from 'next/link'
import styles from './category-card.module.css'

interface Props {
  className?: string
  imageUrl: string
  name: string
  slug: string
}

export const CategoryCard: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  slug,
}) => {
  return (
    <Link
      className={styles.linkWrapper}
      href={`/category/${slug}`}
    >
      <figure className={className}>
        <span className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageUrl}
            alt=''
          />
        </span>
        <figcaption className={styles.caption}>
          {name}
        </figcaption>
      </figure>
    </Link>
  )
}
