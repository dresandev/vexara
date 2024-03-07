import { simpleSlugify } from '~/lib/utils'

export const getProductPathName = (id: string, name: string) => {
  return `/product/${simpleSlugify(name)}CT${id}`
}
