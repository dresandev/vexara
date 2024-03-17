import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductToCart } from '~/types'

interface CartState {
  cart: ProductToCart[]
  addProductToCart: (product: ProductToCart) => void
  removeProduct: (product: ProductToCart) => void
  getSummaryInformation: () => { total: number }
  updateProductQuantity: (product: ProductToCart, quantity: number) => void
  getTotalProducts: () => number
}

export const useCartStore = create<CartState>()(
  persist((set, get) => ({
    cart: [],
    addProductToCart: (product) => {
      const { cart } = get()

      const productInCart = cart.some(
        ({ id, size }) => id === product.id && size.name === product.size.name
      )

      if (!productInCart) {
        return set({ cart: [...cart, product] })
      }

      const updatedCartProducts = cart.map(item =>
        item.id === product.id && item.size.name === product.size.name
          ? {
            ...item,
            size: {
              ...item.size,
              quantity: item.size.quantity + product.size.quantity,
            }
          }
          : item
      )

      set({ cart: updatedCartProducts })
    },
    removeProduct: (product) => {
      const { cart } = get()

      const updatedCartProducts = cart.filter(
        ({ id, size }) => id !== product.id || size.name !== product.size.name
      )

      set({ cart: updatedCartProducts })
    },
    getSummaryInformation: () => {
      const { cart } = get()

      const total = cart.reduce(
        (accumulator, product) => {
          const { price, discount, size: { quantity } } = product

          const discountedPrice = discount
            ? price - (price * discount / 100)
            : price

          const productTotal = quantity * discountedPrice

          return accumulator + productTotal
        },
        0
      )

      return { total }
    },
    updateProductQuantity: (product, quantity) => {
      const { cart } = get()

      const updatedCartProducts = cart.map(item =>
        item.id === product.id && item.size.name === product.size.name
          ? { ...item, size: { ...item.size, quantity: quantity } }
          : item
      )

      set({ cart: updatedCartProducts })
    },
    getTotalProducts: () => {
      const { cart } = get()
      return cart.reduce((total, item) => total + item.size.quantity, 0)
    },
  }), { name: 'cart' })
)
