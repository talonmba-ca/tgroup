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
    title: 'Nos formations structurées',
    subtitle: `Formez-vous efficacement avec des objectifs clairs et des contenus adaptés à vos besoins réels pour avancer rapidement dans vos dossiers organisationnels.`,
    buttonText: 'En savoir plus',
    href: 'https://formation.talonmba.com',
    image: 'https://res.cloudinary.com/dd6fn2egg/image/upload/v1754425019/formation-structuree-front_zwreex.jpg',
    imageAlt: 'Mobile phone with shopping app'
  },
  {
    id: 2,
    title: 'TI, Cybersécurité et Intelligence Artificielle',
    subtitle: `Fournir des solutions de technologie de l’information complètes incluant la cybersécurité, l’infonuagique et l’intelligence artificielle adaptées aux besoins des entreprises et des particuliers en Amérique du Nord et en Afrique.`,
    buttonText: 'En savoir plus',
    href: 'https://security.talonmba.com',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    imageAlt: 'Mobile phone with shopping app'
  },
  {
    id: 3,
    title: 'Transport et Logistique',
    subtitle: `Assurer une circulation fluide, fiable et sécurisée des marchandises entre le Canada et le Cameroun, en offrant des solutions logistiques intégrées et adaptées aux besoins des entreprises.`,
    buttonText: 'En savoir plus',
    href: 'https://logistic.talonmba.com',
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg',
    imageAlt: 'Laptop showing online shopping interface'
  },
  {
    id: 4,
    title: 'Étudier et Travailler au Québec',
    subtitle: `Échangeons sur vos défis pour créer des formations et des interventions sur mesure qui maximisent l’impact et facilitent le changement durable dans votre organisation.`,
    buttonText: 'En savoir plus',
    href: 'https://study.talonmba.com',
    image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg',
    imageAlt: 'Laptop showing online shopping interface'
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
      style={{ height: 'calc(100vh - 10rem)' }}
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
            <div className='absolute inset-0 bg-black/60 backdrop-blur-[1px]' />

            <div className='relative z-10 h-full flex items-center px-12 md:px-16 max-w-[1280px] mx-auto w-full'>
              {/* Content Section */}
              <div className='text-white space-y-4 md:space-y-6'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-lg lg:max-w-2xl'>{slide.title}</h1>
                <p className='text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-lg lg:max-w-3xl'>
                  {slide.subtitle.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < slide.subtitle.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <Link
                  href={slide.href}
                  target='_blank'
                  className='inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 rounded-md sm:mt-0  sm:w-auto gap-x-4 hover:bg-primary-700 focus:bg-primary bg-gradient-to-r from-primary via-primary  to-primary2 text-lg group w-full'
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
