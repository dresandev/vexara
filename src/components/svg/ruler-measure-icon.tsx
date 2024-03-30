import { SVGProps } from 'react'

export const RulerMeasureIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d='M19.875 12c.621 0 1.125.512 1.125 1.143v5.714c0 .631-.504 1.143-1.125 1.143H4a1 1 0 0 1-1-1v-5.857C3 12.512 3.504 12 4.125 12h15.75ZM9 12v2M6 12v3M12 12v3M18 12v3M15 12v2M3 3v4M3 5h18M21 3v4' />
    </g>
  </svg>
)
