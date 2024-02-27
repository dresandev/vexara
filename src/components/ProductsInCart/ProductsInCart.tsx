import clsx from 'clsx'
import { Product } from '~/types'
import { CartProductCard } from '~/components/CartProductCard'
import utilStyles from '~/styles/utils.module.css'
import styles from './ProductsInCart.module.css'

interface ProductsInCartProps {
  products: Product[]
}

export const ProductsInCart: React.FC<ProductsInCartProps> = ({
  products
}) => {
  return (
    <>
      <div className={styles.productContainer}>
        {
          products.map(({
            id,
            images,
            price,
            name,
            stock,
          }) => (
            <CartProductCard
              key={id}
              id={id}
              image={images[2]}
              price={price}
              name={name}
              size={stock[0].size}
            />
          ))
        }
      </div>

      <div className={styles.summary}>
        <div className={styles.total}>
          <div>
            <span className={styles.totalText}>
              Total
            </span>
            <span className={styles.legalText}>
              (IVA Incluido)
            </span>
          </div>

          <span className={styles.price}>
            1,304,800 COP
          </span>
        </div>
        <button className={clsx(
          utilStyles.button,
          styles.processOrderButton
        )}>
          Tramitar pedido
        </button>
      </div>
    </>
  )
}
