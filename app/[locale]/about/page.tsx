import { DOT } from '@/lib/utils'
import React from 'react'
import FadeInImage from '@/components/global/FadeInImage'

const About = async () => {
  return (
    <div className='bg-white'>
      <div className='p-4 sm:p-8 max-w-7xl mx-auto sm:mt-12'>
        <section className='py-12 bg-gray-50 '>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 xl:gap-x-36'>
              <div className='text-center  order-2 md:text-left'>
                <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl text-gradient xl:text-5xl font-pj'>Mission </h2>
                <p className='text-lg font-medium text-gray-900 mt-7 font-pj'>
                  Offrir des services à forte valeur ajoutée, d’une qualité irréprochable, fondés sur l’intégrité, la rigueur et
                  l’excellence opérationnelle, afin d’accompagner nos clients vers une performance durable et mesurable.
                </p>
                <h2 className='text-3xl font-bold mt-8 text-gray-900 sm:text-4xl text-gradient xl:text-5xl font-pj'>Vision</h2>
                <p className='mt-5 text-base font-normal text-gray-700'>
                  Être reconnu parmi les 20 leaders nord-américains et africains dans nos domaines de compétence, en offrant des solutions
                  technologiques innovantes, hautement performantes et entièrement sécurisées, au service d’un développement durable et
                  d’une transformation numérique maîtrisée.
                </p>
              </div>
              <div className=' order-1'>
                <FadeInImage
                  className='w-full max-w-sm mx-auto aspect-auto'
                  imageClassName='aspect-auto bg-transparent'
                  // path='https://res.cloudinary.com/dd6fn2egg/image/upload/v1755018313/time-minute-alarm-duration-hour-schedule-concept_bpmizf.jpg'
                  // path='https://cdn.rareblocks.xyz/collection/clarity/images/team/3/members.png'
                  path='/images/who-am-i.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        {/* <div className='vision bg-white  rounded-xl p-6 mb-6 cursor-pointer shadow-2 hover:shadow-1'>
          <h1 className='text-3xl text-primary font-bold  flex items-center gap-x-2'>
            <span>{DOT}</span>
            <span>Vision</span>
          </h1>
          <p className='text-lg text-slate-800  mt-2 hover:text-primary'>
            Talonmba Formation veut créer un monde où les organisations donnent allègrement et stratégiquement un sens construit
            collectivement aux formations et aux changements constants.
          </p>
        </div> */}

        <div className='bg-white shadow-2 p-4 sm:p-6 lg:p-8'>
          {/* <div className='mission mb-6'>
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
          </div> */}
          <div className='belief  '>
            <h1 className='text-3xl text-primary font-bold  flex items-center gap-x-2 mb-6 px-4 sm:px-6'>
              <span>{DOT}</span>
              <span>Valeurs</span>
            </h1>
            <div className='flex flex-col sm:flex-row flex-wrap gap-4 mt-2'>
              {[
                {
                  title: 'Innovation',
                  description: "S'améliorer continuellement et repousser les limites pour anticiper les besoins futurs."
                },
                {
                  title: 'Excellence',
                  description: 'Viser systématiquement les standards les plus élevés dans toutes nos interventions.'
                },
                {
                  title: 'Fiabilité',
                  description: 'Placer le client au centre de nos actions; sa satisfaction demeure le moteur de toutes nos décisions.'
                },
                {
                  title: 'Sécurité',
                  description: "Adopter une culture où aucun compromis n'est fait sur la sécurité et la conformité."
                },
                {
                  title: 'Collaboration',
                  description: "Favoriser un esprit d'équipe, le partage d'expertise et la coopération interdisciplinaire."
                },
                {
                  title: 'Engagement envers le client',
                  description: "Être proactif, disponible et responsable dans l'atteinte des résultats promis."
                }
              ].map((item, index) => (
                <div key={index} className='flex-1 bg-white  sm:min-w-[320px] rounded-lg p-4 sm:p-6 cursor-pointer hover:shadow-1'>
                  <h2 className='font-bold text-lg text-gradient'>{item.title}</h2>
                  <p className='mt-2 hover:text-primary'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
