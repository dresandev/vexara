const roundDownPrice = (value: number) => {
  return Math.floor(value / 100) * 100
}

export const formatPrice = (value: number) => {
  const currency = 'COP'
  const formattedPrice = roundDownPrice(value)
    .toLocaleString('es-CO', { currency })
    .concat(` ${currency}`)

  return formattedPrice
}
