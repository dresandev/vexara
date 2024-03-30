'use client'

import { useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { useCartStore } from '~/store/use-cart-store'

export const PurchaseSuccessToast = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const wasShown = useRef(false)
  const resetCart = useCartStore(state => state.resetCart)

  useEffect(() => {
    if (
      wasShown.current ||
      !searchParams.has('status')
    ) return

    if (searchParams.get('status') === 'approved') {
      resetCart()
      toast.success('Pago realizado con éxito.')
      wasShown.current = true
    }

    router.replace('?')
  }, [router, searchParams, resetCart])

  return null
}
