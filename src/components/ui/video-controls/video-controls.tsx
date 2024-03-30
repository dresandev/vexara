'use client'

import { useState } from 'react'
import { useSetRefToChild } from '~/hooks/use-set-ref-to-child'
import { VolumeOffIcon, VolumeOnIcon } from '~/components/svg'
import styles from './video-controls.module.css'

interface Props {
  children: React.ReactElement
  color?: string
}

export const VideoControls = ({
  children,
  color,
}: Props) => {
  const [turnOnSound, setTurnOnSound] = useState(false)
  const [childWithRef, childRef] = useSetRefToChild<HTMLVideoElement>(children)

  const handleSetActivateSound = () => {
    if (!childRef.current) return
    setTurnOnSound(!turnOnSound)
    childRef.current.muted = turnOnSound
  }

  const soundButtonAriaLabel = turnOnSound ? 'Activar sonido' : 'Desactivar sonido'
  const soundButtonIcon = turnOnSound ? <VolumeOffIcon /> : <VolumeOnIcon />

  return (
    <div
      style={{ color }}
      className={styles.controlsWrapper}
    >
      {childWithRef}
      <button
        aria-label={soundButtonAriaLabel}
        className={styles.soundButton}
        type='button'
        onClick={handleSetActivateSound}
      >
        {soundButtonIcon}
      </button>
    </div>
  )
}
