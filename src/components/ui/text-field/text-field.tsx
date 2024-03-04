import styles from './text-field.module.css'

type TextFieldProps = {
  label?: string
  hint?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  hint,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        placeholder=''
        {...props}
      />
      {
        hint && (
          <p className={styles.hint}>{hint}</p>
        )
      }
    </div>
  )
}
