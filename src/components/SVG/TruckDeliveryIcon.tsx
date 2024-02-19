import { SVGProps } from 'react'

export const TruckDeliveryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <g
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z' />
      <path d='M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6m0 0h-8m8 0-3-5h-5M3 9h4' />
    </g>
  </svg>
)
