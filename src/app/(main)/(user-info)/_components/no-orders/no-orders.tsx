import styles from './no-orders.module.css'

export const NoOrders = () => {
  return (
    <div className={styles.empty}>
      <img
        width={200}
        height={200}
        src='/images/decoration/desert.webp'
        alt=''
      />
      <h2 className={styles.title}>
        Aun no tienes compras online
      </h2>
    </div>
  )
}
