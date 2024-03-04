import { notFound } from 'next/navigation'
import { ProductCategory } from '~/types'
import { productCategoryTitles } from '~/data/products/categories'
import { getProductsByCategory } from '~/helpers/get-products'
import { ProductCard } from '~/components/cards/product-card'
import styles from './page.module.css'

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({
  params
}: CategoryPageProps) {
  const productCategory = params.slug as ProductCategory
  const products = getProductsByCategory(productCategory)

  if (!products) notFound()

  const pageTitle = productCategoryTitles[productCategory]

  return (
    <>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>

      <div className={styles.productContainer}>
        {
          products.map(({
            id,
            images,
            name,
            price,
            discount,
          }) => (
            <ProductCard
              key={id}
              id={id}
              images={images}
              name={name}
              price={price}
              discount={discount}
            />
          ))
        }
      </div>
    </>
  )
}
