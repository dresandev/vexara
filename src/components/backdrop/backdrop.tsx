'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useUiStore } from '~/store/use-ui-store'
import styles from './backdrop.module.css'

export const Backdrop = () => {
  const showBackdrop = useUiStore(state => state.showBackdrop)

  return (
    <Link
      aria-label='Cerrar modal'
      className={clsx(
        styles.backdrop,
        { [styles.show]: showBackdrop },
      )}
      href='?'
      scroll={false}
      draggable={false}
    ></Link>
  )
}
