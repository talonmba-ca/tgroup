import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: string
  name: string
  role: string
}

const TestimonialCard = ({ testimonial, name, role, className, ...rest }: TestimonialCardProps) => {
  return (
    <div className={cn('flex items-center justify-center bg-primary2/90 px-8 py-20 mt-40', className)} {...rest}>
      <div className='relative max-w-2xl'>
        {/* Background cards for depth effect */}
        <div className='absolute inset-0 translate-x-2 translate-y-2 bg-white/20 rounded-2xl'></div>
        <div className='absolute inset-0 translate-x-1 translate-y-1 bg-white/30 rounded-2xl'></div>

        {/* Main testimonial card */}
        <div className='relative bg-white rounded-2xl p-8 shadow-[var(--testimonial-shadow)]'>
          {/* Quote icon */}
          <Quote className='text-primary2 mb-6 h-8 w-8' />
          {/* Testimonial text */}
          <blockquote className='text-slate-700 text-lg leading-relaxed mb-8 font-medium'>{testimonial}</blockquote>

          {/* Author info */}
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary2 to-amber-300 flex items-center justify-center text-white font-semibold text-lg'>
              {name.charAt(0)}
            </div>
            <div className='flex-1'>
              <div className='font-semibold text-testimonial-foreground text-lg  '>
                <span className='text-primary2 '>{name}</span>
              </div>
              <div className='text-testimonial-muted text-sm'>{role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
