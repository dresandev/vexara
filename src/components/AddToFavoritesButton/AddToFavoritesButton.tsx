import { HeartIcon } from '~/components/SVG/HeartIcon'
import styles from './AddToFavoritesButton.module.css'

export const AddToFavoritesButton = () => {
  return (
    <button
      className={styles.button}
      aria-label='Añadir a la lista de deseos'
    >
      <HeartIcon />
    </button>
  )
}
