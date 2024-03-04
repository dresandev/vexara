import { topCategories } from '~/data/products/categories'
import { CategoryCard } from '~/components/cards/category-card'
import styles from './product-categories.module.css'

export const ProductCategories = () => {
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
