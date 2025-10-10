import FadeInImage from '@/components/global/FadeInImage'
import prisma from '@/lib/prisma'
import { DOT, formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const FormationLists = async () => {
  const formations = await prisma.formation.findMany({ where: { status: 'PUBLIÉ' } })
  if (!formations || formations.length === 0)
    return (
      <div className='mt-12 flex flex-col items-center justify-center gap-4 max-w-xl mx-auto p-6 rounded-lg shadow-1 bg-white'>
        <h1 className='text-2xl font-bold text-center text-primary2'>{" Nous n'avons pas encore de formations publiées."}</h1>
        <p className='text-center text-gray-500'>Veuillez revenir plus tard.</p>
      </div>
    )

  return (
    <div>
      <div className='flex gap-6 flex-wrap max-w-7xl mx-auto p-6 items-start justify-center'>
        {formations.map((fmt) => (
          <Link
            href={`/${fmt.slug}`}
            className='bg-white hover:shadow-1 md:w-[370px] p-2 group rounded flex flex-col cursor-pointer'
            key={fmt.id}
          >
            <FadeInImage path={fmt.thumbnail} alt={fmt.title} imageClassName='rounded-md' />
            <div className='p-2'>
              <span className='text-primary'>
                {fmt.tags?.split(',').map((tag, index) => (
                  <span key={index} className='text-smd text-primary rounded-full py-1 capitalize'>
                    {tag} {index === fmt.tags!.split(',')!.length - 1 ? '' : DOT}
                  </span>
                ))}
              </span>
              <h2 className='text-slate-700 font-bold text-2xl mb-2 group-hover:text-primary2 transition-colors duration-500'>
                {fmt.title}
              </h2>
              <div className='w-full'>
                <p className='text-slate-500 line-clamp-2 truncated'>{fmt.excerpt}</p>
              </div>
              <div className='flex justify-between items-center text-sm mt-2'>
                <span className='text-primary rounded-full py-1 px-2 bg-primary/10'>{fmt.place}</span>
                <span className='text-primary2 ml-2 text-lg font-bold'>{fmt.price === 0 ? '' : formatAmount(fmt.price) || ''}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FormationLists
