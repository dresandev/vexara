import clsx from 'clsx'
import styles from './add-to-cart-button.module.css'

interface AddToCartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  )
}
