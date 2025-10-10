import { CheckIcon } from 'lucide-react'
import React from 'react'

const WhatWillYouEarn = () => {
  return (
    <div className='my-12 p-6 max-w-7xl m-auto pt-[110px]' id='advantages'>
      <div className='mb-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-gradient mb-6 uppercase'>Ce que vous gagnerez</h1>
        <div className='text-slate-700 font-medium text-lg max-w-2xl mt-1'>
          Voici un énoncé des bénéfices apportés par les services de Talonmba Formation
        </div>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-3 space-y-4'>
        {[
          'Votre organisation améliore sa performance, renforce sa compétitivité et atteint plus rapidement ses objectifs stratégiques',
          "Votre organisation est outillée pour s'adapter aisément aux constants changements de structure, du marché, de la technologie ou de la réglementation, tout en améliorant l’engagement du personnel.",
          'Votre personnel utilise le temps de formation pour développer des compétences spécifiques, faire avancer les dossiers et pour répondre à des besoins organisationnels réels, les sessions de formation étant des espaces de travail.',
          'Les coûts de vos formations sont optimisés et même réduits, en raison de l’amélioration de la productivité.',
          'En développant les compétences nécessaires pour assumer ses fonctions, votre personnel est plus motivé au travail.',
          'Dans votre organisation, l’alignement des formations et des projets de changement avec les cibles stratégiques se démontre par des indicateurs de performance organisationnelle et par la satisfaction de votre personnel.'
        ].map((item) => (
          <div
            className='p-4 break-inside-avoid bg-white shadow-2 rounded-md md:min-w-[300px] flex-1 cursor-pointer hover:shadow-1'
            key={item}
          >
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-2 mb-2 border border-slate-50'>
              <CheckIcon className='text-primary' size={30} />
            </div>
            <div className=''>
              <p className='text-slate-700 hover:text-primary font-medium text-lg'>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWillYouEarn
