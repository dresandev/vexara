import { topCategories } from '~/data/product/categories'
import { CategoryCard } from '~/components/CategoryCard'
import styles from './ClothingCategories.module.css'

export const ClothingCategories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Top Categories</h2>
      <div className={styles.categoriesContainer}>
        {
          topCategories.map(topCategory => (
            <CategoryCard
              className={styles.categoryCard}
              key={topCategory.pagePath}
              {...topCategory}
            />
          ))
        }
      </div>
    </section>
  )
}
