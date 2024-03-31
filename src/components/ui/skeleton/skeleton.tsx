import clsx from 'clsx'
import styles from './skeleton.module.css'

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      {...props}
    />
  )
}
