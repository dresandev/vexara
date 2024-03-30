import clsx from 'clsx'
import { ChevronArrow } from '~/components/svg'
import styles from './buttons.module.css'

interface Props {
  onClickPrev: () => void
  onClickNext: () => void
  showPrevButton: boolean
  showNextButton: boolean
}

export const Buttons: React.FC<Props> = ({
  onClickPrev,
  onClickNext,
  showPrevButton,
  showNextButton,
}) => {
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
          direction='left'
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
          direction='right'
        />
      </button>
    </>
  )
}
