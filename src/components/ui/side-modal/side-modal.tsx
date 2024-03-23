'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { authRoutes } from '~/routes'
import { useUiStore } from '~/store/use-ui-store'
import { useHasMounted } from '~/hooks/use-is-mounted'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { useOnClickOutside } from '~/hooks/use-on-click-outside'
import { CloseIcon } from '~/components/svg'
import styles from './side-modal.module.css'

interface Props {
  children: React.ReactNode
  className?: string
  urlFragment: string
}

export const SideModal: React.FC<Props> = ({
  children,
  className,
  urlFragment,
}) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const session = useSession()
  const setShowBackdrop = useUiStore(state => state.setShowBackdrop)
  const hasMounted = useHasMounted()
  useToggleBodyOverflow(open)
  useOnClickOutside(modalRef, handleCloseModal)

  useEffect(() => {
    const isCurrentFragment = window.location.hash === urlFragment

    setOpen(isCurrentFragment)

    if (isCurrentFragment) {
      setShowBackdrop(true)
      modalRef.current?.focus()
    }
  }, [params, setShowBackdrop, urlFragment])

  if (!hasMounted) return

  const isAuthFragment = authRoutes.includes(window.location.hash)
  const isAuthenticated = session.status === 'authenticated'

  if (isAuthFragment && isAuthenticated) return

  function handleCloseModal() {
    const isCurrentFragment = window.location.hash === urlFragment

    if (!isCurrentFragment) return

    setOpen(false)
    setShowBackdrop(false)
  }

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
      <button
        aria-label='Cerrar'
        className={styles.closeModal}
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
      {children}
    </div>
  )
}
