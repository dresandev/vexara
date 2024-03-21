const PRODUCT_ID_SEPARATOR = 'CT'

export const getProductIdFromSlug = (slug: string) => {
  return slug.split(PRODUCT_ID_SEPARATOR)[0]
}
