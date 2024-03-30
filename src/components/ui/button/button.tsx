import clsx from 'clsx'
import { Slot, type AsChildProps } from '~/components/slot'
import styles from './button.module.css'

type Props = AsChildProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  className?: string
  variant?: 'primary' | 'success' | 'outlined' | 'text'
}

export const Button: React.FC<Props> = ({
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
