export type ProductCategory =
  'all' |
  'shirts' |
  'jackets-and-coats' |
  'shoes' |
  'sweatshirts-and-sweaters' |
  'pants-and-jeans'

export interface Stock {
  size: string
  amount: number
}

export interface Product {
  id: string
  name: string
  price: number
  discount: number | null
  stock: Stock[]
  images: string[]
  category: ProductCategory
}
