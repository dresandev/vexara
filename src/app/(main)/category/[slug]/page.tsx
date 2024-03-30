import { notFound } from 'next/navigation'
import { db } from '~/lib/db'
import { ProductCard } from '~/components/cards/product-card'
import styles from './page.module.css'

interface Props {
  params: { slug: string }
}

export default async function CategoryPage({
  params: { slug }
}: Props) {
  const category = await db.category.findFirst({
    where: { slug },
  })

  if (!category) notFound()

  const products = await db.product.findMany({
    where: { category },
    include: { images: true }
  })
  if (!products) notFound()

  return (
    <>
      <h1 className={styles.title}>
        {category.name}
      </h1>

      <div className={styles.container}>
        {products.map(({
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
            price={price.toNumber()}
            discount={discount}
          />
        ))}
      </div>
    </>
  )
}
