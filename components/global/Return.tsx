'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  path?: string
  text?: string
}
const Return = ({ className, path = undefined, text = 'Return', ...rest }: Props) => {
  const router = useRouter()
  return (
    <button
      type='button'
      {...rest}
      onClick={() => (path ? router.push(path) : router.back())}
      className={cn(
        'flex group items-center justify-center opacity-40 hover:opacity-100 mb-4 hover:text-primary py-0.5 rounded-full duration-500 transition-all dark:hover:text-blue-300 gap-x-1.5 cursor-pointer',
        className
      )}
    >
      <ArrowLeft size={18} />
      <span className=''>{text}</span>
    </button>
  )
}

export default Return
