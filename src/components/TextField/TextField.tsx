import styles from './TextField.module.css'

type TextFieldProps = {
  label?: string;
  multiline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  multiline = false,
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
      {
        multiline ? (
          <textarea
            id={id}
            className={styles.textarea}
            placeholder=''
            {...props}
          />
        ) : (
          <input
            id={id}
            className={styles.input}
            placeholder=''
            {...props}
          />
        )
      }
    </div>
  )
}
