import { cn } from '@/lib/utils'

interface CurvePathIconProps {
  bg?: string
  className?: string
}
const CurvePathIcon = ({ bg, className }: CurvePathIconProps) => {
  return (
    <svg
      fill={bg}
      className={cn('section-divider section-divider-auto pointer-events-none  relative', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1920 80'
    >
      <path d='M1920,80 L0,80 L0,0 C0,0 387,59 960,59 C1533,59 1920,0 1920,0 L1920,80 Z'></path>
    </svg>
  )
}

export default CurvePathIcon
