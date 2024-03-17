export interface Size {
  name: string
  quantity: number
}

export interface Image {
  url: string
}

export interface Product {
  id: string
  name: string
  price: number
  discount: number | null
  size: Size[]
  images: Image[]
  category?: string
  isFeatured?: boolean
}

export interface ProductToCart {
  id: string
  name: string
  price: number
  discount: number | null
  size: Size
  image: string
}
