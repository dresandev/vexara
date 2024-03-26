'use client'

import { useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export const PurchaseSuccessToast = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const wasShown = useRef(false)

  useEffect(() => {
    if (wasShown.current || searchParams.get('status') !== 'approved') return
    router.replace('?')
    toast.success('Pago realizado con éxito.')
    wasShown.current = true
  }, [router, searchParams])

  return null
}
