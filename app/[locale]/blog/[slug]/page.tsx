import FadeInImage from '@/components/global/FadeInImage'
import { DOT, http } from '@/lib/utils'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'
import Avatar from '@/components/global/Avatar'
import ArticleReadTime from '../ArticleReadTime'
import Return from '@/components/global/Return'
import { isAxiosError } from 'axios'
import { Blog } from '@/interfaces'

type Props = { params: Promise<{ id: string; slug: string }> }

const getDataFromAPI = async (slug: string): Promise<Blog> => {
  try {
    const res = await http.get(`/blogs/find?slug=${slug}&status=PUBLIÉ`)
    if (!res?.data.ok) throw notFound()
    return res.data.data as Blog
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params
  const art = await getDataFromAPI(slug)
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
  const data = await getDataFromAPI(slug)
  if (!data) return notFound()

  return (
    <div className=' px-4 py-12  blog'>
      <div className='mx-auto max-w-3xl'>
        <Return text='Retour à la liste des articles' />
        <div className='  '>
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

        <FadeInImage path={data?.thumbnail} className='rounded-xl' allClass='aspect-video' />

        <div className=' mt-4 '>
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
    </div>
  )
}

export default BlogArticle
