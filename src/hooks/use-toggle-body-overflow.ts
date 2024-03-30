import { useEffect } from 'react'

export const useToggleBodyOverflow = (isMenuOpen: boolean = true) => {
  useEffect(() => {
    const body = document.body

    body.classList.toggle('hide-overflow-y', isMenuOpen)

    return () => {
      body.classList.remove('hide-overflow-y')
    }
  }, [isMenuOpen])
}
