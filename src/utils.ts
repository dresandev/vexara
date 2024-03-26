export const simpleSlugify = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace('/', '-')
}
