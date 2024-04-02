import { db } from '../lib/db'
import { categories } from './data/categories'
import { products } from './data/products'

const main = async () => {
  await Promise.all([
    db.order.deleteMany(),
    db.product.deleteMany(),
    db.category.deleteMany(),
    db.size.deleteMany(),
    db.image.deleteMany(),
  ])

  await db.category.createMany({ data: categories })

  const categoriesDB = await db.category.findMany()

  const categoriesMap = categoriesDB.reduce(
    (map: Record<string, string>, category) => {
      map[category.slug] = category.id
      return map
    }, {}
  )

  products.forEach(async (product) => {
    const { category, images, sizes, name, discount, price } = product

    await db.product.create({
      data: {
        name,
        discount,
        price,
        images: {
          createMany: { data: images }
        },
        sizes: {
          createMany: { data: sizes }
        },
        categoryId: categoriesMap[category],
      }
    })
  })
}

(() => {
  if (process.env.NODE_ENV === 'production') return

  main()
})()
