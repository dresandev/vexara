import { shirts } from '~/data/product/shirts'
import { Carousel } from '~/components/Carousel'
import { ProductCard } from '~/components/ProductCard'
import styles from './ProductRecommendation.module.css'

const shirt1 = shirts[0]
const shirt2 = shirts[1]
const shirt3 = shirts[2]
const shirt4 = shirts[3]
const shirt5 = shirts[4]

export const ProductRecommendation = () => {
  return (
    <section className={styles.recommendationsSection}>
      <h2 className={styles.title}>Te puede interesar</h2>

      <Carousel>
        <ProductCard
          className={styles.productCard}
          imagePath={shirt1.images[0]}
          hoverImagePath={shirt1.images[1]}
          name={shirt1.name}
          slug={shirt1.name}
          price={shirt1.price}
          discount={shirt1.discount}
        />
        <ProductCard
          className={styles.productCard}
          imagePath={shirt2.images[0]}
          hoverImagePath={shirt2.images[1]}
          name={shirt2.name}
          slug={shirt2.name}
          price={shirt2.price}
          discount={shirt2.discount}
        />
        <ProductCard
          className={styles.productCard}
          imagePath={shirt3.images[0]}
          hoverImagePath={shirt3.images[1]}
          name={shirt3.name}
          slug={shirt3.name}
          price={shirt3.price}
          discount={shirt3.discount}
        />
        <ProductCard
          className={styles.productCard}
          imagePath={shirt4.images[0]}
          hoverImagePath={shirt4.images[1]}
          name={shirt4.name}
          slug={shirt4.name}
          price={shirt4.price}
          discount={shirt4.discount}
        />
        <ProductCard
          className={styles.productCard}
          imagePath={shirt5.images[0]}
          hoverImagePath={shirt5.images[1]}
          name={shirt5.name}
          slug={shirt5.name}
          price={shirt5.price}
          discount={shirt5.discount}
        />
      </Carousel>
    </section>
  )
}
