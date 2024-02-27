import { CheckIcon } from '~/components/SVG'
import styles from './Checkbox.module.css'

type CheckboxProps = {
  label?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  ...props
}) => {
  return (
    <label className={styles.label}>
      <input
        {...props}
        className={styles.input}
        type='checkbox'
      />
      <div className={styles.holder}>
        <CheckIcon className={styles.checkIcon} />
      </div>
      {label && (
        <span className={styles.labelText}>
          {label}
        </span>
      )}
    </label>
  )
}
