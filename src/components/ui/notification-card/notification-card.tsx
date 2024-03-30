'use client'

import clsx from 'clsx'
import { useUnmountComponent } from '~/hooks/use-unmount-component'
import { CircleCheckIcon, ExclamationCircleIcon } from '~/components/svg'
import styles from './notification-card.module.css'

type Variant = 'success' | 'error'

interface Props {
  variant: Variant
  message: string
}

const icons: { [key in Variant]: React.ReactNode } = {
  success: <CircleCheckIcon />,
  error: <ExclamationCircleIcon />,
}

const ANIMATION_TOTAL_TIME = 1600
const VISIBLE_TIME = ANIMATION_TOTAL_TIME + 5000
const UNMOUNT_TIME = VISIBLE_TIME + 1000

export const NotificationCard: React.FC<Props> = ({
  variant = 'success',
  message,
}) => {
  const { hide, mount } = useUnmountComponent({
    hideTime: VISIBLE_TIME,
    unmountTime: UNMOUNT_TIME,
  })

  if (!mount) return

  return (
    <div className={clsx(
      styles.wrapper,
      styles[variant],
      { [styles.hide]: hide }
    )}>
      <span className={styles.icon}>
        {icons[variant]}
      </span>
      <p className={clsx(
        styles.message,
        styles[variant]
      )}>
        {message}
      </p>
    </div>
  )
}
