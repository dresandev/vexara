import clsx from 'clsx'
import { ChevronArrow } from '~/components/SVG'
import styles from './Buttons.module.css'

interface ButtonsProps {
  onClickPrev: () => void
  onClickNext: () => void
  showPrevButton: boolean
  showNextButton: boolean
}

export const Buttons = ({
  onClickPrev,
  onClickNext,
  showPrevButton,
  showNextButton,
}: ButtonsProps) => {
  return (
    <>
      <button
        aria-label='Anterior slide'
        className={clsx(
          styles.btn,
          { [styles.hideBtn]: showPrevButton }
        )}
        onClick={onClickPrev}
      >
        <ChevronArrow
          className={styles.btnArrowIcon}
          direction='LEFT'
        />
      </button>
      <button
        aria-label='Siguiente slide'
        className={clsx(
          styles.btn,
          { [styles.hideBtn]: showNextButton }
        )}
        onClick={onClickNext}
      >
        <ChevronArrow
          className={styles.btnArrowIcon}
          direction='RIGHT'
        />
      </button>
    </>
  )
}
