import { db } from '~/lib/db'
import { CategoryCard } from '~/components/cards/category-card'
import styles from './product-categories.module.css'

export const ProductCategories = async () => {
  const topCategories = await db.category.findMany({
    where: { isTop: true }
  })

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Top Categories</h2>
      <div className={styles.container}>
        {topCategories.map(({
          id,
          slug,
          imageUrl,
          name,
        }) => (
          <CategoryCard
            className={styles.categoryCard}
            key={id}
            slug={slug}
            imageUrl={imageUrl!}
            name={name}
          />
        ))}
      </div>
    </section>
  )
}
