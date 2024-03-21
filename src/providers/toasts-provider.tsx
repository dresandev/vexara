import { Toast } from '~/components/ui/toast'
import { AuthSuccessToast } from '~/components/toasts/auth-success-toast'
import { PurchaseSuccessToast } from '~/components/toasts/purchase-success-toast'

export const ToastsProvider = () => {
  return (
    <div id='toast-container'>
      <Toast />
      <AuthSuccessToast />
      <PurchaseSuccessToast />
    </div>
  )
}
