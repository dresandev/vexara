import { SeedProduct } from '~/types'
import { getProductImagePaths } from '../helpers/get-product-image-paths'

const getPantsAndJeansImagePaths = (product: string) => (
  getProductImagePaths(
    'pants-and-jeans',
    product
  )
)

export const pantsAndJeans: SeedProduct[] = [
  {
    name: 'Pantalón jogger cargo',
    price: 179900,
    discount: 44,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-cargo'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Jeans super skinny',
    price: 139900,
    discount: null,
    sizes: [
      {
        name: '34',
        quantity: 100,
      },
      {
        name: '36',
        quantity: 60,
      },
      {
        name: '38',
        quantity: 0,
      },
      {
        name: '40',
        quantity: 0,
      },
      {
        name: '42',
        quantity: 32,
      },
      {
        name: '44',
        quantity: 32,
      },
      {
        name: '46',
        quantity: 32,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-super-skinny'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Pantalón wide leg cargo felpa',
    price: 159900,
    discount: 37,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-wide-leg-cargo-felpa'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Jeans skinny rotos',
    price: 189900,
    discount: 47,
    sizes: [
      {
        name: 'XXS',
        quantity: 10,
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
    images: getPantsAndJeansImagePaths(
      'jeans-skinny-rotos'
    ),
    category: 'pants-and-jeans',
  },
  {
    name: 'Jeans BERSHKA ft. BIZARRAP wide leg',
    price: 35000,
    discount: 72,
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
        quantity: 12,
      },
      {
        name: 'XL',
        quantity: 2,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-bershka-ft-bizzarap-wide-leg'
    ),
    category: 'pants-and-jeans',
  },
  {
    name: 'Pantalón jogger multicargo',
    price: 249000,
    discount: 59,
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
      {
        name: 'XXL',
        quantity: 0,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-multicargo'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Jeans carrot fit rotos',
    price: 189900,
    discount: 47,
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
        quantity: 2,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-carrot-fit-rotos'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Pantalón jogger felpa parche',
    price: 159900,
    discount: 37,
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
    images: getPantsAndJeansImagePaths(
      'pantalon-jogger-felpa-parche'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
  {
    name: 'Jeans skinny',
    price: 179900,
    discount: 44,
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
        quantity: 32,
      },
    ],
    images: getPantsAndJeansImagePaths(
      'jeans-skinny'
    ),
    category: 'pants-and-jeans',
  },
  {
    name: 'Jeans baggy',
    price: 249000,
    discount: 59,
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
    images: getPantsAndJeansImagePaths(
      'jeans-baggy'
    ),
    category: 'pants-and-jeans',
    isFeatured: true
  },
]
