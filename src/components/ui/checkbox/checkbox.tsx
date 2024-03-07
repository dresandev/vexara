import { forwardRef } from 'react'
import clsx from 'clsx'
import { CheckIcon } from '~/components/svg'
import styles from './checkbox.module.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  value?: any
}

export const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error,
  ...props
}, ref) => {
  return (
    <label className={styles.label}>
      <input
        ref={ref}
        {...props}
        type='checkbox'
        className={styles.input}
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
