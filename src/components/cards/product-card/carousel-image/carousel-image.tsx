'use client'

import { useState } from 'react'
import { ChevronArrow } from '~/components/svg'
import styles from './carousel-image.module.css'

interface CarouselImageProps {
  images: string[]
  alt: string
}

export const CarouselImage: React.FC<CarouselImageProps> = ({
  images,
  alt,
}) => {
  const [index, setIndex] = useState(0)

  const imagesLastIndex = images.length - 1

  const handlePrevButtonClick = () => {
    setIndex(prevIndex => prevIndex === 0 ? imagesLastIndex : index - 1)
  }

  const handleNextButtonClick = () => {
    setIndex(prevIndex => prevIndex === imagesLastIndex ? 0 : index + 1)
  }

  return (
    <div className={styles.imagesWrapper}>
      <img
        className={styles.image}
        src={images[index]}
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
