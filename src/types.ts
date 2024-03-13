export type ProductCategory =
  'shirts' |
  'jackets-and-coats' |
  'shoes' |
  'sweatshirts-and-sweaters' |
  'pants-and-jeans'

export interface Stock {
  size: string
  quantity: number
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

export interface ProductToCart {
  id: string
  name: string
  price: number
  discount: number | null
  stock: Stock
  image: string
}
