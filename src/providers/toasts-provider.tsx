import { Toaster } from '~/components/ui/toaster'
import { AuthSuccessToast } from '~/components/toasts/auth-success-toast'
import { PurchaseSuccessToast } from '~/components/toasts/purchase-success-toast'

export const ToastsProvider = () => {
  return (
    <>
      <Toaster />
      <AuthSuccessToast />
      <PurchaseSuccessToast />
    </>
  )
}
