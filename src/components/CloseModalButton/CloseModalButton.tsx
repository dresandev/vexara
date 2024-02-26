'use client'

import { useRouter } from 'next/navigation'

interface CloseModalButtonProps {
  children?: React.ReactNode
  className?: string
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  children,
  className,
}) => {
  const router = useRouter()

  return (
    <button
      aria-label='Cerrar'
      className={className}
      onClick={router.back}
    >
      {children}
    </button>
  )
}
