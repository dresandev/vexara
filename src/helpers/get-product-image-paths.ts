import { CategorySlug } from '~/types'

export const getProductImagePaths = (
  productType: CategorySlug,
  product: string
) => {
  const imageBasePath = `/images/products/${productType}/${product}`
  return [
    `${imageBasePath}/front.webp`,
    `${imageBasePath}/back.webp`,
    `${imageBasePath}/full.webp`,
  ]
}
