import { HeartIcon } from '~/components/svg/heart-icon'

interface Props {
  className?: string
}

export const AddToFavoritesButton: React.FC<Props> = ({
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
