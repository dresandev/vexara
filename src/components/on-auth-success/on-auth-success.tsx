'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

export const OnAuthSuccess = () => {
  const session = useSession()

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      return localStorage.setItem('showAuthToast', 'true')
    }

    const showAuthToast = JSON.parse(
      localStorage.getItem('showAuthToast')!
    )

    if (!showAuthToast) return

    toast.success('¡Hola! Te damos la bienvenida', {
      position: 'bottom-center'
    })

    localStorage.setItem('showAuthToast', 'false')
  }, [session.status])

  return null
}
