import { Toast } from '~/components/ui/toast'
import { AuthToast } from '~/components/toasts/auth-toast'

export const ToastsProvider = () => {
  return (
    <div id='toast-container'>
      <Toast />
      <AuthToast />
    </div>
  )
}
