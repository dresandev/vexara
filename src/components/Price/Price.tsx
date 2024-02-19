import { formatPrice } from '~/helpers/format-price'
import styles from './Price.module.css'

interface PriceProps {
  price: number
  discount: number | null
  displayDiscount?: boolean
}

export const Price: React.FC<PriceProps> = ({
  discount,
  price,
  displayDiscount = false,
}) => {
  const formattedPrice = formatPrice(price)
  const formattedPriceWithDiscount = discount && (
    formatPrice(price - (price * discount / 100))
  )

  const priceWithDiscountElement = (
    <span className={styles.priceWithDiscount}>
      {formattedPriceWithDiscount}
    </span>
  )
  const oldPriceElement = (
    <del className={styles.oldPrice}>
      {formattedPrice}
    </del>
  )

  const priceAndOrDiscountElements = displayDiscount
    ? (
      <>
        <div>
          {priceWithDiscountElement}
          <span className={styles.discount}>
            {`-${discount}%`}
          </span>
        </div>
        {oldPriceElement}
      </>
    ) : (
      <>
        {priceWithDiscountElement}
        {oldPriceElement}
      </>
    )

  const result = formattedPriceWithDiscount
    ? priceAndOrDiscountElements
    : (
      <span className={styles.price}>
        {formattedPrice}
      </span>
    )

  return result
}
