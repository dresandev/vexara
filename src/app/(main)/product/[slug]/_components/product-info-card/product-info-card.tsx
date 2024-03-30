import styles from './product-info-card.module.css'

interface Props {
  leadingIcon: React.ReactElement
  mainText: string
  secondaryText?: string
}

export const ProductInfoCard: React.FC<Props> = ({
  leadingIcon,
  mainText,
  secondaryText,
}) => {
  return (
    <div className={styles.infoCard}>
      {leadingIcon}
      <div>
        <div>{mainText}</div>
        {secondaryText && (
          <div className={styles.secondaryText}>
            {secondaryText}
          </div>
        )}
      </div>
      <span className={styles.freeText}>
        Gratis
      </span>
    </div>
  )
}
