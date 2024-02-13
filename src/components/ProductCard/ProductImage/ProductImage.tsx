'use client'

import { useState } from 'react'

interface ProductImageProps {
  src: string
  hoverSrc: string
  name: string
}

export const ProductImage = ({
  src,
  hoverSrc,
  name,
}: ProductImageProps) => {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      src={imageSrc}
      alt={name}
      onMouseOver={() => setImageSrc(hoverSrc)}
      onMouseLeave={() => setImageSrc(src)}
    />
  )
}
