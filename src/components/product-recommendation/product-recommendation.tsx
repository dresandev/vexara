import { getProductRecommendations } from '~/helpers/get-recommendations'
import { Carousel } from '~/components/carousel'
import { ProductRecommendationCard } from '~/components/cards/recommendation-product-card'
import styles from './product-recommendation.module.css'

interface Props {
  quantity?: number
  category?: string
}

export const ProductRecommendation: React.FC<Props> = async ({
  quantity = 8,
  category
}) => {
  const products = await getProductRecommendations({ quantity, category })

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Te puede interesar</h2>

      <Carousel>
        {products.map(({
          id,
          images: [image, hoverImage],
          name,
          price,
          discount,
        }) => (
          <ProductRecommendationCard
            key={id}
            id={id}
            className={styles.productCard}
            imageUrl={image.url}
            hoverImageUrl={hoverImage.url}
            name={name}
            price={price.toNumber()}
            discount={discount}
          />
        ))}
      </Carousel>
    </section>
  )
}
