'use client'

import { useState } from 'react'
import type { Image } from '@prisma/client'
import { ChevronArrow } from '~/components/svg'
import styles from './carousel-image.module.css'

interface Props {
  images: Image[]
  alt: string
}

export const CarouselImage: React.FC<Props> = ({
  images,
  alt,
}) => {
  const [idx, setIdx] = useState(0)

  const imageLastIdx = images.length - 1

  const handlePrevButtonClick = () => {
    setIdx(prevIdx => prevIdx === 0 ? imageLastIdx : idx - 1)
  }

  const handleNextButtonClick = () => {
    setIdx(prevIdx => prevIdx === imageLastIdx ? 0 : idx + 1)
  }

  return (
    <div className={styles.imagesWrapper}>
      <img
        className={styles.image}
        src={images[idx].url}
        alt={alt}
      />

      <button
        className={styles.nextPrevButton}
        onClick={handlePrevButtonClick}
      >
        <ChevronArrow direction='left' />
      </button>
      <button
        className={styles.nextPrevButton}
        onClick={handleNextButtonClick}
      >
        <ChevronArrow direction='right' />
      </button>
    </div>
  )
}
