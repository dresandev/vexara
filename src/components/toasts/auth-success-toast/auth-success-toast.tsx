'use client'

import { useEffect } from 'react'
import { useToastStore } from '~/store/use-toast-store'
import { CircleCheckIcon } from '~/components/svg'
import { useSession } from 'next-auth/react'

export const AuthSuccessToast = () => {
  const session = useSession()
  const notifyToast = useToastStore(state => state.notifyToast)

  useEffect(() => {
    const showAuthToast = JSON.parse(
      localStorage.getItem('showAuthToast') ?? 'true'
    )

    if (session.status === 'unauthenticated') {
      return localStorage.setItem('showAuthToast', 'true')
    }

    if (!showAuthToast) return

    notifyToast({
      leadingIcon: (
        <CircleCheckIcon color='var(--success-color)' />
      ),
      title: '¡Hola! Te damos la bienvenida'
    })

    localStorage.setItem('showAuthToast', 'false')
  }, [notifyToast, session.status])

  return null
}
