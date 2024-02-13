'use client'

import clsx from 'clsx'
import { useSnapCarousel } from 'react-snap-carousel'
import { Buttons } from './Buttons'
import styles from './Carousel.module.css'

interface CarouselProps {
  children: React.ReactNode[]
  itemsGap?: string
}

export const Carousel = ({
  children,
  itemsGap = '4px',
}: CarouselProps) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
  } = useSnapCarousel()

  return (
    <div className={styles.carouselWrapper}>
      <Buttons
        showPrevButton={activePageIndex === 0}
        showNextButton={activePageIndex === pages.length - 1}
        onClickPrev={prev}
        onClickNext={next}
      />

      <ul
        ref={scrollRef}
        style={{ gap: itemsGap }}
        className={styles.carousel}
        tabIndex={-1}
      >
        {
          children.map((child, i) => (
            <li
              key={i}
              className={clsx(
                styles.item,
                { [styles.fadeItem]: !pages.at(activePageIndex)?.includes(i) }
              )}
            >
              {child}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
