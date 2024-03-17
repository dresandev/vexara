import { SeedProduct } from '~/types'
import { getProductImagePaths } from '../helpers/get-product-image-paths'

const getSweatshirtsAndSweatersImagePaths = (product: string) => (
  getProductImagePaths(
    'sweatshirts-and-sweaters',
    product
  )
)

export const sweatshirtsAndSweaters: SeedProduct[] = [
  {
    name: 'Sudadera cremallera capucha',
    price: 179900,
    discount: null,
    sizes: [
      {
        name: 'XXS',
        quantity: 100,
      },
      {
        name: 'XS',
        quantity: 60,
      },
      {
        name: 'S',
        quantity: 32,
      },
      {
        name: 'M',
        quantity: 32,
      },
      {
        name: 'L',
        quantity: 32,
      },
      {
        name: 'XL',
        quantity: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera capucha denim boxy fit efecto lavado',
    price: 249000,
    discount: null,
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
        quantity: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-denim-boxy-fit-efecto-lavado'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera BERSHKA ft. BIZARRAP capucha detalle',
    price: 359000,
    discount: 72,
    sizes: [
      {
        name: 'XS',
        quantity: 0,
      },
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 32,
      },
      {
        name: 'L',
        quantity: 32,
      },
      {
        name: 'XL',
        quantity: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-bershka-ft-bizzarap-capucha-detalle'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Jersey cuello alto cremallera',
    price: 199900,
    discount: 60,
    sizes: [
      {
        name: 'XXS',
        quantity: 10,
      },
      {
        name: 'XS',
        quantity: 0,
      },
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 0,
      },
      {
        name: 'L',
        quantity: 0,
      },
      {
        name: 'XL',
        quantity: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'jersey-cuello-alto-cremallera'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera capucha racing',
    price: 179900,
    discount: 55,
    sizes: [
      {
        name: 'XXS',
        quantity: 0,
      },
      {
        name: 'XS',
        quantity: 60,
      },
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 32,
      },
      {
        name: 'L',
        quantity: 12,
      },
      {
        name: 'XL',
        quantity: 2,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-racing'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera capucha print',
    price: 179900,
    discount: 55,
    sizes: [
      {
        name: 'XXS',
        quantity: 100,
      },
      {
        name: 'XS',
        quantity: 60,
      },
      {
        name: 'S',
        quantity: 32,
      },
      {
        name: 'M',
        quantity: 0,
      },
      {
        name: 'L',
        quantity: 0,
      },
      {
        name: 'XL',
        quantity: 32,
      },
      {
        name: 'XXL',
        quantity: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-print'
    ),
    category: 'sweatshirts-and-sweaters',
  },
  {
    name: 'Sudadera capucha cremallera print',
    price: 189900,
    discount: 57,
    sizes: [
      {
        name: 'XXS',
        quantity: 0,
      },
      {
        name: 'XS',
        quantity: 0,
      },
      {
        name: 'S',
        quantity: 0,
      },
      {
        name: 'M',
        quantity: 0,
      },
      {
        name: 'L',
        quantity: 32,
      },
      {
        name: 'XL',
        quantity: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-cremallera-print'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera capucha print lr',
    price: 179900,
    discount: 55,
    sizes: [
      {
        name: 'XXS',
        quantity: 0,
      },
      {
        name: 'XS',
        quantity: 60,
      },
      {
        name: 'S',
        quantity: 32,
      },
      {
        name: 'M',
        quantity: 32,
      },
      {
        name: 'L',
        quantity: 0,
      },
      {
        name: 'XL',
        quantity: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-capucha-print-lr'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera cremallera capucha lr',
    price: 179900,
    discount: 55,
    sizes: [
      {
        name: 'XXS',
        quantity: 0,
      },
      {
        name: 'XS',
        quantity: 60,
      },
      {
        name: 'S',
        quantity: 32,
      },
      {
        name: 'M',
        quantity: 0,
      },
      {
        name: 'L',
        quantity: 32,
      },
      {
        name: 'XL',
        quantity: 0,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha-lr'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
  {
    name: 'Sudadera cremallera capucha sv',
    price: 179900,
    discount: 55,
    sizes: [
      {
        name: 'XXS',
        quantity: 0,
      },
      {
        name: 'XS',
        quantity: 0,
      },
      {
        name: 'S',
        quantity: 32,
      },
      {
        name: 'M',
        quantity: 0,
      },
      {
        name: 'L',
        quantity: 32,
      },
      {
        name: 'XL',
        quantity: 32,
      },
    ],
    images: getSweatshirtsAndSweatersImagePaths(
      'sudadera-cremallera-capucha-sv'
    ),
    category: 'sweatshirts-and-sweaters',
    isFeatured: true
  },
]
