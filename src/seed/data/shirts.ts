import { SeedProduct } from '~/types'
import { getProductImagePaths } from '../helpers/get-product-image-paths'

const getShirtImagePaths = (product: string) => (
  getProductImagePaths(
    't-shirts',
    product
  )
)

export const shirts: SeedProduct[] = [
  {
    name: 'Camiseta manga corta muscle fit bandas',
    price: 99900,
    discount: null,
    sizes: [
      {
        name: 'XXS',
        quantity: 100,
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
        quantity: 32,
      },
      {
        name: 'L',
        quantity: 43,
      },
      {
        name: 'XL',
        quantity: 0,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-muscle-fit-bandas'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta Dragon Ball manga corta boxy fit',
    price: 129900,
    discount: 53,
    sizes: [
      {
        name: 'S',
        quantity: 0,
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
    images: getShirtImagePaths(
      'camiseta-dragon-ball-manga-corta-boxy-fit'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta manga corta regular fit',
    price: 59900,
    discount: 23,
    sizes: [
      {
        name: 'XS',
        quantity: 50,
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
        quantity: 0,
      },
      {
        name: 'XL',
        quantity: 32,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-regular-fit'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta manga corta boxy fit print',
    price: 99900,
    discount: 40,
    sizes: [
      {
        name: 'XXS',
        quantity: 80,
      },
      {
        name: 'XS',
        quantity: 0,
      },
      {
        name: 'S',
        quantity: 43,
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
        quantity: 12,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print text',
    price: 139900,
    discount: 57,
    sizes: [
      {
        name: 'XXS',
        quantity: 20,
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
        quantity: 0,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-text'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print character',
    price: 139900,
    discount: 57,
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
        quantity: 10,
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
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-character'
    ),
    category: 't-shirts',
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print chtx',
    price: 139900,
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
        quantity: 10,
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
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-chtx'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta manga corta boxy fit print lr',
    price: 99900,
    discount: 45,
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
        quantity: 2,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print-lr'
    ),
    category: 't-shirts',
    isFeatured: true
  },
  {
    name: 'Camiseta The Notorious B.I.G. manga corta print',
    price: 129900,
    discount: 53,
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
        quantity: 0,
      },
      {
        name: 'XL',
        quantity: 10,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-the-notorious-big-manga-corta-print'
    ),
    category: 't-shirts',
  },
  {
    name: 'Camiseta manga corta boxy fit print xsr',
    price: 119900,
    discount: 50,
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
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print-xsr'
    ),
    category: 't-shirts',
    isFeatured: true
  },
]
