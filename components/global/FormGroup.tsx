import { cn } from '@/lib/utils'

const FormGroup = ({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex items-start justify-between gap-0 md:gap-4 flex-col md:flex-row', className)} {...rest}>
      {children}
    </div>
  )
}

export default FormGroup
