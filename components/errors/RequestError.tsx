'use client'
// import { handleSignOut } from '@/lib/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequestError = ({ error, retry }: { error: any; retry?: () => void }) => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (message) return
    if (axios.isAxiosError(error)) {
      if (error?.response?.data.logout) {
        // handleSignOut(error.response?.data.message || error.message).then(() => {})
        setMessage(error.response?.data.message || error.message)
      }
      if (error.code === 'ERR_NETWORK') {
        setMessage("Network Error: It looks like we're having trouble connecting. Please check your internet connection and try again.")
      } else {
        setMessage(error.response?.data.message || error.message)
      }
    } else {
      setMessage(typeof error === 'string' ? error : error?.message || 'Something went wrong')
    }
    return () => {}
  }, [message, error])

  return (
    <div className='p-4'>
      <div className='w-full sm:max-w-[520px] mx-auto my-6 p-2  border border-red-300 rounded-sm flex items-center justify-center'>
        <span className='request-error text-center text-red-500  dark:text-red-400 font-medium  dark:border-red-800'>{message}</span>
        {retry && (
          <button className='text-primary rounded-sm p-1  mx-1 underline' onClick={retry}>
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
export default RequestError
