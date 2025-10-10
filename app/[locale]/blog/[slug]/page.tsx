import FadeInImage from '@/components/global/FadeInImage'
import { DOT } from '@/lib/utils'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import Avatar from '@/components/global/Avatar'
import ArticleReadTime from '../ArticleReadTime'
import Return from '@/components/global/Return'

type Props = { params: Promise<{ id: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params
  const art = await prisma.blog.findFirst({ where: { slug, status: 'PUBLIÉ' } })
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

const BlogArticle = async ({ params }: Props) => {
  const { slug } = await params
  const data = await prisma.blog.findFirst({ where: { slug, status: 'PUBLIÉ' } })
  if (!data) return notFound()

  return (
    <div className='mx-auto max-w-4xl px-4 py-12 rounded-xl blog'>
      <Return text='Retour à la liste des articles' />
      <div className='max-w-2xl mx-auto'>
        <h1 className='font-bold text-3xl sm:text-5xl text-slate-700'>{data?.title}</h1>
        <h3 className='text-gray-600 my-2 text-xl'>{data.excerpt}</h3>
        {/* author and date */}
        <div className='flex items-start gap-y-4 my-4 flex-col justify-between'>
          <div className='flex items-center justify-between  w-full border-b dark:border-dark2 pb-4'>
            <div className='author-avatar flex items-center gap-x-2'>
              <Avatar path={null} width={50} height={50} text={data.author} />
              <div className='flex flex-col '>
                <span className='text-sm font-medium '>{data?.author}</span>
                <div className='flex items-center gap-x-2 justify-center'>
                  <span className='text-xs text-gray-500'>{'publié le ' + dayjs(data?.date).format('DD MMM ,YYYY')}</span>
                  <span className='text-xs font-light text-slate-300'>{DOT}</span>
                  <ArticleReadTime content={data?.content} />
                </div>
              </div>
            </div>
          </div>
          {/* actions */}
          {/* <PostActions post={data} /> */}
        </div>
      </div>

      <FadeInImage path={data?.thumbnail} className='rounded-xl overflow-hidden' />

      <div className='max-w-2xl mx-auto mt-4'>
        {data.tags && data.tags.length > 0 && (
          <div className='tags flex items-center gap-1 mt-2'>
            {data.tags.split(',').map((tag) => (
              <button
                key={tag}
                className='text-sm bg-gray-100  hover:bg-white  dark:bg-dark3 dark:hover:bg-dark2 cursor-pointer  px-1 py-0.5 rounded-sm line-clamp-1 truncate text-balance hover:border-primary2 border-[1px] border-transparent hover:shadow-sm'
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <span className='text-primary'>
          {data.tags?.split(',').map((tag, index) => (
            <span key={index} className='text-smd text-primary rounded-full py-1 capitalize'>
              {tag} {index === data.tags!.split(',')!.length - 1 ? '' : DOT}
            </span>
          ))}
        </span>
        {/* description */}
        <div className='my-6 whitespace-pre-line tiptap blog tiptap' dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>

      {/* <StickyActions post={data} /> */}
    </div>
  )
}

export default BlogArticle
