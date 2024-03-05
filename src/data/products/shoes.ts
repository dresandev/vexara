import { Product } from '~/types'
import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getShoesImagePaths = (product: string) => (
  getProductImagePaths(
    'shoes',
    product
  )
)

export const shoes: Product[] = [
  {
    id: 'sh1',
    name: 'Deportivas sin cordones combinadas con rejilla hombre',
    price: 299000,
    discount: 53,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-sin-cordones-combinadas-con-rejilla-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh2',
    name: 'Botines acordonados suela track hombre',
    price: 309000,
    discount: 54,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 0,
      },
      {
        size: '43',
        quantity: 0,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'botines-acordonados-suela-track-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh3',
    name: 'Deportivas tejido knit hombre',
    price: 229000,
    discount: null,
    stock: [
      {
        size: '39',
        quantity: 0,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-tejido-knit-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh4',
    name: 'Zapatillas combinadas hombre',
    price: 109000,
    discount: 26,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 0,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh5',
    name: 'Zapatillas suela acabado sierra hombre',
    price: 129000,
    discount: null,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-suela-acabado-sierra-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh6',
    name: 'Deportivas combinadas con piezas plateadas y rejilla hombre',
    price: 249000,
    discount: 43,
    stock: [
      {
        size: '39',
        quantity: 0,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 13,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-combinadas-con-piezas-plateadas-y-rejilla-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh7',
    name: 'Zapatillas abotinadas multicapas hombre',
    price: 249000,
    discount: 39,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 0,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 10,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-abotinadas-multicapas-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh8',
    name: 'Zapatillas llavero hombre',
    price: 189000,
    discount: 63,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 0,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-llavero-hombre'
    ),
    category: 'shoes',
  },
  {
    id: 'sh9',
    name: 'Zapatillas combinadas hombre lr',
    price: 129000,
    discount: 46,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 32,
      },
      {
        size: '42',
        quantity: 32,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre-lr'
    ),
    category: 'shoes',
  },
  {
    id: 'sh10',
    name: 'Zapatillas multicapas hombre',
    price: 229000,
    discount: 52,
    stock: [
      {
        size: '39',
        quantity: 100,
      },
      {
        size: '40',
        quantity: 0,
      },
      {
        size: '41',
        quantity: 0,
      },
      {
        size: '42',
        quantity: 0,
      },
      {
        size: '43',
        quantity: 43,
      },
      {
        size: '44',
        quantity: 0,
      },
      {
        size: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-multicapas-hombre'
    ),
    category: 'shoes',
  },
]
