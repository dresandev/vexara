import { SeedProduct } from '~/types'
import { getProductImagePaths } from '../helpers/get-product-image-paths'

const getShoesImagePaths = (product: string) => (
  getProductImagePaths(
    'shoes',
    product
  )
)

export const shoes: SeedProduct[] = [
  {
    name: 'Deportivas sin cordones combinadas con rejilla hombre',
    price: 299000,
    discount: 53,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-sin-cordones-combinadas-con-rejilla-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Botines acordonados suela track hombre',
    price: 309000,
    discount: 54,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 0,
      },
      {
        name: '43',
        quantity: 0,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'botines-acordonados-suela-track-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Deportivas tejido knit hombre',
    price: 229000,
    discount: null,
    sizes: [
      {
        name: '39',
        quantity: 0,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-tejido-knit-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas combinadas hombre',
    price: 109000,
    discount: 26,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 0,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas suela acabado sierra hombre',
    price: 129000,
    discount: null,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-suela-acabado-sierra-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Deportivas combinadas con piezas plateadas y rejilla hombre',
    price: 249000,
    discount: 43,
    sizes: [
      {
        name: '39',
        quantity: 0,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 13,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-combinadas-con-piezas-plateadas-y-rejilla-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas abotinadas multicapas hombre',
    price: 249000,
    discount: 39,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 0,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 10,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-abotinadas-multicapas-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas llavero hombre',
    price: 189000,
    discount: 63,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 0,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-llavero-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas combinadas hombre lr',
    price: 129000,
    discount: 46,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 32,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre-lr'
    ),
    category: 'shoes',
    isFeatured: true
  },
  {
    name: 'Zapatillas multicapas hombre',
    price: 229000,
    discount: 52,
    sizes: [
      {
        name: '39',
        quantity: 100,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '41',
        quantity: 0,
      },
      {
        name: '42',
        quantity: 0,
      },
      {
        name: '43',
        quantity: 43,
      },
      {
        name: '44',
        quantity: 0,
      },
      {
        name: '45',
        quantity: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-multicapas-hombre'
    ),
    category: 'shoes',
    isFeatured: true
  },
]
