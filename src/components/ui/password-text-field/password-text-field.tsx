'use client'

import { forwardRef, useEffect, useState } from 'react'
import { TextField, type TextFieldProps } from '~/components/ui/text-field'
import { EyeClosedIcon, EyeIcon } from '~/components/svg'
import styles from './password-text-field.module.css'

export const PasswordTextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  value,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const hasValue = !!value

  useEffect(() => {
    if (!hasValue) setShowPassword(false)
  }, [hasValue])

  return (
    <div className={styles.wrapper}>
      <TextField
        ref={ref}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      {hasValue && (
        <button
          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          className={styles.showPasswordButton}
          type='button'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </button>
      )}
    </div>
  )
})

PasswordTextField.displayName = 'PasswordTextField'
