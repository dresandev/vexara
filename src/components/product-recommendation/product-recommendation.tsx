'use client'

import { ProductCategory } from '~/types'
import { useHasMounted } from '~/hooks/use-has-mounted'
import { getRecommendations } from '~/helpers/get-recommendations'
import { Carousel } from '~/components/carousel'
import { RecommendationProductCard } from '~/components/cards/recommendation-product-card'
import styles from './product-recommendation.module.css'

interface ProductRecommendationProps {
  quantity?: number
  category?: ProductCategory | 'all'
}

export const ProductRecommendation: React.FC<ProductRecommendationProps> = ({
  quantity = 8,
  category = 'all'
}) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return

  const recommendations = getRecommendations({ quantity, category })

  return (
    <section className={styles.section}>
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
