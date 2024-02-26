import { ProductCategory } from '~/types'
import { products } from '~/data/products'

export const getProductById = (id: string) => {
  return products.all.find(product => product.id === id)
}

export const getProductsByCategory = (category: ProductCategory | 'all') => {
  return products[category]
}
