import { useEffect, useState } from 'react'

interface useUnmountComponentProps {
  hideTime: number
  unmountTime: number
}

export const useUnmountComponent = ({
  hideTime,
  unmountTime,
}: useUnmountComponentProps) => {
  const [mount, setMount] = useState(true)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    let hideTimeoutId: NodeJS.Timeout
    let unmountTimeoutId: NodeJS.Timeout

    if (mount) {
      hideTimeoutId = setTimeout(
        () => setHide(true),
        hideTime
      )
      unmountTimeoutId = setTimeout(
        () => setMount(false),
        unmountTime
      )
    }

    return () => {
      clearTimeout(hideTimeoutId)
      clearTimeout(unmountTimeoutId)
    }
  }, [hideTime, mount, setHide, setMount, unmountTime])

  return { mount, hide }
}
