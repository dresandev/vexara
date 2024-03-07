'use client'

import clsx from 'clsx'
import { Stock } from '~/types'
import { ClockExclamationIcon } from '~/components/svg'
import { Tooltip } from '~/components/ui/tooltip'
import styles from './size-selector.module.css'

interface SizeSelectorProps {
  stock: Stock[]
  selectedSize: string | null
  onChange: (size: string) => void
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  stock,
  selectedSize,
  onChange,
}) => {
  return (
    <ul className={styles.sizeList}>
      {
        stock.map(({ size, quantity }) => {
          const isSelectedSize = size === selectedSize
          const hasStock = quantity > 0
          const hasLowStock = quantity > 0 && quantity < 10
          const showTooltip = hasLowStock || !hasStock

          return (
            <li
              key={size}
              className={clsx(
                styles.listItem,
                { [styles.withTooltip]: showTooltip }
              )}
            >
              <button
                aria-label={`Talla ${size}`}
                role='checkbox'
                aria-checked={isSelectedSize}
                className={clsx(
                  styles.sizeButton,
                  { [styles.isSelected]: isSelectedSize }
                )}
                onClick={() => onChange(size)}
                disabled={!hasStock}
              >
                {hasLowStock && (
                  <ClockExclamationIcon
                    className={styles.lowStockIcon}
                  />
                )}
                {size}
              </button>
              {showTooltip && (
                <Tooltip
                  className={clsx(
                    styles.tooltip,
                    { [styles.alert]: hasLowStock }
                  )}
                  title={hasLowStock ? '¡Quedan pocos!' : 'Agotado'}
                />
              )}
            </li>
          )
        })
      }
    </ul>
  )
}
