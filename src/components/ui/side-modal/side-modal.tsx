'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { authRoutes } from '~/routes'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { CloseIcon } from '~/components/svg'
import styles from './side-modal.module.css'

interface SideModalContentProps {
  children: React.ReactNode
  className?: string
  urlFragment: string
}

export const SideModal: React.FC<SideModalContentProps> = ({
  children,
  className,
  urlFragment,
}) => {
  const session = useSession()
  const params = useParams()
  const [mount, setMount] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  useToggleBodyOverflow(mount)

  useEffect(() => {
    const isCurrentFragment = window.location.hash === urlFragment
    const isAuthFragment = authRoutes.includes(window.location.hash)
    const isAuthenticated = session.status === 'authenticated'

    if (isAuthFragment && isAuthenticated) return

    setMount(isCurrentFragment)
  }, [urlFragment, params, session.status])

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  if (!mount) return

  return (
    <>
      <Link
        aria-hidden
        className={styles.backdrop}
        href=''
        scroll={false}
        draggable={false}
      />
      <div
        ref={modalRef}
        tabIndex={0}
        className={clsx(
          styles.modal,
          className,
        )}
      >
        <Link
          aria-label='Cerrar'
          className={styles.closeModalLink}
          href=''
          scroll={false}
        >
          <CloseIcon />
        </Link>

        {children}
      </div>
    </>
  )
}
