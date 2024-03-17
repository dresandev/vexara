'use client'

import { useState } from 'react'

interface Props {
  src: string
  hoverSrc: string
  alt: string
}

export const HoverImages: React.FC<Props> = ({
  src,
  hoverSrc,
  alt,
}) => {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      src={imageSrc}
      alt={alt}
      onMouseOver={() => setImageSrc(hoverSrc)}
      onMouseLeave={() => setImageSrc(src)}
    />
  )
}
