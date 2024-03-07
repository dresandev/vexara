import { SVGProps } from 'react'

export const SpinnerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <g>
      <path
        fill='currentColor'
        d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12a2 2 0 1 0-4 0 8 8 0 1 1-8-8 2 2 0 1 0 0-4Z'
      />
    </g>
  </svg>
)
