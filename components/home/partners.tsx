'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FadeInImage from '../global/FadeInImage'

interface Partner {
  id: number
  name: string
  logo: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'InnovateX',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'GlobalTech',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'DataFlow',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'CloudSync',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  },
  {
    id: 6,
    name: 'DigitalPro',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  }
  // {
  //   id: 7,
  //   name: 'FutureTech',
  //   logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  // },
  // {
  //   id: 8,
  //   name: 'SmartSys',
  //   logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  // },
  // {
  //   id: 9,
  //   name: 'NextGen',
  //   logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  // },
  // {
  //   id: 10,
  //   name: 'CyberCore',
  //   logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop'
  // }
]

const PartnersSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const scrollSpeed = 1 // pixels per frame
  const itemWidth = 240 // width of each partner item including margin

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const animate = () => {
      if (!isHovered && !isDragging) {
        carousel.scrollLeft += scrollSpeed

        // Reset scroll when reaching the end
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return

    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovered(false)
  }

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    console.log('object')

    const scrollAmount = itemWidth * 2
    const currentScroll = carouselRef.current.scrollLeft

    let targetScroll
    if (direction === 'left') {
      targetScroll = Math.max(0, currentScroll - scrollAmount)
    } else {
      targetScroll = currentScroll + scrollAmount
      // For seamless loop, don't limit the right scroll
      if (targetScroll >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0
        return
      }
    }

    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Lorem, ipsum dolor.</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, soluta.</p>
        </div>

        {/* Carousel Container */}
        <div className='relative group'>
          {/* Left Arrow */}
          <button
            onClick={() => scrollToDirection('left')}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95'
            aria-label='Scroll left'
          >
            <ChevronLeft className='w-5 h-5 text-gray-700' />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollToDirection('right')}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95'
            aria-label='Scroll right'
          >
            <ChevronRight className='w-5 h-5 text-gray-700' />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className={`flex overflow-x-hidden gap-8 pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className='flex-shrink-0 bg-white rounded-sm shadow-1 hover:shadow-lg hover:border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 group/item'
              >
                <div className='w-full h-full p-2 flex items-center justify-center'>
                  <FadeInImage
                    path={partner.logo}
                    alt={`${partner.name} logo`}
                    className='max-w-full max-h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300 opacity-70 group-hover/item:opacity-100'
                    loading='lazy'
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className='absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10' />
          <div className='absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10' />
        </div>

        {/* Bottom Text */}
        <div className='text-center mt-12'>
          <p className='text-gray-500 text-sm'>Join over 500+ companies that trust our platform</p>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
