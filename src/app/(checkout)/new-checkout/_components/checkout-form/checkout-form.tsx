'use client'

import { mercadopagoRedirect } from '~/actions/mercadopago-redirect'
import type { paymentProduct } from '~/types'
import { useCartStore } from '~/store/use-cart-store'
import { TextField } from '~/components/ui/text-field'
import { Button } from '~/components/ui/button'
import styles from './checkout-form.module.css'

export const CheckoutForm = () => {
  const cart = useCartStore(state => state.cart)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const metadataProducts = cart.map(({ id, size }) => ({
      id,
      size,
    }))

    const products = cart.reduce((acc: paymentProduct[], curr) => {
      const existingItem = acc.find(item => item.id === curr.id)

      if (existingItem) {
        existingItem.totalQuantity += curr.size.quantity
      } else {
        acc.push({
          id: curr.id,
          totalQuantity: curr.size.quantity
        })
      }

      return acc
    }, [])

    mercadopagoRedirect(products, metadataProducts)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.receptorFieldset}>
        <legend className={styles.formTitle}>
          Datos del receptor
        </legend>

        <TextField
          className={styles.textField}
          label='Nombre'
          value='Pancracio'
          readOnly
        />
        <TextField
          className={styles.textField}
          label='Apellidos'
          value='Tronchamulas'
          readOnly
        />
        <TextField
          className={styles.textField}
          label='Email'
          value='pancracio.elrompehuesos@gmail.com'
          readOnly
        />
        <TextField
          className={styles.textField}
          label='Telefono'
          value='+57 666 555 444'
          readOnly
        />
      </fieldset>

      <fieldset className={styles.addressFieldset}>
        <legend className={styles.formTitle}>
          Dirección de envío
        </legend>

        <TextField
          label='Calle y número'
          value='Avenida del Caos, 13'
          readOnly
        />
        <TextField
          label='Escalera, piso...(Opcional)'
          value='Torreón del Desorden, 4ºA'
          readOnly
        />
      </fieldset>

      <Button>Ir a pagar</Button>
    </form>
  )
}
