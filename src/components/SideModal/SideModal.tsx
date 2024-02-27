'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SideModalCC } from './SideModalCC'

interface SideModalProps {
  children: React.ReactNode
  className?: string
  fragment: string
}

export const SideModal: React.FC<SideModalProps> = ({
  children,
  className,
  fragment,
}) => {
  const params = useParams()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(window.location.hash === fragment)
  }, [fragment, params])

  return mount && (
    <SideModalCC className={className}>
      {children}
    </SideModalCC>
  )
}
