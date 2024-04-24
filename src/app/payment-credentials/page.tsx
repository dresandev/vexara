import styles from './page.module.css'

export default function PaymentCredentialsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mercado pago credenciales de prueba</h1>
      <p className={styles.description}>En ocasiones el pago es rechazado por razones que desconozco (cabe resaltar que sucede en modo desarrollo/test) y no depende de la app, puedes intentarlo más tarde.</p>
      <p>Usuario vexara: test@test.com</p>
      <p>Contraseña vexara: test123TEST</p>
      <p>Usuario mercadopago: TESTUSER1292447665</p>
      <p>Contraseña mercadopago: qLv6ZM0LLb</p>
      <a
        className={styles.link}
        href='https://www.mercadopago.com.co/developers/es/docs/checkout-api/additional-content/your-integrations/test/cards'
        target='_blank'
      >
        Tarjetas de crédito
      </a>
    </div>
  )
}
