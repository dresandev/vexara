// import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { Payment } from 'mercadopago'
import { PaymentMetadata, metadataProduct, paymentProduct } from '~/types'
import { client } from '~/lib/mercadopago'
import { db } from '~/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const dataId = body.data.id
    /*
    // production validation
    const xSignature = request.headers.get('x-signature')
    const xRequestId = request.headers.get('x-request-id')

    if (!xSignature || !xRequestId || !dataId) {
      return new NextResponse('Bad request', { status: 400 })
    }

    const [ts, hash] = xSignature
    .split(',')
    .map((part) => part.split('=')[1].trim())

    const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`

    const sha = crypto
    .createHmac('sha256', process.env.MERCADOPAGO_WEBHOOK_SECRET)
    .update(manifest)
      .digest('hex')

      if (sha !== hash) {
        return new NextResponse('Bad request', { status: 400 })
      }
    */
    const { metadata } = await new Payment(client).get({ id: dataId })

    const { user_id, products_info } = metadata as PaymentMetadata

    const orderItems = products_info.map((productInfo) => ({
      quantity: productInfo.size.quantity,
      productId: productInfo.id,
      sizeId: productInfo.size.id!,
    }))

    await db.order.create({
      data: {
        userId: user_id,
        orderItems: {
          createMany: { data: orderItems }
        }
      }
    })

    return NextResponse.json(null, { status: 201 })
  } catch (error) {
    return new NextResponse('Bad request', { status: 400 })
  }
}
