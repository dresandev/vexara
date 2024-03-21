import styles from './page.module.css'

export default function UserOrdersPage() {
  return (
    <>
      <h1 className={styles.title}>Mis compras</h1>

      <div className={styles.empty}>
        <img
          width={200}
          height={200}
          src='/images/decoration/desert.webp'
          alt=''
        />
        <h2 className={styles.subtitle}>Aun no tienes compras online</h2>
      </div>
    </>
  )
}
