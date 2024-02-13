import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getShoesImagePaths = (product: string) => (
  getProductImagePaths(
    'shoes',
    product
  )
)

export const shoes = [
  {
    name: 'Deportivas sin cordones combinadas con rejilla hombre',
    price: 299000,
    discount: 53,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-sin-cordones-combinadas-con-rejilla-hombre'
    ),
  },
  {
    name: 'Botines acordonados suela track hombre',
    price: 309000,
    discount: 54,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 0,
      },
      {
        size: 'L',
        amount: 0,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'botines-acordonados-suela-track-hombre'
    ),
  },
  {
    name: 'Deportivas tejido knit hombre',
    price: 229000,
    discount: 52,
    stock: [
      {
        size: '39',
        amount: 0,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-tejido-knit-hombre'
    ),
  },
  {
    name: 'Zapatillas combinadas hombre',
    price: 109000,
    discount: 26,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 0,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre'
    ),
  },
  {
    name: 'Zapatillas suela acabado sierra hombre',
    price: 129000,
    discount: 46,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 10,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-suela-acabado-sierra-hombre'
    ),
  },
  {
    name: 'Deportivas combinadas con piezas plateadas y rejilla hombre',
    price: 249000,
    discount: 43,
    stock: [
      {
        size: '39',
        amount: 0,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'deportivas-combinadas-con-piezas-plateadas-y-rejilla-hombre'
    ),
  },
  {
    name: 'Zapatillas abotinadas multicapas hombre',
    price: 249000,
    discount: 39,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 0,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 10,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-abotinadas-multicapas-hombre'
    ),
  },
  {
    name: 'Zapatillas llavero hombre',
    price: 189000,
    discount: 63,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 0,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-llavero-hombre'
    ),
  },
  {
    name: 'Zapatillas combinadas hombre lr',
    price: 129000,
    discount: 46,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 32,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-combinadas-hombre-lr'
    ),
  },
  {
    name: 'Zapatillas multicapas hombre',
    price: 229000,
    discount: 52,
    stock: [
      {
        size: '39',
        amount: 100,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '41',
        amount: 0,
      },
      {
        size: '42',
        amount: 0,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: '44',
        amount: 0,
      },
      {
        size: '45',
        amount: 0,
      },
    ],
    images: getShoesImagePaths(
      'zapatillas-multicapas-hombre'
    ),
  },
]
