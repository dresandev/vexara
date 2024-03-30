import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartProduct } from '~/types'

// TODO: Hacer calculo de precio aqui

type State = {
  cart: CartProduct[]
}

type Actions = {
  setCart: (products: CartProduct[]) => void
  addProductToCart: (product: CartProduct) => void
  removeProduct: (product: CartProduct) => void
  getSummaryInfo: () => { total: number }
  updateProductQuantity: (product: CartProduct, quantity: number) => void
  resetCart: () => void
}

const initState: State = {
  cart: []
}

export const useCartStore = create<State & Actions>()(
  persist((set, get) => ({
    ...initState,
    setCart: (products) => {
      set({ cart: products })
    },
    addProductToCart: (product) => {
      const { cart } = get()

      const productInCart = cart.some(
        ({ id, size }) => id === product.id && size.id === product.size.id
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
    getSummaryInfo: () => {
      const { cart } = get()

      const total = cart.reduce(
        (accumulator, product) => {
          const { price, discount, size: { quantity } } = product

          const discountedPrice = discount
            ? price - (price * discount / 100)
            : price

          const productTotal = quantity * discountedPrice

          return accumulator + productTotal
        }, 0
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
    resetCart: () => {
      set(initState)
    }
  }), { name: 'cart' })
)
