'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import type { Product, Size } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { SizeSelector } from '~/components/size-selector'
import { Button } from '~/components/ui/button'
import { AddToFavoritesButton } from '~/components/add-to-favorites-button'
import styles from './add-to-cart.module.css'

interface Props {
  product: Product
}

export const AddToCart: React.FC<Props> = ({
  product
}) => {
  const [selectedSize, setSelectedSize] = useState<Size | null | undefined>()
  const [isPending, startTransition] = useTransition()
  const session = useSession()
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const { sizes, images } = product

  const handleAddToCart = () => {
    startTransition(async () => {
      if (!selectedSize) return setSelectedSize(null)

      const imageToCart = images[2]
      const quantityToCart = 1

      if (session.status === 'authenticated') {
        await fetch('/api/cart', {
          method: 'POST',
          body: JSON.stringify({
            quantity: quantityToCart,
            productId: product.id,
            imageId: imageToCart.id,
            sizeId: selectedSize.id,
          })
        })
      }

      addProductToCart({
        ...product,
        size: {
          ...selectedSize,
          quantity: quantityToCart,
        },
        image: imageToCart.url
      })
      setSelectedSize(undefined)
      toast.success('Producto añadido a la cesta', {
        action: (
          <Link
            className={styles.goToCartLink}
            href='#shop-cart'
            scroll={false}
          >
            Ir a la cesta
          </Link>
        ),
      })
    })
  }

  return (
    <>
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onChange={setSelectedSize}
      />
      {selectedSize === null && (
        <p className={styles.sizeRequiredMessage}>
          Debes seleccionar una talla
        </p>
      )}
      <div className={styles.actions}>
        <Button
          variant='success'
          disabled={isPending}
          onClick={handleAddToCart}
        >
          Añadir a la cesta
        </Button>
        <AddToFavoritesButton />
      </div>
    </>
  )
}
