import { ProductCategory } from '~/types'
import { getRecommendations } from '~/helpers/get-recommendations'
import { Carousel } from '~/components/Carousel'
import { RecommendationProductCard } from '~/components/RecommendationProductCard'
import styles from './ProductRecommendation.module.css'

interface ProductRecommendationProps {
  amount?: number
  category?: ProductCategory | 'all'
}

export const ProductRecommendation: React.FC<ProductRecommendationProps> = ({
  amount = 8,
  category = 'all'
}) => {
  const recommendations = getRecommendations({ amount, category })

  return (
    <section className={styles.recommendationsSection}>
      <h2 className={styles.title}>Te puede interesar</h2>

      <Carousel>
        {
          recommendations.map(({
            id,
            images: [image, hoverImage],
            name,
            price,
            discount,
          }) => (
            <RecommendationProductCard
              key={id}
              id={id}
              className={styles.productCard}
              imagePath={image}
              hoverImagePath={hoverImage}
              name={name}
              price={price}
              discount={discount}
            />
          ))
        }
      </Carousel>
    </section>
  )
}
