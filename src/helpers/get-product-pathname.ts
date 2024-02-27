import { simpleSlugify } from '~/utils/simple-slugify'

export const getProductPathName = (id: string, name: string) => {
  return `/product/${simpleSlugify(name)}CT${id}`
}
