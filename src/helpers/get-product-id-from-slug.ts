const PRODUCT_ID_SEPARATOR = 'CT'

export const getProductIdFromSlug = (slug: string) => {
  if (!slug.includes(PRODUCT_ID_SEPARATOR)) return

  return slug.split(PRODUCT_ID_SEPARATOR)[0]
}
