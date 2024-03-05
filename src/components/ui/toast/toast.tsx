'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { useToastStore } from '~/store/use-toast-store'
import styles from './toast.module.css'

const HIDE_TOAST_TIME = 5000
const UNMOUNT_TOAST_TIME = HIDE_TOAST_TIME + 1000

export const Toast = () => {
  const {
    leadingIcon,
    title,
    description,
    action,
    mount,
    hide,
    unmountToast,
    setHideToast,
  } = useToastStore()

  useEffect(() => {
    let hideToastTimeoutId: NodeJS.Timeout
    let unmountTimeoutId: NodeJS.Timeout

    if (mount) {
      hideToastTimeoutId = setTimeout(
        () => setHideToast(true),
        HIDE_TOAST_TIME
      )
      unmountTimeoutId = setTimeout(
        () => {
          unmountToast()
          setHideToast(false)
        },
        UNMOUNT_TOAST_TIME
      )
    }

    return () => {
      clearTimeout(hideToastTimeoutId)
      clearTimeout(unmountTimeoutId)
    }
  }, [mount, setHideToast, unmountToast])

  if (!mount) return

  return (
    <div className={clsx(
      styles.toast,
      { [styles.hide]: hide }
    )}>
      {leadingIcon}

      <div>
        <div className={styles.title}>
          {title}
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>

      {action}
    </div>
  )
}
