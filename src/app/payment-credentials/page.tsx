import styles from './page.module.css'

export default function PaymentCredentialsPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mercado pago credenciales de prueba</h1>
      <p className={styles.description}>En ocasiones el pago es rechazado por x razón y no depende de la app, solo inténtalo más tarde.</p>
      <p>Usuario: TESTUSER1292447665</p>
      <p>Contraseña: qLv6ZM0LLb</p>
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
