import { cloneElement, ReactElement, useRef } from 'react'

export const useSetRefToChild = <T extends HTMLElement>(
  children: ReactElement
) => {
  const childRef = useRef<T | null>(null)

  const childWithRef = cloneElement(children, {
    ref: (node: T) => {
      childRef.current = node

      if (
        typeof children === 'object' &&
        'ref' in children &&
        typeof children.ref === 'function'
      ) {
        children.ref(node)
      }
    },
  })

  return [childWithRef, childRef] as const
}
