import { SVGProps } from 'react'

type Direction = 'RIGHT' | 'LEFT' | 'DOWN'

interface ChevronArrowProps extends SVGProps<SVGSVGElement> {
  direction?: Direction
}

const directionsPaths: { [key in Direction]: string } = {
  RIGHT: 'm9 18 6-6-6-6',
  LEFT: 'm15 6-6 6 6 6',
  DOWN: 'm6 9 6 6 6-6',
}

export const ChevronArrow = ({
  direction = 'DOWN',
  ...props
}: ChevronArrowProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d={directionsPaths[direction]}
    />
  </svg>
)
