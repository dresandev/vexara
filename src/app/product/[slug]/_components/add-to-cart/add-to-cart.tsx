'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { useToastStore } from '~/store/use-toast-store'
import { SizeSelector } from '~/components/size-selector'
import { CircleCheckIcon } from '~/components/svg'
import { Button } from '~/components/ui/button'
import { AddToFavoritesButton } from '~/components/add-to-favorites-button'
import styles from './add-to-cart.module.css'

interface AddToCartProps {
  product: Product
}

export const AddToCart: React.FC<AddToCartProps> = ({
  product
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>('')
  const notifyToast = useToastStore(state => state.notifyToast)
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const { id, name, price, discount, size, images } = product

  const handleAddToCart = () => {
    if (!selectedSize) return setSelectedSize(null)

    addProductToCart({
      id,
      name,
      price,
      discount,
      size: {
        name: selectedSize,
        quantity: 1,
      },
      image: images[2].url
    })

    setSelectedSize('')

    notifyToast({
      leadingIcon: <CircleCheckIcon
        color='var(--success-color)'
      />,
      title: 'Producto añadido a la cesta',
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
  }

  return (
    <>
      <SizeSelector
        size={size}
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
          onClick={handleAddToCart}
        >
          Añadir a la cesta
        </Button>
        <AddToFavoritesButton />
      </div>
    </>
  )
}
