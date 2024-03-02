import { ProductCategory } from '~/types'
import { getRandomNumbers } from '~/helpers/get-random-numbers'
import { getProductsByCategory } from '~/helpers/get-products'

interface getRecommendationProps {
  quantity: number
  category: ProductCategory | 'all'
}

export const getRecommendations = ({
  quantity,
  category,
}: getRecommendationProps) => {
  const products = getProductsByCategory(category)
  const numbersLength = (quantity > products.length)
    ? products.length
    : quantity
  const randomIndexes = getRandomNumbers(numbersLength, products.length - 1)
  const recommendations = randomIndexes.map(index => products.at(index)!)

  return recommendations
}
