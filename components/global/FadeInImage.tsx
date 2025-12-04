'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'

interface Props extends React.ImgHTMLAttributes<HTMLDivElement> {
  path: string
  imageClassName?: string
  skeletonClassName?: string
  alt?: string
  allClass?: string
}

const FadeInImage = ({ className, path, skeletonClassName, imageClassName, allClass, alt, ...rest }: Props) => {
  const [loadingImage, setLoadingImage] = useState(false)

  return (
    <div {...rest} className={cn('w-full object-cover relative overflow-hidden', allClass, className)}>
      {!loadingImage && (
        <Skeleton className={cn('absolute top-0 left-0 right-0 bottom-0 rounded-none h-full w-full border', allClass, skeletonClassName)} />
      )}
      <Image
        src={path}
        onLoad={() => setLoadingImage(true)}
        alt={alt ?? 'Image'}
        style={{ width: '100%', height: '100%' }}
        width={1000}
        height={1}
        className={cn('object-cover', allClass, imageClassName)}
      />
    </div>
  )
}

export default FadeInImage
