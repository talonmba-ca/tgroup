import FadeInImage from '@/components/global/FadeInImage'
import prisma from '@/lib/prisma'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'
import ArticleReadTime from './ArticleReadTime'

const BlogList = async () => {
  const articles = await prisma.blog.findMany({ where: { status: 'PUBLIÉ' } })
  if (!articles || articles.length === 0)
    return (
      <div className='mt-12 flex flex-col items-center justify-center gap-4 max-w-xl mx-auto p-6 rounded-lg shadow-1 bg-white'>
        <h1 className='text-2xl font-bold text-center text-primary2'>{" Nous n'avons pas encore d'articles de blog publiés."}</h1>
        <p className='text-center text-gray-500'>Veuillez revenir plus tard.</p>
      </div>
    )

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 p-6 justify-start items-start'>
        {articles.map((art) => (
          <div key={art.id} className='bg-white shadow-2 hover:shadow-1  group  rounded overflow-hidden cursor-pointer p-2.5'>
            <Link href={`/blog/${art.slug}`} className='cursor-pointer'>
              <FadeInImage
                path={art.thumbnail}
                imageClassName='group-hover:scale-110 duration-500 transition-transform rounded-md group-hover:rounded-none'
              />
            </Link>
            <div className='pt-4 flex flex-col grow'>
              <div className='flex justify-between items-center gap-x-3 mb-2'>
                <span className='text-primary text-sm'>{art.author}</span>
                <span className='text-slate-500 text-sm'>{dayjs(art.date).format('DD MMM, YYYY')}</span>
              </div>
              <Link href={`/blog/${art.slug}`} className=''>
                <h2 className='text-lg text-slate-700 font-bold group-hover:text-primary hover:underline'>{art.title}</h2>
              </Link>
              <p className='grow line-clamp-3 text-slate-600'>{art.excerpt}</p>
              <div className='mt-4 flex items-center justify-between'>
                <Link
                  href={`/blog/${art.slug}`}
                  className='flex items-center rounded-sm gap-x-2 duration-500 w-fit hover:translate-x-1 text-slate-700 hover:text-primary2 py-1.5 hover:px-2 transition-all '
                >
                  <span>Lire plus</span>
                  <span className='group-hover:animate-pulse group-hover:text-primary2'>&rarr;</span>
                </Link>
                <ArticleReadTime content={art.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
