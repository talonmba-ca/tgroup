import FadeInImage from '@/components/global/FadeInImage'
import Return from '@/components/global/Return'
import prisma from '@/lib/prisma'
import { DOT } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params
  const art = await prisma.formation.findFirst({ where: { slug, status: 'PUBLIÉ' } })
  if (!art) return notFound()
  // fetch data
  return {
    title: art.title,
    description: art.excerpt,
    openGraph: {
      type: 'website',
      url: 'https://formation.talonmba.ca',
      images: [
        {
          url: art.thumbnail,
          alt: art.title
        }
      ]
    },
    twitter: {
      title: art?.title,
      card: 'summary_large_image',
      images: [
        {
          url: art.thumbnail,
          alt: art?.title
        }
      ]
    }
  }
}

const FormationDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const data = await prisma.formation.findFirst({ where: { slug: slug } })
  if (!data) return notFound()

  return (
    <div className='flex items-start flex-col lg:flex-row mx-auto max-w-5xl p-4 gap-6'>
      <div className='flex-1'>
        <Return text='Retour' />
        <h1 className='font-bold text-3xl mb-4 text-gradient'>{data?.title}</h1>
        <div className='flex items-center justify-between'></div>
        <FadeInImage path={data.thumbnail} imageClassName='rounded-md' />
        {/* <div className='tags flex items-center gap-1 mt-2'>
          {data?.tags?.split(',').map((tag) => (
            <button
              key={tag}
              className='text-xs bg-slate-200  hover:bg-white dark:bg-dark3 dark:hover:bg-dark2 cursor-pointer  px-2 py-1 rounded-sm line-clamp-1 truncate text-balance'
            >
              {tag}
            </button>
          ))}
        </div> */}
        <div className='text-primary  mt-2'>
          {data.tags?.split(',').map((tag, index) => (
            <span key={index} className='text-smd text-primary rounded-full py-1 capitalize'>
              {tag} {index === data.tags!.split(',')!.length - 1 ? '' : DOT}
            </span>
          ))}
        </div>

        {/* description */}
        <div className='mt-6 whitespace-pre-line text-slate-700 blog tiptap' dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>

      <div className='sticky bottom-4 lg:top-[140px] bg-white shadow-1 rounded-lg w-full lg:w-[320px] p-4'>
        <div className='text-slate-700'>{data?.excerpt}</div>
        <div className='my-3'>
          <span className='text-primary rounded py-1 px-2 bg-primary/10'>{data.place}</span>
        </div>
        <Link
          href={`/contact?f=${data.id}`}
          className='bg-gradient flex items-center justify-center font-bold text-lg text-white px-4 py-2   rounded-md w-full mt-4 hover:opacity-90 transition-opacity duration-500'
        >
          {"S'inscrire"}
        </Link>
      </div>
    </div>
  )
}

export default FormationDetails
