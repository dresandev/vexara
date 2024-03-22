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
import { useHasMounted } from '~/hooks/use-is-mounted'

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
  const [mount, setMount] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const session = useSession()
  const hasMounted = useHasMounted()
  useToggleBodyOverflow(mount)

  useEffect(() => {
    setMount(window.location.hash === urlFragment)
  }, [urlFragment, params])

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  if (
    !hasMounted ||
    !mount ||
    (
      authRoutes.includes(window.location.hash) &&
      session.status === 'authenticated'
    )
  ) return

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
