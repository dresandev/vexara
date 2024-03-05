'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { useToastStore } from '~/store/use-toast-store'
import { SizeSelector } from '~/components/size-selector'
import { CircleCheckIcon } from '~/components/svg'
import { AddToCartButton } from '../add-to-cart-button'
import { AddToFavoritesButton } from '../add-to-favorites-button'
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
  const { id, name, price, discount, stock, images } = product

  const toastLeadingIcon = (
    <CircleCheckIcon
      color='var(--success-color)'
    />
  )
  const toastAction = (
    <Link
      className={styles.goToCartLink}
      href='#shop-cart'
      scroll={false}
    >
      Ir a la cesta
    </Link>
  )

  const handleAddToCart = () => {
    if (!selectedSize) return setSelectedSize(null)

    addProductToCart({
      id,
      name,
      price,
      discount,
      stock: {
        size: selectedSize,
        quantity: 1,
      },
      image: images[2]
    })

    setSelectedSize('')
    notifyToast({
      leadingIcon: toastLeadingIcon,
      title: 'Producto añadido a la cesta',
      action: toastAction,
    })
  }

  return (
    <>
      <SizeSelector
        stock={stock}
        selectedSize={selectedSize}
        onChange={setSelectedSize}
      />
      {
        selectedSize === null && (
          <p className={styles.sizeRequiredMessage}>
            Debes seleccionar una talla
          </p>
        )
      }
      <div className={styles.actions}>
        <AddToCartButton
          className={styles.addToCartButton}
          onClick={handleAddToCart}
        >
          Añadir a la cesta
        </AddToCartButton>
        <AddToFavoritesButton />
      </div>
    </>
  )
}
