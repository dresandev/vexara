'use client'

import { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useToastStore } from '~/store/use-toast-store'
import { CircleCheckIcon } from '~/components/svg'

export const PurchaseSuccessToast = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const notifyToast = useToastStore(state => state.notifyToast)

  useEffect(() => {
    const status = searchParams.get('status')

    if (status !== 'approved') return

    router.replace(pathname)

    notifyToast({
      leadingIcon: (
        <CircleCheckIcon color='var(--success-color)' />
      ),
      title: 'Pago realizado con éxito.'
    })
  }, [notifyToast, pathname, router, searchParams])

  return null
}
