import Link from 'next/link'
import { getProductPathName } from '~/helpers/get-product-pathname'
import { TrashIcon } from '~/components/SVG'
import styles from './CartProductCard.module.css'

interface CartProductCardProps {
  id: string
  image: string
  price: number
  name: string
  size: string
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
  id,
  image,
  price,
  name,
  size,
}) => {
  const productPathname = getProductPathName(id, name)

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
          <span className={styles.price}>
            79,900 COP
          </span>
          <button aria-label='Remover producto de la cesta'>
            <TrashIcon
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className={styles.middleArea}>
          <Link href={productPathname}>
            {name}
          </Link>
          <div className={styles.orderInfo}>
            <span>
              {size}
            </span>
            <span>
              8x
            </span>
            <span>
              79,900 COP
            </span>
          </div>
        </div>

        <div className={styles.selectAmount}>
          <button className={styles.button}>-</button>
          <input className={styles.input} type='number' />
          <button className={styles.button}>+</button>
        </div>
      </div>
    </div >
  )
}
