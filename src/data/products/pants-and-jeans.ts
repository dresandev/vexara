import { Product } from '~/types'
import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getPantsAndJeansImagePaths = (product: string) => (
  getProductImagePaths(
    'pants-and-jeans',
    product
  )
)

export const pantsAndJeans: Product[] = [
  {
    id: 'paj1',
    name: 'Pantalón jogger cargo',
    price: 179900,
    discount: 44,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-cargo'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj2',
    name: 'Jeans super skinny',
    price: 139900,
    discount: null,
    stock: [
      {
        size: '34',
        amount: 100,
      },
      {
        size: '36',
        amount: 60,
      },
      {
        size: '38',
        amount: 0,
      },
      {
        size: '40',
        amount: 0,
      },
      {
        size: '42',
        amount: 32,
      },
      {
        size: '44',
        amount: 32,
      },
      {
        size: '46',
        amount: 32,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-super-skinny'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj3',
    name: 'Pantalón wide leg cargo felpa',
    price: 159900,
    discount: 37,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-wide-leg-cargo-felpa'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj4',
    name: 'Jeans skinny rotos',
    price: 189900,
    discount: 47,
    stock: [
      {
        size: 'XXS',
        amount: 10,
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
    images: getPantsAndJeansImagePaths(
      'jeans-skinny-rotos'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj5',
    name: 'Jeans BERSHKA ft. BIZARRAP wide leg',
    price: 35000,
    discount: 72,
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
        amount: 12,
      },
      {
        size: 'XL',
        amount: 2,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-bershka-ft-bizzarap-wide-leg'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj6',
    name: 'Pantalón jogger multicargo',
    price: 249000,
    discount: 59,
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
      {
        size: 'XXL',
        amount: 0,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-multicargo'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj7',
    name: 'Jeans carrot fit rotos',
    price: 189900,
    discount: 47,
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
        amount: 2,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-carrot-fit-rotos'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj8',
    name: 'Pantalón jogger felpa parche',
    price: 159900,
    discount: 37,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-felpa-parche'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj9',
    name: 'Jeans skinny',
    price: 179900,
    discount: 44,
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
        amount: 32,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-skinny'
    ),
    category: 'pants-and-jeans',
  },
  {
    id: 'paj10',
    name: 'Jeans baggy',
    price: 249000,
    discount: 59,
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
    images: getPantsAndJeansImagePaths(
      'jeans-baggy'
    ),
    category: 'pants-and-jeans',
  },
]
