import { Skeleton } from '~/components/ui/skeleton'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <>
      <Skeleton className={styles.title} />
      <div className={styles.container}>
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
        <Skeleton className={styles.card} />
      </div>
    </>
  )
}
