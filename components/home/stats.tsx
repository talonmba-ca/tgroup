import { BriefcaseBusiness, LucideUsersRound, ThumbsUp, Zap } from 'lucide-react'
import React from 'react'

const Stats = () => {
  return (
    <section className='py-10 bg-white sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto max-w-6xl sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h4 className='text-xl font-medium text-gray-900'>Les indicateurs qui parlent pour Nous</h4>
        </div>

        <div className='grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 xl:gap-x-12'>
          <div className='overflow-hidden bg-white border border-gray-200 rounded-lg'>
            <div className='px-4 py-6'>
              <div className='flex items-start'>
                <Zap className='flex-shrink-0 w-12 h-12 text-primary2' size={45} strokeWidth={1} />
                <div className='ml-4'>
                  <h4 className='text-4xl font-bold text-gray-900'>30+</h4>
                  <p className='mt-1.5 text-lg font-medium leading-tight text-gray-500'>Projets réalisés avec succès</p>
                </div>
              </div>
            </div>
          </div>

          <div className='overflow-hidden bg-white border border-gray-200 rounded-lg'>
            <div className='px-4 py-6'>
              <div className='flex items-start'>
                <LucideUsersRound className='flex-shrink-0 text-primary2' size={45} strokeWidth={1} />
                <div className='ml-4'>
                  <h4 className='text-4xl font-bold text-gray-900'>10+</h4>
                  <p className='mt-1.5 text-lg font-medium leading-tight text-gray-500'>Membres dans l’équipe (Canada + Cameroun)</p>
                </div>
              </div>
            </div>
          </div>

          <div className='overflow-hidden bg-white border border-gray-200 rounded-lg'>
            <div className='px-4 py-6'>
              <div className='flex items-start'>
                <BriefcaseBusiness className='flex-shrink-0 text-primary2' size={45} strokeWidth={1} />
                <div className='ml-4'>
                  <h4 className='text-4xl font-bold text-gray-900'>3</h4>
                  <p className='mt-1.5 text-lg font-medium leading-tight text-gray-500'>
                    Pôles de services (TI & Cybersécurité • Formation • Logistique)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='overflow-hidden bg-white border border-gray-200 rounded-lg'>
            <div className='px-4 py-6'>
              <div className='flex items-start'>
                <ThumbsUp className='flex-shrink-0  text-primary2' size={45} strokeWidth={1} />
                <div className='ml-4'>
                  <h4 className='text-4xl font-bold text-gray-900'>98%</h4>
                  <p className='mt-1.5 text-lg font-medium leading-tight text-gray-500'>Taux de satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
