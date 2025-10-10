'use client'
import { estimateReadingTime } from '@/lib/utils'
import React from 'react'

const ArticleReadTime = ({ content }: { content: string }) => {
  const [readTime, setReadTime] = React.useState<number | null>(null)

  React.useEffect(() => {
    setReadTime(estimateReadingTime(content))
  }, [content])

  return <span className='text-slate-400 text-sm font-light font-serif'>{readTime !== null ? `${readTime} min de lecture` : ''}</span>
}

export default ArticleReadTime
