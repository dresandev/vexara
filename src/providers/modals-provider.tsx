import { LoginModal } from '~/components/modals/login-modal'
import { RegisterModal } from '~/components/modals/register-modal'
import { ShopCartModal } from '~/components/modals/shop-cart-modal'
import { CheckoutAuthModal } from '~/components/modals/checkout-auth-modal'

export const ModalsProvider = () => {
  return (
    <div id='modal-container'>
      <LoginModal />
      <RegisterModal />
      <ShopCartModal />
      <CheckoutAuthModal />
    </div>
  )
}
