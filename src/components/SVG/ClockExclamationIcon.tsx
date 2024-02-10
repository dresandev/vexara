import { SVGProps } from 'react'

export const ClockExclamationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath='url(#a)'
    >
      <path d='M20.986 12.502a9 9 0 1 0-5.973 7.98' />
      <path d='M12 7v5l3 3M19 16v3M19 22v.01' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
