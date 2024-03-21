'use server'

import { redirect } from 'next/navigation'
import { Preference } from 'mercadopago'
import { client } from '~/lib/mercadopago'
import { db } from '~/lib/db'
import { absoluteUrl } from '~/utils'

export const mercadopagoRedirect = async (pathname: string) => {
  // const preference = new Preference(client)

  // const url = absoluteUrl(pathname)

  // const { sandbox_init_point } = await preference.create({
  //   body: {
  //     items: [
  //       {
  //         id: 'testID',
  //         title: 'Mi producto',
  //         quantity: 1,
  //         unit_price: 10000
  //       },
  //     ],
  //     auto_return: 'approved',
  //     back_urls: {
  //       success: url,
  //       failure: url,
  //     },
  //     notification_url: `${url}/api/payment-webhook`
  //   }
  // })

  // redirect(sandbox_init_point!)
}
