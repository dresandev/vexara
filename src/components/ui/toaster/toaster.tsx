'use client'

import { Toaster as Sonner } from 'sonner'
import { inter } from '~/config/fonts'
import styles from './toaster.module.css'

type Props = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: Props) => {
  return (
    <Sonner
      theme='light'
      toastOptions={{
        className: inter.className,
        classNames: {
          icon: styles.icon
        },
      }}
      {...props}
    />
  )
}
