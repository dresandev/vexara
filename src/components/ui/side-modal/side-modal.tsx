'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SideModalContent } from './side-modal-content'

interface SideModalProps {
  children: React.ReactNode
  className?: string
  urlFragment: string
}

export const SideModal: React.FC<SideModalProps> = ({
  children,
  className,
  urlFragment,
}) => {
  const params = useParams()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(window.location.hash === urlFragment)
  }, [urlFragment, params])

  if (!mount) return

  return (
    <SideModalContent className={className}>
      {children}
    </SideModalContent>
  )
}
