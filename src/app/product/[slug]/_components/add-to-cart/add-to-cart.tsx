'use client'

import { useState } from 'react'
import { Product } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { SizeSelector } from '~/components/size-selector'
import { AddToCartButton } from '~/app/product/[slug]/_components/add-to-cart-button'
import { AddToFavoritesButton } from '~/app/product/[slug]/_components/add-to-favorites-button'
import styles from './add-to-cart.module.css'

interface AddToCartProps {
  product: Product
}

export const AddToCart: React.FC<AddToCartProps> = ({
  product
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>('')
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const { id, name, price, discount, stock, images } = product

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
