import { cn, isStringArray } from '@/lib/utils'
import FormError from '../errors/FormError'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

export interface CustomSelectProps {
  options: SelectOption[] | string[]
  hasError?: string
  optional?: boolean
  fieldsetClassName?: string
  label?: string
  labelClassName?: string
  templateExtra?: () => React.ReactNode | React.ReactNode[] | undefined
  rightSideLabel?: () => React.ReactNode | React.ReactNode[] | undefined
  showEmptyOption?: boolean
  extraAction?: (_val: string) => void
}

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, CustomSelectProps {}

const Select = ({
  label = '',
  hasError = '',
  labelClassName,
  fieldsetClassName,
  optional,
  className,
  templateExtra,
  rightSideLabel,
  options,
  showEmptyOption = true,
  placeholder = 'Choose an option',
  extraAction,
  defaultValue,
  ...props
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '')

  useEffect(() => setSelectedValue(defaultValue || ''), [defaultValue])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectedValue(event.target.value)
  const baseClassName = `w-full px-2 py-[8px] border border-gray-200 shadow-xs dark:border-dark2 hover:!border-blue-400 focus:border-blue-400 dark:focus:border-blue-400 focus:border outline-none focus:outline-none bg-white dark:bg-dark0 dark:text-slate-400 disabled:cursor-not-allowed rounded-md `

  return (
    <fieldset className={cn('flex flex-col mb-4 w-full relative', fieldsetClassName)}>
      {label && (
        <label
          htmlFor={props.name}
          className={cn(
            'font-medium flex w-fit items-center justify-between first-letter:capitalize text-slate-700 dark:text-slate-300',
            labelClassName
          )}
        >
          <span>
            {label}{' '}
            {optional ? <span className='sr-only text-xs opacity-50'>(optional)</span> : <span className='text-red-400 font-bold'>*</span>}
          </span>
          {rightSideLabel && rightSideLabel()}
        </label>
      )}
      <div className='relative'>
        <div className='select-box-container relative group'>
          <select
            name={props.name}
            className={cn('appearance-none', baseClassName, className)}
            id={props.name}
            value={selectedValue}
            onChange={(e) => {
              if (extraAction) {
                extraAction(e.target.value)
              }
              handleChange(e)
            }}
            {...props}
          >
            {showEmptyOption && (
              <option value='' className='text-gray-300 dark:text-slate-700 font-light text-sm'>
                {placeholder}
              </option>
            )}
            {isStringArray(options)
              ? (options as string[]).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              : (options as SelectOption[]).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
          </select>
          <div className='absolute top-0 pointer-events-none right-0  dark:text-slate-600 flex items-center justify-center w-10 h-10'>
            <ChevronDownIcon className='group-focus:rotate-180 w-5 text-primary' />
          </div>
        </div>
      </div>

      {templateExtra && <div className='items-end text-xs self-end text-primary'>{templateExtra()}</div>}
      {hasError.length > 0 && <FormError text={hasError || 'Required field'} className='text-left my-0 p-0 pt-0.5' />}
    </fieldset>
  )
}

export default Select
