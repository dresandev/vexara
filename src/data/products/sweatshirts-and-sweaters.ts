import { Product } from '~/types'
import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getSweatshirtsAndSweatersImagePaths = (product: string) => (
  getProductImagePaths(
    'sweatshirts-and-sweaters',
    product
  )
)

export const sweatshirtsAndSweaters: Product[] = [
  {
    id: 'sns1',
    name: 'Sudadera cremallera capucha',
    price: 179900,
    discount: null,
    stock: [
      {
        size: 'XXS',
        amount: 100,
      },
      {
        size: 'XS',
        amount: 60,
      },
      {
        size: 'S',
        amount: 32,
      },
      {
        size: 'M',
        amount: 32,
      },
      {
        size: 'L',
        amount: 32,
      },
      {
        size: 'XL',
        amount: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns2',
    name: 'Sudadera capucha denim boxy fit efecto lavado',
    price: 249000,
    discount: null,
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
        amount: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-denim-boxy-fit-efecto-lavado'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns3',
    name: 'Sudadera BERSHKA ft. BIZARRAP capucha detalle',
    price: 359000,
    discount: 72,
    stock: [
      {
        size: 'XS',
        amount: 0,
      },
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 32,
      },
      {
        size: 'L',
        amount: 32,
      },
      {
        size: 'XL',
        amount: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-bershka-ft-bizzarap-capucha-detalle'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns4',
    name: 'Jersey cuello alto cremallera',
    price: 199900,
    discount: 60,
    stock: [
      {
        size: 'XXS',
        amount: 10,
      },
      {
        size: 'XS',
        amount: 0,
      },
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 0,
      },
      {
        size: 'L',
        amount: 0,
      },
      {
        size: 'XL',
        amount: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'jersey-cuello-alto-cremallera'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns5',
    name: 'Sudadera capucha racing',
    price: 179900,
    discount: 55,
    stock: [
      {
        size: 'XXS',
        amount: 0,
      },
      {
        size: 'XS',
        amount: 60,
      },
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 32,
      },
      {
        size: 'L',
        amount: 12,
      },
      {
        size: 'XL',
        amount: 2,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-racing'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns6',
    name: 'Sudadera capucha print',
    price: 179900,
    discount: 55,
    stock: [
      {
        size: 'XXS',
        amount: 100,
      },
      {
        size: 'XS',
        amount: 60,
      },
      {
        size: 'S',
        amount: 32,
      },
      {
        size: 'M',
        amount: 0,
      },
      {
        size: 'L',
        amount: 0,
      },
      {
        size: 'XL',
        amount: 32,
      },
      {
        size: 'XXL',
        amount: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-print'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns7',
    name: 'Sudadera capucha cremallera print',
    price: 189900,
    discount: 57,
    stock: [
      {
        size: 'XXS',
        amount: 0,
      },
      {
        size: 'XS',
        amount: 0,
      },
      {
        size: 'S',
        amount: 0,
      },
      {
        size: 'M',
        amount: 0,
      },
      {
        size: 'L',
        amount: 32,
      },
      {
        size: 'XL',
        amount: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-cremallera-print'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns8',
    name: 'Sudadera capucha print lr',
    price: 179900,
    discount: 55,
    stock: [
      {
        size: 'XXS',
        amount: 0,
      },
      {
        size: 'XS',
        amount: 60,
      },
      {
        size: 'S',
        amount: 32,
      },
      {
        size: 'M',
        amount: 32,
      },
      {
        size: 'L',
        amount: 0,
      },
      {
        size: 'XL',
        amount: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-print-lr'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns9',
    name: 'Sudadera cremallera capucha lr',
    price: 179900,
    discount: 55,
    stock: [
      {
        size: 'XXS',
        amount: 0,
      },
      {
        size: 'XS',
        amount: 60,
      },
      {
        size: 'S',
        amount: 32,
      },
      {
        size: 'M',
        amount: 0,
      },
      {
        size: 'L',
        amount: 32,
      },
      {
        size: 'XL',
        amount: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha-lr'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    id: 'sns10',
    name: 'Sudadera cremallera capucha sv',
    price: 179900,
    discount: 55,
    stock: [
      {
        size: 'XXS',
        amount: 0,
      },
      {
        size: 'XS',
        amount: 0,
      },
      {
        size: 'S',
        amount: 32,
      },
      {
        size: 'M',
        amount: 0,
      },
      {
        size: 'L',
        amount: 32,
      },
      {
        size: 'XL',
        amount: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha-sv'
    ),
    category: 'sweatshirts-and-sweaters',
  },
]
