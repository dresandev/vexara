'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { authRoutes } from '~/routes'
import { useUiStore } from '~/store/use-ui-store'
import { CloseIcon } from '~/components/svg'
import styles from './side-modal.module.css'

interface Props {
  children: React.ReactNode
  className?: string
  fragment: string
}

export const SideModal: React.FC<Props> = ({
  children,
  className,
  fragment,
}) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const session = useSession()
  const setShowBackdrop = useUiStore(state => state.setShowBackdrop)

  const unmount = authRoutes.includes(fragment) && session.status === 'authenticated'

  useEffect(() => {
    if (unmount) return

    const isCurrentFragment = window.location.hash === fragment
    const body = document.body

    setOpen(isCurrentFragment)

    if (!open) return

    body.classList.toggle('hide-overflow-y', isCurrentFragment)
    setShowBackdrop(isCurrentFragment)
    modalRef.current?.focus()

    return () => {
      setShowBackdrop(false)
      body.classList.remove('hide-overflow-y')
    }
  }, [params, fragment, setShowBackdrop, open, unmount])

  if (unmount) return

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      className={clsx(
        styles.modal,
        { [styles.open]: open },
        className,
      )}
    >
      <Link
        aria-label='Cerrar'
        className={styles.closeLink}
        href='?'
        scroll={false}
        draggable={false}
      >
        <CloseIcon />
      </Link>
      {children}
    </div>
  )
}
