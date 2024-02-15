import { getRecommendations } from '~/helpers/get-recommendations'
import { Carousel } from '~/components/Carousel'
import { ProductCard } from '~/components/ProductCard'
import styles from './ProductRecommendation.module.css'

export const ProductRecommendation = () => {
  const recommendations = getRecommendations()

  return (
    <section className={styles.recommendationsSection}>
      <h2 className={styles.title}>Te puede interesar</h2>

      <Carousel>
        {
          recommendations.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              className={styles.productCard}
              imagePath={product.images[0]}
              hoverImagePath={product.images[1]}
              name={product.name}
              price={product.price}
              discount={product.discount}
            />
          ))
        }
      </Carousel>
    </section>
  )
}
