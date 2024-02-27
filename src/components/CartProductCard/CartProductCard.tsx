import styles from './CartProductCard.module.css'

interface CartProductCardProps {
  image: string
  price: string
  name: string
  size: number
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
  image,
  price,
  name,
  size,
}) => {
  return (
    <div>
      <img src={image} alt='' />
      <div>
        <a>{name}</a>

      </div>
      <span>{price}</span>
      <span>{size}</span>
    </div>
  )
}
