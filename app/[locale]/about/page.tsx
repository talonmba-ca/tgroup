import { DOT } from '@/lib/utils'
import React from 'react'

const About = async () => {
  return (
    <div className='p-4 sm:p-8 max-w-3xl mx-auto mt-12'>
      <div className='vision bg-white  rounded-xl p-6 mb-6 cursor-pointer shadow-2 hover:shadow-1'>
        <h1 className='text-3xl text-primary font-bold  flex items-center gap-x-2'>
          <span>{DOT}</span>
          <span>Vision</span>
        </h1>
        <p className='text-lg text-slate-800  mt-2 hover:text-primary'>
          Talonmba Formation veut créer un monde où les organisations donnent allègrement et stratégiquement un sens construit
          collectivement aux formations et aux changements constants.
        </p>
      </div>
      <div className=''>
        <div className='mission mb-6'>
          <div className='mb-6 shadow-2 hover:shadow-1 bg-white rounded-xl p-4 sm:p-6 cursor-pointer'>
            <h1 className='text-3xl text-primary font-bold   flex items-center gap-x-2'>
              <span>{DOT}</span>
              <span>Mission</span>
            </h1>
            <p className='text-lg text-slate-800 mt-2 hover:text-primary'>
              Rentabiliser les formations dans les organisations et transformer les changements en des opportunités de mobilisation et de
              développement organisationnel.
            </p>
          </div>
        </div>
        <div className='belief  '>
          <h1 className='text-3xl text-primary font-bold  flex items-center gap-x-2 mb-6'>
            <span>{DOT}</span>
            <span>Valeurs</span>
          </h1>
          <div className='flex flex-wrap gap-4 mt-2'>
            {[
              {
                title: 'Flexibilité',
                description:
                  'Nous intégrons la formation, de manière itérative et dans une démarche d’amélioration continue, à l’atteinte immédiate des objectifs de réalisation, de performance et de transformation de votre organisation'
              },
              {
                title: 'Collaboration',
                description:
                  'Nous travaillons en étroite collaboration avec vous et vos équipes pour comprendre vos besoins, définir votre cible, et identifier des solutions adaptées à votre réalité.'
              },
              {
                title: 'Résultats',
                description:
                  'Nous créons un impact positif et durable sur le rendement de votre organisation rapport des employés au changement et sur leur bien-être au travail.'
              }
            ].map((item, index) => (
              <div key={index} className='flex-1 bg-white  min-w-[320px] rounded-lg p-4 sm:p-6 cursor-pointer shadow-2 hover:shadow-1'>
                <h2 className='font-bold text-lg text-gradient'>{item.title}</h2>
                <p className='mt-2 hover:text-primary'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
