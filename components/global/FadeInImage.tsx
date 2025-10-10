'use client'
import React, { useState } from 'react'
import Skeleton from './Skeleton'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props extends React.ImgHTMLAttributes<HTMLDivElement> {
  path: string
  imageClassName?: string
  skeletonClassName?: string
}

const FadeInImage = ({ className, path, skeletonClassName, imageClassName, alt = '', ...rest }: Props) => {
  const [loadingImage, setLoadingImage] = useState(false)

  return (
    <div {...rest} className={cn('aspect-video object-cover relative ', className)}>
      {!loadingImage && (
        <Skeleton
          className={cn(
            'aspect-video absolute top-0 left-0 right-0 bottom-0 rounded-none h-full w-full border object-cover',
            skeletonClassName
          )}
        />
      )}
      <Image
        src={path}
        onLoad={() => setLoadingImage(true)}
        alt={alt}
        style={{ width: '100%', height: '100%' }}
        width={1000}
        height={1}
        className={cn('aspect-video  bg-slate-200 object-cover overflow-hidden', imageClassName)}
      />
    </div>
  )
}

export default FadeInImage
