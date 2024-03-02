import { create } from 'zustand'
import { persist } from "zustand/middleware"
import { ProductToCart } from '~/types'

interface CartState {
  cart: ProductToCart[]
  addProductToCart: (product: ProductToCart) => void
  removeProduct: (product: ProductToCart) => void
  getSummaryInformation: () => { total: number }
  updateProductQuantity: (product: ProductToCart, quantity: number) => void
}

export const useCartStore = create<CartState>()(
  persist((set, get) => ({
    cart: [],
    addProductToCart: (product) => {
      const { cart } = get()

      const productInCart = cart.some(
        ({ id, stock }) => id === product.id && stock.size === product.stock.size
      )

      if (!productInCart) {
        return set({ cart: [...cart, product] })
      }

      const updatedCartProducts = cart.map(item =>
        item.id === product.id && item.stock.size === product.stock.size
          ? {
            ...item,
            stock: {
              ...item.stock,
              quantity: item.stock.quantity + product.stock.quantity,
            }
          }
          : item
      )

      set({ cart: updatedCartProducts })
    },
    removeProduct: (product) => {
      const { cart } = get()

      const updatedCartProducts = cart.filter(
        ({ id, stock }) => id !== product.id || stock.size !== product.stock.size
      )

      set({ cart: updatedCartProducts })
    },
    getSummaryInformation: () => {
      const { cart } = get()

      const total = cart.reduce(
        (accumulator, product) => {
          const { price, discount, stock: { quantity } } = product

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
        item.id === product.id && item.stock.size === product.stock.size
          ? { ...item, stock: { ...item.stock, quantity: quantity } }
          : item
      )

      set({ cart: updatedCartProducts })
    }
  }), { name: 'cart' })
)
