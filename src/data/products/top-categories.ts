import { ProductCategory as CategorySlug } from '~/types'

interface TopCategory {
  category: string
  imagePath: string
  pagePath: CategorySlug
}

const BASE_IMAGE_URL = '/images/products/categories/man'

export const topCategories: TopCategory[] = [
  {
    category: 'Cazadoras y abrigos',
    imagePath: `${BASE_IMAGE_URL}/abrigos.webp`,
    pagePath: 'jackets-and-coats',
  },
  {
    category: 'Pantalones y jean',
    imagePath: `${BASE_IMAGE_URL}/jeans.webp`,
    pagePath: 'pants-and-jeans',
  },
  {
    category: 'Sudaderas y jerséis',
    imagePath: `${BASE_IMAGE_URL}/sudaderas.webp`,
    pagePath: 'sweatshirts-and-sweaters',
  },
  {
    category: 'Camisetas',
    imagePath: `${BASE_IMAGE_URL}/camisetas.webp`,
    pagePath: 'shirts',
  },
  {
    category: 'Zapatos',
    imagePath: `${BASE_IMAGE_URL}/calzado.webp`,
    pagePath: 'shoes',
  },
]
