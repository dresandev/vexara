import Link from 'next/link'
import { notFound } from 'next/navigation'
import { db } from '~/lib/db'
import { getProductIdFromSlug } from '~/helpers/get-product-id-from-slug'
import { ProductPrice } from '~/components/product-price'
import { ProductRecommendation } from '~/components/product-recommendation'
import { BuildingStoreIcon, TruckDeliveryIcon } from '~/components/svg'
import { ProductInfoCard } from './_components/product-info-card'
import { AddToCart } from './_components/add-to-cart'
import styles from './page.module.css'

interface Props {
  params: { slug: string }
}

export default async function ProductPage({
  params: { slug }
}: Props) {
  const productId = getProductIdFromSlug(slug)
  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      images: true,
      sizes: true,
      category: { select: { name: true } },
    }
  })

  if (!product) notFound()

  const { id, images, name, discount, sizes, category } = product
  const price = product.price.toNumber()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fixedContainer}>
          <section className={styles.images}>
            {images.map(({ id, url }, i) => (
              <img
                key={id}
                className={styles.image}
                src={url}
                alt={`${name}-${i + 1}`}
              />
            ))}
          </section>
        </div>

        <section className={styles.details}>
          <h1 className={styles.title}>
            {name}
          </h1>
          <ProductPrice
            price={price}
            discount={discount}
            showDiscount
          />

          <AddToCart product={{
            id,
            name,
            price,
            discount,
            sizes,
            images,
          }} />

          <div className={styles.productInfo}>
            <ProductInfoCard
              leadingIcon={<BuildingStoreIcon />}
              mainText='Recogida en tienda'
            />
            <ProductInfoCard
              leadingIcon={<TruckDeliveryIcon />}
              mainText='Envío a domicilio estándar'
              secondaryText='En pedidos superiores a 199,900 COP'
            />
          </div>

          <div className={styles.productLinks}>
            <Link href='' className={styles.productLink}>
              Composición, cuidados y origen
            </Link>
            <Link href='' className={styles.productLink}>
              Envíos y devoluciones
            </Link>
            <Link href='' className={styles.productLink}>
              Disponibilidad en tienda
            </Link>
          </div>
        </section>
      </div>

      <ProductRecommendation
        quantity={8}
        category={category.name}
      />
    </>
  )
}
