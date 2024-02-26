'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { useOnClickOutside } from '~/hooks/use-on-click-outside'
import styles from './SideModal.module.css'

interface SideModalProps {
  children: React.ReactNode
  className?: string
}

export const SideModal: React.FC<SideModalProps> = ({
  children,
  className,
}) => {
  const router = useRouter()
  const modalRef = useRef<HTMLDivElement>(null)
  useToggleBodyOverflow(true)
  useOnClickOutside(modalRef, router.back)

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  return (
    <>
      <div
        aria-hidden
        className={styles.backdrop}
      />
      <div
        ref={modalRef}
        tabIndex={0}
        className={clsx(
          styles.modal,
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}
