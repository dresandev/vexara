import { Product } from '~/types'
import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getJacketsOrCoatsImagePaths = (product: string) => (
  getProductImagePaths(
    'jackets-and-coats',
    product
  )
)

export const jacketsAndCoats: Product[] = [
  {
    id: 'jac1',
    name: 'Cazadora denim capucha rayas',
    price: 249000,
    discount: 55,
    stock: [
      {
        size: 'S',
        amount: 100,
      },
      {
        size: 'M',
        amount: 60,
      },
      {
        size: 'L',
        amount: 32,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-denim-capucha-rayas'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac2',
    name: 'Cazadora efecto piel bandas laterales',
    price: 329000,
    discount: 66,
    stock: [
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 123,
      },
      {
        size: 'L',
        amount: 2,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-efecto-piel-bandas-laterales'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac3',
    name: 'Cazadora bomber con nylon efecto lavado',
    price: 359000,
    discount: 69,
    stock: [
      {
        size: 'S',
        amount: 50,
      },
      {
        size: 'M',
        amount: 60,
      },
      {
        size: 'L',
        amount: 32,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-bomber-con-nylon-efecto-lavado'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac4',
    name: 'Cazadora biker oversize efecto piel desgastada',
    price: 459000,
    discount: 76,
    stock: [
      {
        size: 'S',
        amount: 80,
      },
      {
        size: 'M',
        amount: 70,
      },
      {
        size: 'L',
        amount: 0,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-biker-oversize-efecto-piel-desgastada'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac5',
    name: 'Cazadora denim biker',
    price: 329000,
    discount: 66,
    stock: [
      {
        size: 'S',
        amount: 70,
      },
      {
        size: 'M',
        amount: 60,
      },
      {
        size: 'L',
        amount: 39,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-denim-biker'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac6',
    name: 'Cazadora capucha oversize con nylon',
    price: 299000,
    discount: null,
    stock: [
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 160,
      },
      {
        size: 'L',
        amount: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-oversize-con-nylon'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac7',
    name: 'Cazadora capucha ligera nylon bolsillos',
    price: 299000,
    discount: 63,
    stock: [
      {
        size: 'S',
        amount: 78,
      },
      {
        size: 'M',
        amount: 6,
      },
      {
        size: 'L',
        amount: 2,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-ligera-nylon-bolsillos'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac8',
    name: 'Cazadora capucha ligera nylon',
    price: 199900,
    discount: 60,
    stock: [
      {
        size: 'S',
        amount: 9,
      },
      {
        size: 'M',
        amount: 50,
      },
      {
        size: 'L',
        amount: 12,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-ligera-nylon'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac9',
    name: 'Cazadora reflectante capucha',
    price: 149900,
    discount: 46,
    stock: [
      {
        size: 'S',
        amount: 60,
      },
      {
        size: 'M',
        amount: 20,
      },
      {
        size: 'L',
        amount: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-reflectante-capucha'
    ),
    category: 'jackets-and-coats',
  },
  {
    id: 'jac10',
    name: 'Chaleco utility',
    price: 249000,
    discount: 55,
    stock: [
      {
        size: 'S',
        amount: 90,
      },
      {
        size: 'M',
        amount: 10,
      },
      {
        size: 'L',
        amount: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'chaleco-utility'
    ),
    category: 'jackets-and-coats',
  },
]
