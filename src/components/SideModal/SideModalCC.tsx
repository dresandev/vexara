'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import styles from './SideModal.module.css'

interface SideModalCCProps {
  children: React.ReactNode
  className?: string
}

export const SideModalCC: React.FC<SideModalCCProps> = ({
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useToggleBodyOverflow()

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  return (
    <>
      <Link
        aria-hidden
        className={styles.backdrop}
        href=''
        scroll={false}
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
