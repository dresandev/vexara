import { forwardRef } from 'react'
import clsx from 'clsx'
import styles from './text-field.module.css'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  id,
  label,
  hint,
  error,
  ...props
}, ref) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        {...props}
        className={clsx(
          styles.input,
          { [styles.errorInput]: error }
        )}
        placeholder=''
      />
      {hint && (
        <p className={clsx(
          styles.hint,
          { [styles.error]: error }
        )}>
          {hint}
        </p>
      )}
      {error && !hint && (
        <p className={styles.error}>{error}</p>
      )}
    </div>
  )
})

TextField.displayName = 'TextField'
