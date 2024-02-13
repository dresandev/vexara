const roundDownPrice = (value: number) => {
  return Math.floor(value / 100) * 100
}

export const formatPrice = (value: number) => {
  const formattedPrice = roundDownPrice(value)
    .toLocaleString('es-CO', { currency: 'COP' })
    .concat(' COP')

  return formattedPrice
}
