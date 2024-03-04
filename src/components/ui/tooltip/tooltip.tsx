import clsx from 'clsx'
import styles from './tooltip.module.css'

interface TooltipProps {
  className?: string
  title: string
}

export const Tooltip: React.FC<TooltipProps> = ({
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
