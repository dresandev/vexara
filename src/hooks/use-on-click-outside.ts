import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handler, ref])
}
