import { notFound } from 'next/navigation'
import { getProductsByCategory } from '~/helpers/get-products'
import { ProductCategory } from '~/types'

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({
  params
}: CategoryPageProps) {
  const products = getProductsByCategory(params.slug as ProductCategory)

  if (!products) notFound()

  return (
    <>
      <h1>{params.slug}</h1>
    </>
  )
}
