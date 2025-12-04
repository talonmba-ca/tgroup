import React, { Suspense } from 'react'
import WhyUs from '@/components/home/why-us'
import { Slider } from '@/components/global/Slider'
import Stats from '@/components/home/stats'
import { Skeleton } from '@/components/ui/skeleton'
import BlogList from './blog/BlogList'
import { TestimonySlider } from '@/components/home/TestimonySlider'
import OurServices from '@/components/home/our-services'

const FormationHome = () => {
  return (
    <div className='min-h-screen w-full relative bg-white'>
      <div className='absolute inset-0 z-0' />

      <div className='w-full'>
        <div className='relative'>
          <Slider />

          <Stats />

          <OurServices />

          <div className='p-4 md:p-8'>
            <div className=''>
              <h2 className='text-center text-2xl font-bold text-primary'>Actualités</h2>
              <h2 className='text-lg text-center mt-4'>Découvrez nos derniers articles de blog</h2>
            </div>
            <Suspense
              fallback={
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 p-6 justify-start items-start'>
                  {[1, 2, 3].map((item) => (
                    <div className='bg-white  p-2' key={item}>
                      <Skeleton className='w-full h-64 mb-4 aspect-video bg-slate-100' />
                      <div className=''>
                        <Skeleton className='w-3/4 h-5 mb-2' />
                        <Skeleton className='w-1/2 h-4 mb-2' />
                        <Skeleton className='w-1/3 h-2 mb-2' />
                        <Skeleton className='w-1/4 h-2 mb-2' />
                        <Skeleton className='w-1/5 h-3 mb-2' />
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <BlogList />
            </Suspense>
          </div>

          {/* <LookingFor /> */}

          {/* POURQUOI NOUS */}
          <WhyUs />

          {/* <OurMission /> */}

          {/* Ce que vous gagnerez */}
          {/* <WhatWillYouEarn /> */}

          {/* WHO AM I */}
          {/* <WhoAmI /> */}
          {/* <Stats /> */}
          {/* <PartnersSection /> */}
          <TestimonySlider />
          {/*  */}
          {/* <TestimonialCard
            testimonial="Je tiens à exprimer ma sincère gratitude pour l'excellent service que j'ai reçu de l'entreprise TALONMBA. Chaque étape a été réalisé avec professionnalisme. L'équipe a répondu efficacement à mes attentes en offrant un service de très grande qualité. Je recommande vivement cette entreprise à toute personne qui recherche un service fiable et de qualité. Un grand merci pour votre excellent travail!"
            name='Ministère et Organisme gouvernemental'
            role='Direction des ressources humaines'
          /> */}
        </div>
      </div>
    </div>
  )
}

export default FormationHome
