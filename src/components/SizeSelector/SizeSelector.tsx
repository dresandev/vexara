'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Stock } from '~/types'
import { ClockExclamationIcon } from '~/components/SVG'
import { Tooltip } from '~/components/Tooltip'
import styles from './SizeSelector.module.css'

interface SizeSelectorProps {
  stock: Stock[]
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  stock
}) => {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <ul className={styles.sizeList}>
      {
        stock.map(({ size, amount }) => {
          const isSelectedSize = size === selectedSize
          const hasStock = amount > 0
          const hasLowStock = amount > 0 && amount < 10
          const displayTooltip = hasLowStock || !hasStock

          return (
            <li
              key={size}
              className={clsx(
                styles.listItem,
                { [styles.withTooltip]: displayTooltip }
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
                onClick={() => setSelectedSize(size)}
                disabled={!hasStock}
              >
                {
                  hasLowStock && (
                    <ClockExclamationIcon
                      className={styles.lowStockIcon}
                    />
                  )
                }
                {size}
              </button>
              {
                displayTooltip && (
                  <Tooltip
                    className={clsx(
                      styles.tooltip,
                      { [styles.tooltipAlert]: hasLowStock }
                    )}
                    title={hasLowStock ? '¡Quedan pocos!' : 'Agotado'}
                  />
                )
              }
            </li>
          )
        })
      }
    </ul>
  )
}
