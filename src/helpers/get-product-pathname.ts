import { simpleSlugify } from '~/utils'

export const getProductPathName = (id: string, name: string) => {
  return `/product/${id}CT${simpleSlugify(name)}`
}
