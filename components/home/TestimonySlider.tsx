'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TestimonialCard from './testimony-card'

interface SlideData {
  id: number
  testimony: string
  name: string
  role: string
}

const slideData: SlideData[] = [
  {
    id: 6,
    testimony:
      'La collaboration avec Talonmba a été remarquable. Leur expertise en TI et leur professionnalisme ont véritablement renforcé nos opérations internes.',
    name: 'Institution Publique',
    role: 'Directeur de la transformation numérique'
  },
  {
    id: 7,
    testimony:
      'Talonmba nous a guidés avec une approche structurée et humaine. Leur accompagnement a eu un impact positif et durable sur nos équipes.',
    name: 'Organisation Communautaire',
    role: 'Coordonnatrice des services'
  },
  {
    id: 8,
    testimony:
      'Nous avons particulièrement apprécié la rigueur et la disponibilité de l’équipe Talonmba. Ils livrent toujours des résultats concrets.',
    name: 'Entreprise de Services',
    role: 'Vice-président aux opérations'
  },
  {
    id: 9,
    testimony:
      'L’expertise en cybersécurité de Talonmba a dépassé toutes nos attentes. Leur intervention a sécurisé nos systèmes et amélioré nos pratiques.',
    name: 'Société Financière',
    role: 'Directeur de la sécurité informatique'
  },
  {
    id: 10,
    testimony:
      'Professionnels, efficaces et attentifs à nos besoins. Talonmba est un partenaire de confiance sur lequel nous pouvons compter.',
    name: 'Organisation Internationale',
    role: 'Responsable des partenariats'
  }
]

export const TestimonySlider: React.FC = () => {
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
      className='w-full  overflow-hidden bg-primary '
      // h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className='relative max-w-5xl mx-auto p-12 '>
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
          className='flex h-full transition-transform duration-1000 ease-in-out '
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideData.map((slide) => (
            <div key={slide.id} className='w-full h-full flex-shrink-0 relative grid place-items-center'>
              {/* <div className='absolute inset-0 bg-black/30 backdrop-blur-[1px]' /> */}
              <TestimonialCard className='bg-transparent mt-0' testimonial={slide.testimony} name={slide.name} role={slide.role} />
            </div>
          ))}
        </div>
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
