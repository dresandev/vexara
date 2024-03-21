import { NextRequest, NextResponse } from 'next/server'
import { Payment } from 'mercadopago'
import { client } from '~/lib/mercadopago'

export async function POST(request: NextRequest) {
  try {
    const body: { data: { id: string } } = await request.json()
    const payment = await new Payment(client).get({ id: body.data.id })
    console.log(payment)
    return NextResponse.json({ success: true })
  } catch (error) {
    return new NextResponse('._.', { status: 400 })
  }
}
