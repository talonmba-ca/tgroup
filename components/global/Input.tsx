'use client'
import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import DisplayErrors from './DisplayErrors'
import { useFormStatus } from 'react-dom'

export interface CustomInputProps {
  hasError?: string[]
  optional?: boolean
  textArea?: boolean
  fieldsetClassName?: string
  label?: string
  labelClassName?: string
  templateExtra?: React.ReactNode | React.ReactNode[] | undefined
  rightSideLabel?: React.ReactNode | React.ReactNode[] | undefined
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, CustomInputProps {}

const Input = ({
  label = '',
  hasError = [],
  labelClassName,
  fieldsetClassName,
  optional,
  textArea,
  className,
  templateExtra,
  rightSideLabel,
  ...props
}: InputProps) => {
  const checkBoxBaseClass =
    'flex flex-row mb-4 w-full py-[4px] items-center gap-4 border border-gray-300 dark:border-dark2 hover:!border-emerald-400 focus:border-emerald-400 dark:focus:border-emerald-400 focus:border outline-none focus:outline-none px-2 rounded-md'

  const baseClassName = `w-full px-2 py-[8px] border border-gray-200 shadow-xs dark:border-dark2 hover:!border-emerald-400 focus:border-emerald-400 dark:focus:border-emerald-400 focus:border outline-none focus:outline-none bg-white dark:bg-dark0 dark:text-slate-400  placeholder:text-gray-500 dark:placeholder:text-slate-700 disabled:cursor-not-allowed rounded-md placeholder:opacity-50 placeholder:font-normal`
  const { pending } = useFormStatus()
  return (
    <fieldset className={cn(props.type === 'checkbox' ? checkBoxBaseClass : 'flex flex-col mb-4 w-full relative', fieldsetClassName)}>
      {label && (
        <label
          htmlFor={props.name}
          className={cn(
            'font-medium flex  items-center w-full justify-between first-letter:capitalize text-slate-700 dark:text-slate-300   ',
            labelClassName
          )}
        >
          <span className='flex-1'>
            {label}{' '}
            {optional ? <span className='sr-only text-xs opacity-50 '>(opcional)</span> : <span className='text-red-400 font-bold'>*</span>}
          </span>
          {rightSideLabel && rightSideLabel}
        </label>
      )}
      {textArea ? (
        <textarea
          className={cn(baseClassName, 'max-h-28', className)}
          {...props}
          id={props.id || props.name}
          disabled={pending || props.disabled}
        />
      ) : (
        <div className='relative flex items-center justify-center'>
          <input
            className={cn(props.type === 'checkbox' ? '' : baseClassName, className)}
            {...props}
            id={props.name}
            disabled={pending || props.disabled}
          />
          {props.type === 'password' && (
            <button
              type='button'
              disabled={pending || props.disabled}
              className='absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer'
              onClick={() => {
                const input = document.getElementById(props.name as string) as HTMLInputElement
                if (input) {
                  input.type = input.type === 'password' ? 'text' : 'password'
                  if (input.type === 'text') {
                    document.querySelector(`.${props.name}-show-password`)?.classList.add('hidden')
                    document.querySelector(`.${props.name}-hide-password`)?.classList.remove('hidden')
                  } else {
                    document.querySelector(`.${props.name}-show-password`)?.classList.remove('hidden')
                    document.querySelector(`.${props.name}-hide-password`)?.classList.add('hidden')
                  }
                }
              }}
            >
              <EyeIcon className={props.name + '-show-password'} />
              <EyeOffIcon className={props.name + '-hide-password hidden'} />
            </button>
          )}
        </div>
      )}

      {templateExtra && <div className='items-end text-xs self-end text-primary'>{templateExtra}</div>}
      {hasError.length > 0 && <DisplayErrors errors={hasError} className='border-none my-0 py-0' />}
    </fieldset>
  )
}

export default Input
