export const simpleSlugify = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace('/', '-')
}

export function absoluteUrl(path: string) {
  return `${process.env.APP_URL}${path}`
}
