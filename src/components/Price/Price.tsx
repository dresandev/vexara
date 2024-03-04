import clsx from 'clsx'
import { formatPrice } from '~/helpers/format-price'
import styles from './price.module.css'

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
      { [styles.flexDirectionColumn]: displayDiscount }
    )}>
      <>
        <div className={styles.priceWithDiscount}>
          {formattedDiscountedPrice}
          {
            displayDiscount && (
              <span className={styles.discount}>
                {`-${discount}%`}
              </span>
            )
          }
        </div>
        <del className={styles.oldPrice}>
          {formattedPrice}
        </del>
      </>
    </div>
  )
}
