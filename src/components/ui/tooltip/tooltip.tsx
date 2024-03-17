import clsx from 'clsx'
import styles from './tooltip.module.css'

interface Props {
  className?: string
  title: string
}

export const Tooltip: React.FC<Props> = ({
  className,
  title,
}) => {
  return (
    <div className={clsx(
      styles.tooltip,
      className,
    )}>
      {title}
    </div>
  )
}
