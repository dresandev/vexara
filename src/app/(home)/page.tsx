import { HeroVideo } from '~/components/HeroVideo'
import { ClothingCategories } from '~/components/ClothingCategories'
import { PromoVideo } from '~/components/PromoVideo'
import { ProductRecommendation } from '~/components/ProductRecommendation'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <div className={styles.contentWrapper}>
        <ClothingCategories />
        <PromoVideo />
        <ProductRecommendation quantity={12} />
      </div>
    </>
  )
}
