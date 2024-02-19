'use client'

import clsx from 'clsx'
import { useSnapCarousel } from 'react-snap-carousel'
import { Buttons } from './Buttons'
import styles from './Carousel.module.css'

interface CarouselProps {
  children: React.ReactNode[]
  itemsGap?: string
}

export const Carousel: React.FC<CarouselProps> = ({
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
          children.map((child, i) => {
            const isInCurrentPage = pages.at(activePageIndex)?.includes(i)
            return (
              <li
                key={i}
                className={clsx(
                  styles.item,
                  { [styles.fadeItem]: !isInCurrentPage }
                )}
              >
                {child}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
