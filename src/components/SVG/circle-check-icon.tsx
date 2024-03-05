import { SVGProps } from 'react'

export const CircleCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <g
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12Z' />
      <path d='m9 12 2 2 4-4' />
    </g>
  </svg>
)
