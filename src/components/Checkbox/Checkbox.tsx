import { CheckIcon } from '~/components/SVG'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label
}) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type='checkbox' />
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
