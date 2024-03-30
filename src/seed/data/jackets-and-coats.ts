import { SeedProduct } from '~/types'
import { getProductImagePaths } from '../helpers/get-product-image-paths'

const getJacketsOrCoatsImagePaths = (product: string) => (
  getProductImagePaths(
    'jackets-and-coats',
    product
  )
)

export const jacketsAndCoats: SeedProduct[] = [
  {
    name: 'Cazadora denim capucha rayas',
    price: 249000,
    discount: 55,
    sizes: [
      {
        name: 'S',
        quantity: 100,
      },
      {
        name: 'M',
        quantity: 60,
      },
      {
        name: 'L',
        quantity: 32,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-denim-capucha-rayas'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
  {
    name: 'Cazadora efecto piel bandas laterales',
    price: 329000,
    discount: 66,
    sizes: [
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 123,
      },
      {
        name: 'L',
        quantity: 2,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-efecto-piel-bandas-laterales'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
  {
    name: 'Cazadora bomber con nylon efecto lavado',
    price: 359000,
    discount: 69,
    sizes: [
      {
        name: 'S',
        quantity: 50,
      },
      {
        name: 'M',
        quantity: 60,
      },
      {
        name: 'L',
        quantity: 32,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-bomber-con-nylon-efecto-lavado'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
  {
    name: 'Cazadora biker oversize efecto piel desgastada',
    price: 459000,
    discount: 76,
    sizes: [
      {
        name: 'S',
        quantity: 80,
      },
      {
        name: 'M',
        quantity: 70,
      },
      {
        name: 'L',
        quantity: 0,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-biker-oversize-efecto-piel-desgastada'
    ),
    category: 'jackets-and-coats',
  },
  {
    name: 'Cazadora denim biker',
    price: 329000,
    discount: 66,
    sizes: [
      {
        name: 'S',
        quantity: 70,
      },
      {
        name: 'M',
        quantity: 60,
      },
      {
        name: 'L',
        quantity: 39,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-denim-biker'
    ),
    category: 'jackets-and-coats',
  },
  {
    name: 'Cazadora capucha oversize con nylon',
    price: 299000,
    discount: null,
    sizes: [
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 160,
      },
      {
        name: 'L',
        quantity: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-oversize-con-nylon'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
  {
    name: 'Cazadora capucha ligera nylon bolsillos',
    price: 299000,
    discount: 63,
    sizes: [
      {
        name: 'S',
        quantity: 78,
      },
      {
        name: 'M',
        quantity: 6,
      },
      {
        name: 'L',
        quantity: 2,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-ligera-nylon-bolsillos'
    ),
    category: 'jackets-and-coats',
  },
  {
    name: 'Cazadora capucha ligera nylon',
    price: 199900,
    discount: 60,
    sizes: [
      {
        name: 'S',
        quantity: 9,
      },
      {
        name: 'M',
        quantity: 50,
      },
      {
        name: 'L',
        quantity: 12,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-capucha-ligera-nylon'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
  {
    name: 'Cazadora reflectante capucha',
    price: 149900,
    discount: 46,
    sizes: [
      {
        name: 'S',
        quantity: 60,
      },
      {
        name: 'M',
        quantity: 20,
      },
      {
        name: 'L',
        quantity: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'cazadora-reflectante-capucha'
    ),
    category: 'jackets-and-coats',
  },
  {
    name: 'Chaleco utility',
    price: 249000,
    discount: 55,
    sizes: [
      {
        name: 'S',
        quantity: 90,
      },
      {
        name: 'M',
        quantity: 10,
      },
      {
        name: 'L',
        quantity: 52,
      },
    ],
    images: getJacketsOrCoatsImagePaths(
      'chaleco-utility'
    ),
    category: 'jackets-and-coats',
    isFeatured: true
  },
]
