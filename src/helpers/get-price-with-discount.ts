import { Decimal } from '@prisma/client/runtime/library'

export const getPriceWithDiscount = (price: Decimal, discount: number | null) => {
  const intPrice = price.toNumber()

  return discount
    ? intPrice - (intPrice * discount / 100)
    : intPrice
}
