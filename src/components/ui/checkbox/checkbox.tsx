import { forwardRef } from 'react'
import clsx from 'clsx'
import { CheckIcon } from '~/components/svg'
import styles from './checkbox.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  value?: any
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({
  disabled,
  label,
  error,
  ...props
}, ref) => {
  return (
    <label
      className={styles.label}
      aria-disabled={disabled}
    >
      <input
        ref={ref}
        {...props}
        disabled={disabled}
        type='checkbox'
        className={styles.checkbox}
      />
      <div className={clsx(
        styles.holder,
        { [styles.error]: error }
      )}>
        <CheckIcon className={styles.checkIcon} />
      </div>
      {label && (
        <span className={styles.labelText}>
          {label}
        </span>
      )}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'
