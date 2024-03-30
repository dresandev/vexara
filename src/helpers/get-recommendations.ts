import { db } from '~/lib/db'
import { getRandomNumbers } from '~/helpers/get-random-numbers'

interface Props {
  quantity: number
  category?: string
}

export const getProductRecommendations = async ({
  quantity,
  category,
}: Props) => {
  const products = await db.product.findMany({
    where: { category: { name: category } },
    include: { images: true },
  })

  const numbersLength = (quantity > products.length)
    ? products.length
    : quantity
  const randomIdx = getRandomNumbers(numbersLength, products.length - 1)
  const productRecommendations = randomIdx.map(idx => products.at(idx)!)

  return productRecommendations
}
