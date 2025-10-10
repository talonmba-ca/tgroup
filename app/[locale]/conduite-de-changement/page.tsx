import { STRATEGIES } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ConduiteDeChangement = () => {
  const item = STRATEGIES[1]
  return (
    <div className=''>
      <div className='max-w-3xl mx-auto p-6'>
        <h1 className='text-gradient font-bold text-3xl'>{item.title}</h1>
        <p className='text-lg text-slate-800 my-2'>{item.description}</p>
        <div className='my-6'>
          {item.options.map((option, index) => (
            <div key={index} className='p-4 sm:p-6 bg-gray-100 hover:bg-white rounded-lg  mb-4 group' id={option.id}>
              <h2 className='text-xl font-bold text-gray-600'>{option.title}</h2>
              <p className='text-lg text-slate-700 mt-2 mb-4'>{option.description}</p>
              <Link
                href={`/contact?strategy=${option.id}`}
                className='group-hover:text-amber-500 text-slate-700 flex items-center justify-center gap-x-2 w-fit hover:underline'
              >
                <span className=''>Contactez-nous</span>
                <ArrowRight
                  size={16}
                  className='text-gray-400 group-hover:text-amber-500 translate-x-[-6px] group-hover:translate-x-1  duration-300 transition-all'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConduiteDeChangement
