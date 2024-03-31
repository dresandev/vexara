import Link from 'next/link'
import { CartProduct, Image, Size } from '~/types'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { ProductPrice } from '~/components/product-price'
import { RemoveProductButton } from './remove-product-button'
import { ChangeQuantity } from './change-quantity'
import styles from './cart-product-card.module.css'

interface Props {
  product: CartProduct
}

export const CartProductCard: React.FC<Props> = ({
  product
}) => {
  const productPathname = getProductPathName(product.id, product.name)
  const totalPrice = product.price * product.size.quantity

  return (
    <div className={styles.card}>
      <Link
        aria-label={product.name}
        className={styles.imageLink}
        href={productPathname}
      >
        <img
          className={styles.image}
          src={product.image.url}
          alt=''
          width={110}
          height={140}
        />
      </Link>

      <div className={styles.info}>
        <div className={styles.topArea}>
          <ProductPrice
            price={totalPrice}
            discount={product.discount}
          />
          <RemoveProductButton product={product} />
        </div>

        <div className={styles.middleArea}>
          <Link href={productPathname}>
            {product.name}
          </Link>
          <div className={styles.orderInfo}>
            <span>{product.size.name}</span>
            {product.size.quantity > 1 && (
              <ProductPrice
                price={product.price}
                discount={product.discount}
              />
            )}
          </div>
        </div>

        <ChangeQuantity product={product} />
      </div>
    </div >
  )
}
