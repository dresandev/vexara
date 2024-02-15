import { products } from '~/data/products'
import { getRandomNumbers } from '~/helpers/get-random-numbers'

export const getRecommendations = (amount = 8) => {
  const randomIndexes = getRandomNumbers(amount, products.length - 1)
  const recommendations = randomIndexes.map(index => products.at(index)!)

  return recommendations
}
