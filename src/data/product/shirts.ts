import { getProductImagePaths } from '~/helpers/get-product-image-paths'

const getShirtImagePaths = (product: string) => (
  getProductImagePaths(
    'shirts',
    product
  )
)

export const shirts = [
  {
    name: 'Camiseta manga corta muscle fit bandas',
    price: 99900,
    discount: 40,
    stock: [
      {
        size: 'XXS',
        amount: 100,
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
        amount: 32,
      },
      {
        size: 'L',
        amount: 43,
      },
      {
        size: 'XL',
        amount: 0,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-muscle-fit-bandas'
    ),
  },
  {
    name: 'Camiseta Dragon Ball manga corta boxy fit',
    price: 129900,
    discount: 53,
    stock: [
      {
        size: 'S',
        amount: 0,
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
    images: getShirtImagePaths(
      'camiseta-dragon-ball-manga-corta-boxy-fit'
    ),
  },
  {
    name: 'Camiseta manga corta regular fit',
    price: 59900,
    discount: 23,
    stock: [
      {
        size: 'XS',
        amount: 50,
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
        amount: 0,
      },
      {
        size: 'XL',
        amount: 32,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-regular-fit'
    ),
  },
  {
    name: 'Camiseta manga corta boxy fit print',
    price: 99900,
    discount: 40,
    stock: [
      {
        size: 'XXS',
        amount: 80,
      },
      {
        size: 'XS',
        amount: 0,
      },
      {
        size: 'S',
        amount: 43,
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
        amount: 12,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print'
    ),
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print text',
    price: 139900,
    discount: 57,
    stock: [
      {
        size: 'XXS',
        amount: 20,
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
        amount: 0,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-text'
    ),
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print character',
    price: 139900,
    discount: 57,
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
        amount: 10,
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
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-character'
    ),
  },
  {
    name: 'Camiseta BERSHKA ft. BIZARRAP boxy fit print chtx',
    price: 139900,
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
        amount: 10,
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
    images: getShirtImagePaths(
      'camiseta-bershka-ft.-bizarrap-boxy-fit-print-chtx'
    ),
  },
  {
    name: 'Camiseta manga corta boxy fit print lr',
    price: 99900,
    discount: 45,
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
        amount: 2,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print-lr'
    ),
  },
  {
    name: 'Camiseta The Notorious B.I.G. manga corta print',
    price: 129900,
    discount: 53,
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
        amount: 0,
      },
      {
        size: 'XL',
        amount: 10,
      },
    ],
    images: getShirtImagePaths(
      'camiseta-the-notorious-big-manga-corta-print'
    ),
  },
  {
    name: 'Camiseta manga corta boxy fit print xsr',
    price: 119900,
    discount: 50,
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
    images: getShirtImagePaths(
      'camiseta-manga-corta-boxy-fit-print-xsr'
    ),
  },
]
