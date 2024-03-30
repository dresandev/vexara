import { SVGProps } from 'react'

export const ExclamationCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icon-tabler-exclamation-circle'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 9v4M12 16v.01' />
  </svg>
)
