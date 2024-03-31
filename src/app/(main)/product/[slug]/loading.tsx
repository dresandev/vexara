import { Skeleton } from '~/components/ui/skeleton'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.image} />
      <div className={styles.details}>
        <Skeleton className={styles.title} />
        <Skeleton className={styles.price} />
      </div>
    </div>
  )
}
