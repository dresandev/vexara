'use client'

import clsx from 'clsx'
import { Size } from '~/types'
import { ClockExclamationIcon } from '~/components/svg'
import { Tooltip } from '~/components/ui/tooltip'
import styles from './size-selector.module.css'

interface Props {
  sizes: Size[]
  selectedSize: string | null
  onChange: (size: string) => void
}

export const SizeSelector: React.FC<Props> = ({
  sizes,
  selectedSize,
  onChange,
}) => {
  return (
    <ul className={styles.sizeList}>
      {sizes.map(({ name, quantity }) => {
        const isSelectedSize = name === selectedSize
        const hasStock = quantity > 0
        const hasLowStock = quantity > 0 && quantity < 10
        const showTooltip = hasLowStock || !hasStock

        return (
          <li
            key={name}
            className={clsx(
              styles.listItem,
              { [styles.withTooltip]: showTooltip }
            )}
          >
            <button
              aria-label={`Talla ${name}`}
              role='checkbox'
              aria-checked={isSelectedSize}
              className={clsx(
                styles.sizeButton,
                { [styles.isSelected]: isSelectedSize }
              )}
              onClick={() => onChange(name)}
              disabled={!hasStock}
            >
              {hasLowStock && (
                <ClockExclamationIcon
                  className={styles.lowStockIcon}
                />
              )}
              {name}
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
      })}
    </ul>
  )
}
