'use client'
import { cn } from '@/lib/utils'
import { PlusIcon } from 'lucide-react'
import { useRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLDetailsElement> {
  summary: React.ReactNode | string
  disabled?: boolean
  name?: string
  summaryCLassName?: string
  contentClassName?: string
  iconClassName?: string
}

export const DetailsSummaryFAQ = ({
  summary,
  className,
  disabled,
  contentClassName,
  summaryCLassName,
  name = undefined,
  iconClassName,
  children,
  ...rest
}: Props) => {
  const detailsRef = useRef<HTMLDetailsElement | null>(null)

  return (
    <details
      {...rest}
      className={cn('relative w-full open:shadow-1 group transition-transform duration-500', className)}
      name={name}
      ref={detailsRef}
    >
      <summary
        className={cn(
          'flex justify-between dark:text-gray-300 items-center gap-1 px-3 py-2 cursor-pointer r bg-white dark:bg-dark3 dark:hover:bg-dark2 border-b border-transparent group-open:border-slate-100 dark:group-open:border-dark1 duration-100 transition-transform hover:shadow ',
          {
            'pointer-events-none': disabled
          },
          summaryCLassName
        )}
      >
        {summary}
        <PlusIcon
          className={cn(
            'group-open:rotate-45 w-5 mt-0.5 group-open:text-primary group-open:dark:text-primary transition-transform duration-500',
            iconClassName
          )}
        />
      </summary>
      <div className={cn('flex flex-col bg-white dark:bg-dark2  w-full z-40  overflow-x-hidden overflow-y-auto ', contentClassName)}>
        {children}
      </div>
    </details>
  )
}
