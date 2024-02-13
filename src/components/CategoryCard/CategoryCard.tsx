import Link from 'next/link'
import styles from './CategoryCard.module.css'

interface CategoryCardProps {
  className?: string
  imagePath: string
  category: string
  pagePath: string
}

export const CategoryCard = ({
  className,
  category,
  imagePath,
  pagePath,
}: CategoryCardProps) => {
  return (
    <Link
      className={styles.linkWrapper}
      href={pagePath}
    >
      <figure className={className}>
        <span className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imagePath}
            alt=''
          />
        </span>
        <figcaption className={styles.caption}>
          {category}
        </figcaption>
      </figure>
    </Link>
  )
}
