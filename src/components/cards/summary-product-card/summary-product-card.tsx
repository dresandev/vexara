import { Size } from '~/types'
import { ProductPrice } from '~/components/product-price'
import styles from './summary-product-card.module.css'

interface Props {
  image: string
  price: number
  discount: number | null
  name: string
  size: Size
}

export const SummaryProductCard: React.FC<Props> = ({
  image,
  price,
  discount,
  name,
  size,
}) => {
  const totalPrice = price * size.quantity

  return (
    <article className={styles.card}>
      <img
        src={image}
        alt=''
        width={80}
        height={102}
      />

      <div className={styles.info}>
        <ProductPrice
          price={totalPrice}
          discount={discount}
        />
        <h3 className={styles.name}>
          {name}
        </h3>
        <div className={styles.orderInfo}>
          <span>{size.name}</span>
          {size.quantity > 1 && (
            <ProductPrice
              price={price}
              discount={discount}
            />
          )}
        </div>
      </div>
    </article>
  )
}
