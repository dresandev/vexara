import { ProductCategory as CategorySlug } from '~/types'

export const getProductImagePaths = (
  productCategorySlug: CategorySlug,
  productName: string
) => {
  const imageBasePath = `/images/products/${productCategorySlug}/${productName}`
  return [
    `${imageBasePath}/front.webp`,
    `${imageBasePath}/back.webp`,
    `${imageBasePath}/full.webp`,
  ]
}
