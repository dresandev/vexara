import clsx from 'clsx'
import { formatPrice } from '~/helpers/format-price'
import styles from './product-price.module.css'

interface PriceProps {
  price: number
  discount: number | null
  showDiscount?: boolean
}

export const ProductPrice: React.FC<PriceProps> = ({
  discount,
  price,
  showDiscount = false,
}) => {
  const formattedPrice = formatPrice(price)

  if (!discount) return (
    <span className={styles.price}>
      {formattedPrice}
    </span>
  )

  const formattedDiscountedPrice = formatPrice(
    price - (price * discount / 100)
  )

  return (
    <div className={clsx(
      styles.wrapper,
      { [styles.flexDirectionColumn]: showDiscount }
    )}>
      <>
        <div className={styles.priceWithDiscount}>
          {formattedDiscountedPrice}
          {showDiscount && (
            <span className={styles.discount}>
              {`-${discount}%`}
            </span>
          )}
        </div>
        <del className={styles.oldPrice}>
          {formattedPrice}
        </del>
      </>
    </div>
  )
}
