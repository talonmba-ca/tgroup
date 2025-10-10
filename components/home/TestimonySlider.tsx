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
    id: 1,
    testimony:
      "Je tiens à exprimer ma sincère gratitude pour l'excellent service que j'ai reçu de l'entreprise TALONMBA. Chaque étape a été réalisé avec professionnalisme.",
    name: 'Ministère et Organisme gouvernemental',
    role: 'Direction des ressources humaines'
  },
  {
    id: 2,
    testimony:
      'Talonmba a transformé notre approche de la formation. Leur expertise et leur engagement ont fait une différence significative dans notre organisation.',
    name: 'Entreprise Innovante',
    role: 'Directeur des opérations'
  },
  {
    id: 3,
    testimony:
      'Grâce à Talonmba, nous avons pu améliorer nos processus de formation et atteindre nos objectifs plus rapidement. Leur équipe est exceptionnelle.',
    name: 'Start-up Technologique',
    role: 'Responsable des ressources humaines'
  },
  {
    id: 4,
    testimony:
      "L'approche personnalisée de Talonmba a été un atout majeur pour notre équipe. Nous avons vu une amélioration notable dans nos performances.",
    name: 'Grande Entreprise',
    role: 'Chef de projet'
  },
  {
    id: 5,
    testimony: 'Talonmba a su comprendre nos besoins spécifiques et y répondre de manière efficace. Leur service est de haute qualité.',
    name: 'PME Locale',
    role: 'Directrice générale'
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
      className='w-full  overflow-hidden bg-primary2 '
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
