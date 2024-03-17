import { HeartIcon } from '~/components/svg/heart-icon'

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
    >
      <HeartIcon />
    </button>
  )
}
