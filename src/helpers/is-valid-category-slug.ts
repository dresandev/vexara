import { CategorySlug } from '~/types'

export const isValidCategorySlug = (value: string): value is CategorySlug => {
  return (value === 'shoes') ||
    (value === 'jackets-and-coats') ||
    (value === 'pants-and-jeans') ||
    (value === 'shirts') ||
    (value === 'sweatshirts-and-sweaters')
}
