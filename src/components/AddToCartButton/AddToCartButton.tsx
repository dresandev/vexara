import styles from './AddToCartButton.module.css'

interface AddToCartButtonProps {
  onClick?: () => void
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onClick
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      Añadir a la cesta
    </button>
  )
}
