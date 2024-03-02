'use client'

import { useState } from 'react'
import { Product } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { SizeSelector } from '~/components/SizeSelector'
import { AddToCartButton } from '~/components/AddToCartButton'
import { AddToFavoritesButton } from '~/components/AddToFavoritesButton'
import styles from './AddToCart.module.css'

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
        <AddToCartButton onClick={handleAddToCart} />
        <AddToFavoritesButton />
      </div>
    </>
  )
}
