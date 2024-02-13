type ProductType =
  'shirts' |
  'jackets-and-coats' |
  'shoes' |
  'sweatshirts-and-sweaters' |
  'pants-and-jeans'

export const getProductImagePaths = (productType: ProductType, product: string) => {
  const imagePath = `/images/products/${productType}/${product}`
  return [
    `${imagePath}/front.webp`,
    `${imagePath}/back.webp`,
    `${imagePath}/full.webp`,
  ]
}
