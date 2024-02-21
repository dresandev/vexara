import { Product, ProductCategory } from '~/types'
import { jacketsAndCoats } from './jackets-and-coats'
import { pantsAndJeans } from './pants-and-jeans'
import { shirts } from './shirts'
import { shoes } from './shoes'
import { sweatshirtsAndSweaters } from './sweatshirts-and-sweaters'

export const products: { [key in ProductCategory | 'all']: Product[] } = {
  'all': [
    ...jacketsAndCoats,
    ...pantsAndJeans,
    ...shirts,
    ...shoes,
    ...sweatshirtsAndSweaters,
  ],
  'jackets-and-coats': jacketsAndCoats,
  'pants-and-jeans': pantsAndJeans,
  'shirts': shirts,
  'shoes': shoes,
  'sweatshirts-and-sweaters': sweatshirtsAndSweaters,
}
