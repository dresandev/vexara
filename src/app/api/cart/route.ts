import { NextResponse } from 'next/server'
import { CartItemSchema } from '~/schemas'
import { auth } from '~/auth'
import { db } from '~/lib/db'

export async function POST(req: Request) {
  try {
    const session = await auth()
    const isAuthenticated = !!session

    if (!isAuthenticated || !session.user?.id) {
      return new NextResponse('Unauthorized', { status: 403 })
    }

    const body = await req.json()

    const validatedBody = CartItemSchema.safeParse(body)

    if (!validatedBody.success) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const { quantity, productId, imageId, sizeId, } = body

    await db.cartItem.create({
      data: {
        userId: session.user.id,
        quantity,
        productId,
        imageId,
        sizeId,
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log('[CART_UPDATE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
