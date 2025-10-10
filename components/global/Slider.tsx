'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SlideData {
  id: number
  title: string
  subtitle: string
  buttonText: string
  image: string
  href: string
  imageAlt: string
}

const slideData: SlideData[] = [
  {
    id: 1,
    title: 'Rentabiliser vos formations et donner du sens aux changements',
    subtitle: `Concevez des formations pour relever des défis liés au contexte de travail\nTransformez ensemble positivement votre rapport aux changements constants\nAtteignez vos objectifs de réussite plus rapidement`,
    buttonText: 'Prendre un rendez-vous',
    href: 'https://calendly.com/reinefoumbue/30min',
    image: 'https://res.cloudinary.com/dd6fn2egg/image/upload/v1753975393/samples/balloons.jpg',
    imageAlt: 'Laptop showing online shopping interface'
  },
  {
    id: 2,
    title: 'Nos formations structurées',
    subtitle: `Dans la même approche pragmatique, nous vous proposons des formations prédéfinies avec des objectifs clairs et des compétences spécifiques et précises à développer, mais avec des contenus et des méthodes d'évaluation adaptés à vos besoins et à votre réalité. De cette manière, vous développerez vos compétences tout en améliorant votre productivité pendant la formation.`,
    buttonText: 'Voir nos formations',
    href: '/formations',
    image: 'https://res.cloudinary.com/dd6fn2egg/image/upload/v1753980943/2150062133_y0bvma.jpg',
    imageAlt: 'Mobile phone with shopping app'
  }
]

export const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length)
    }, 6000) // Change slide every 6 seconds (slower)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className='relative w-full overflow-hidden'
      style={{ height: 'calc(100vh - 130px)' }} // Adjust height as needed
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Navigation Buttons */}
      <Button
        variant='outline'
        size='icon'
        className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full'
        onClick={prevSlide}
      >
        <ChevronLeft className='h-4 w-4 md:h-6 md:w-6' />
      </Button>

      <Button
        variant='outline'
        size='icon'
        className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full'
        onClick={nextSlide}
      >
        <ChevronRight className='h-4 w-4 md:h-6 md:w-6' />
      </Button>

      {/* Slides */}
      <div
        className='flex h-full transition-transform duration-1000 ease-in-out'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideData.map((slide) => (
          <div
            key={slide.id}
            className='w-full h-full flex-shrink-0 relative bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className='absolute inset-0 bg-black/30 backdrop-blur-[1px]' />

            <div className='relative z-10 h-full flex items-center px-12 md:px-16 max-w-[1280px] mx-auto w-full'>
              {/* Content Section */}
              <div className='text-white space-y-4 md:space-y-6 max-w-lg lg:max-w-xl'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>{slide.title}</h1>
                <p className='text-sm md:text-lg lg:text-xl text-white/80 leading-relaxed'>{slide.subtitle}</p>

                <Link
                  href={slide.href}
                  target={slide.id === 1 ? '_blank' : '_self'}
                  className='inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 rounded-md sm:mt-0  sm:w-auto gap-x-4 hover:bg-primary-700 focus:bg-primary bg-gradient-to-r from-primary via-primary  to-primary2 text-lg group'
                >
                  <span> {slide.buttonText}</span>
                  <ArrowRight className='group-hover:translate-x-1 opacity-20 group-hover:opacity-100 transition-all duration-300' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3'>
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
