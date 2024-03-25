'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { useToastStore } from '~/store/use-toast-store'
import styles from './toast.module.css'

const ANIMATION_TOTAL_TIME = 300
const HIDE_TOAST_TIME = ANIMATION_TOTAL_TIME + 5000
const UNMOUNT_TOAST_TIME = HIDE_TOAST_TIME + 1000

export const Toast = () => {
  const {
    content: {
      leadingIcon,
      title,
      description,
      action,
    },
    mount,
    hide,
    unmountToast,
    setHideToast,
  } = useToastStore()

  useEffect(() => {
    let hideTimeoutId: NodeJS.Timeout
    let unmountTimeoutId: NodeJS.Timeout

    if (mount) {
      hideTimeoutId = setTimeout(
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
      clearTimeout(hideTimeoutId)
      clearTimeout(unmountTimeoutId)
    }
  }, [mount, setHideToast, unmountToast])

  if (!mount) return

  return (
    <div className={clsx(
      styles.toast,
      { [styles.hide]: hide }
    )}>
      <span className={styles.leadingIcon}>
        {leadingIcon}
      </span>
      <div>
        <div className={styles.title}>
          {title}
        </div>
        <p>{description}</p>
      </div>
      {action}
    </div>
  )
}
