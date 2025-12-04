import { Book, Briefcase, Container, ShieldAlert } from 'lucide-react'
import React from 'react'

const OurServices = () => {
  return (
    <section className='py-12 bg-gray-50 sm:py-16 lg:py-20'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-xl mx-auto text-center xl:max-w-2xl'>
          <h2 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj'>{`NOS SERVICES`}</h2>
        </div>

        <div className='grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left'>
          <div className='space-y-4 sm:space-y-8'>
            <div className='overflow-hidden bg-white shadow-md rounded-xl'>
              <div className='p-9'>
                <Briefcase className='w-12 h-12 mx-auto text-gray-400 sm:mx-0' />
                <h3 className='mt-8 text-2xl font-bold text-gray-900 font-pj'>Étudier et Travailler au Québec</h3>
                <p className='mt-6 text-base text-gray-600 font-pj'>
                  Nous accompagnons les nouveaux arrivants dans leur intégration académique et professionnelle. Que ce soit pour poursuivre
                  des études, obtenir une équivalence, choisir un programme, ou s’insérer sur le marché de l’emploi, nous offrons un soutien
                  personnalisé à chaque étape.
                </p>
              </div>
            </div>

            <div className='overflow-hidden bg-white shadow-md rounded-xl'>
              <div className='p-9'>
                <ShieldAlert className='w-12 h-12 mx-auto text-gray-400 sm:mx-0' />
                <h3 className=' text-2xl font-bold text-gray-900 mt-8 font-pj'>
                  Technologie de l’Information, Cybersécurité et Intelligence Artificielle
                </h3>
                <p className='mt-6 text-base text-gray-600 font-pj'>
                  Fournir des solutions de technologie de l’information complètes incluant la cybersécurité, l’infonuagique et
                  l’intelligence artificielle adaptées aux besoins des entreprises et des particuliers en Amérique du Nord et en Afrique.
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-4 sm:space-y-8'>
            <div className='relative'>
              <div className='absolute -inset-1'>
                <div
                  className='w-full h-full rotate-180 opacity-30 blur-lg filter'
                  style={{
                    background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                  }}
                ></div>
              </div>

              <div className='relative overflow-hidden bg-white shadow-md rounded-xl'>
                <div className='p-9'>
                  <Container className='w-12 h-12 mx-auto text-gray-400 sm:mx-0' />
                  <h3 className='mt-8 text-2xl font-bold text-gray-900 font-pj'>Transport et Logistique</h3>
                  <p className='mt-6 text-base text-gray-600 font-pj'>
                    Assurer une circulation fluide, fiable et sécurisée des marchandises entre le Canada et le Cameroun, en offrant des
                    solutions logistiques intégrées et adaptées aux besoins des entreprises.
                  </p>
                </div>
              </div>
            </div>

            <div className='overflow-hidden bg-white shadow-md rounded-xl'>
              <div className='p-9'>
                <Book className='w-12 h-12 mx-auto text-gray-400 sm:mx-0' />
                <h3 className='mt-8 text-2xl font-bold text-gray-900 font-pj'>Formation et Développement des Compétences</h3>
                <p className='mt-6 text-base text-gray-600 font-pj'>
                  Transformer l’apprentissage en entreprise grâce à des programmes sur mesure, axés sur des compétences pratiques, actuelles
                  et immédiatement applicables pour optimiser la performance individuelle et organisationnelle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
