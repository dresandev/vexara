import Link from 'next/link'
import styles from './CategoryCard.module.css'

interface CategoryCardProps {
  className?: string
  imagePath: string
  category: string
  pagePath: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  className,
  category,
  imagePath,
  pagePath,
}) => {
  return (
    <Link
      className={styles.linkWrapper}
      href={`/category/${pagePath}`}
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
