'use server'

import { redirect } from 'next/navigation'
import { Preference } from 'mercadopago'
import type { Items } from 'mercadopago/dist/clients/commonTypes'
import { client } from '~/lib/mercadopago'
import { db } from '~/lib/db'
import { auth } from '~/auth'
import type { PaymentMetadata, metadataProduct, paymentProduct } from '~/types'
import { getPriceWithDiscount } from '~/helpers/get-price-with-discount'

export const mercadopagoRedirect = async (
  products: paymentProduct[],
  metadataProducts: metadataProduct[]
) => {
  const session = await auth()
  const isAuthenticated = !!session
  const preference = new Preference(client)

  if (!products || products.length === 0) {
    return { error: 'Products ids are required' }
  }

  if (!isAuthenticated || !session.user?.id) {
    return { error: 'Unauthorize' }
  }

  const url = process.env.APP_URL
  const items: Items[] = []

  for (const product of products) {
    const dbProduct = await db.product.findUnique({
      where: { id: product.id }
    })

    if (!dbProduct) continue

    const { id, price, discount, name } = dbProduct
    const unit_price = getPriceWithDiscount(price, discount)

    items.push({
      id,
      title: name,
      quantity: product.totalQuantity,
      unit_price,
    })
  }

  if (!items.length) {
    return { error: 'Products not found' }
  }

  const { sandbox_init_point } = await preference.create({
    body: {
      items,
      auto_return: 'approved',
      back_urls: {
        success: url,
        failure: url,
      },
      notification_url: `${url}/api/payment-webhook`,
      metadata: {
        user_id: session.user?.id,
        products_info: metadataProducts,
      } as PaymentMetadata
    }
  })

  redirect(sandbox_init_point!)
}
