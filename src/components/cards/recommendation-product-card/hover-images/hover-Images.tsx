'use client'

import { useState } from 'react'

interface ImagesProps {
  src: string
  hoverSrc: string
  alt: string
}

export const HoverImages: React.FC<ImagesProps> = ({
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
