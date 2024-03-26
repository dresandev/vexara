import Link from 'next/link'
import { auth } from '~/auth'
import { db } from '~/lib/db'
import { CartProduct } from '~/types'
import { SideModal } from '~/components/ui/side-modal'
import { ProductsQuantity } from '~/components/products-quantity'
import { HeartIcon } from '~/components/svg'
import { ProductsInCart } from './products-in-cart'
import { Summary } from './summary'
import styles from './shop-cart-modal.module.css'

export const ShopCartModal = async () => {
  const session = await auth()
  const isAuthenticated = !!session
  let cart: CartProduct[] = []

  if (isAuthenticated) {
    const cartItems = await db.cartItem.findMany({
      where: { userId: session.user?.id },
      select: { image: true, quantity: true, size: true, product: true }
    })

    cart = cartItems.map(({ product, size, image, quantity }) => ({
      id: product.id,
      name: product.name,
      discount: product.discount,
      price: product.price.toNumber(),
      size: {
        ...size,
        quantity,
      },
      image: image.url
    }) as CartProduct)
  }

  return (
    <SideModal fragment='#shop-cart'>
      <div className={styles.header}>
        <span className={styles.title}>
          Cesta{' '}
          <ProductsQuantity
            className={styles.productsQuantity}
            inBrackets
          />
        </span>
        <Link
          className={styles.favoritesLink}
          href='/favorites'
        >
          <HeartIcon
            width={15}
            height={15}
          />
          Favoritos
        </Link>
      </div>

      <ProductsInCart initialCart={cart} />
      <Summary />
    </SideModal>
  )
}
