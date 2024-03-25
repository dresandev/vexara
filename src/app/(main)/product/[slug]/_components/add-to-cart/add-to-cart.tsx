'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Product } from '~/types'
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
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string | null>('')
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const { id, name, price, discount, sizes, images } = product

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

    toast.success('Producto añadido a la cesta', {
      action: {
        label: 'Ir a la cesta',
        onClick: () => router.push('#shop-cart')
      },
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
          onClick={handleAddToCart}
        >
          Añadir a la cesta
        </Button>
        <AddToFavoritesButton />
      </div>
    </>
  )
}
