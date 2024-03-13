import clsx from 'clsx'
import { Slot, type AsChildProps } from '~/components/slot'
import styles from './button.module.css'

type ButtonProps = AsChildProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  className?: string
  variant?: 'primary' | 'success'
}

export const Button: React.FC<ButtonProps> = ({
  asChild,
  className,
  variant = 'primary',
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        styles.button,
        styles[variant],
        className
      )}
      {...props}
    />
  )
}
