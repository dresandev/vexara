'use client'

import { usePathname } from 'next/navigation'
import { mercadopagoRedirect } from '~/actions/mercadopago-redirect'
import { useCartStore } from '~/store/use-cart-store'
import { formatPrice } from '~/helpers/format-price'
import { TextField } from '~/components/ui/text-field'
import { Button } from '~/components/ui/button'
import { ProductsQuantity } from '~/components/products-quantity'
import styles from './page.module.css'

export default function NewCheckoutPage() {
  const pathname = usePathname()
  const cart = useCartStore(state => state.cart)
  const getSummaryInfo = useCartStore(state => state.getSummaryInfo)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mercadopagoRedirect(pathname)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Envío estándar a domicilio</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.receptorFieldset}>
            <legend className={styles.formTitle}>
              Datos del receptor
            </legend>

            <TextField
              label='Nombre'
              value='Pancracio'
              readOnly
            />
            <TextField
              label='Apellidos'
              value='Tronchamulas'
              readOnly
            />
            <TextField
              label='Email'
              value='pancracio.elrompehuesos@gmail.com'
              readOnly
            />
            <TextField
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
      </div>

      <div className={styles.summaryCard}>
        <h2>Resumen de la compra <ProductsQuantity /></h2>
      </div>
    </div>
  )
}
