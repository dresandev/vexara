import Link from 'next/link'
import { Size } from '~/types'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { ProductPrice } from '~/components/product-price'
import { RemoveProductButton } from './remove-product-button'
import { ChangeQuantity } from './change-quantity'
import styles from './cart-product-card.module.css'

interface Props {
  id: string
  image: string
  price: number
  discount: number | null
  name: string
  size: Size
}

export const CartProductCard: React.FC<Props> = ({
  id,
  image,
  price,
  discount,
  name,
  size,
}) => {
  const productPathname = getProductPathName(id, name)
  const totalPrice = price * size.quantity

  return (
    <div className={styles.card}>
      <Link
        className={styles.imageLink}
        href={productPathname}
      >
        <img
          className={styles.image}
          src={image}
          alt=''
          width={110}
          height={140}
        />
      </Link>

      <div className={styles.info}>
        <div className={styles.topArea}>
          <ProductPrice
            price={totalPrice}
            discount={discount}
          />
          <RemoveProductButton product={{
            id,
            image,
            price,
            discount,
            name,
            size,
          }} />
        </div>

        <div className={styles.middleArea}>
          <Link href={productPathname}>
            {name}
          </Link>
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

        <ChangeQuantity product={{
          id,
          image,
          price,
          discount,
          name,
          size,
        }} />
      </div>
    </div >
  )
}
