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
      width={400}
      height={592}
      style={{ blockSize: 'auto' }}
      onMouseOver={() => setImageSrc(hoverSrc)}
      onMouseLeave={() => setImageSrc(src)}
    />
  )
}
