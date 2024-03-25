'use client'

import { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export const PurchaseSuccessToast = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const status = searchParams.get('status')

    if (status !== 'approved') return

    router.replace(pathname)

    toast.success('Pago realizado con éxito.')
  }, [pathname, router, searchParams])

  return null
}
