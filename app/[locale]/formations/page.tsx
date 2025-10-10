import React, { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import FormationLists from './formation-list'

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 p-6 justify-start items-start'>
          {[1, 2, 3].map((item) => (
            <div className='bg-white  p-2' key={item}>
              <Skeleton className='w-full h-64 mb-4 aspect-video bg-slate-100' />
              <div className=''>
                <Skeleton className='w-3/4 h-5 mb-2' />
                <Skeleton className='w-1/2 h-4 mb-2' />
                <Skeleton className='w-1/3 h-2 mb-2' />
                <Skeleton className='w-1/4 h-2 mb-2' />
                <Skeleton className='w-1/5 h-3 mb-2' />
              </div>
            </div>
          ))}
        </div>
      }
    >
      <FormationLists />
    </Suspense>
  )
}

export default Page
