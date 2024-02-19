import { notFound } from 'next/navigation'
import { getProductIdFromSlug } from '~/helpers/get-product-id-from-slug'
import { Price } from '~/components/Price'
import { SizeSelector } from '~/components/SizeSelector'
import { AddToCartButton } from '~/components/AddToCartButton'
import { AddToFavoritesButton } from '~/components/AddToFavoritesButton'
import { ProductInfoCard } from '~/components/ProductInfoCard'
import { ProductRecommendation } from '~/components/ProductRecommendation'
import { BuildingStoreIcon, TruckDeliveryIcon } from '~/components/SVG'
import styles from './page.module.css'
import { getProductById } from '~/helpers/get-products'

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

  const { images, name, price, discount, stock, category } = product

  return (
    <>
      <div className={styles.container}>
        <section className={styles.images}>
          {
            images.map(image => (
              <img
                key={image}
                className={styles.image}
                src={image}
                alt={name}
              />
            ))
          }
        </section>
        <section className={styles.details}>
          <h1 className={styles.title}>
            {name}
          </h1>
          <Price
            price={price}
            discount={discount}
            displayDiscount
          />

          <SizeSelector stock={stock} />
          <div className={styles.actions}>
            <AddToCartButton />
            <AddToFavoritesButton />
          </div>

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
            <button className={styles.productLink}>
              Composición, cuidados y origen
            </button>
            <button className={styles.productLink}>
              Envíos y devoluciones
            </button>
            <button className={styles.productLink}>
              Disponibilidad en tienda
            </button>
          </div>
        </section>
      </div>
      <ProductRecommendation
        amount={8}
        category={category}
      />
    </>
  )
}
