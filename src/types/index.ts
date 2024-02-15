export type CategorySlug =
  'shirts' |
  'jackets-and-coats' |
  'shoes' |
  'sweatshirts-and-sweaters' |
  'pants-and-jeans'

interface ProductSizeAmount {
  size: string
  amount: number
}

export interface Product {
  id: string
  name: string
  price: number
  discount: number | null
  stock: ProductSizeAmount[]
  images: string[]
}
