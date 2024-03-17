import { SVGProps } from 'react'

type Direction = 'right' | 'left' | 'down'

interface Props extends SVGProps<SVGSVGElement> {
  direction?: Direction
}

const directionsPaths: { [key in Direction]: string } = {
  right: 'm9 18 6-6-6-6',
  left: 'm15 6-6 6 6 6',
  down: 'm6 9 6 6 6-6',
}

export const ChevronArrow = ({
  direction = 'down',
  ...props
}: Props) => (
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
