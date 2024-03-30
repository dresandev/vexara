export interface Size {
  id?: string
  name: string
  quantity: number
}

export interface Image {
  id?: string
  url: string
}

export interface Product {
  id: string
  name: string
  price: number
  discount: number | null
  sizes: Size[]
  images: Image[]
}

export interface SeedProduct extends Omit<Product, 'id'> {
  category: string
  isFeatured?: boolean
}

export interface CartProduct extends Omit<Product, 'images' | 'sizes'> {
  image: Image
  size: Size
}

export interface paymentProduct {
  id: string
  totalQuantity: number
}

export interface metadataProduct {
  id: string
  size: Size
}

export interface PaymentMetadata {
  user_id: string
  products_info: metadataProduct[]
}
