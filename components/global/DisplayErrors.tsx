import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  errors: string[]
}
const DisplayErrors = ({ errors, className, ...rest }: Props) => {
  if (!errors || errors.length === 0) return
  return (
    <ul
      className={cn(
        'border-[1px] border-red-200 dark:border-red-500 border-dashed p-2 my-2 list-decimal custom-animation w-full',
        className
      )}
      {...rest}
    >
      {errors.map((error) => (
        <li key={error} className='text-left list-inside list-disc text-red-400'>
          {error}
        </li>
      ))}
    </ul>
  )
}

export default DisplayErrors
