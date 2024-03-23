'use client'

import clsx from 'clsx'
import { useUiStore } from '~/store/use-ui-store'
import styles from './backdrop.module.css'

export const Backdrop = () => {
  const showBackdrop = useUiStore(state => state.showBackdrop)

  return (
    <div
      className={clsx(
        styles.backdrop,
        { [styles.open]: showBackdrop },
      )}
    ></div>
  )
}
