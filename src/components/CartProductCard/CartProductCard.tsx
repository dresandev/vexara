import Link from 'next/link'
import { Stock } from '~/types'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { Price } from '~/components/Price'
import { RemoveProductButton } from './RemoveProductButton'
import { ChangeQuantity } from './ChangeQuantity'
import styles from './CartProductCard.module.css'

interface CartProductCardProps {
  id: string
  image: string
  price: number
  discount: number | null
  name: string
  stock: Stock
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
  id,
  image,
  price,
  discount,
  name,
  stock,
}) => {
  const productPathname = getProductPathName(id, name)
  const totalPrice = price * stock.quantity

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
          <Price
            price={totalPrice}
            discount={discount}
          />
          <RemoveProductButton
            product={{
              id,
              image,
              price,
              discount,
              name,
              stock,
            }}
          />
        </div>

        <div className={styles.middleArea}>
          <Link href={productPathname}>
            {name}
          </Link>
          <div className={styles.orderInfo}>
            <span>{stock.size}</span>
            {
              stock.quantity > 1 && (
                <>
                  <span>{stock.quantity}x</span>
                  <Price
                    price={price}
                    discount={discount}
                  />
                </>
              )
            }
          </div>
        </div>

        <ChangeQuantity
          product={{
            id,
            image,
            price,
            discount,
            name,
            stock,
          }}
        />
      </div>
    </div >
  )
}
