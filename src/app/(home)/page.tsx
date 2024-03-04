import { HeroVideo } from '~/app/(home)/_components/hero-video'
import { ProductCategories } from '~/components/product-categories'
import { PromoVideo } from '~/app/(home)/_components/promo-video'
import { ProductRecommendation } from '~/components/product-recommendation'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <div className={styles.contentWrapper}>
        <ProductCategories />
        <PromoVideo />
        <ProductRecommendation quantity={12} />
      </div>
    </>
  )
}
