'use client'

import { useState } from 'react'
import { useSetRefToChild } from '~/hooks/use-set-ref-to-child'
import { VolumeOffIcon, VolumeOnIcon } from '~/components/SVG'
import styles from './VideoControls.module.css'

interface VideoControlsProps {
  children: React.ReactElement
  color?: string
}

export const VideoControls = ({
  children,
  color,
}: VideoControlsProps) => {
  const [activateSound, setActivateSound] = useState(false)
  const [childWithRef, childRef] = useSetRefToChild<HTMLVideoElement>(children)

  const handleSetActivateSound = () => {
    if (!childRef.current) return
    setActivateSound(prevValue => !prevValue)
    childRef.current.muted = activateSound
  }

  const soundButtonAriaLabel = activateSound ? 'Activar sonido' : 'Desactivar sonido'
  const soundButtonIcon = activateSound ? <VolumeOffIcon /> : <VolumeOnIcon />
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
