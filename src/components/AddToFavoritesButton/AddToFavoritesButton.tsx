'use client'

import { HeartIcon } from '~/components/SVG/HeartIcon'

interface AddToFavoritesButtonProps {
  className?: string
}

export const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({
  className
}) => {
  return (
    <button
      className={className}
      aria-label='Añadir a la lista de deseos'
      type='button'
    >
      <HeartIcon />
    </button>
  )
}
