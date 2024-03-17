import { Image } from '~/types'

type ProductCategory =
  't-shirts' |
  'jackets-and-coats' |
  'shoes' |
  'sweatshirts-and-sweaters' |
  'pants-and-jeans'

export const getProductImagePaths = (
  productCategory: ProductCategory,
  productName: string
): Image[] => {
  const imageBasePath = `/images/products/${productCategory}/${productName}`
  return [
    { url: `${imageBasePath}/front.webp` },
    { url: `${imageBasePath}/back.webp` },
    { url: `${imageBasePath}/full.webp` },
  ]
}
