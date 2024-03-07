import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductIdFromSlug } from '~/helpers/get-product-id-from-slug'
import { getProductById } from '~/helpers/get-products'
import { ProductPrice } from '~/components/product-price'
import { ProductRecommendation } from '~/components/product-recommendation'
import { BuildingStoreIcon, TruckDeliveryIcon } from '~/components/svg'
import { ProductInfoCard } from './_components/product-info-card'
import { AddToCart } from './_components/add-to-cart'
import styles from './page.module.css'

interface ProductPageProps {
  params: { slug: string }
}

export default function ProductPage({
  params
}: ProductPageProps) {
  const productId = getProductIdFromSlug(params.slug)
  if (!productId) notFound()

  const product = getProductById(productId)
  if (!product) notFound()

  const { images, name, price, discount, category } = product

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fixedContainer}>
          <section className={styles.images}>
            {
              images.map((image, i) => (
                <img
                  key={image}
                  className={styles.image}
                  src={image}
                  alt={`${name}-${i}`}
                />
              ))
            }
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

          <AddToCart product={product} />

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
            <Link href='#' className={styles.productLink}>
              Composición, cuidados y origen
            </Link>
            <Link href='#' className={styles.productLink}>
              Envíos y devoluciones
            </Link>
            <Link href='#' className={styles.productLink}>
              Disponibilidad en tienda
            </Link>
          </div>
        </section>
      </div>

      <ProductRecommendation
        quantity={8}
        category={category}
      />
    </>
  )
}
