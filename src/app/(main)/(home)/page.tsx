import { ProductCategories } from '~/components/product-categories'
import { ProductRecommendation } from '~/components/product-recommendation'
import { HeroVideo } from './_components/hero-video'
import { PromoVideo } from './_components/promo-video'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <div className={styles.wrapper}>
        <ProductCategories />
        <PromoVideo />
        <ProductRecommendation quantity={12} />
      </div>
    </>
  )
}
