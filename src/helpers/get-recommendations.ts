import { ProductCategory } from '~/types'
import { getRandomNumbers } from '~/helpers/get-random-numbers'
import { getProductsByCategory } from '~/helpers/get-products'

interface getRecommendationProps {
  amount: number
  category: ProductCategory
}

export const getRecommendations = ({
  amount,
  category,
}: getRecommendationProps) => {
  const products = getProductsByCategory(category)
  const numbersAmount = (amount > products.length)
    ? products.length
    : amount
  const randomIndexes = getRandomNumbers(numbersAmount, products.length - 1)
  const recommendations = randomIndexes.map(index => products.at(index)!)

  return recommendations
}
