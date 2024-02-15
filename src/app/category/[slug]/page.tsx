import { notFound } from 'next/navigation'
import { isValidCategorySlug } from '~/helpers/is-valid-category-slug'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({
  params
}: CategoryPageProps) {
  if (!isValidCategorySlug(params.slug)) notFound()

  return (
    <>
      <h1>{params.slug}</h1>
    </>
  )
}
